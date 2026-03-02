ServerEvents.recipes(event => {
    
    event.remove({ id: 'ctnhcore:assembler/cover_ender_fluid_link' })
    
    let snow = event.recipes.gtceu
        //更易冻的液氧
    snow.vacuum_freezer("adjust_liquid_oxygen")
        .inputFluids(Fluid.of('gtceu:oxygen', 1000))
        .outputFluids(Fluid.of('gtceu:liquid_oxygen', 1000))
        .EUt(480)
        .duration(120)
        //NERF 末影流体覆盖版
    snow.assembler("adjust_ender_fluid_link")
        .itemInputs(
            'gtceu:luv_sensor',
            'gtceu:luv_emitter',
            'gtceu:luv_electric_pump',
            '2x #gtceu:circuits/luv',
            '8x gtceu:ender_eye_plate',
            '4x gtceu:dense_rhodium_plated_palladium_plate',
        )
        .inputFluids('gtceu:polybenzimidazole 576')
        .itemOutputs('gtceu:ender_fluid_link_cover')
        .EUt(30720)
        .duration(200)
})