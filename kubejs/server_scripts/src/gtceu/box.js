ServerEvents.recipes(event => {
    let ctnh = event.recipes.gtceu
    let material = ['iron', 'gold', 'diamond']
    material.forEach(m => {
        ctnh.assembler(m + '_chest')
            .itemInputs(['4x gtceu:' + m + '_plate', "1x minecraft:chest"])
            .circuit(4)
            .itemOutputs('expandedstorage:' + m + '_chest')
            .EUt(120)
            .duration(50)
    })
})