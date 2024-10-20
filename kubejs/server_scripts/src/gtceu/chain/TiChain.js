ServerEvents.recipes(event => {
    let ctnh = event.recipes.gtceu
    //四氯化钛处理
    ctnh.distillation_tower('refining_titanium_tetrachloride_bucket')
        .inputFluids('gtceu:titanium_tetrachloride 3000')//12B
        .outputFluids('gtceu:iron_iii_chloride 1000')//3B
        .outputFluids('gtceu:titanium_tetrachloride 1000')//4B
        .outputFluids('gtceu:refining_titanium_tetrachloride 1250')//5B
        .EUt(480)
        .duration(200)
    //进一步除钒Al+3TiCl4---->AlCl3+3TiCl3
    ctnh.chemical_reactor("titanium_VX")
        .inputFluids("gtceu:titanium_tetrachloride_v 6000")//24B+18B+6B
        .inputFluids("minecraft:water 9000")
        .itemInputs('2x gtceu:aluminium_dust')
        .itemOutputs('8x gtceu:aluminium_chloride_dust')//6B
        .itemOutputs('21x gtceu:vanadium_pentoxide_dust')
        .outputFluids("gtceu:hydrochloric_acid 18000")//18B
        .outputFluids("gtceu:titanium_tetrachloride 6000")
        .EUt(480)
        .duration(400)
    //合成含钒四氯化钛42B氯
    ctnh.chemical_reactor("tiCl4")
        .inputFluids("gtceu:chlorine 48000")
        .itemInputs("6x gtceu:rutile_dust")
        .itemInputs('12x gtceu:carbon_dust')
        .outputFluids("gtceu:carbon_monoxide 12000")
        .outputFluids("gtceu:titanium_tetrachloride_v 6000")
        .EUt(480)
        .duration(200)
    //高纯四氯化钛转变为钛锭
    ctnh.electric_blast_furnace("taiding")
        .inputFluids('gtceu:refining_titanium_tetrachloride 5000')//20B
        .itemInputs('10x gtceu:magnesium_dust')//6-4 30-20  2-6 10-30
        .itemOutputs('5x gtceu:hot_titanium_ingot')
        .itemOutputs('30x gtceu:magnesium_chloride_dust')
        .EUt(1920)
        .duration(250)
        .blastFurnaceTemp(2500)
    //氯化铝电解
    ctnh.electrolyzer("al")
        .itemInputs('4x gtceu:aluminium_chloride_dust')
        .itemOutputs('gtceu:aluminium_dust')
        .outputFluids("gtceu:chlorine 3000")
        .EUt(1920)
        .duration(10)









})