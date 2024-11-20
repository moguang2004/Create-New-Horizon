ServerEvents.recipes(event => {
    let ctnh = event.recipes.gtceu
    let material = ['iron', 'gold', 'diamond']
    material.forEach(m => {
        ctnh.assembler(m + '_chest')
            .itemInputs(['4x gtceu:' + m + '_plate', "1x minecraft:chest"])
            .circuit(4)
            .itemOutputs('expandedstorage:' + m + '_chest')
            .EUt(120)
            .duration(50)
    })
})
ServerEvents.recipes(event => {
    let ctnh = event.recipes.gtceu
    let voltage = ['lv', 'mv', 'hv', 'ev', 'iv', 'luv', 'zpm', 'uv']
    voltage.forEach(v => {
        ctnh.assembler(v + 'coverwuxian')
            .itemInputs(['2x gtceu:' + v + '_voltage_coil', '4x gtceu:duranium_frame', '4x gtceu:long_magnetic_samarium_rod', 'gtceu:molybdenum_disilicide_spring', 'gtceu:small_niobium_titanium_spring', '3x gtceu:dense_rhodium_plated_palladium_plate', '#gtceu:circuits/' + v + '', 'gtceu:'+ v + '_sensor'])
            .circuit(20)
            .itemOutputs('gtmthings:' + v + '_wireless_energy_receive_cover')
            .EUt(24347)
            .duration(100)
    })
})
ServerEvents.recipes(event => {
    let ctnh = event.recipes.gtceu
    let highvoltage = ['uhv']
    highvoltage.forEach(h => {
        ctnh.assembler(h + 'coverwuxian')
            .itemInputs(['2x kubejs:' + h + '_voltage_coil', '4x gtceu:duranium_frame', '4x gtceu:long_magnetic_samarium_rod', 'gtceu:molybdenum_disilicide_spring', 'gtceu:small_niobium_titanium_spring', '3x gtceu:dense_rhodium_plated_palladium_plate', '#gtceu:circuits/' + h + ''])
            .circuit(20)
            .itemOutputs('gtmthings:' + h + '_wireless_energy_receive_cover')
            .EUt(24347)
            .duration(100)
    })
})
ServerEvents.recipes(event => {
    let ctnh = event.recipes.gtceu
    let radio = ['lv', 'mv', 'hv', 'ev', 'iv', 'luv', 'zpm', 'uv', 'uhv']
    radio.forEach(r => {
        ctnh.assembler(r + 'coverwuxian_granary')
            .itemInputs(['2x gtmthings:' + r + '_wireless_energy_receive_cover', 'gtceu:' + r + '_energy_input_hatch', 'gtceu:' + r + '_machine_hull'])
            .circuit(21)
            .itemOutputs('gtmthings:' + r + '_2a_wireless_energy_input_hatch')
            .EUt(24347)
            .duration(60)
    })
})
ServerEvents.recipes(event => {
    let ctnh = event.recipes.gtceu
    let fouramps = [
        ["gtceu:manganese_phosphide_quadruple_wire","lv"],
        ["gtceu:magnesium_diboride_quadruple_wire","mv"],
        ["gtceu:mercury_barium_calcium_cuprate_quadruple_wire","hv"],
        ["gtceu:uranium_triplatinum_quadruple_wire","ev"],
        ["gtceu:samarium_iron_arsenic_oxide_quadruple_wire","iv"],
        ["gtceu:indium_tin_barium_titanium_cuprate_quadruple_wire","luv"],
        ["gtceu:uranium_rhodium_dinaquadide_quadruple_wire","zpm"],
        ["gtceu:enriched_naquadah_trinium_europium_duranide_quadruple_wire","uv"],
        ["gtceu:ruthenium_trinium_americium_neutronate_quadruple_wire","uhv"]
    ]
    fouramps.forEach(f => {
        ctnh.assembler(f[0] + 'coverwuxian_granary_four')
            .itemInputs(f[0], 'gtmthings:' + f[1] + '_2a_wireless_energy_input_hatch', '2x #gtceu:circuits/' + f[1] + '')
            .circuit(21)
            .itemOutputs('gtmthings:' + f[1] + '_4a_wireless_energy_input_hatch')
            .EUt(24347)
            .duration(60)
        ctnh.assembler(f[0] + 'coverwuxian_granary_four_four')
            .itemInputs("4x " + f[0], 'gtmthings:' + f[1] + '_4a_wireless_energy_input_hatch', '4x #gtceu:circuits/' + f[1] + '')
            .circuit(22)
            .itemOutputs('gtmthings:' + f[1] + '_16a_wireless_energy_input_hatch')
            .EUt(24347)
            .duration(60)
            ctnh.assembler(f[0] + 'coverwuxian_granary_four_output')
            .itemInputs(f[0], 'gtmthings:' + f[1] + '_2a_wireless_energy_output_hatch', '2x #gtceu:circuits/' + f[1] + '')
            .circuit(21)
            .itemOutputs('gtmthings:' + f[1] + '_4a_wireless_energy_output_hatch')
            .EUt(24347)
            .duration(60)
        ctnh.assembler(f[0] + 'coverwuxian_granary_four_four_output')
            .itemInputs("4x " + f[0], 'gtmthings:' + f[1] + '_4a_wireless_energy_output_hatch', '4x #gtceu:circuits/' + f[1] + '')
            .circuit(22)
            .itemOutputs('gtmthings:' + f[1] + '_16a_wireless_energy_output_hatch')
            .EUt(24347)
            .duration(60)
    })
})
