ServerEvents.recipes(event => {
    let ctnh = event.recipes.gtceu
    ctnh.crystallizer("lapotron_gem")
        .itemInputs("5x gtceu:lapotron_dust")
        .inputFluids(Fluid.of("minecraft:water", 1000))
        .itemOutputs('1x gtceu:lapotron_gem')
        .EUt(6144)
        .duration(480).blastFurnaceTemp(7200)
    ctnh.crystallizer("lapotron_gem1")
        .itemInputs("4x gtceu:lapotron_dust")
        .inputFluids(Fluid.of("gtceu:distilled_water", 1000))
        .itemOutputs('1x gtceu:lapotron_gem')
        .EUt(6144)
        .duration(240).blastFurnaceTemp(7200)
    ctnh.crystallizer("lapotron_gem2")
        .itemInputs("3x gtceu:lapotron_dust")
        .inputFluids(Fluid.of("gtceu:blue_steel", 72))
        .itemOutputs('1x gtceu:lapotron_gem')
        .EUt(6144)
        .duration(120).blastFurnaceTemp(7200)
    ctnh.crystallizer("lapotron_gem3")
        .itemInputs("2x gtceu:lapotron_dust")
        .inputFluids(Fluid.of("gtceu:red_steel", 36))
        .itemOutputs('1x gtceu:lapotron_gem')
        .EUt(6144)
        .duration(60).blastFurnaceTemp(7200)
    ctnh.crystallizer('energy_crystal')
        .itemInputs('8x gtceu:energium_dust')
        .inputFluids(Fluid.of("minecraft:water", 1000))
        .itemOutputs('gtceu:energy_crystal')
        .EUt(1920)
        .duration(480).blastFurnaceTemp(2700)
    ctnh.crystallizer('energy_crystal1')
        .itemInputs('4x gtceu:energium_dust')
        .inputFluids(Fluid.of("gtceu:distilled_water", 1000))
        .itemOutputs('gtceu:energy_crystal')
        .EUt(1920)
        .duration(240).blastFurnaceTemp(2700)
    ctnh.crystallizer('energy_crystal2')
        .itemInputs('1x gtceu:energium_dust')
        .inputFluids(Fluid.of("gtceu:blue_steel", 72))
        .itemOutputs('gtceu:energy_crystal')
        .EUt(1920)
        .duration(60).blastFurnaceTemp(2700)
    ctnh.crystallizer("energy_crystal3")
        .itemInputs('2x gtceu:energium_dust')
        .inputFluids(Fluid.of("gtceu:black_steel", 144))
        .itemOutputs('gtceu:energy_crystal')
        .EUt(1920)
        .duration(120).blastFurnaceTemp(2700)
    ctnh.crystallizer('raw_crystal_chip')
        .itemInputs('1x gtceu:raw_crystal_chip_parts')
        .inputFluids(Fluid.of("gtceu:europium", 4))
        .itemOutputs('4x gtceu:raw_crystal_chip')
        .EUt(6144)
        .duration(60).blastFurnaceTemp(7200)




















})