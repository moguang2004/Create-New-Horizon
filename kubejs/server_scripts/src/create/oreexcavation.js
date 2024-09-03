ServerEvents.recipes(event =>{
    event.remove({id:/createoreexcavation:ore_vein_type(.*)/})
    event.remove({id:/createoreexcavation:drilling(.*)/})
    event.shaped(
        Item.of('createoreexcavation:vein_finder', 1), [
            " AB",
            " CA",
            "C  "
        ], {
        A: "minecraft:amethyst_shard",
        B: "gtceu:wrought_iron_gear",
        C: "betterend:leather_wrapped_stick"
    })
    event.recipes.createoreexcavation.vein(Text.translate('ctnh.iron_vein'),'gtceu:raw_goethite').placement(64,8,1666484).id('kubejs:iron_vein').alwaysFinite().veinSize(2, 10).biomeWhitelist('minecraft:is_overworld')
    event.recipes.createoreexcavation.vein(Text.translate('ctnh.copper_vein'),'minecraft:raw_copper').placement(80,8,465123).id('kubejs:copper_vein').alwaysFinite().veinSize(2, 10).biomeWhitelist('minecraft:is_overworld')
    event.recipes.createoreexcavation.vein(Text.translate('ctnh.zinc_vein'),'gtceu:raw_zinc').placement(80,8,235491).id('kubejs:zinc_vein').alwaysFinite().veinSize(2, 5.5).biomeWhitelist('minecraft:is_overworld')
    event.recipes.createoreexcavation.vein(Text.translate('ctnh.redstone_vein'),'gtceu:raw_redstone').placement(128,8,178819).id('kubejs:redstone_vein').alwaysFinite().veinSize(3, 8.5).biomeWhitelist('minecraft:is_overworld')
    event.recipes.createoreexcavation.vein(Text.translate('ctnh.coal_vein'),'gtceu:raw_coal').placement(80,8,333566).id('kubejs:coal_vein').alwaysFinite().veinSize(4, 9.5).biomeWhitelist('minecraft:is_overworld')
    event.recipes.createoreexcavation.vein(Text.translate('ctnh.lapis_vein'),'gtceu:raw_lapis').placement(128,8,266484).id('kubejs:lapis_vein').alwaysFinite().veinSize(1, 4).biomeWhitelist('minecraft:is_overworld').priority(1)
    event.recipes.createoreexcavation.vein(Text.translate('ctnh.oilsands_vein'),'gtceu:raw_oilsands').placement(128,8,168915).id('kubejs:oilsands_vein').alwaysFinite().veinSize(3, 6).biomeWhitelist('minecraft:is_overworld').priority(1)
    event.recipes.createoreexcavation.vein(Text.translate('ctnh.precious_alloy_vein'),'gtceu:raw_precious_alloy').placement(80,8,168784).id('kubejs:precious_alloy_vein').alwaysFinite().veinSize(2.5, 8.5).biomeWhitelist('minecraft:is_overworld')
    event.recipes.createoreexcavation.vein(Text.translate('ctnh.nether_quartz_vein'),'gtceu:raw_nether_quartz').placement(64,8,116564).id('kubejs:nether_quartz_vein').alwaysFinite().veinSize(2.5, 6.5).biomeWhitelist('minecraft:is_overworld')
    event.recipes.createoreexcavation.vein(Text.translate('ctnh.tin_vein'),'gtceu:raw_tin').placement(80,8,177784).id('kubejs:tin_vein').alwaysFinite().veinSize(2, 10).biomeWhitelist('minecraft:is_overworld')
    event.recipes.createoreexcavation.vein(Text.translate('ctnh.diamond_vein'),'gtceu:raw_diamond').placement(128,8,1715514).id('kubejs:diamond_vein').alwaysFinite().veinSize(2.5, 8.5).biomeWhitelist('minecraft:is_overworld')
    event.recipes.createoreexcavation.vein(Text.translate('ctnh.salt_vein'),'gtceu:raw_salt').placement(64,8,168784).id('kubejs:salt_vein').alwaysFinite().veinSize(2.5, 6.5).biomeWhitelist('minecraft:is_overworld')
    event.recipes.createoreexcavation.vein(Text.translate('ctnh.magnetite_vein'),'gtceu:raw_magnetite').placement(64,8,264664).id('kubejs:magnetite_vein').alwaysFinite().veinSize(3, 10).biomeWhitelist('minecraft:is_overworld')

    event.recipes.createoreexcavation.drilling(
        [Item.of('gtceu:raw_goethite').withChance(0.5),
        Item.of('gtceu:raw_yellow_limonite').withChance(0.25),
        Item.of('gtceu:raw_hematite').withChance(0.15),
        Item.of('gtceu:raw_malachite').withChance(0.1)], 'kubejs:iron_vein', 600)
        .id("kubejs:iron_vein1")
        .fluid('gtceu:lubricant 300')
        .stress(192)
    
        event.recipes.createoreexcavation.drilling(
        [Item.of('gtceu:raw_chalcopyrite').withChance(0.4),
        Item.of('minecraft:raw_iron').withChance(0.15),
        Item.of('gtceu:raw_pyrite').withChance(0.25),
        Item.of('minecraft:raw_copper').withChance(0.2)], 'kubejs:copper_vein', 600)
        .id("kubejs:copper_vein1")
        .fluid('gtceu:lubricant 300')
        .stress(192)

        event.recipes.createoreexcavation.drilling(
        [Item.of('gtceu:raw_zinc').withChance(0.4),
        Item.of('minecraft:raw_copper').withChance(0.4),
        Item.of('gtceu:raw_yellow_limonite').withChance(0.1),
        Item.of('gtceu:raw_malachite').withChance(0.1)], 'kubejs:zinc_vein', 600)
        .id("kubejs:zinc_vein1")
        .fluid('gtceu:lubricant 300')
        .drill('createoreexcavation:diamond_drill') 
        .stress(256)

        event.recipes.createoreexcavation.drilling(
        [Item.of('gtceu:raw_redstone').withChance(0.4),
        Item.of('gtceu:raw_ruby').withChance(0.3),
        Item.of('gtceu:raw_cinnabar').withChance(0.3)], 'kubejs:redstone_vein', 800)
        .id("kubejs:redstone_vein1")
        .fluid('gtceu:lubricant 300')
        .stress(192)

        event.recipes.createoreexcavation.drilling(
        [Item.of('gtceu:raw_coal').withChance(1)], 'kubejs:coal_vein', 200)
        .id("kubejs:coal_vein1")
        .fluid('gtceu:lubricant 300')
        .stress(192)

        event.recipes.createoreexcavation.drilling(
        [Item.of('gtceu:raw_lazurite').withChance(0.4),
        Item.of('gtceu:raw_sodalite').withChance(0.4),
        Item.of('gtceu:raw_lapis').withChance(0.1),
        Item.of('gtceu:raw_calcite').withChance(0.1)], 'kubejs:lapis_vein', 800)
        .id("kubejs:lapis_vein1")
        .fluid('gtceu:lubricant 300')
        .stress(256)

        event.recipes.createoreexcavation.drilling(
        [Item.of('gtceu:raw_oilsands').withChance(1)], 'kubejs:oilsands_vein', 600)
        .id("kubejs:oilsands_vein1")
        .fluid('gtceu:lubricant 300')
        .stress(192)

        event.recipes.createoreexcavation.drilling(
        [Item.of('gtceu:raw_precious_alloy').withChance(0.4),
        Item.of('gtceu:raw_silver').withChance(0.2),
        Item.of('gtceu:raw_tin').withChance(0.2),
        Item.of('minecraft:raw_copper').withChance(0.2)], 'kubejs:precious_alloy_vein', 800)
        .id("kubejs:precious_alloy_vein1")
        .drill('createoreexcavation:diamond_drill') 
        .fluid('gtceu:lubricant 300')
        .stress(512)

        event.recipes.createoreexcavation.drilling(
        [Item.of('gtceu:raw_nether_quartz').withChance(0.5),
        Item.of('gtceu:raw_quartzite').withChance(0.4),
        Item.of('gtceu:raw_opal').withChance(0.1)], 'kubejs:nether_quartz_vein', 800)
        .id("kubejs:nether_quartz_vein1")
        .fluid('gtceu:lubricant 300')
        .drill('createoreexcavation:diamond_drill') 
        .stress(512)

        event.recipes.createoreexcavation.drilling(
        [Item.of('gtceu:raw_tin').withChance(0.7),
        Item.of('gtceu:raw_cassiterite').withChance(0.3)], 'kubejs:nether_quartz_vein', 600)
        .id("kubejs:tin_vein1")
        .fluid('gtceu:lubricant 300')
        .stress(192)

        event.recipes.createoreexcavation.drilling(
        [Item.of('gtceu:raw_diamond').withChance(0.4),
        Item.of('gtceu:raw_graphite').withChance(0.4),
        Item.of('gtceu:raw_coal').withChance(0.2)], 'kubejs:diamond_vein', 800)
        .id("kubejs:diamond_vein1")
        .fluid('gtceu:lubricant 300')
        .drill('createoreexcavation:diamond_drill') 
        .stress(512)

        event.recipes.createoreexcavation.drilling(
        [Item.of('gtceu:raw_magnetite').withChance(0.6),
        Item.of('gtceu:raw_vanadium_magnetite').withChance(0.2),
        Item.of('gtceu:raw_precious_alloy').withChance(0.2)], 'kubejs:magnetite_vein', 600)
        .id("kubejs:magnetite_vein1")
        .fluid('gtceu:lubricant 300')
        .stress(256)

        event.recipes.createoreexcavation.drilling(
        [Item.of('gtceu:raw_rock_salt').withChance(0.3),
        Item.of('gtceu:raw_salt').withChance(0.3),
        Item.of('gtceu:raw_lepidolite').withChance(0.2),
        Item.of('gtceu:spodumene').withChance(0.2)], 'kubejs:magnetite_vein', 600)
        .id("kubejs:salt_vein1")
        .fluid('gtceu:lubricant 300')
        .stress(192)
})