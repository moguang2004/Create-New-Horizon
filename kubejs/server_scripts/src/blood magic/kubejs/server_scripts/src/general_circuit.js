ServerEvents.recipes(event => {
    let moreTiers = ['ulv', 'lv', 'mv', 'hv', 'ev', 'iv', 'luv', 'zpm', 'uv', 'uhv', 'uev', 'uiv', 'uxv', 'opv', 'max']
    let tier = 1
    let reverse_tier = 128
    for (let i = 0; i < 15; i++) {
        tier = tier * 2
        reverse_tier = reverse_tier / 2;
        if (reverse_tier < 1) reverse_tier = 1;
        event.recipes.gtceu.forming_press('general_' + moreTiers[i])
            .itemInputs('#gtceu:circuits/' + moreTiers[i])
            .itemOutputs('kubejs:general_circuit_' + moreTiers[i])
            .circuit(24)
            .EUt(tier)
            .duration(20 * i + 20)
        if (i <= 6) {
            event.recipes.gtceu.resonant_assemble('resonant_' + moreTiers[i])
                .itemOutputs('64x kubejs:circuit_resonatic_' + moreTiers[i])
                .itemInputs('64x kubejs:general_circuit_' + moreTiers[i])
                .notConsumable('kubejs:circuit_resonatic_' + moreTiers[i])
                .itemInputs('kubejs:imprinted_resonatic_circuit_board')
                .inputFluids(Fluid.of('gtceu:mana', 2 * tier))
                .EUt(tier * tier)
                .duration(20 * i + 20)
        }
        if (i > 6 && i < 12) {
            event.recipes.gtceu.resonant_assemble('resonant_' + moreTiers[i])
                .itemOutputs('kubejs:circuit_resonatic_' + moreTiers[i])
                .itemInputs('kubejs:general_circuit_' + moreTiers[i])
                .notConsumable('kubejs:circuit_resonatic_' + moreTiers[i])
                .itemInputs('kubejs:imprinted_resonatic_circuit_board')
                .itemInputs('kubejs:mana_circuit_board')
                .inputFluids(Fluid.of('gtceu:zenith_essence', 2 * (Math.pow(i, 2))))
                .EUt(tier * tier)
                .duration(20 * i + 20)
        }

    }
})