ServerEvents.recipes(event => {
    event.remove({ id: 'gtceu:vacuum_freezer/liquid_oxygen' })
    let snow = event.recipes.gtceu
    snow.vacuum_freezer("adjust_liquid_oxygen")
        .inputFluids(Fluid.of('gtceu:oxygen', 1000))
        .outputFluids(Fluid.of('gtceu:liquid_oxygen', 1000))
        .EUt(480)
        .duration(120)
})