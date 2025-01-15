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
            .itemInputs(['2x gtceu:' + v + '_voltage_coil', '4x gtceu:duranium_frame', '4x gtceu:long_magnetic_samarium_rod', 'gtceu:molybdenum_disilicide_spring', 'gtceu:small_niobium_titanium_spring', '3x gtceu:dense_rhodium_plated_palladium_plate', '#gtceu:circuits/' + v + '', 'gtceu:' + v + '_sensor'])
            .circuit(20)
            .itemOutputs('gtmthings:' + v + '_wireless_energy_receive_cover')
            .EUt(388000)
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
            .EUt(388000)
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
            .EUt(388000)
            .duration(60)
    })
})
ServerEvents.recipes(event => {
    let ctnh = event.recipes.gtceu
    let fouramps = [
        ["gtceu:manganese_phosphide_quadruple_wire", "lv"],
        ["gtceu:magnesium_diboride_quadruple_wire", "mv"],
        ["gtceu:mercury_barium_calcium_cuprate_quadruple_wire", "hv"],
        ["gtceu:uranium_triplatinum_quadruple_wire", "ev"],
        ["gtceu:samarium_iron_arsenic_oxide_quadruple_wire", "iv"],
        ["gtceu:indium_tin_barium_titanium_cuprate_quadruple_wire", "luv"],
        ["gtceu:uranium_rhodium_dinaquadide_quadruple_wire", "zpm"],
        ["gtceu:enriched_naquadah_trinium_europium_duranide_quadruple_wire", "uv"],
        ["gtceu:ruthenium_trinium_americium_neutronate_quadruple_wire", "uhv"]
    ]
    fouramps.forEach(f => {
        ctnh.assembler(f[0] + 'coverwuxian_granary_four')
            .itemInputs(f[0], 'gtmthings:' + f[1] + '_2a_wireless_energy_input_hatch', '2x #gtceu:circuits/' + f[1] + '')
            .circuit(21)
            .itemOutputs('gtmthings:' + f[1] + '_4a_wireless_energy_input_hatch')
            .EUt(388000)
            .duration(60)
        ctnh.assembler(f[0] + 'coverwuxian_granary_four_four')
            .itemInputs("4x " + f[0], 'gtmthings:' + f[1] + '_4a_wireless_energy_input_hatch', '4x #gtceu:circuits/' + f[1] + '')
            .circuit(22)
            .itemOutputs('gtmthings:' + f[1] + '_16a_wireless_energy_input_hatch')
            .EUt(388000)
            .duration(60)
        ctnh.assembler(f[0] + 'coverwuxian_granary_four_output')
            .itemInputs(f[0], 'gtmthings:' + f[1] + '_2a_wireless_energy_output_hatch', '2x #gtceu:circuits/' + f[1] + '')
            .circuit(21)
            .itemOutputs('gtmthings:' + f[1] + '_4a_wireless_energy_output_hatch')
            .EUt(388000)
            .duration(60)
        ctnh.assembler(f[0] + 'coverwuxian_granary_four_four_output')
            .itemInputs("4x " + f[0], 'gtmthings:' + f[1] + '_4a_wireless_energy_output_hatch', '4x #gtceu:circuits/' + f[1] + '')
            .circuit(22)
            .itemOutputs('gtmthings:' + f[1] + '_16a_wireless_energy_output_hatch')
            .EUt(388000)
            .duration(60)
    })
})
ServerEvents.recipes(event => {
    let ctnh = event.recipes.gtceu
    let motor = [
        ['uhv', 'samarium_dysprosium_terbium_permanent_magnet_alloy_magnetic', 'adamantite', 'ruthenium_trinium_americium_neutronate', 'europium', 'gtceu:soldering_alloy', 'gtceu:lubricant', 'gtceu:neutronium', '32', '388000', 'uv', '200000']
    ]
    motor.forEach(m => {
        ctnh.assembly_line(m[0] + 'motor')
            .itemInputs('gtceu:long_' + m[1] + '_rod', '4x gtceu:long_' + m[2] + '_rod', '4x gtceu:' + m[2] + '_ring', '8x gtceu:' + m[2] + '_round', '64x gtceu:fine_' + m[3] + '_wire', '64x gtceu:fine_' + m[3] + '_wire', '2x gtceu:' + m[4] + '_single_cable')
            .inputFluids(m[5] + ' 576', m[6] + ' 2000', m[7] + ' 576')
            .itemOutputs('gtceu:' + m[0] + '_electric_motor')
            .EUt(m[9])
            .duration(600)
            .stationResearch(b => b.researchStack(Item.of('gtceu:' + m[10] + '_electric_motor'))
                .dataStack(Item.of("gtceu:data_orb"))
                .EUt(m[11])
                .CWUt(m[8]))
    })
    let pump = [
        ['uhv', 'duranium', 'adamantite', 'silicone', 'europium', 'gtceu:soldering_alloy', 'gtceu:lubricant', 'gtceu:neutronium', '32', '388000', 'uv', '200000', 'darmstadtium']
    ]
    pump.forEach(p => {
        ctnh.assembly_line(p[0] + 'pump')
            .itemInputs('gtceu:' + p[0] + '_electric_motor', 'gtceu:' + p[1] + '_large_fluid_pipe', '2x gtceu:' + p[2] + '_plate', '8x gtceu:' + p[2] + '_screw', '16x gtceu:' + p[3] + '_rubber_ring', 'gtceu:' + p[12] + '_rotor', '2x gtceu:' + p[4] + '_single_cable')
            .inputFluids(p[5] + ' 576', p[6] + ' 2000', p[7] + ' 576')
            .itemOutputs('gtceu:' + p[0] + '_electric_pump')
            .EUt(p[9])
            .duration(600)
            .stationResearch(b => b.researchStack(Item.of('gtceu:' + p[10] + '_electric_pump'))
                .dataStack(Item.of("gtceu:data_orb"))
                .EUt(p[11])
                .CWUt(p[8]))
    })
    let piston = [
        ['uhv', 'adamantite', 'darmstadtium', 'europium', 'gtceu:soldering_alloy', 'gtceu:lubricant', 'gtceu:neutronium', '32', '388000', 'uv', '200000']
    ]
    piston.forEach(p => {
        ctnh.assembly_line(p[0] + 'piston')
            .itemInputs('gtceu:' + p[0] + '_electric_motor', '4x gtceu:' + p[1] + '_plate', '4x gtceu:' + p[1] + '_ring', '16x gtceu:' + p[1] + '_round', '4x gtceu:' + p[1] + '_rod', 'gtceu:' + p[2] + '_gear', '2x gtceu:small_' + p[2] + '_gear', '2x gtceu:' + p[3] + '_single_cable')
            .inputFluids(p[4] + ' 576', p[5] + ' 2000', p[6] + ' 576')
            .itemOutputs('gtceu:' + p[0] + '_electric_piston')
            .EUt(p[8])
            .duration(600)
            .stationResearch(b => b.researchStack(Item.of('gtceu:' + p[9] + '_electric_piston'))
                .dataStack(Item.of("gtceu:data_orb"))
                .EUt(p[10])
                .CWUt(p[7]))
    })
    let conveyorbelt = [
        ['uhv', 'adamantite', 'europium', 'gtceu:soldering_alloy', 'gtceu:lubricant', 'gtceu:neutronium', '32', '388000', 'uv', '200000', 'gtceu:styrene_butadiene_rubber 3456']
    ]
    conveyorbelt.forEach(c => {
        ctnh.assembly_line(c[0] + 'conveyorbelt')
            .itemInputs('2x gtceu:' + c[0] + '_electric_motor', '2x gtceu:' + c[1] + '_plate', '4x gtceu:' + c[1] + '_ring', '16x gtceu:' + c[1] + '_round', '4x gtceu:' + c[1] + '_screw', '2x gtceu:' + c[2] + '_single_cable')
            .inputFluids(c[3] + ' 576', c[4] + ' 2000', c[10], c[5] + ' 576')
            .itemOutputs('gtceu:' + c[0] + '_conveyor_module')
            .EUt(c[7])
            .duration(600)
            .stationResearch(b => b.researchStack(Item.of('gtceu:' + c[8] + '_conveyor_module'))
                .dataStack(Item.of("gtceu:data_orb"))
                .EUt(c[9])
                .CWUt(c[6]))
    })
    let roboticarm = [
        ['uhv', 'adamantite', 'uv', 'zpm', 'europium', 'gtceu:soldering_alloy', 'gtceu:lubricant', 'gtceu:neutronium', '32', '388000', '200000']
    ]
    roboticarm.forEach(r => {
        ctnh.assembly_line(r[0] + 'roboticarm')
            .itemInputs('gtceu:long_' + r[1] + '_rod', 'gtceu:' + r[1] + '_gear', '3x gtceu:small_' + r[1] + '_gear', '2x gtceu:' + r[0] + '_electric_motor', 'gtceu:' + r[0] + '_electric_piston', '#gtceu:circuits/' + r[0], '#gtceu:circuits/' + r[2], '#gtceu:circuits/' + r[3], '4x gtceu:' + r[4] + '_single_cable')
            .inputFluids(r[5] + ' 1728', r[6] + ' 2000', r[7] + ' 576')
            .itemOutputs('gtceu:' + r[0] + '_robot_arm')
            .EUt(r[9])
            .duration(600)
            .stationResearch(b => b.researchStack(Item.of('gtceu:' + r[2] + '_robot_arm'))
                .dataStack(Item.of("gtceu:data_orb"))
                .EUt(r[10])
                .CWUt(r[8]))
    })
    let transmitters = [
        ['adamantite', 'uhv', 'gtceu:gravi_star', 'tritanium', 'europium', 'gtceu:soldering_alloy', 'gtceu:neutronium', '32', '388000', '200000', 'uv']
    ]
    transmitters.forEach(t => {
        ctnh.assembly_line(t[1] + 'transmitters')
            .itemInputs('gtceu:' + t[0] + '_frame', 'gtceu:' + t[1] + '_electric_motor', '4x gtceu:long_' + t[0] + '_rod', t[2], '#gtceu:circuits/' + t[1], '64x gtceu:' + t[3] + '_foil', '32x gtceu:' + t[3] + '_foil', '4x gtceu:' + t[4] + '_single_cable')
            .inputFluids(t[5] + ' 1152', t[6] + ' 576')
            .itemOutputs('gtceu:' + t[1] + '_emitter')
            .EUt(t[8])
            .duration(600)
            .stationResearch(b => b.researchStack(Item.of('gtceu:' + t[10] + '_emitter'))
                .dataStack(Item.of("gtceu:data_module"))
                .EUt(t[9])
                .CWUt(t[7]))
    })
    let sensor = [
        ['adamantite', 'uhv', 'gtceu:gravi_star', 'tritanium', 'europium', 'gtceu:soldering_alloy', 'gtceu:neutronium', '32', '388000', '200000', 'uv']
    ]
    sensor.forEach(s => {
        ctnh.assembly_line(s[1] + 'sensor')
            .itemInputs('gtceu:' + s[0] + '_frame', 'gtceu:' + s[1] + '_electric_motor', '4x gtceu:' + s[0] + '_plate', s[2], '#gtceu:circuits/' + s[1], '64x gtceu:' + s[3] + '_foil', '32x gtceu:' + s[3] + '_foil', '4x gtceu:' + s[4] + '_single_cable')
            .inputFluids(s[5] + ' 1152', s[6] + ' 576')
            .itemOutputs('gtceu:' + s[1] + '_sensor')
            .EUt(s[8])
            .duration(600)
            .stationResearch(b => b.researchStack(Item.of('gtceu:' + s[10] + '_sensor'))
                .dataStack(Item.of("gtceu:data_module"))
                .EUt(s[9])
                .CWUt(s[7]))
    })
    let field = [
        ['adamantite', 'uhv', 'gtceu:gravi_star', 'abyssalalloy', 'europium', 'gtceu:soldering_alloy', 'gtceu:neutronium', '32', '388000', '200000', 'uv']
    ]
    field.forEach(f => {
        ctnh.assembly_line(f[1] + 'field')
            .itemInputs('gtceu:' + f[0] + '_frame', '6x gtceu:' + f[0] + '_plate', f[2], '2x gtceu:' + f[1] + '_emitter', '#gtceu:circuits/' + f[1], '64x gtceu:fine_' + f[3] + '_wire', '64x gtceu:fine_' + f[3] + '_wire', '4x gtceu:' + f[4] + '_single_cable')
            .inputFluids(f[5] + ' 1728', f[6] + ' 576')
            .itemOutputs('gtceu:' + f[1] + '_field_generator')
            .EUt(f[8])
            .duration(600)
            .stationResearch(b => b.researchStack(Item.of('gtceu:' + f[10] + '_field_generator'))
                .dataStack(Item.of("gtceu:data_module"))
                .EUt(f[9])
                .CWUt(f[7]))
    })
    let calibration = [
        ['uhv']
    ]
    calibration.forEach(c => {
        ctnh.assembler(c[0] + 'calibration')
            .itemInputs('gtceu:' + c[0] + '_electric_pump', '2x #gtceu:circuits/' + c[0])
            .circuit(1)
            .itemOutputs('gtceu:' + c[0] + '_fluid_regulator')
            .EUt(1966080)
            .duration(50)
    })







})