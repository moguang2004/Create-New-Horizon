ServerEvents.recipes(event => {
    let moreTiers = ['ulv', 'lv', 'mv', 'hv', 'ev', 'iv', 'luv', 'zpm', 'uv', 'uhv', 'uev', 'uiv', 'uxv', 'opv', 'max']
    let tier = 1
    for (let i = 0; i < 15; i++) {
        tier = tier * 2
        event.recipes.gtceu.forming_press('general_' + moreTiers[i])
            .itemInputs('#gtceu:circuits/' + moreTiers[i])
            .itemOutputs('kubejs:general_circuit_' + moreTiers[i])
            .circuit(24)
            .EUt(tier)
            .duration(20 * i + 20)
    }
})
