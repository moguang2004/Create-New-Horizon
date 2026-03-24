ServerEvents.recipes(event => {
    event.remove({ id: "gtceu:assembler/plate_radiation_2" })
    event.remove({ id: "gtceu:assembler/plate_radiation" })
    event.remove({ id: "gtceu:electric_blast_furnace/iro2" })
    event.remove({ id: "gtceu:shaped/casing_assembly_control" })
    event.remove({ id: "gtceu:shaped/casing_assembly_line" })
    event.remove({ id: "gtceu:electrolyzer/decomposition_electrolyzing_ammonium_chloride" })
    event.remove({ id: "gtceu:assembler/mar_casing" })
        //移除超净配方
    event.remove({ id: "gtceu:arc_furnace/arc_cleaning_maintenance_hatch" })
    event.remove({ id: "gtceu:smashing_factory_recipes/smashing_factory_recipes/macerate_cleaning_maintenance_hatch" })
        //提高了中子素配方的产率
    event.remove({ id: "gtceu:fusion_reactor/americium_and_naquadria_to_neutronium_plasma" })
        // 压缩黏土配方
    event.remove({'output': 'gtceu:compressed_clay'});
        // 焦炉砖块配方
    event.remove({'output': 'gtceu:coke_oven_bricks'})
        // 耐火粘土粉配方
    event.remove({'output': 'gtceu:fireclay_dust', 'input': 'gtceu:clay_dust'});
        // 耐火粘土砖块配方
    event.remove({ output: 'gtceu:firebricks' })
    event.remove({ output: /gtceu:(.*)_gem/, type: "minecraft:crafting_shapeless", input: /gtceu:flawless_(.*)_gem/ })
        event.remove({ output: "#forge:plates", type: "minecraft:crafting_shaped" })
    event.remove({ output: "#forge:chipped_gems", type: "minecraft:crafting_shapeless" })
    event.remove({ output: "#forge:flawed_gems", type: "minecraft:crafting_shapeless" })
    event.remove({ output: "#forge:flawless_gems", type: "minecraft:crafting_shapeless" })
    event.remove({ output: "#forge:exquisite_gems", type: "minecraft:crafting_shapeless" })
    event.remove({ id: "gtceu:large_chemical_reactor/raw_palladium_separation" })
    event.remove({ id: "gtceu:electrolyzer/decomposition_electrolyzing_niobium_oxide" })
    event.remove({ id: "gtceu:electrolyzer/decomposition_electrolyzing_tantalite_oxide" })
    event.remove({ id: "gtceu:shaped/casing_hsse_sturdy" })
    event.remove({ id: "gtceu:assembler/casing_hsse_sturdy" })
    event.remove({ id: "gtceu:shaped/diamond_sword" })
    event.remove({ id: "gtceu:electric_blast_furnace/titanium_from_tetrachloride" })
    event.remove({ id: "gtceu:chemical_reactor/titaniumtetrachloride" })
    event.remove({ id: "gtceu:electrolyzer/tungstic_acid_electrolysis" })
    event.remove({ id: "gtceu:neutron_activator/naquadah" })
    event.remove({ id: "gtceu:large_chemical_reactor/iridium_chloride" })
    event.remove({ id: "gtceu:large_chemical_reactor/iridium_dioxide_dissolving" })
    event.remove({ id: "gtceu:electric_blast_furnace/iridium_metal_residue_processh" })
    event.remove({ id: "gtceu:chemical_reactor/iridium_chloride" })
    event.remove({ id: "gtceu:large_chemical_reactor/iridium_chloride_separation" })
    event.remove({ id: "gtceu:large_chemical_reactor/raw_platinum_separation" })
    event.remove({ id: "gtceu:chemical_reactor/raw_platinum_separation" })
    event.remove({ id: "gtceu:electric_blast_furnace/refined_platinum_salt_dust_ebf" })
    event.remove({ id: "gtceu:electric_blast_furnace/iridium_metal_residue_process" })
    event.remove({ id: "gtceu:smelting/smelt_dust_bedrock_dust_to_ingot" })
    event.remove({ id: "gtceu:arc_furnace/arc_bedrock_dust_dust" })
    event.remove({ id: "gtceu:chemical_reactor/indium_concentrate_separation" })
    event.remove({ id: "gtceu:chemical_reactor/indium_concentrate_separation_4x" })
    event.remove({ id: "gtceu:large_chemical_reactor/indium_concentrate_separation_4x" })
    event.remove({ id: "gtceu:large_chemical_reactor/indium_concentrate_separation_4x" })
    event.remove({ id: "gtceu:electrolyzer/decomposition_electrolyzing_aluminium_sulfite" })
    event.remove({ id: "gtceu:large_chemical_reactor/phosphoric_acid_from_pentoxide" })
    event.remove({ id: "gtceu:shaped/large_bronze_boiler" })
    event.remove({ id: "gtceu:chemical_reactor/soda_ash_from_carbon_dioxide" })
    event.remove({ id: "gtceu:electric_blast_furnace/blast_adamantite" })
    event.remove({ id: "gtceu:fluid_solidifier/solidify_adamantite_to_plate" })
    event.remove({ id: "gtceu:fluid_solidifier/solidify_adamantite_gear" })
    event.remove({ id: "gtceu:fluid_solidifier/solidify_adamantite_block" })
    event.remove({ id: "gtceu:fluid_solidifier/solidify_adamantite_to_ingot" })
    event.remove({ id: "gtceu:fluid_solidifier/solidify_adamantite_small_gear" })
    event.remove({ id: "gtceu:fluid_solidifier/solidify_adamantite_to_nugget" })
    event.remove({ id: "gtceu:shaped/plate_double_graphite_ir_plate" })
    event.remove({ id: "gtceu:chemical_reactor/iridium_dioxide_dissolving" })
    event.remove({ id: "gtceu:chemical_reactor/iridium_chloride_separation" })
    event.remove({ id: "gtceu:dehydrator/xenoauric_fluoroantimonic_acid" })
    event.remove({ id: "gtceu:assembly_line/energy_hatch_uhv" })
    event.remove({ id: "gtceu:rocket_engine/rp_1_mixed_fuel" })
    event.remove({ id: "gtceu:rocket_engine/methylhydrazine_nitrate_rocket_fuel" })
    event.remove({ id: "gtceu:rocket_engine/udmh_rocket_fuel" })
    event.remove({ id: "gtceu:rocket_engine/dense_hydrazine_mixed_fuel" })
    event.remove({ id: "gtceu:gas_turbine/coal_gas" })
    event.remove({ id: "gtceu:gas_turbine/wood_gas" })
    event.remove({ id: "gtceu:combustion_generator/naphtha" })
    event.remove({ id: "gtceu:combustion_generator/diesel" })
    event.remove({ id: "gtceu:combustion_generator/light_fuel" })
    event.remove({ id: "gtceu:shaped/filter_casing_sterile" })
    event.remove({ id: "gtceu:shaped/maintenance_hatch_cleaning" })
    event.remove({ id: "gtceu:chemical_reactor/calcite_from_quicklime" })
    event.remove({ id: "gtceu:extractor/extract_osmium_tetroxide_dust" })
    event.remove({ id: "gtceu:combustion_generator/light_fuel" })
    event.remove({ id: "gtceu:combustion_generator/diesel" })
    event.remove({ id: "gtceu:combustion_generator/biodiesel" })
    event.remove({ id: "gtceu:combustion_generator/cetane_diesel" })
    event.remove({ id: "gtceu:gas_turbine/benzene" })
    event.remove({ id: "gtceu:gas_turbine/nitrobenzene" })
    event.remove({ id: "gtceu:electric_blast_furnace/iro2" })
    event.remove({ id: "gtceu:large_chemical_reactor/hydrogen_peroxide" })
    event.remove({ output: 'gtceu:firebricks' })
    event.remove({ output: 'gtceu:fermented_biomass' })
    event.remove({ id: 'gtceu:pyrolyse_oven/bio_chaff_to_fermented_biomass' })
    event.remove({ id: 'gtceu:pyrolyse_oven/bio_chaff_to_biomass' })
    event.remove({ id: 'gtceu:fermenter/fermented_biomass' })
    event.remove({ id: "gtceu:chemical_reactor/iodine_solution" })
    event.remove({ id: "gtceu:large_chemical_reactor/iodine_solution" })
    event.remove({ id: "gtceu:assembler/cover_ender_fluid_link" })
    event.remove({ id: 'gtceu:assembler/space_helmet' })
    event.remove({ id: 'gtceu:shaped/space_suit' })
    event.remove({ id: 'gtceu:shaped/space_pants' })
    event.remove({ id: 'gtceu:shaped/space_boots' })
    event.remove({ id: 'gtceu:electric_blast_furnace/rutile_from_ilmenite' })
//原铝产线配方移除
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_green_sapphire' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_sapphire' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_ruby' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_pyrope' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_granite_red' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_potassium_feldspar' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_pollucite' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_kyanite' })
    event.remove({ id: 'gtceu:electrolyzer/bauxite_electrolysis' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_topaz' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_spodumene' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_spessartine' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_sodalite' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_mica' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_lepidolite' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_lazurite' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_grossular' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_glauconite_sand' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_emerald' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_blue_topaz' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_biotite' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_alunite' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_almandine' })
//铬铁矿产线配方移除
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_chromite' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_ruby' })
//铂
    event.remove({ id: 'gtceu:large_chemical_reactor/platinum_group_sludge_tiny_dust1' })
    event.remove({ id: 'gtceu:large_chemical_reactor/pgs_from_pentlandite' })
    event.remove({ id: 'gtceu:large_chemical_reactor/platinum_group_sludge_dust1_lv' })
    event.remove({ id: 'gtceu:large_chemical_reactor/pgs_from_chalcopyrite' })
    event.remove({ id: 'gtceu:large_chemical_reactor/pgs_from_chalcocite' })
    event.remove({ id: 'gtceu:large_chemical_reactor/pgs_from_tetrahedrite' })
    event.remove({ id: 'gtceu:large_chemical_reactor/pgs_from_bornite' })
    event.remove({ id: 'gtceu:chemical_reactor/platinum_group_sludge_tiny_dust1' })
    event.remove({ id: 'gtceu:chemical_reactor/pgs_from_pentlandite' })
    event.remove({ id: 'gtceu:chemical_reactor/platinum_group_sludge_dust1_lv' })
    event.remove({ id: 'gtceu:chemical_reactor/pgs_from_chalcopyrite' })
    event.remove({ id: 'gtceu:chemical_reactor/pgs_from_chalcocite' })
    event.remove({ id: 'gtceu:chemical_reactor/pgs_from_tetrahedrite' })
    event.remove({ id: 'gtceu:chemical_reactor/pgs_from_bornite' })
//硅
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_andradite' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_ferrosilite' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_wollastonite' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_obsidian' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_talc' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_soapstone' })
    event.remove({ id: 'gtceu:electrolyzer/bentonite_electrolysis' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_asbestos' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_uvarovite' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_fullers_earth' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_silicon_dioxide' })
    event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_silicon_fluoride' })

    event.remove({ id: 'gtceu:vacuum_freezer/liquid_oxygen' })
    event.remove({ id: 'gtceu:assembler/cover_ender_fluid_link' })

    remove_recipes_id(event, [
        "gtceu:shapeless/dust_brass",
        "gtceu:shapeless/dust_bronze",
        "gtceu:shapeless/potin_dust",
        "gtceu:shaped/vacuum_tube",
        "gtceu:shaped/steam_turbine_lv",
        "gtceu:shapeless/iron_magnetic_stick",
        "gtceu:shaped/steam_turbine_mv",
        "gtceu:shaped/steam_turbine_hv",
        "gtceu:combustion_generator/raw_oil",
        "gtceu:assembler/oak_stairs",
        "gtceu:assembler/spruce_stairs",
        "gtceu:assembler/birch_stairs",
        "gtceu:assembler/jungle_stairs",
        "gtceu:assembler/acacia_stairs",
        "gtceu:assembler/dark_oak_stairs",
        "gtceu:assembler/mangrove_stairs",
        "gtceu:assembler/cherry_stairs",
        "gtceu:assembler/bamboo_stairs",
        "gtceu:assembler/crimson_stairs",
        "gtceu:assembler/warped_stairs",
        "gtceu:extractor/extract_ammonium_chloride_dust",
        "gtceu:extruder/nan_certificate",
        "gtceu:electrolyzer/decomposition_electrolyzing_clay",
        "gtceu:electrolyzer/decomposition_electrolyzing_wolframite",
        "gtceu:electrolyzer/decomposition_electrolyzing_tarkianite",
        "gtceu:electrolyzer/decomposition_electrolyzing_rheniite",
        "gtceu:electrolyzer/decomposition_electrolyzing_palladium_sulfide",
        "gtceu:electrolyzer/decomposition_electrolyzing_ruthenium_amalgam",
        "gtceu:electrolyzer/decomposition_electrolyzing_osmium_iron_spinel",
        "gtceu:smashing_factory_recipes/smashing_factory_recipes/macerate_rail",
        "gtceu:smashing_factory_recipes/smashing_factory_recipes/macerate_powered_rail",
        "gtceu:smashing_factory_recipes/smashing_factory_recipes/macerate_activator_rail",
        "gtceu:smashing_factory_recipes/smashing_factory_recipes/macerate_detector_rail",
        "gtceu:electric_blast_furnace/blast_high_temp_wrought_precursor",
        "gtceu:electric_blast_furnace/blast_high_temp_wrought_precursor_gas",
        "gtceu:vacuum_freezer/cool_hot_high_temp_wrought_precursor_ingot",
        "gtceu:shaped/bronze_primitive_blast_furnace",
        "gtceu:smelting/wrought_iron_nugget",
        //工作台制作箔和弹簧
        /gtceu:shaped\/foil_(.*)/,
        /gtceu:shaped\/spring_(.*)/,
        //末影之眼块合成末影之眼
        'gtceu:shapeless/block_decompress_ender_eye',
        'gtceu:forge_hammer/hammer_ender_eye_block_to_gem',
        //非中央厨房南瓜派配方
        'gtceu:shapeless/pumpkin_pie_from_dough',
        //湿件研究站
        'gtceu:research_station/1x_gtceu_wetware_processor_assembly',
        'gtceu:research_station/1x_gtceu_wetware_processor_computer',
        //装配线外壳和控制外壳
        'gtceu:assembler/assembly_line_casing',
        'gtceu:assembler/assembly_control_casing',
        //烧硅岩粒
        'gtceu:electric_blast_furnace/naq_ingot',
    ])

    remove_recipes_output(event, [
        /gtceu:high_temp_wrought_precursor_(.*)/,
        'gtceu:small_high_temp_wrought_precursor_dust',
        'gtceu:tiny_high_temp_wrought_precursor_dust',
    ])
})