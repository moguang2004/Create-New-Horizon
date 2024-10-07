ServerEvents.recipes(event => {
    event.remove({ id: "deep_aether:skyroot_crafting_table" })
    event.remove({ id: "aether:skyroot_crafting_table" })
    event.remove({ id: "aether:skyroot_chest" })
    event.shaped(
        Item.of("gtceu:andesite_alloy_ingot", 4), [
        "ABA",
        "BAB",
        "ABA"
    ], {
        A: "minecraft:iron_ingot",
        B: "minecraft:andesite",
    })
    event.shaped(
        Item.of("create:shaft", 4), [
        "A",
        "A",
        "A"
    ], {
        A: "gtceu:andesite_alloy_ingot",
    })
    event.shaped(
        Item.of("create:mechanical_press", 1), [
        " A ",
        "BCB",
        " D "
    ], {
        A: "minecraft:iron_ingot",
        B: "create:shaft",
        C: "create:andesite_casing",
        D: "minecraft:iron_block"
    })
    event.shaped(
        Item.of("create:windmill_bearing", 1), [
        "AAA",
        "BCB",
        "BDB"
    ], {
        A: "#minecraft:wooden_slabs",
        B: "minecraft:stone",
        C: "kubejs:basic_mechanism",
        D: "create:shaft"
    })
    event.shaped(
        Item.of("create:mechanical_bearing", 1), [
        "AAA",
        "BCB",
        "BDB"
    ], {
        A: "#minecraft:wooden_slabs",
        B: "#minecraft:planks",
        C: "gtceu:andesite_alloy_plate",
        D: "create:shaft"
    })
    event.shapeless("create:depot", [
        "create:andesite_casing", "gtceu:andesite_alloy_plate"
    ])
    event.shaped(
        Item.of("create:cogwheel", 4), [
        " A ",
        "ABA",
        " A "
    ], {
        A: "#minecraft:planks",
        B: "gtceu:small_andesite_alloy_gear",
    })
    event.shaped(
        Item.of("create:large_cogwheel", 4), [
        " A ",
        "ABA",
        " A "
    ], {
        A: "gtceu:treated_wood_planks",
        B: "gtceu:andesite_alloy_gear",
    })
    event.shaped(
        Item.of("create:water_wheel", 1), [
        "AAA",
        "ABA",
        "AAA"
    ], {
        A: "gtceu:treated_wood_planks",
        B: "create:large_cogwheel",
    })
    event.shaped(
        Item.of("create:mechanical_drill", 1), [
        " D ",
        "CBC",
        " A "
    ], {
        A: "create:andesite_casing",
        B: "create:shaft",
        C: "gtceu:andesite_alloy_ingot",
        D: "gtceu:iron_drill_head"
    })
    event.shaped(
        Item.of("create:mechanical_mixer", 1), [
        "ABA",
        "CDC",
        " E "
    ], {
        A: "kubejs:basic_mechanism",
        B: "create:shaft",
        C: "create:andesite_casing",
        D: "create:large_cogwheel",
        E: "create:whisk"
    })
    event.shaped(
        Item.of("kubejs:basic_mechanism", 2), [
        "ABC",
        "DEF",
        "GGG"
    ], {
        A: "#forge:tools/saws",
        B: "gtceu:andesite_alloy_rod",
        C: "gtceu:gold_plate",
        D: "gtceu:andesite_alloy_plate",
        E: "gtceu:andesite_alloy_gear",
        F: "gtceu:iron_rod",
        G: "#minecraft:planks"
    })
    event.shaped(
        Item.of("create:electron_tube", 1), [
        " A ",
        "BCB",
        " B "
    ], {
        A: "create:polished_rose_quartz",
        B: "gtceu:andesite_alloy_plate",
        C: "gtceu:small_iron_gear",
    })
    event.shaped(
        Item.of("create:deployer", 1), [
        "ABA",
        "CDC",
        " E "
    ], {
        A: "kubejs:basic_mechanism",
        B: "create:electron_tube",
        C: "create:andesite_casing",
        D: "create:shaft",
        E: "create:brass_hand"
    })
    event.shaped(
        Item.of("create:contraption_controls", 1), [
        " A ",
        "BCB",
        " D "
    ], {
        A: "minecraft:oak_button",
        B: "kubejs:basic_mechanism",
        C: "create:andesite_casing",
        D: "create:electron_tube",
    })
    event.shaped(
        Item.of("create_new_age:redstone_magnet", 2), [
        "ABC",
        "BDB",
        "CBA"
    ], {
        A: "alexscaves:scarlet_neodymium_ingot",
        B: "create:polished_rose_quartz",
        C: "alexscaves:azure_neodymium_ingot",
        D: "create_new_age:magnetite_block",
    })
    event.shaped(
        Item.of("create_new_age:carbon_brushes", 1), [
        "ABA",
        "CDC",
        "ABA"
    ], {
        A: "gtceu:iron_rod",
        B: "gtceu:andesite_alloy_plate",
        C: "gtceu:coke_dust",
        D: "create:shaft",
    })
    event.shaped(
        Item.of("create_new_age:energiser_t1", 1), [
        " A ",
        "BCB",
        " D "
    ], {
        A: "create:precision_mechanism",
        B: "create:shaft",
        C: "create:railway_casing",
        D: "minecraft:lightning_rod",
    })
    event.shaped(
        Item.of("minecraft:lightning_rod", 1), [
        " A ",
        " B ",
        " C "
    ], {
        A: "minecraft:copper_block",
        B: "minecraft:copper_ingot",
        C: "gtceu:copper_rod",
    })
    event.shaped(
        Item.of("enderio:void_chassis", 1), [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "minecraft:iron_bars",
        B: "gtceu:steel_plate",
        C:"#gtceu:circuits/mv",
    })
    event.shaped(
        Item.of("create:spout", 1), [
        "ABA",
        "ACA",
        " D "
    ], {
        A: "gtceu:bronze_plate",
        B: "minecraft:glass",
        C: "create:copper_casing",
        D: "create:fluid_pipe"
    })
    event.shaped(
        Item.of("botania:apothecary_default", 1), [
        "ABA",
        "CCC",
        " D "
    ], {
        A: "minecraft:stone_brick_stairs",
        B: "#botania:petals",
        C: "minecraft:stone_brick_slab",
        D: "minecraft:stone_brick_wall"
    })
    event.shaped(
        Item.of("gtceu:magnetic_iron_ingot", 7), [
        "ABA",
        "AAA",
        "ACA"
    ], {
        A: "minecraft:iron_ingot",
        B: "alexscaves:scarlet_magnet",
        C: "alexscaves:azure_magnet"
    }).keepIngredient("alexscaves:scarlet_magnet")
        .keepIngredient("alexscaves:azure_magnet")
    event.shaped(
        Item.of("create_new_age:magnetite_block", 5), [
        "ABA",
        "BAB",
        "ABA"
    ], {
        A: "minecraft:stone",
        B: "gtceu:magnetic_iron_dust",
    })
    event.shaped(
        Item.of("create:rotation_speed_controller", 1), [
        " A ",
        "BCB",
        "DDD"
    ], {
        A: "create:cogwheel",
        B: "create:shaft",
        C: "create:precision_mechanism",
        D: "create:brass_casing"
    })
    event.shaped(
        Item.of("create:portable_storage_interface", 1), [
        "   ",
        "ABC",
        "   "
    ], {
        A: "create:andesite_casing",
        B: "kubejs:basic_mechanism",
        C: "create:chute",
    })
    event.shaped(
        Item.of("create:cart_assembler", 1), [
        " A ",
        "BCB",
        "DED"
    ], {
        A: "minecraft:slime_ball",
        B: "create:powered_latch",
        C: "create:andesite_casing",
        D: "gtceu:andesite_alloy_plate",
        E: "kubejs:basic_mechanism"
    })
    event.shaped(
        Item.of("create:millstone", 1), [
        " A ",
        "BCB",
        "DDD"
    ], {
        A: "create:chute",
        B: "create:cogwheel",
        C: "kubejs:basic_mechanism",
        D: "minecraft:smooth_stone",
    })
    event.shaped(
        Item.of("create:belt_connector", 3), [
        "   ",
        "AAA",
        "BBB"
    ], {
        A: "minecraft:leather",
        B: "minecraft:dried_kelp",
    })
    event.shaped(
        Item.of("create:belt_connector", 6), [
        "   ",
        "AAA",
        "BBB"
    ], {
        A: "gtceu:polyethylene_plate",
        B: "minecraft:dried_kelp",
    })
    event.shaped(
        Item.of("create:belt_connector", 8), [
        "   ",
        "AAA",
        "BBB"
    ], {
        A: "gtceu:polyvinyl_chloride_plate",
        B: "minecraft:dried_kelp",
    })
    event.shaped(
        Item.of("create:belt_connector", 16), [
        "   ",
        "AAA",
        "BBB"
    ], {
        A: "gtceu:polybenzimidazole_plate",
        B: "minecraft:dried_kelp",
    })
    event.shaped(
        Item.of("ae2:inscriber", 1), [
        "ABA",
        "C C",
        "DBD"
    ], {
        A: "gtceu:mv_electric_piston",
        B: "minecraft:sticky_piston",
        C: "gtceu:aluminium_plate",
        D: "gtceu:certus_quartz_plate"
    })
    event.shaped(
        Item.of("ae2:charger", 1), [
        " AA",
        "BCD",
        " AA"
    ], {
        A: "gtceu:certus_quartz_plate",
        B: "minecraft:redstone",
        C: "minecraft:hopper",
        D: "gtceu:small_aluminium_gear"
    })
    event.shaped(
        Item.of("ae2:energy_acceptor", 1), [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "gtceu:certus_quartz_plate",
        B: "gtceu:red_alloy_single_wire",
        C: "gtceu:energetic_alloy_quadruple_wire",
    })
    event.shaped(
        Item.of("ae2:fluix_glass_cable", 4), [
        "AAA",
        "BCB",
        "AAA"
    ], {
        A: "minecraft:glass",
        B: "ae2:fluix_dust",
        C: "ae2:quartz_fiber",
    })
    event.shaped(
        Item.of("angelblockrenewed:angel_block", 1), [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "gtceu:tin_rod",
        B: "botania:elf_glass",
        C: "bloodmagic:reagentair",
    })
    event.shaped(
        Item.of("create:goggles", 1), [
        "ABA",
        "CDC",
        "   "
    ], {
        A: "minecraft:lead",
        B: "minecraft:slime_ball",
        C: "gtceu:gold_plate",
        D: "botania:cosmetic_engineer_goggles"
    })
    event.shaped(
        Item.of("gtceu:magnetic_iron_ingot", 4), [
        " A ",
        "ABA",
        " A "
    ], {
        A: "minecraft:iron_ingot",
        B: "botania:lens_magnet"
    })
    event.shaped(
        Item.of("create_new_age:layered_magnet", 2), [
        "AAA",
        "BCB",
        "AAA"
    ], {
        A: "create_new_age:overcharged_golden_sheet",
        B: "create_new_age:redstone_magnet",
        C: "gtceu:steel_ingot"
    })
    event.shaped(
        Item.of("create_new_age:electrical_connector", 2), [
        " A ",
        " B ",
        "CBC"
    ], {
        A: "gtceu:fine_copper_wire",
        B: "gtceu:copper_single_wire",
        C: "gtceu:steel_plate"
    })
    event.shaped(
        Item.of("gtceu:digestion_tank", 1), [
        "ABC",
        "BDB",
        "EBE"
    ], {
        A: "gtceu:mv_conveyor_module",
        B: "#gtceu:circuits/mv",
        C: "gtceu:mv_electric_pump",
        D: "gtceu:mv_machine_hull",
        E: "minecraft:bricks"
    })
    event.shaped(
        Item.of("gtceu:seawater_desalting_factory", 1), [
        "ABC",
        "DED",
        "FBF"
    ], {
        A: "gtceu:lv_field_generator",
        B: "gtceu:solid_machine_casing",
        C: "gtceu:lv_sensor",
        D: "#gtceu:circuits/mv",
        E: "gtceu:mv_machine_hull",
        F: "gtceu:lv_electric_motor"
    })
    event.shaped(
        Item.of("gtceu:kinetic_steam_turbine", 1), [
        "ABA",
        "CDC",
        "AEA"
    ], {
        A: "gtceu:bronze_plate",
        B: "kubejs:steel_mechanism",
        C: "#gtceu:circuits/lv",
        D: "gtceu:steam_machine_casing",
        E: "create:shaft"
    })
    event.shaped(
        Item.of("gtceu:seaweed_farm", 1), [
        "ABA",
        "CDC",
        "EFE"
    ], {
        A: "create:large_cogwheel",
        B: "create:cogwheel",
        C: "create:precision_mechanism",
        D: "create:andesite_casing",
        E: "create:shaft",
        F: "gtceu:bronze_gear"
    })
    event.shaped(
        Item.of("gtceu:industrial_primitive_blast_furnace", 1), [
        "ABA",
        "BCB",
        "DBD"
    ], {
        A: "gtceu:lv_conveyor_module",
        B: "#gtceu:circuits/lv",
        C: "gtceu:primitive_blast_furnace",
        D: "gtceu:firebricks"
    })
    event.shaped(
        Item.of("gtceu:fermenting_tank", 1), [
        "ABA",
        "CDC",
        "EFE"
    ], {
        A: "gtceu:mv_sensor",
        B: "gtceu:mv_robot_arm",
        C: "#gtceu:circuits/hv",
        D: "gtceu:mv_mixer",
        E: "gtceu:solid_machine_casing",
        F: "gtceu:mv_fluid_heater"
    })
    event.shaped(
        Item.of("gtceu:mana_generator_turbine_tier1", 1), [
        "ABA",
        "CDC",
        "EFE"
    ], {
        A: "gtceu:lv_sensor",
        B: "gtceu:lv_electric_pump",
        C: "kubejs:mana_steel_casing",
        D: "#gtceu:circuits/lv",
        E: "gtceu:steel_gear",
        F: "gtceu:lv_conveyor_module"
    })
    event.shaped(
        Item.of("gtceu:mana_generator_turbine_tier2", 1), [
        "ABA",
        "CDC",
        "EFE"
    ], {
        A: "gtceu:mv_sensor",
        B: "gtceu:mv_electric_pump",
        C: "kubejs:elementium_casing",
        D: "#gtceu:circuits/mv",
        E: "gtceu:aluminium_gear",
        F: "gtceu:mv_conveyor_module"
    })
    event.shaped(
        Item.of("gtceu:mana_generator_turbine_tier3", 1), [
        "ABA",
        "CDC",
        "EFE"
    ], {
        A: "gtceu:hv_sensor",
        B: "gtceu:hv_electric_pump",
        C: "kubejs:terra_steel_casing",
        D: "#gtceu:circuits/hv",
        E: "gtceu:stainless_steel_gear",
        F: "gtceu:hv_conveyor_module"
    })
    event.shaped(
        Item.of("gtceu:mana_generator_turbine_tier4", 1), [
        "ABA",
        "CDC",
        "EFE"
    ], {
        A: "gtceu:ev_sensor",
        B: "gtceu:ev_electric_pump",
        C: "kubejs:alfsteel_casing",
        D: "#gtceu:circuits/ev",
        E: "gtceu:titanium_gear",
        F: "gtceu:ev_conveyor_module"
    })
    event.shaped(
        Item.of("ctnhcore:slaughter_house", 1), [
        "ABA",
        "BCB",
        "DED"
    ], {
        A: "gtceu:stainless_steel_gear",
        B: "minecraft:netherite_sword",
        C: "gtceu:hv_machine_hull",
        D: "gtceu:hv_conveyor_module",
        E: "#gtceu:circuits/hv"
    })
    event.shaped(
        Item.of("gtceu:water_power_station", 1), [
        "AAA",
        "BCB",
        "DED"
    ], {
        A: "kubejs:mana_steel_casing",
        B: "create:large_water_wheel",
        C: "gtceu:mv_machine_hull",
        D: "gtceu:mv_electric_pump",
        E: "#gtceu:circuits/mv"
    })
    event.shaped(
        Item.of("gtceu:mana_macerator", 1), [
        "AAA",
        "BCB",
        "DDD"
    ], {
        A: "botania:polished_livingrock",
        B: "gtceu:mv_electric_motor",
        C: "gtceu:mv_macerator",
        D: "gtceu:diamond_grinding_head"
    })
    event.shaped(
        Item.of("gtceu:mana_seperator", 1), [
        "AAA",
        "BCB",
        "DED"
    ], {
        A: "botania:polished_livingrock",
        B: "gtceu:hv_conveyor_module",
        C: "gtceu:hv_centrifuge",
        D: "gtceu:hv_electric_pump",
        E: "#gtceu:circuits/hv"
    })
    event.shaped(
        Item.of("ctnhcore:photovoltaic_power_station_energetic", 1), [
        "AAA",
        "BCB",
        "DED"
    ], {
        A: "minecraft:gold_ingot",
        B: "gtceu:lv_electric_motor",
        C: "ctnhcore:reflect_light_casing",
        D: "enderio:basic_capacitor",
        E: "#gtceu:circuits/lv"
    })
    event.shaped(
        Item.of("ctnhcore:photovoltaic_power_station_pulsating", 1), [
        "AAA",
        "BCB",
        "DED"
    ], {
        A: "gtceu:pulsating_alloy_plate",
        B: "gtceu:mv_electric_motor",
        C: "ctnhcore:reflect_light_casing",
        D: "enderio:double_layer_capacitor",
        E: "#gtceu:circuits/mv"
    })
    event.shaped(
        Item.of("ctnhcore:photovoltaic_power_station_vibrant", 1), [
        "AAA",
        "BCB",
        "DED"
    ], {
        A: "gtceu:vibrant_alloy_plate",
        B: "gtceu:hv_electric_motor",
        C: "ctnhcore:reflect_light_casing",
        D: "enderio:octadic_capacitor",
        E: "#gtceu:circuits/hv"
    })
    event.shaped(
        Item.of("gtceu:turbine_rotor", 1, '{GT.PartStats:{Material:"gtceu:steel"}}'), [
        "AAA",
        "ABA",
        "AAA"
    ], {
        A: "gtceu:steel_turbine_blade",
        B: "gtceu:long_steel_rod"
    })
    event.shaped(
        Item.of("gtceu:turbine_rotor", 1, '{GT.PartStats:{Material:"gtceu:wrought_iron"}}'), [
        "AAA",
        "ABA",
        "AAA"
    ], {
        A: "gtceu:wrought_iron_turbine_blade",
        B: "gtceu:long_wrought_iron_rod"
    })
    event.shaped(
        Item.of("gtceu:turbine_rotor", 1, '{GT.PartStats:{Material:"gtceu:iron"}}'), [
        "AAA",
        "ABA",
        "AAA"
    ], {
        A: "gtceu:iron_turbine_blade",
        B: "gtceu:long_iron_rod"
    })
    event.shaped(
        Item.of("gtceu:turbine_rotor", 1, '{GT.PartStats:{Material:"gtceu:brass"}}'), [
        "AAA",
        "ABA",
        "AAA"
    ], {
        A: "gtceu:brass_turbine_blade",
        B: "gtceu:long_brass_rod"
    })
    event.shaped(
        Item.of("gtceu:turbine_rotor", 1, '{GT.PartStats:{Material:"gtceu:bronze"}}'), [
        "AAA",
        "ABA",
        "AAA"
    ], {
        A: "gtceu:bronze_turbine_blade",
        B: "gtceu:long_bronze_rod"
    })
    event.shaped(
        Item.of("gtceu:turbine_rotor", 1, '{GT.PartStats:{Material:"gtceu:aluminium"}}'), [
        "AAA",
        "ABA",
        "AAA"
    ], {
        A: "gtceu:aluminium_turbine_blade",
        B: "gtceu:long_aluminium_rod"
    })
    event.shaped(
        Item.of("gtceu:ulv_rotor_holder0", 1), [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "gtceu:small_brass_gear",
        B: "gtceu:bronze_gear",
        C: "gtceu:ulv_machine_hull"
    })
    event.shaped(
        Item.of("gtceu:lv_rotor_holder1", 1), [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "gtceu:small_steel_gear",
        B: "gtceu:wrought_iron_gear",
        C: "gtceu:lv_machine_hull"
    })
    event.shaped(
        Item.of("gtceu:mv_rotor_holder2", 1), [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "gtceu:small_aluminium_gear",
        B: "gtceu:magnalium_gear",
        C: "gtceu:mv_machine_hull"
    })
    event.shaped(
        Item.of("enderio:item_conduit", 4), [
        "AAA",
        "BBB",
        "AAA"
    ], {
        A: "enderio:conduit_binder",
        B: "gtceu:pulsating_alloy_ingot"
    }).id('enderio:item_conduit')
    event.shaped(
        Item.of("gtceu:kinetic_generator", 1), [
        "ABA",
        "CDC",
        "ABA"
    ], {
        A: "kubejs:heavy_machinery_casing",
        B: "gtceu:solid_machine_casing",
        C: "#gtceu:circuits/mv",
        D: "create_new_age:generator_coil"
    })
    event.shaped(
        Item.of("gtceu:big_dam", 1), [
        "ABA",
        "CDC",
        "AAA"
    ], {
        A: "minecraft:stone_bricks",
        B: "kubejs:basic_mechanism",
        C: "create:shaft",
        D: "create:large_water_wheel"
    })
    event.shaped(
        Item.of("gtceu:windmill_control_center", 1), [
        " A ",
        "BCB",
        "DED"
    ], {
        A: "create:redstone_link",
        B: "create:precision_mechanism",
        C: "create:linked_controller",
        D: "create:brass_casing",
        E: "create:shaft"
    })
    event.shaped(
        Item.of("ctnhcore:wind_power_array", 1), [
        "ABA",
        "BCB",
        "DED"
    ], {
        A: "gtceu:steel_rod",
        B: "gtceu:solid_machine_casing",
        C: "create:windmill_bearing",
        D: "gtceu:lv_electric_motor",
        E: "#gtceu:circuits/lv"
    })
    event.shaped(
        Item.of("ctnhcore:advanced_wind_power_array", 1), [
        "ABA",
        "BCB",
        "DED"
    ], {
        A: "gtceu:stainless_steel_rod",
        B: "gtceu:clean_machine_casing",
        C: "ctnhcore:wind_power_array",
        D: "gtceu:hv_electric_motor",
        E: "#gtceu:circuits/hv"
    })
    event.shaped(
        Item.of("ctnhcore:super_wind_power_array", 1), [
        "ABA",
        "BCB",
        "DED"
    ], {
        A: "gtceu:tungsten_steel_rod",
        B: "gtceu:robust_machine_casing",
        C: "ctnhcore:advanced_wind_power_array",
        D: "gtceu:iv_electric_motor",
        E: "#gtceu:circuits/iv"
    })
    event.shaped(
        Item.of("gtceu:meadow", 1), [
        "ABA",
        "CAC",
        "DED"
    ], {
        A: "kubejs:basic_mechanism",
        B: "minecraft:wheat_seeds",
        C: "minecraft:wheat",
        D: "create:shaft",
        E: "create:belt_connector"
    })
    event.shaped("gtceu:steam_piston_hammer", [
        "BCB",
        "DAD",
        "BEB"
    ], {
        A: "gtceu:lp_steam_forge_hammer",
        B: "gtceu:bronze_plate",
        C: "gtceu:wrought_iron_ring",
        D: "gtceu:iron_spring",
        E: "gtceu:double_wrought_iron_plate"
    })
    event.shaped("gtceu:steam_pressor", [
        "BCB",
        "DAD",
        "BEB"
    ], {
        A: "gtceu:lp_steam_compressor",
        B: "gtceu:bronze_plate",
        C: "gtceu:small_bronze_gear",
        D: "gtceu:small_iron_spring",
        E: "gtceu:wrought_iron_gear"
    })
    event.shaped("gtceu:steam_foundry", [
        "BCB",
        "DAD",
        "BCB"
    ], {
        A: "gtceu:lp_steam_alloy_smelter",
        B: "gtceu:bronze_plate",
        C: "gtceu:potin_plate",
        D: "gtceu:long_tin_alloy_rod"
    })
    event.shaped("gtceu:steam_centrifuge", [
        "BCB",
        "DAD",
        "BCB"
    ], {
        A: "gtceu:bronze_rotor",
        B: "gtceu:bronze_plate",
        C: "gtceu:wrought_iron_gear",
        D: "gtceu:long_bronze_rod"
    })
    event.shaped("gtceu:ion_exchanger", [
        "BCB",
        "DAD",
        "BCB"
    ], {
        A: "gtceu:iv_machine_hull",
        B: "gtceu:double_hsse_plate",
        C: "gtceu:iv_electric_pump",
        D: "gtceu:fluid_filter"
    })
    event.shaped("gtceu:crystallizer", [
        "SCS",
        "DAD",
        "BVB"
    ], {
        A: "gtceu:iv_autoclave",
        B: "gtceu:double_hsse_plate",
        C: "gtceu:iv_electric_pump",
        D: "gtceu:hssg_coil_block",
        S: "gtceu:hssg_spring",
        V: "gtceu:hsse_frame"
    })
    event.shaped("gtceu:vacuum_sintering_tower", [
        "BCB",
        "DAD",
        "SVS"
    ], {
        A: "gtceu:electric_blast_furnace",
        B: "gtceu:double_hsse_plate",
        C: "gtceu:iv_electric_furnace",
        D: "gtceu:hssg_coil_block",
        S: "gtceu:hssg_spring",
        V: "gtceu:iv_alloy_smelter"
    })
    event.shaped("gtceu:condensate_separator", [
        "BCB",
        "DAG",
        "SVS"
    ], {
        A: "gtceu:vacuum_freezer",
        B: "gtceu:dense_aluminium_plate",
        C: "gtceu:iv_centrifuge",
        D: "gtceu:iv_thermal_centrifuge",
        S: "gtceu:vanadium_gallium_spring",
        V: "gtceu:iv_sifter",
        G: "gtceu:fluid_filter"
    })
    event.shaped(
        Item.of('gtceu:boom_of_create', 1), [
        "DED",
        "ACA",
        "BAB"
    ], {
        A: 'gtceu:iv_conveyor_module',
        B: '#gtceu:circuits/iv',
        C: 'gtceu:iv_machine_hull',
        D: 'gtceu:iv_electric_pump',
        E: 'gtceu:big_dam'
    })
    event.shaped(
        Item.of('gtceu:greenhouse', 1), [
        "DED",
        "ACA",
        "BAB"
    ], {
        A: 'gtceu:double_steel_plate',
        B: 'gtceu:mv_electric_pump',
        C: 'gtceu:mv_machine_hull',
        D: '#gtceu:circuits/mv',
        E: 'minecraft:glowstone'
    })
    event.shaped(
        Item.of('gtceu:ultrasonic_apparatus', 1), [
        "ABA",
        "BCB",
        "DED"
    ], {
        A: 'gtceu:stainless_steel_gear',
        B: '#gtceu:circuits/hv',
        C: 'gtceu:hv_machine_hull',
        D: 'gtceu:hv_electric_pump',
        E: 'gtceu:stainless_steel_rotor'
    })
    event.shaped(
        Item.of('gtceu:super_centrifuge', 1), [
        "ABC",
        "CDE",
        "ABC"
    ], {
        A: 'gtceu:ev_electric_pump',
        B: 'gtceu:stainless_steel_rotor',
        C: '#gtceu:circuits/ev',
        D: 'gtceu:ev_machine_hull',
        E: 'gtceu:double_titanium_plate'
    })
    event.shaped(
        Item.of('gtceu:bio_reactor', 1), [
        "ABE",
        "CDE",
        "ABE"
    ], {
        A: 'gtceu:ev_robot_arm',
        B: 'gtceu:titanium_rotor',
        C: '#gtceu:circuits/iv',
        D: 'kubejs:bio_reactor_casing',
        E: 'gtceu:uranium_triplatinum_ingot'
    })
    event.shaped(
        Item.of('minecraft:diamond_sword', 1), [
        "A",
        "A",
        "B"
    ], {
        A: 'minecraft:diamond',
        B: 'minecraft:stick'
    })
    
    event.shapeless("kubejs:platinum_metal_catalyst", ["kubejs:platinum_metal_catalyst_shard1", "kubejs:platinum_metal_catalyst_shard2"])
    event.shapeless(Item.of('alexscaves:cave_tablet', 1, '{CaveBiome:"alexscaves:primordial_caves"}').strongNBT(),Item.of('alexscaves:cave_tablet', 1, '{CaveBiome:"alexscaves:magnetic_caves"}').strongNBT())
    event.shapeless(Item.of('alexscaves:cave_tablet', 1, '{CaveBiome:"alexscaves:toxic_caves"}').strongNBT(),Item.of('alexscaves:cave_tablet', 1,'{CaveBiome:"alexscaves:primordial_caves"}').strongNBT())
    event.shapeless(Item.of('alexscaves:cave_tablet', 1, '{CaveBiome:"alexscaves:abyssal_chasm"}').strongNBT(),Item.of('alexscaves:cave_tablet', 1,'{CaveBiome:"alexscaves:toxic_caves"}').strongNBT())
    event.shapeless(Item.of('alexscaves:cave_tablet', 1, '{CaveBiome:"alexscaves:forlorn_hollows"}').strongNBT(),Item.of('alexscaves:cave_tablet', 1, '{CaveBiome:"alexscaves:abyssal_chasm"}').strongNBT())
    event.shapeless(Item.of('alexscaves:cave_tablet', 1, '{CaveBiome:"alexscaves:magnetic_caves"}').strongNBT(),Item.of('alexscaves:cave_tablet', 1,'{CaveBiome:"alexscaves:forlorn_hollows"}').strongNBT())

    
    // function add_data(event,entity,item){
    //     event.shaped(Item.of('gtceu:data_stick',`{mobs:${entity}}`).strongNBT(), [
    //         "BBB",
    //         "BAB",
    //         "BBB"
    //     ], {
    //         A: "gtceu:data_stick",
    //         B: item,
    //     })
    // }
    // add_data(event,'zombie','minecraft:rotten_flesh')
    // add_data(event,'skeleton','minecraft:bone')
    // add_data(event,'enderman','minecraft:ender_pearl')
    // add_data(event,'creeper','minecraft:gunpowder')
    // add_data(event,'blaze','minecraft:blaze_rod')
    // add_data(event,'slime','minecraft:slime_ball')
    // add_data(event,'chicken','minecraft:chicken')
    // add_data(event,'cow','minecraft:beef')
    // add_data(event,'sheep','minecraft:mutton')
    // add_data(event,'pig','minecraft:porkchop')
    // add_data(event,'rabbit','minecraft:rabbit_foot')
})
