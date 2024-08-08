ServerEvents.recipes(event =>{
    let ctnh = event.recipes.gtceu
    let material = ['manasteel','terrasteel','elementium_steel','alfsteel']
    material.forEach(m =>{
        ctnh.assembler(m + '_casing')
        .itemInputs(['6x gtceu:' + m + '_plate',m + '_frame'])
        .circuit(6)
        .itemOutputs('2x kubejs:' + m + '_casing')
        .EUt(16)
        .duration(50)
        event.shaped(
            Item.of('kubejs:' + m + '_casing', 2),[
              "ABA",
              "ADA",
              "ACA"
            ],{
              A: 'gtceu:' + m + '_plate',
              B: '#forge:tools/hammers',
              C: '#forge:tools/wrenches',
              D: 'gtceu:' + m + '_frame'
            })
    })
    
})