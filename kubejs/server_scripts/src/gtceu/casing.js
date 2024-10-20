ServerEvents.recipes(event => {
  let ctnh = event.recipes.gtceu
  let material = ['mana_steel', 'terra_steel', 'elementium', 'alfsteel', 'osmiridium', 'iridium']
  material.forEach(m => {
    ctnh.assembler(m + '_casing')
      .itemInputs(['6x gtceu:' + m + '_plate', 'gtceu:' + m + '_frame'])
      .circuit(6)
      .itemOutputs('2x kubejs:' + m + '_casing')
      .EUt(16)
      .duration(50)
    event.shaped(
      Item.of('kubejs:' + m + '_casing', 2), [
      "ABA",
      "ADA",
      "ACA"
    ], {
      A: 'gtceu:' + m + '_plate',
      B: '#forge:tools/hammers',
      C: '#forge:tools/wrenches',
      D: 'gtceu:' + m + '_frame'
    })
  })
  ctnh.assembler('reflect_light_casing')
    .itemInputs(['6x gtceu:silver_plate', 'gtceu:silver_frame'])
    .circuit(6)
    .itemOutputs('2x ctnhcore:reflect_light_casing')
    .EUt(16)
    .duration(50)
  event.shaped(
    Item.of('ctnhcore:reflect_light_casing', 2), [
    "ABA",
    "ADA",
    "ACA"
  ], {
    A: 'gtceu:silver_plate',
    B: '#forge:tools/hammers',
    C: '#forge:tools/wrenches',
    D: 'gtceu:silver_frame'
  })
  ctnh.assembler('bio_reactor_casing')
    .itemInputs(['6x gtceu:staballoy_plate', 'gtceu:staballoy_frame'])
    .circuit(6)
    .itemOutputs('2x kubejs:bio_reactor_casing')
    .EUt(16)
    .duration(50)
  event.shaped(
    Item.of('kubejs:bio_reactor_casing', 2), [
    "ABA",
    "ADA",
    "ACA"
  ], {
    A: 'gtceu:staballoy_plate',
    B: '#forge:tools/hammers',
    C: '#forge:tools/wrenches',
    D: 'gtceu:staballoy_frame'
  })
  event.shaped(
    Item.of('gtceu:sturdy_machine_casing', 2), [
    "ABA",
    "ADA",
    "ACA"
  ], {
    A: 'gtceu:hsss_plate',
    B: '#forge:tools/hammers',
    C: '#forge:tools/wrenches',
    D: 'gtceu:tungsten_carbide_frame'
  })
  ctnh.assembler('gtceu:sturdy_machine_casing')
    .itemInputs(['6x gtceu:hsss_plate', 'gtceu:tungsten_carbide_frame'])
    .circuit(6)
    .itemOutputs('2x gtceu:sturdy_machine_casing')
    .EUt(16)
    .duration(50)
})