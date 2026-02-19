ServerEvents.recipes(event => {


    event.recipes.gtceu.mana_transformer('crystal_catalyst1')
        .itemInputs('42x gtceu:platinum_group_sludge_dust')
        .notConsumable('ctnhcore:crystal_catalyst')
        .itemOutputs('7x gtceu:palladium_dust')
        .itemOutputs('7x gtceu:platinum_dust')
        .itemOutputs('7x gtceu:ruthenium_dust')
        .itemOutputs('7x gtceu:rhodium_dust')
        .itemOutputs('7x gtceu:osmium_dust')
        .itemOutputs('7x gtceu:iridium_dust')
        .EUt(1920)
        .duration(600)
        .circuit(1)

})