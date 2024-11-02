ServerEvents.recipes(event => {
    let ctnh = event.recipes.gtceu
    //柴油
    ctnh.fuel_refining("diesel")
        .inputFluids(Fluid.of("gtceu:heavy_fuel", 4000))
        .inputFluids(Fluid.of("gtceu:light_fuel", 1000))
        .outputFluids(Fluid.of("gtceu:diesel", 10000))
        .EUt(1920)
        .duration(50).blastFurnaceTemp(2273)
    //生物柴油
    ctnh.fuel_refining("bio_diesel1")
        .itemInputs("4x gtceu:sodium_hydroxide_dust")
        .inputFluids(Fluid.of("gtceu:fish_oil", 32000))
        .inputFluids(Fluid.of("gtceu:ethanol", 2000))
        .outputFluids(Fluid.of("gtceu:bio_diesel", 60000))
        .EUt(1920)
        .duration(60).blastFurnaceTemp(2273)
    ctnh.fuel_refining("bio_diesel2")
        .itemInputs("4x gtceu:sodium_hydroxide_dust")
        .inputFluids(Fluid.of("gtceu:seed_oil", 32000))
        .inputFluids(Fluid.of("gtceu:ethanol", 2000))
        .outputFluids(Fluid.of("gtceu:bio_diesel", 60000))
        .EUt(1920)
        .duration(60).blastFurnaceTemp(2273)
    ctnh.fuel_refining("bio_diesel3")
        .itemInputs("4x gtceu:sodium_hydroxide_dust")
        .inputFluids(Fluid.of("gtceu:seed_oil", 32000))
        .inputFluids(Fluid.of("gtceu:methanol", 2000))
        .outputFluids(Fluid.of("gtceu:bio_diesel", 60000))
        .EUt(1920)
        .duration(60).blastFurnaceTemp(2273)
    ctnh.fuel_refining("bio_diesel4")
        .itemInputs("4x gtceu:sodium_hydroxide_dust")
        .inputFluids(Fluid.of("gtceu:fish_oil", 32000))
        .inputFluids(Fluid.of("gtceu:methanol", 2000))
        .outputFluids(Fluid.of("gtceu:bio_diesel", 60000))
        .EUt(1920)
        .duration(60).blastFurnaceTemp(2273)
    //汽油
    ctnh.fuel_refining("gasoline")
        .inputFluids(Fluid.of("gtceu:naphtha", 16000))
        .inputFluids(Fluid.of("gtceu:wood_vinegar", 1000))
        .outputFluids(Fluid.of("gtceu:gasoline", 32000))
        .EUt(1920)
        .duration(60).blastFurnaceTemp(4500)
    //高辛烷值汽油
    ctnh.fuel_refining("high_octane_gasoline")
        .inputFluids(Fluid.of("gtceu:nitrogen", 4000))
        .inputFluids(Fluid.of("gtceu:hydrogen", 20000))
        .inputFluids(Fluid.of("gtceu:gasoline", 20000))
        .outputFluids(Fluid.of("gtceu:high_octane_gasoline", 56000))
        .EUt(1920)
        .duration(80).blastFurnaceTemp(7200)
    //高十六烷值柴油
    ctnh.fuel_refining("cetane_boosted_diesel1")
        .inputFluids(Fluid.of("gtceu:bio_diesel", 12000))
        .inputFluids(Fluid.of("gtceu:nitric_acid", 4000))
        .outputFluids(Fluid.of("gtceu:cetane_boosted_diesel", 26000))
        .EUt(1920)
        .duration(25).blastFurnaceTemp(4500)
    ctnh.fuel_refining("cetane_boosted_diesel2")
        .inputFluids(Fluid.of("gtceu:diesel", 12000))
        .inputFluids(Fluid.of("gtceu:nitric_acid", 4000))
        .outputFluids(Fluid.of("gtceu:cetane_boosted_diesel", 26000))
        .EUt(1920)
        .duration(25).blastFurnaceTemp(4500)
    //高级线圈处理配方
    ctnh.fuel_refining("high_octane_gasoline1")
        .circuit(1)
        .inputFluids(Fluid.of("gtceu:oil_light", 20000))
        .inputFluids(Fluid.of("gtceu:hydrogen", 2000))
        .inputFluids(Fluid.of("gtceu:nitrogen", 1000))
        .outputFluids(Fluid.of("gtceu:high_octane_gasoline", 4000))
        .EUt(6144)
        .duration(15).blastFurnaceTemp(10800)
    ctnh.fuel_refining("high_octane_gasoline2")
        .circuit(2)
        .inputFluids(Fluid.of("gtceu:oil", 15000))
        .inputFluids(Fluid.of("gtceu:hydrogen", 2000))
        .inputFluids(Fluid.of("gtceu:nitrogen", 1000))
        .outputFluids(Fluid.of("gtceu:high_octane_gasoline", 8000))
        .EUt(6144)
        .duration(15).blastFurnaceTemp(10800)
    ctnh.fuel_refining("high_octane_gasoline3")
        .circuit(3)
        .inputFluids(Fluid.of("gtceu:oil_medium", 15000))
        .inputFluids(Fluid.of("gtceu:hydrogen", 4000))
        .inputFluids(Fluid.of("gtceu:nitrogen", 2000))
        .outputFluids(Fluid.of("gtceu:high_octane_gasoline", 16000))
        .EUt(24567)
        .duration(80).blastFurnaceTemp(10800)
    ctnh.fuel_refining("high_octane_gasoline4")
        .circuit(4)
        .inputFluids(Fluid.of("gtceu:oil_heavy", 15000))
        .inputFluids(Fluid.of("gtceu:hydrogen", 8000))
        .inputFluids(Fluid.of("gtceu:nitrogen", 4000))
        .outputFluids(Fluid.of("gtceu:high_octane_gasoline", 24000))
        .EUt(24567)
        .duration(80).blastFurnaceTemp(10800)
    //硅岩燃料的精炼
    ctnh.fuel_refining("naq1")
        .inputFluids('gtceu:naquadah_based_liquid_fuel_excited 1000', 'gtceu:helium_plasma 100')
        .itemInputs('8x gtceu:naquadah_dust', '4x gtceu:palladium_dust')
        .outputFluids('gtceu:nq_fuelmk1 1000')
        .EUt(393216)
        .duration(300)
        .blastFurnaceTemp(10800)
    ctnh.fuel_refining("naq2")
        .inputFluids('gtceu:nq_fuelmk1 1000', 'gtceu:oxygen_plasma 100')
        .itemInputs('8x gtceu:enriched_naquadah_dust', '4x gtceu:ruthenium_dust')
        .outputFluids('gtceu:nq_fuelmk2 1000')
        .EUt(393216)
        .duration(450)
        .blastFurnaceTemp(10800)
    ctnh.fuel_refining("naq3")
        .inputFluids('gtceu:nq_fuelmk2 1000', 'gtceu:argon_plasma 100')
        .itemInputs('8x gtceu:naquadria_dust', '4x gtceu:osmium_dust')
        .outputFluids('gtceu:nq_fuelmk3 1000')
        .EUt(393216)
        .duration(600)
        .blastFurnaceTemp(10800)
    //超能燃料的精炼
    ctnh.fuel_refining("super1")
        .inputFluids('gtceu:nq_fuelmk3 1000', 'gtceu:taranliquidfuel_l 1000', 'gtceu:argon_plasma 500')
        .itemInputs('4x gtceu:tritanium_dust')
        .outputFluids('gtceu:superfuelmk1 1000')
        .EUt(2097152)
        .duration(800)
        .blastFurnaceTemp(12600)



    



    

































})