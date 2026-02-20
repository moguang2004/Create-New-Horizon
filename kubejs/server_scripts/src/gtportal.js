ServerEvents.recipes(event => {
    event.shaped(
        Item.of('gtportal:simple_nether_portal_frame', 4), [
            "ABA",
            "BCB",
            "ABA"
        ], {
            A: 'gtceu:bronze_plate',
            B: 'minecraft:netherrack',
            C: 'gtceu:rubber_plate'
        })
    event.shaped(
        Item.of('gtportal:simple_nether_portal_controller', 1), [
            "ADA",
            "BCB",
            "ABA"
        ], {
            A: 'gtceu:small_steel_gear',
            B: 'gtceu:steel_rod',
            C: 'gtportal:simple_nether_portal_frame',
            D: 'minecraft:flint_and_steel'
        })
    event.shaped(
        Item.of('gtportal:simple_overworld_portal_frame', 4), [
            "ABA",
            "BCB",
            "ABA"
        ], {
            A: 'gtceu:iron_plate',
            B: 'minecraft:grass_block',
            C: 'gtceu:rubber_plate'
        })
    event.shaped(
        Item.of('gtportal:simple_overworld_portal_controller', 1), [
            "ADA",
            "BCB",
            "ABA"
        ], {
            A: 'gtceu:small_steel_gear',
            B: 'gtceu:steel_rod',
            C: 'gtportal:simple_overworld_portal_frame',
            D: 'minecraft:flint_and_steel'
        })
    event.shaped(
        Item.of('gtportal:portal_frame', 4), [
            "ABA",
            "BCB",
            "ABA"
        ], {
            A: 'gtceu:steel_plate',
            B: 'gtceu:copper_single_wire',
            C: 'gtceu:rubber_plate'
        })
    event.shaped(
        Item.of('gtportal:multidimensional_portal_controller', 1), [
            "ADA",
            "BCB",
            "ABA"
        ], {
            A: 'gtceu:small_steel_gear',
            B: 'gtceu:steel_rod',
            C: 'gtportal:portal_frame',
            D: '#gtceu:circuits/lv'
        })
    event.recipes.gtceu.assembler("dimension_data_stick")
        .itemOutputs('gtportal:dimension_data_stick')
        .itemInputs(['minecraft:paper', '2x gtceu:steel_plate', '2x gtceu:rubber_foil', '2x gtceu:fine_copper_wire'])
        .duration(200)
        .EUt(30)
    event.shaped(
        Item.of('gtportal:dimension_data_stick', '{dimension:"twilightforest:twilight_forest"}'), [
            "ABA",
            "ACA",
            "AAA"
        ], {
            A: '#minecraft:flowers',
            B: 'gtceu:exquisite_diamond_gem',
            C: 'gtportal:dimension_data_stick'
        })
    event.shaped(
        Item.of('gtportal:dimension_data_stick', '{dimension:"minecraft:the_end"}'), [
            "AAA",
            "ABA",
            "AAA"
        ], {
            A: 'minecraft:ender_eye',
            B: 'gtportal:dimension_data_stick'
        })
    event.shaped(
        Item.of('gtportal:dimension_data_stick', '{dimension:"aether:the_aether"}'), [
            "ACA",
            "CBC",
            "ACA"
        ], {
            A: 'immersive_aircraft:enhanced_propeller',
            B: 'gtportal:dimension_data_stick',
            C: 'botania:ender_air_bottle'
        })
    event.shaped(
        Item.of('gtportal:dimension_data_stick', '{dimension:"minecraft:overworld"}'), [
            "AAA",
            "ABA",
            "AAA"
        ], {
            A: 'minecraft:grass_block',
            B: 'gtportal:dimension_data_stick'
        })
    event.shaped(
        Item.of('gtportal:dimension_data_stick', '{dimension:"minecraft:the_nether"}'), [
            "AAA",
            "ABA",
            "AAA"
        ], {
            A: 'minecraft:netherrack',
            B: 'gtportal:dimension_data_stick'
        })   
    event.recipes.gtceu.assembler("dimension_data_recorder")
        .itemOutputs('gtportal:dimension_data_recorder')
        .itemInputs(['gtceu:terminal', '4x minecraft:ender_pearl'])
        .duration(200)
        .EUt(120)
})