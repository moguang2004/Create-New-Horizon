ServerEvents.recipes(event => {
    let ctnh = event.recipes.gtceu
    //柴油
    ctnh.fuel_refining_mk1("diesel")
        .inputFluids(Fluid.of("gtceu:heavy_fuel", 4000))
        .inputFluids(Fluid.of("gtceu:light_fuel", 1000))
        .outputFluids(Fluid.of("gtceu:diesel", 10000))
        .EUt(1920)
        .duration(50).blastFurnaceTemp(2273)
    //生物柴油
    ctnh.fuel_refining_mk1("bio_diesel1")
        .itemInputs("4x gtceu:sodium_hydroxide_dust")
        .inputFluids(Fluid.of("gtceu:fish_oil", 32000))
        .inputFluids(Fluid.of("gtceu:ethanol", 2000))
        .outputFluids(Fluid.of("gtceu:bio_diesel", 60000))
        .EUt(1920)
        .duration(60).blastFurnaceTemp(2273)
    ctnh.fuel_refining_mk1("bio_diesel2")
        .itemInputs("4x gtceu:sodium_hydroxide_dust")
        .inputFluids(Fluid.of("gtceu:seed_oil", 32000))
        .inputFluids(Fluid.of("gtceu:ethanol", 2000))
        .outputFluids(Fluid.of("gtceu:bio_diesel", 60000))
        .EUt(1920)
        .duration(60).blastFurnaceTemp(2273)
    ctnh.fuel_refining_mk1("bio_diesel3")
        .itemInputs("4x gtceu:sodium_hydroxide_dust")
        .inputFluids(Fluid.of("gtceu:seed_oil", 32000))
        .inputFluids(Fluid.of("gtceu:methanol", 2000))
        .outputFluids(Fluid.of("gtceu:bio_diesel", 60000))
        .EUt(1920)
        .duration(60).blastFurnaceTemp(2273)
    ctnh.fuel_refining_mk1("bio_diesel4")
        .itemInputs("4x gtceu:sodium_hydroxide_dust")
        .inputFluids(Fluid.of("gtceu:fish_oil", 32000))
        .inputFluids(Fluid.of("gtceu:methanol", 2000))
        .outputFluids(Fluid.of("gtceu:bio_diesel", 60000))
        .EUt(1920)
        .duration(60).blastFurnaceTemp(2273)
    //汽油
    ctnh.fuel_refining_mk1("gasoline")
        .inputFluids(Fluid.of("gtceu:naphtha", 16000))
        .inputFluids(Fluid.of("gtceu:wood_vinegar", 1000))
        .outputFluids(Fluid.of("gtceu:gasoline", 32000))
        .EUt(1920)
        .duration(60).blastFurnaceTemp(3200)
    //高辛烷值柴油
    ctnh.fuel_refining_mk1("high_octane_gasoline")
        .inputFluids(Fluid.of("gtceu:nitrogen", 4000))
        .inputFluids(Fluid.of("gtceu:hydrogen", 20000))
        .inputFluids(Fluid.of("gtceu:gasoline", 20000))
        .outputFluids(Fluid.of("gtceu:high_octane_gasoline", 56000))
        .EUt(1920)
        .duration(80).blastFurnaceTemp(5200)
    //高十六烷值柴油
    ctnh.fuel_refining_mk1("cetane_boosted_diesel1")
        .inputFluids(Fluid.of("gtceu:bio_diesel", 12000))
        .inputFluids(Fluid.of("gtceu:nitric_acid", 4000))
        .outputFluids(Fluid.of("gtceu:cetane_boosted_diesel", 26000))
        .EUt(1920)
        .duration(25).blastFurnaceTemp(4200)
    ctnh.fuel_refining_mk1("cetane_boosted_diesel2")
        .inputFluids(Fluid.of("gtceu:diesel", 12000))
        .inputFluids(Fluid.of("gtceu:nitric_acid", 4000))
        .outputFluids(Fluid.of("gtceu:cetane_boosted_diesel", 26000))
        .EUt(1920)
        .duration(25).blastFurnaceTemp(4200)



    



    

































})