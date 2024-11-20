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
    let material = ['lv', 'mv', 'hv', 'ev', 'iv', 'luv', 'zpm', 'uv', 'uhv']
    material.forEach(m => {
        ctnh.assembler(m + 'coverwuxian')
            .itemInputs(['2x gtceu:' + m + '_voltage_coil', '4x gtceu:duranium_frame', '4x gtceu:long_magnetic_samarium_rod', 'gtceu:molybdenum_disilicide_spring', 'gtceu:small_niobium_titanium_spring', '3x gtceu:dense_rhodium_plated_palladium_plate'])
            .circuit(20)
            .itemOutputs('gtmthings:' + m + '_wireless_energy_receive_cover')
            .EUt(24347)
            .duration(100)
    })
})