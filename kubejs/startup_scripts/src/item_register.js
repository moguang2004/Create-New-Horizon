Platform.getInfo('kubejs').name = 'Create: New Horizon'


ItemEvents.modification(event => {
    event.modify('farmersdelight:rice', item => {
        item.setFoodProperties(food => {
            food.eaten((eat) => {
                return true
            })
        })
    })
    event.modify('ctnhcore:primary_stew', item => {
        item.setFoodProperties(food => {
            food.eaten((eat) => {
                eat.player.addEffect(new Internal.MobEffectInstance('minecraft:regeneration', 600, 1), true)
                return true
            })
        })
    })
    event.modify('ctnhcore:galaxy_meatball', item => {
        item.setFoodProperties(food => {
            food.eaten((eat) => {
                eat.player.addEffect(new Internal.MobEffectInstance('minecraft:regeneration', 600, 1), true)
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
        // event.modify('tetranichematerials:bronnum_armor_helmet', item => {
        //     item.setArmorProtection(2)
        //     item.setArmorKnockbackResistance(0.05)
        // })
        // event.modify('tetranichematerials:bronnum_armor_chest', item => {
        //     item.setArmorProtection(5)
        //     item.setArmorKnockbackResistance(0.05)
        // })
        // event.modify('tetranichematerials:bronnum_armor_legs', item => {
        //     item.setArmorProtection(4)
        //     item.setArmorKnockbackResistance(0.05)
        // })
        // event.modify('tetranichematerials:bronnum_armor_feet', item => {
        //     item.setArmorProtection(2)
        //     item.setArmorKnockbackResistance(0.05)
        // })
        // event.modify('tetranichematerials:blurine_armor_helmet', item => {
        //     item.setArmorProtection(3)
        //     item.setArmorToughness(1)
        // })
        // event.modify('tetranichematerials:blurine_armor_chest', item => {
        //     item.setArmorProtection(6)
        //     item.setArmorToughness(1)
        //     item.addAttribute('attributeslib:cold_damage',
        //         '70195e7a-005a-471a-bd26-3fd6d331676d',
        //         'kubejscolddamage',
        //         2,
        //         'addition')
        // })
        // event.modify('tetranichematerials:blurine_armor_legs', item => {
        //     item.setArmorProtection(4)
        //     item.setArmorToughness(1)
        // })
        // event.modify('tetranichematerials:blurine_armor_feet', item => {
        //     item.setArmorProtection(2)
        //     item.setArmorToughness(1)
        // })
        // event.modify('tetranichematerials:lockwood_armor_chest', item => {
        //     item.setArmorProtection(7)
        //     item.addAttribute('minecraft:generic.max_health',
        //         '03B9249B-929A-42AE-84F2-AD0DEBDCB3AB',
        //         'kubejsmaxhealth',
        //         4,
        //         'addition')
        // })
        // event.modify('tetranichematerials:lockwood_armor_legs', item => {
        //     item.setArmorProtection(5)
        //     item.addAttribute('forge:swim_speed',
        //         'c6953671-9091-479f-a9ef-cc528e7af16f',
        //         'kubejsswimspeed',
        //         0.5,
        //         'addition')
        // })
    event.modify('ctnhcore:ender_light', item => {
        item.setFoodProperties(food => {
            food.hunger(20)
            food.saturation(0.5)
            food.meat(true)
            food.alwaysEdible(true)
            food.fastToEat(true)
            food.effect('minecraft:haste', 20 * 1800, 0, 1)
            food.effect('legendarysurvivaloverhaul:heat_immunity', 20 * 1800, 0, 1)
            food.effect('legendarysurvivaloverhaul:cold_immunity', 20 * 1800, 0, 1)
        })
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
        item.addAttribute('legendarysurvivaloverhaul:cold_resistance',
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
        item.addAttribute('legendarysurvivaloverhaul:cold_resistance',
            '683cbb1f-eb71-45e8-941e-a01805c9d773',
            'kubejscolddampening',
            0.1,
            'addition')
    })
    event.modify('tetranichematerials:burning_steel_armor_legs', item => {
        item.setArmorProtection(6)
        item.addAttribute('legendarysurvivaloverhaul:cold_resistance',
            'e6988b1d-b44c-4b49-8ab4-3a6df3bfd4ee',
            'kubejscolddampening',
            0.1,
            'addition')
    })
    event.modify('tetranichematerials:burning_steel_armor_feet', item => {
        item.setArmorProtection(4)
        item.addAttribute('legendarysurvivaloverhaul:cold_resistance',
            '3470aaa2-397d-4f18-83ad-98c1bc2019e6',
            'kubejscolddampening',
            0.1,
            'addition')
    })
})