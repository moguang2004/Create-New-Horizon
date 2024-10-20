Platform.getInfo('kubejs').name = 'Create: New Horizon'

StartupEvents.registry("item", event => {
    event.create('treated_clay_ball')
    event.create('basic_mechanism')
    let MAX_ENERGY = 10000000
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
            .receiveEnergy((/**@type {Internal.ItemStack}*/ item, i, receive) => {
                    /** @type {Internal.IEnergyStorage} */ let energy = item.getCapability(ForgeCapabilities.ENERGY).orElse(null)
                let received = Math.min(energy.maxEnergyStored - energy.energyStored, i)
                if (!receive && energy.energyStored <= energy.maxEnergyStored) {
                    item.nbt.putInt('energyStored', energy.energyStored + received)
                }
                return received
            })
        )
        //.tooltip('showenergy')
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .curioTick((/**@type {Internal.ItemStack}*/ itemstack, slotcontext) => {
                let energy = itemstack.getCapability(ForgeCapabilities.ENERGY).orElse(null)
                let { energyStored, maxEnergyStored } = energy
                if (energyStored > 0) {
                    let energyConsumed = Math.min(energyStored, 60)
                    itemstack.nbt.putInt('energyStored', energyStored - energyConsumed)
                    return true
                }
            })
            .dynamicAttribute(attribute => {
                let energy = attribute.stack.getCapability(ForgeCapabilities.ENERGY).orElse(null)
                let { energyStored, maxEnergyStored } = energy
                if (energyStored > 0) {
                    attribute.modify('cold_sweat:cold_dampening', 'kubejscolddampening', 1, 'addition')
                    attribute.modify('cold_sweat:heat_dampening', 'kubejsheatdampening', 1, 'addition')
                }
            })
        )
        .barWidth(/**@type {Internal.ItemStack}*/item => {
            let energy = item.getCapability(ForgeCapabilities.ENERGY).orElse(null)
            return Math.floor(energy.energyStored / energy.maxEnergyStored * 13)
        })
    event.create('broken_temperature_keeping_device').maxDamage(12000).tag('curios:body')
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .curioTick((/**@type {$ItemStack}*/ itemstack, slotcontext) => {
                if (itemstack.damageValue >= 12000) {
                    itemstack.shrink(1)
                }
                itemstack.setDamageValue(itemstack.damageValue + 1)
                return true
            })
            .modifyAttribute('cold_sweat:cold_dampening', 'kubejscolddampening', 1, 'addition')
            .modifyAttribute('cold_sweat:heat_dampening', 'kubejsheatdampening', 1, 'addition')
        )
    event.create('deep_diver_gear').tag('curios:belt')
    event.create('thermometer_case')
    event.create('high_quality_solid_fuel').burnTime(4800)//.burntime(16000)
    event.create('steel_mechanism')
    event.create('unfinished_steel_mechanism')
    event.create('multiblock_helper')
    event.create('metallurgical_catalyst')
    event.create('platinum_metal_catalyst_shard1')
    event.create('platinum_metal_catalyst_shard2')
    event.create('platinum_metal_catalyst')
    event.create('stone_process_catalyst')
    event.create('bauxite_process_catalyst')
    event.create('tallow').burnTime('1600')
    event.create('eye_of_underground_cabin')
        .use((/**@type {$ServerLevel}*/level, player, interactionhand) => {
            let item = player.getHeldItem(interactionhand)
            player.startUsingItem(interactionhand)
            if (!level.isClientSide) {
                let pos = level.findNearestMapStructure($TagKey.create($Registry.STRUCTURE_REGISTRY, 'alexscaves:underground_cabin'), player.blockPosition, 100, false)
                if (pos) {
                    let eye = new $EyeOfEnder(level, player.getX(), player.getY(0.5), player.getZ())
                    eye.setItem(item)
                    eye.signalTo(pos)
                    player.swing()
                    eye.spawn()
                    item.shrink(1)
                    level.playSound(null, player.x, player.y, player.z, 'entity.ender_eye.launch', player.getSoundSource(), 0.5, 0.5)
                    player.swing(interactionhand)
                    return true
                }
            }
            return false
        })
    let tiers = ['ulv', 'lv', 'mv', 'hv', 'ev', 'iv', 'luv', 'zpm', 'uv', 'uhv', 'uev', 'uiv']
    tiers.forEach(tier => {
        event.create('circuit_resonatic_' + tier).tag('gtceu:circuits/' + tier)
    })
    event.create('animal_excreta')
    event.create('tumor')
    event.create('crashed_rice')
    event.create('space_fabric')
    event.create('endslate')
    event.create('imprinted_resonatic_circuit_board')
    event.create('raw_imprinted_resonatic_circuit_board')
    event.create('mana_electronic_circuit').tag('gtceu:circuits/hv')
    event.create('mana_integrated_circuit').tag('gtceu:circuits/ev')
    event.create('echo_processor').tag('gtceu:circuits/zpm')
    event.create('echo_processor_assembly').tag('gtceu:circuits/uv')
    event.create('echo_processor_computer').tag('gtceu:circuits/uhv')
    event.create('echo_processor_mainframe').tag('gtceu:circuits/uev')
    event.create('echo_circuit_board')
    event.create('mana_resistor')
    event.create('advanced_mana_resistor')
    event.create('mana_diode')
    event.create('advanced_mana_diode')
    event.create('mana_transistor')
    event.create('advanced_mana_transistor')
    event.create('mana_capacitor')
    event.create('advanced_mana_capacitor')
    event.create('mana_inductor')
    event.create('advanced_mana_inductor')
})
StartupEvents.registry("block", event => {
    event.create('bronze_casing')
    event.create('steel_casing')
        .noValidSpawns(true)
        .soundType("metal")
        .mapColor("metal")
        .tagBlock("mineable/pickaxe")
        .tagBlock("creat:casing")
        .requiresTool(true)
    event.create('annihilate_core')
        .noValidSpawns(true)
        .soundType("metal")
        .mapColor("metal")
        .tagBlock("mineable/pickaxe")
        .tagBlock("creat:casing")
        .requiresTool(true)
    event.create('annihilate_core1')
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
    event.create('bio_reactor_casing', 'basic')
        .noValidSpawns(true)
        .soundType("metal")
        .mapColor("metal")
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true)
        .textureAll("kubejs:block/bio_reactor_casing")
    event.create('shielded_reactor_casing', 'basic')
        .noValidSpawns(true)
        .soundType("metal")
        .mapColor("metal")
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true)
        .textureAll("kubejs:block/shielded_reactor_casing")
    event.create('mana_steel_casing', 'basic')
        .noValidSpawns(true)
        .soundType("metal")
        .mapColor("metal")
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true)
        .textureAll("kubejs:block/mana_steel_casing")
    event.create('terra_steel_casing', 'basic')
        .noValidSpawns(true)
        .soundType("metal")
        .mapColor("metal")
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true)
        .textureAll("kubejs:block/terra_steel_casing")
    event.create('alfsteel_casing', 'basic')
        .noValidSpawns(true)
        .soundType("metal")
        .mapColor("metal")
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true)
        .textureAll("kubejs:block/alfsteel_casing")
    event.create('elementium_casing', 'basic')
        .noValidSpawns(true)
        .soundType("metal")
        .mapColor("metal")
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true)
        .textureAll("kubejs:block/elementium_casing")
    event.create('osmiridium_casing', 'basic')
        .noValidSpawns(true)
        .soundType("metal")
        .mapColor("metal")
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true)
        .textureAll("kubejs:block/osmiridium_casing")
    event.create('iridium_casing', 'basic')
        .noValidSpawns(true)
        .soundType("metal")
        .mapColor("metal")
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true)
        .textureAll("kubejs:block/iridium_casing")
    event.create('blood_casing', 'basic')
        .noValidSpawns(true)
        .soundType("metal")
        .mapColor("metal")
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true)
        .textureAll("kubejs:block/blood_casing")
    event.create('force_field_casing', 'basic')
        .noValidSpawns(true)
        .soundType("metal")
        .mapColor("metal")
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true)
        .textureAll("kubejs:block/force_field_casing")
    event.create('twisted_fusion_casing', 'basic')
        .noValidSpawns(true)
        .soundType("metal")
        .mapColor("metal")
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true)
        .textureAll("kubejs:block/twisted_fusion_casing")
    event.create('naquadah_casing', 'basic')
        .noValidSpawns(true)
        .soundType("metal")
        .mapColor("metal")
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true)
        .textureAll("kubejs:block/nq_casing")
    event.create('naquadah_alloy_casing', 'basic')
        .noValidSpawns(true)
        .soundType("metal")
        .mapColor("metal")
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true)
        .textureAll("kubejs:block/nqhejing_casing")
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


ItemEvents.modification(event => {
    event.modify('farmersdelight:rice',item => {
        item.setFoodProperties(food =>{
            food.eaten((/**@type {$FoodEatenEventJS}*/eat) =>{
                // if(eat.entity.isPlayer()){
                //     console.info('eat!')
                //     eat.player.addItem('kubejs:crashed_rice')
                // }
                return true
            })
        })
    })
    event.modify('tomeofblood:living_mage_hood', item => {
        item.setArmorProtection(4)
        item.setArmorToughness(3)
    })
    event.modify('tomeofblood:living_mage_robes', item => {
        item.setArmorProtection(9)
        item.setArmorToughness(4)
    })
    event.modify('tomeofblood:living_mage_leggings', item => {
        item.setArmorProtection(7)
        item.setArmorToughness(4)
    })
    event.modify('tomeofblood:living_mage_boots', item => {
        item.setArmorProtection(3)
        item.setArmorToughness(3)
    })
    event.modify('bloodmagic:livinghelmet', item => {
        item.setArmorProtection(3)
        item.setArmorToughness(1)
    })
    event.modify('bloodmagic:livingplate', item => {
        item.setArmorProtection(8)
        item.setArmorToughness(2)
    })
    event.modify('bloodmagic:livingleggings', item => {
        item.setArmorProtection(6)
        item.setArmorToughness(1)
    })
    event.modify('bloodmagic:livinghboots', item => {
        item.setArmorProtection(3)
        item.setArmorToughness(1)
    })
    event.modify('tetranichematerials:bronnum_armor_helmet', item => {
        item.setArmorProtection(2)
        item.setArmorKnockbackResistance(0.05)
    })
    event.modify('tetranichematerials:bronnum_armor_chest', item => {
        item.setArmorProtection(5)
        item.setArmorKnockbackResistance(0.05)
    })
    event.modify('tetranichematerials:bronnum_armor_legs', item => {
        item.setArmorProtection(4)
        item.setArmorKnockbackResistance(0.05)
    })
    event.modify('tetranichematerials:bronnum_armor_feet', item => {
        item.setArmorProtection(2)
        item.setArmorKnockbackResistance(0.05)
    })
    event.modify('tetranichematerials:blurine_armor_helmet', item => {
        item.setArmorProtection(3)
        item.setArmorToughness(1)
    })
    event.modify('tetranichematerials:blurine_armor_chest', item => {
        item.setArmorProtection(6)
        item.setArmorToughness(1)
        item.addAttribute('attributeslib:cold_damage',
            '70195e7a-005a-471a-bd26-3fd6d331676d',
            'kubejscolddamage',
            2,
            'addition')
    })
    event.modify('tetranichematerials:blurine_armor_legs', item => {
        item.setArmorProtection(4)
        item.setArmorToughness(1)
    })
    event.modify('tetranichematerials:blurine_armor_feet', item => {
        item.setArmorProtection(2)
        item.setArmorToughness(1)
    })
    event.modify('tetranichematerials:lockwood_armor_chest', item => {
        item.setArmorProtection(7)
        item.addAttribute('minecraft:generic.max_health',
            '03B9249B-929A-42AE-84F2-AD0DEBDCB3AB',
            'kubejsmaxhealth',
            4,
            'addition')
    })
    event.modify('tetranichematerials:lockwood_armor_legs', item => {
        item.setArmorProtection(5)
        item.addAttribute('forge:swim_speed',
            'c6953671-9091-479f-a9ef-cc528e7af16f',
            'kubejsswimspeed',
            0.5,
            'addition')
    })
    event.modify('twilightforest:fiery_helmet', item => {
        item.setArmorProtection(3)
    })
    event.modify('twilightforest:fiery_chestplate', item => {
        item.setArmorProtection(7)
    })
    event.modify('twilightforest:fiery_leggings', item => {
        item.setArmorProtection(5)
    })
    event.modify('twilightforest:fiery_boots', item => {
        item.setArmorProtection(3)
    })
    event.modify('tetranichematerials:burning_steel_armor_helmet', item => {
        item.setArmorProtection(4)
        item.addAttribute('cold_sweat:cold_dampening',
            '98d68242-a5bc-40a2-8b3a-cbaa87cc27c9',
            'kubejscolddampening',
            0.1,
            'addition')
    })
    event.modify('tetranichematerials:burning_steel_armor_chest', item => {
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
    event.modify('tetranichematerials:burning_steel_armor_legs', item => {
        item.setArmorProtection(6)
        item.addAttribute('cold_sweat:cold_dampening',
            'e6988b1d-b44c-4b49-8ab4-3a6df3bfd4ee',
            'kubejscolddampening',
            0.1,
            'addition')
    })
    event.modify('tetranichematerials:burning_steel_armor_feet', item => {
        item.setArmorProtection(4)
        item.addAttribute('cold_sweat:cold_dampening',
            '3470aaa2-397d-4f18-83ad-98c1bc2019e6',
            'kubejscolddampening',
            0.1,
            'addition')
    })
})
