ServerEvents.recipes(event => {
    remove_recipes_type(event, [
        "twilightforest:uncrafting_table",
        "createdieselgenerators:hammering",
    ])
    remove_recipes_id(event, [
        "create:pressing/iron_ingot",
        "create:crafting/materials/andesite_alloy_from_zinc",
        "create:crafting/materials/andesite_alloy",
        "farmersdelight:paper_from_tree_bark",
        "create:pressing/sugar_cane",
        "create:crafting/kinetics/water_wheel",
        "create:crafting/kinetics/large_water_wheel",
        "create:crafting/kinetics/mechanical_drill",
        
        "create:crafting/kinetics/mechanical_mixer",
        "create:crafting/materials/rose_quartz",
        "create:crafting/materials/electron_tube",
        "create:crafting/materials/copper_ingot",
        "create:crafting/kinetics/deployer",
        "create:crafting/kinetics/contraption_controls",
        "create:crafting/appliances/slime_ball",
        "create:mechanical_crafting/crushing_wheel",
        "create_new_age:shaped/redstone_magnet",
        "create_new_age:shapeless/basic_energiser",
        "minecraft:lightning_rod",
        "create_new_age:pressing/overcharged_gold",
        "create_new_age:pressing/overcharged_iron",
        
        "tfmg:sequenced_assembly/steel_mechanism",
        "tfmg:sequenced_assembly/turbine_engine",
        "tfmg:distillation/heavy_oil",
        "create:milling/charcoal",
        "botania:mana_fluxfield",
        
        "alexscaves:azure_neodymium_ingot",
        "alexscaves:scarlet_neodymium_ingot",
        "create:crafting/kinetics/mechanical_bearing",
        "biomesoplenty:tnt_from_bop_sand",
        "mynethersdelight:tnt_alt",
        "tetranichematerials:red_gold_powder",

        "bloodmagic:smelting/ingot_copper",
        "bloodmagic:smelting/blasting_ingot_copper",
        "bloodmagic:smelting/ingot_iron",
        "bloodmagic:smelting/ingot_gold",
        "bloodmagic:smelting/blasting_ingot_gold",
        "create_new_age:shaped/layered_magnet",
        "enderio:stick",
        "enderio:wood_gear",
        "enderio:wood_gear_corner",
        "enderio:stirling_generator",
        "minecraft:iron_trapdoor",
        "create:mixing/brass_ingot",
        
        "createdieselgenerators:basin_fermenting/fermented_spider_eye",
        "createoreexcavation:vein_finder",
        "functionalstorage:oak_drawer_alternate_x1",
        "functionalstorage:oak_drawer_alternate_x2",
        "functionalstorage:oak_drawer_alternate_x4",
        "javd:portal_block",
        "create_new_age:shaped/netherite_magnet",
        "create_new_age:shaped/fluxuated_magnetite",
        
        "enderio:void_chassis",
        "hostilenetworks:sim_chamber",
        "hostilenetworks:loot_fabricator",
        "hostilenetworks:deep_learner",
        "hostilenetworks:framework",
        "ae2things:cells/disk_drive_1k",
        "vintageimprovements:pressing/cobalt_ingot",
        "vintageimprovements:pressing/rhodium_ingot",
        "vintageimprovements:pressing/uranium_ingot",
        "vintageimprovements:pressing/rose_gold_ingot",
        "vintageimprovements:pressing/vanadium_ingot",
        "vintageimprovements:pressing/invar_ingot",
        "vintageimprovements:pressing/lead_ingot",
        "vintageimprovements:pressing/tin_ingot",
        "vintageimprovements:pressing/andesite_alloy",
        "vintageimprovements:pressing/bronze_ingot",
        "vintageimprovements:pressing/silver_ingot",
        "vintageimprovements:pressing/platinum_ingot",
        "vintageimprovements:pressing/palladium_ingot",
        "vintageimprovements:pressing/zinc_ingot",
        "vintageimprovements:pressing/nickel_ingot",
        "vintageimprovements:pressing/osmium_ingot",
        "vintageimprovements:sequenced_assembly/recipe_card",
        "aether:aether_saddle",
        
        "vintageimprovements:pressurizing/sulfuric_acid",
        "vintageimprovements:pressurizing/sulfur_trioxide_alt",
        "vintageimprovements:pressurizing/sulfur_trioxide",
        "vintageimprovements:pressurizing/sulfur_dioxide",
        "vintageimprovements:craft/sulfur_items_to_block",
        "expatternprovider:circuit_cutter",
        "createdieselgenerators:compression_molding/bucket",
        "sophisticatedstorage:backpack_stack_upgrade_omega_tier_from_storage_stack_upgrade_omega_tier",
        "sophisticatedstorage:stack_upgrade_omega_tier",
        "sophisticatedstorage:void_upgrade",
        "extrabotany:terra_plate/the_universe",
        
        "tconstruct:smeltery/melting/metal/iron/ingot_1",
        "tconstruct:smeltery/melting/metal/gold/powered_rail",
        "tconstruct:smeltery/melting/metal/iron/nugget_3",
        "tconstruct:smeltery/seared/melter",
        "tconstruct:smeltery/casting/seared/smeltery_controller",
        "tconstruct:smeltery/melting/glass/sand",
        "tconstruct:smeltery/melting/glass/sand_cast",
        "tconstruct:smeltery/scorched/alloyer",
        "tconstruct:tables/cast_chest",
        "sophisticatedstorage:controller",
        "sophisticatedstorage:void_upgrade",
        "vintageimprovements:grinder_polishing/rose_quartz",
        "vintageimprovements:craft/belt_grinder",
        "vintageimprovements:craft/grinder_belt",
        "create:pressing/juperium_ingot",
        "create:pressing/saturlyte_ingot",
        "create:pressing/radium_ingot",
        "create:pressing/electrolyte_ingot",
        "create:pressing/plutonium_ingot",
        "create:pressing/neptunium_ingot",
        "create:pressing/uranium_ingot",
        "create:pressing/desh_ingot",
        "create:pressing/ostrum_ingot",
        "create:pressing/steel_ingot",
        "create:pressing/calorite_ingot",
        'deep_aether:pumpkin_pie',
        'aether:moa_egg_pumpkin_pie',
        //压肉块
        'biofactory:compacting/flesh_block_from_flesh_bits',
        //安山合金块
        'create:crafting/materials/andesite_alloy_from_block',
        'create:crafting/materials/andesite_alloy_block',
        //可编程电路卡
        'pccard:item/card_programmed_circuit',
        '/ad_astra:(.*)/',

        //AECS
        /ae2cs:(.*)/,

        'vintageimprovements:craft/tin_rod'
    ])



    remove_recipes_output(event, [
        "create:cart_assembler",
        "create:portable_storage_interface",
        "create:rotation_speed_controller",
        "create:belt_connector",
        "angelblockrenewed:angel_block",
        "create:goggles",
        "tetranichematerials:lockwood_ingot",
        "create:shaft",
        "create:encased_fan",
        "create:windmill_bearing",
        "create:depot",
        "create:mechanical_press",
        "create:large_cogwheel",
        "create_new_age:carbon_brushes",
        "create_new_age:generator_coil",
        "tfmg:screw",
        "create:spout",
        "tfmg:turbine_blade",
        "thermal:constantan_ingot",
        "create:cogwheel",
        "create:millstone",
        "enderio:soularium_ingot",
        "enderio:energetic_alloy_ingot",
        "ad_astra:desh_fluid_pipe",
        "ad_astra:ostrum_fluid_pipe",
        "ad_astra:fluid_pipe_duct",
        "tconstruct:seared_brick",
        "tconstruct:grout",
        "tconstruct:puny_smelting",
        "tconstruct:seared_fuel_tank",
        "tconstruct:seared_fuel_gauge",
        "tconstruct:seared_ingot_tank",
        "tconstruct:seared_ingot_gauge",
        'botania:lens_normal',
        'botania:lens_magnet',
        /vintageimprovements:(.*)_sheet/,
        /vintageimprovements:(.*)_rod/,
        /vintageimprovements:(.*)_wire/,
        /mae2:(.*)x_crafting_accelerator/,
        //木屑
        'createdieselgenerators:wood_chip',
        //乐事刀
        /(.*)delight:(.*)_knife/,
    ])
    remove_recipes_input(event, [
        "thermal:constantan_ingot"
    ])

    event.remove({ output: /botania:apothecary_(.*)/ })
    
    event.remove({ type: "create:mixing", output: "create:andesite_alloy" })
    event.remove({ mod: "ad_extendra", type: "minecraft:smelting", output: "#forge:ingots" })
    event.remove({ mod: "ad_extendra", type: "minecraft:smelting", output: "#forge:gems" })
    event.remove({ mod: "createmetallurgy", not: { type: "createmetallurgy:belt_grinder" } })
    event.remove({ mod: "aether", type: "minecraft:crafting_shaped", id: /aether:skyroot_(.*)/ })
    
    event.remove({ id: "ars_nouveau:novice_spell_book" })
    
    event.remove({ id: "vintageimprovements:curving/iron_sheet" })
    
    event.remove({ id: "createdieselgenerators:distillation/acid" })
    
    event.remove({ id: "vintageimprovements:craft/steel_rod" })
    event.remove({ id: "vintageimprovements:craft/nickel_rod" })
    event.remove({ id: "vintageimprovements:craft/sulfur_item_to_nuggets" })
    event.remove({ id: "vintageimprovements:craft/sulfur_nuggets_to_item" })
    event.remove({ id: "vintageimprovements:craft/sulfur_block_to_items" })
    
    event.remove({ id: "create:milling/calcite" })
    event.remove({ id: "createdieselgenerators:distillation/superheated_crude_oil"})
    event.remove({ id: "createdieselgenerators:bulk_fermenting/fermentable"})
    event.remove({ id: "sophisticatedbackpacks:stack_upgrade_omega_tier" })
    event.remove({ mod: "botania", type: "botania:petal_apothecary" })
    event.remove({ mod: "botania", type: "botania:runic_altar" })
    event.remove({ mod: "botania", type: "botania:terra_plate" })
    event.remove({ mod: "extrabotany", type: "botania:petal_apothecary" })
    event.remove({ mod: "extrabotany", type: "botania:terra_plate" })
    event.remove({ mod: "bloodmagic", type: "bloodmagic:altar" })
    event.remove({ mod: "bloodmagic", type: "bloodmagic:soulforge" })
    event.remove({ mod: "mythicbotany", type: "botania:runic_altar" })
})