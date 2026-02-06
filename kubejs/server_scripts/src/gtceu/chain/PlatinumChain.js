ServerEvents.recipes(event => {
    

    event.recipes.gtceu.mana_seperator('crystal_catalyst')
    .itemInputs('20x gtceu:platinum_group_sludge_dust')
    .notConsumable('ctnhcore:crystal_catalyst')
    .itemOutputs('10x gtceu:palladium_dust')
    .itemOutputs('24x gtceu:platinum_dust')
    .itemOutputs('9x gtceu:ruthenium_dust')
    .EUt(480)
    .duration(600)
    .circuit(0)

    event.recipes.gtceu.mana_seperator('crystal_catalyst1')
    .itemInputs('20x gtceu:platinum_group_sludge_dust')
    .notConsumable('ctnhcore:crystal_catalyst')
    .itemOutputs('10x gtceu:palladium_dust')
    .itemOutputs('24x gtceu:platinum_dust')
    .itemOutputs('9x gtceu:ruthenium_dust')
    .itemOutputs('3x gtceu:rhodium_dust')
    .EUt(1920)
    .duration(600)
    .circuit(1)

    event.recipes.gtceu.mana_seperator('crystal_catalyst2')
        .itemInputs('30x gtceu:platinum_group_sludge_dust')
        .inputFluids(Fluid.of("gtceu:aqua_regia", 500))
        .notConsumable('ctnhcore:crystal_catalyst')
        .itemOutputs('10x gtceu:palladium_dust')
        .itemOutputs('12x gtceu:platinum_dust')
        .itemOutputs('9x gtceu:ruthenium_dust')
        .itemOutputs('3x gtceu:rhodium_dust')
        .itemOutputs('4x gtceu:osmium_dust')
        .itemOutputs('3x gtceu:iridium_dust')
        .EUt(7680)
        .duration(600)
        .circuit(2);
    
})