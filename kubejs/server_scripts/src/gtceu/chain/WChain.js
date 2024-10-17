ServerEvents.recipes(event => {
    let ctnh = event.recipes.gtceu
    //钨酸粉脱水
    ctnh.dehydrator('tungsten_trioxide_dust')
        .itemInputs("7x gtceu:tungstic_acid_dust")
        .itemOutputs('4x gtceu:tungsten_trioxide_dust')
        .outputFluids('minecraft:water 1000')
        .EUt(480)
        .duration(100)
        .blastFurnaceTemp(3500)
    //三氧化钨变为钨锭和钨粉
    ctnh.electric_blast_furnace("wufen")
        .itemInputs("4x gtceu:tungsten_trioxide_dust")
        .inputFluids('gtceu:hydrogen 6000')
        .itemOutputs("1x gtceu:tungsten_dust")
        .outputFluids("minecraft:water 3000")
        .circuit(2)
        .EUt(1920)
        .duration(60)
        .blastFurnaceTemp(3500)
    ctnh.electric_blast_furnace("wuding")
        .itemInputs("8x gtceu:tungsten_trioxide_dust")
        .itemInputs('3x gtceu:carbon_dust')
        .itemOutputs('2x gtceu:hot_tungsten_ingot')
        .outputFluids('gtceu:carbon_dioxide 3000')
        .EUt(1920)
        .duration(1000)
        .blastFurnaceTemp(3500)
    
    





})