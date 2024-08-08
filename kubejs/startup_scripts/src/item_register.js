//priority 10
Platform.getInfo('kubejs').name = 'Create: New Horizon'

StartupEvents.registry("item", event =>{
    event.create('treated_clay_ball')
    event.create('basic_mechanism')
    let MAX_ENERGY = 100000000
    event.create('temperature_keeping_device').tag('curios:body')
    .attachCapability(CapabilityBuilder.ENERGY.customItemStack()
                .canReceive(i => true)
                .getEnergyStored(/**@type {Internal.ItemStack}*/itemStack => {
                    if (itemStack.getOrCreateTag().contains("energyStored")) {
                        return itemStack.nbt.getInt("energyStored")
                    } else {
                        itemStack.getOrCreateTag().putInt("energyStored", 0)
                        return 0
                    }
                })
                .getMaxEnergyStored(i => MAX_ENERGY)
                .receiveEnergy((/**@type {Internal.ItemStack}*/ item ,i,receive) =>{
                    /** @type {Internal.IEnergyStorage} */ let energy = item.getCapability(ForgeCapabilities.ENERGY).orElse(null)
                    let received = Math.min(energy.maxEnergyStored-energy.energyStored, i)
                    if(!receive && energy.energyStored <= energy.maxEnergyStored){
                        item.nbt.putInt('energyStored',energy.energyStored + received)
                    }
                    return received
                })
    )
    //.tooltip('showenergy')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
                .curioTick((/**@type {Internal.ItemStack}*/ itemstack,slotcontext)=>{
                    let energy = itemstack.getCapability(ForgeCapabilities.ENERGY).orElse(null)
                    let {energyStored , maxEnergyStored} = energy
                    if(energyStored > 0){
                        let energyConsumed = Math.min(energyStored , 600)
                        itemstack.nbt.putInt('energyStored',energyStored - energyConsumed)
                        return true
                    }
                })
                .dynamicAttribute(attribute =>{
                    let energy = attribute.stack.getCapability(ForgeCapabilities.ENERGY).orElse(null)
                    let {energyStored, maxEnergyStored} = energy
                    if(energyStored > 0){
                        attribute.modify('cold_sweat:cold_dampening','kubejscolddampening',1,'addition')
                        attribute.modify('cold_sweat:heat_dampening','kubejsheatdampening',1,'addition')
                    }
                })
            )
    .barWidth(/**@type {Internal.ItemStack}*/item =>{
        let energy = item.getCapability(ForgeCapabilities.ENERGY).orElse(null)
        return Math.floor(energy.energyStored / energy.maxEnergyStored * 13)
    })
    event.create('deep_diver_gear').tag('curios:belt')
    event.create('thermometer_case')
    event.create('high_quality_solid_fuel').burnTime(4800)//.burntime(16000)
    event.create('steel_mechanism')
    event.create('unfinished_steel_mechanism')
})
StartupEvents.registry("block", event =>{
    event.create('steel_casing')
        .noValidSpawns(true)
        .soundType("metal")
        .mapColor("metal")
        .tagBlock("mineable/pickaxe")
        .tagBlock("creat:casing")
        .requiresTool(true)
    event.create('heavy_machinery_casing')
        .noValidSpawns(true)
        .soundType("metal")
        .mapColor("metal")
        .tagBlock("mineable/pickaxe")
        .tagBlock("create:casing")
        .requiresTool(true)
    event.create('blaze_blast_furnace_casing')
        .noValidSpawns(true)
        .soundType("metal")
        .mapColor("metal")
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true)
    event.create('bio_reactor_casing','gtceu:renderer')
        .noValidSpawns(true)
        .soundType("metal")
        .mapColor("metal")
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true)
        .textureOverrideRenderer("minecraft:block/cube_all", { "all": new ResourceLocation("kubejs", "block/bio_reactor_casing") })
    event.create('shielded_reactor_casing','gtceu:renderer')
        .noValidSpawns(true)
        .soundType("metal")
        .mapColor("metal")
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true)
        .textureOverrideRenderer("minecraft:block/cube_all", { "all": new ResourceLocation("kubejs", "block/shielded_reactor_casing") })
    event.create('manasteel_casing','gtceu:renderer')
        .noValidSpawns(true)
        .soundType("metal")
        .mapColor("metal")
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true)
        .textureOverrideRenderer("minecraft:block/cube_all", { "all": new ResourceLocation("kubejs", "block/manasteel_casing") })
    event.create('terrasteel_casing','gtceu:renderer')
        .noValidSpawns(true)
        .soundType("metal")
        .mapColor("metal")
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true)
        .textureOverrideRenderer("minecraft:block/cube_all", { "all": new ResourceLocation("kubejs", "block/terrasteel_casing") })
    event.create('alfsteel_casing','gtceu:renderer')
        .noValidSpawns(true)
        .soundType("metal")
        .mapColor("metal")
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true)
        .textureOverrideRenderer("minecraft:block/cube_all", { "all": new ResourceLocation("kubejs", "block/alfsteel_casing") })
    event.create('elementium_steel_casing','gtceu:renderer')
        .noValidSpawns(true)
        .soundType("metal")
        .mapColor("metal")
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true)
        .textureOverrideRenderer("minecraft:block/cube_all", { "all": new ResourceLocation("kubejs", "block/elementium_steel_casing") })    
    const registercoils = [
        ["abyssalalloy", "12600", "16", "8"],
        ["titansteel", "14400", "32", "8"],
        ["pikyonium", "16200", "32", "9"],
        ["black_titanium", "18900", "64", "9"],
        ["starmetal", "21600", "64", "9"],
        ["infinity", "36000", "128", "9"]
        //["hypogen", "62000", "256", "9"],
        //["eternity", "96000", "512", "9"]
    ]
    registercoils.forEach(coil => {
        event.create(coil[0] + "_coil_block", "gtceu:coil")
            .texture("kubejs:block/" + coil[0] + "_coil_block")
            .temperature(coil[1])
            .energyDiscount(8)
            .level(coil[2])
            .tier(coil[3])
            .coilMaterial(() => GTMaterials.get(coil[0]))
            .tagBlock("mineable/pickaxe")
            .tagBlock("forge:mineable/wrench")
            .hardness(5)
            .requiresTool(true)
            .soundType("metal")
            .mapColor("metal")
            .noValidSpawns(true)
    })
})


ItemEvents.modification(event=>{
    event.modify('tomeofblood:living_mage_hood',item =>{
        item.setArmorProtection(4)
        item.setArmorToughness(3)
    })
    event.modify('tomeofblood:living_mage_robes',item=>{
        item.setArmorProtection(9)
        item.setArmorToughness(4)
    })
    event.modify('tomeofblood:living_mage_leggings',item =>{
        item.setArmorProtection(7)
        item.setArmorToughness(4)
    })
    event.modify('tomeofblood:living_mage_boots',item =>{
        item.setArmorProtection(3)
        item.setArmorToughness(3)
    })
    event.modify('bloodmagic:livinghelmet',item =>{
        item.setArmorProtection(3)
        item.setArmorToughness(1)
    })
    event.modify('bloodmagic:livingplate',item =>{
        item.setArmorProtection(8)
        item.setArmorToughness(2)
    })
    event.modify('bloodmagic:livingleggings',item =>{
        item.setArmorProtection(6)
        item.setArmorToughness(1)
    })
    event.modify('bloodmagic:livinghboots',item =>{
        item.setArmorProtection(3)
        item.setArmorToughness(1)
    })
    event.modify('tetranichematerials:bronnum_armor_helmet',item =>{
        item.setArmorProtection(2)
        item.setArmorKnockbackResistance(0.05)
    })
    event.modify('tetranichematerials:bronnum_armor_chest',item =>{
        item.setArmorProtection(5)
        item.setArmorKnockbackResistance(0.05)
    })
    event.modify('tetranichematerials:bronnum_armor_legs',item =>{
        item.setArmorProtection(4)
        item.setArmorKnockbackResistance(0.05)
    })
    event.modify('tetranichematerials:bronnum_armor_feet',item =>{
        item.setArmorProtection(2)
        item.setArmorKnockbackResistance(0.05)
    })
    event.modify('tetranichematerials:blurine_armor_helmet',item =>{
        item.setArmorProtection(3)
        item.setArmorToughness(1)
    })
    event.modify('tetranichematerials:blurine_armor_chest',item =>{
        item.setArmorProtection(6)
        item.setArmorToughness(1)
        item.addAttribute('attributeslib:cold_damage',
                '70195e7a-005a-471a-bd26-3fd6d331676d',
                'kubejscolddamage',
                2,
                'addition')
    })
    event.modify('tetranichematerials:blurine_armor_legs',item =>{
        item.setArmorProtection(4)
        item.setArmorToughness(1)
    })
    event.modify('tetranichematerials:blurine_armor_feet',item =>{
        item.setArmorProtection(2)
        item.setArmorToughness(1)
    })
    event.modify('tetranichematerials:lockwood_armor_chest',item =>{
        item.setArmorProtection(7)
        item.addAttribute('minecraft:generic.max_health',
                '03B9249B-929A-42AE-84F2-AD0DEBDCB3AB',
                'kubejsmaxhealth',
                4,
                'addition')
    })
    event.modify('tetranichematerials:lockwood_armor_legs', item=>{
        item.setArmorProtection(5)
        item.addAttribute('forge:swim_speed',
                'c6953671-9091-479f-a9ef-cc528e7af16f',
                'kubejsswimspeed',
                0.5,
                'addition')
    })
    event.modify('twilightforest:fiery_helmet', item =>{
        item.setArmorProtection(3)
    })
    event.modify('twilightforest:fiery_chestplate', item =>{
        item.setArmorProtection(7)
    })
    event.modify('twilightforest:fiery_leggings', item =>{
        item.setArmorProtection(5)
    })
    event.modify('twilightforest:fiery_boots', item =>{
        item.setArmorProtection(3)
    })
    event.modify('tetranichematerials:burning_steel_armor_helmet',item =>{
        item.setArmorProtection(4)
        item.addAttribute('cold_sweat:cold_dampening',
                '98d68242-a5bc-40a2-8b3a-cbaa87cc27c9',
                'kubejscolddampening',
                    0.1,
                    'addition')
    })
    event.modify('tetranichematerials:burning_steel_armor_chest',item =>{
        item.setArmorProtection(8)
        item.addAttribute('attributeslib:fire_damage',
                '677245f7-3954-466a-a014-97b13af63aa7',
                'kubejsfiredamage',
                2,
                'addition')
        item.addAttribute('cold_sweat:cold_dampening',
                '683cbb1f-eb71-45e8-941e-a01805c9d773',
                'kubejscolddampening',
                    0.1,
                    'addition')
    })
    event.modify('tetranichematerials:burning_steel_armor_legs',item =>{
        item.setArmorProtection(6)
        item.addAttribute('cold_sweat:cold_dampening',
                'e6988b1d-b44c-4b49-8ab4-3a6df3bfd4ee',
                'kubejscolddampening',
                    0.1,
                    'addition')
    })
    event.modify('tetranichematerials:burning_steel_armor_feet',item =>{
        item.setArmorProtection(4)
        item.addAttribute('cold_sweat:cold_dampening',
                '3470aaa2-397d-4f18-83ad-98c1bc2019e6',
                'kubejscolddampening',
                    0.1,
                    'addition')
    })
})