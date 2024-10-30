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
  event.shaped(
    Item.of('ctnhcore:naquadah_casing_block', 2), [
    "ABA",
    "EDE",
    "ACA"
  ], {
    A: 'gtceu:double_naquadah_plate',
    B: '#forge:tools/hammers',
    C: '#forge:tools/wrenches',
    D: 'gtceu:duranium_frame',
    E: 'gtceu:double_europium_plate'
  })
  ctnh.assembler('ctnhcore:naquadah_casing_block')
    .itemInputs(['4x gtceu:double_naquadah_plate', '2x gtceu:double_europium_plate', 'gtceu:duranium_frame'])
    .circuit(6)
    .itemOutputs('2x ctnhcore:naquadah_casing_block')
    .EUt(16)
    .duration(50)
  event.shaped(
    Item.of('ctnhcore:naquadah_alloy_casing_block', 2), [
    "ABA",
    "EDE",
    "ACA"
  ], {
    A: 'gtceu:double_naquadah_alloy_plate',
    B: '#forge:tools/hammers',
    C: '#forge:tools/wrenches',
    D: 'gtceu:tritanium_frame',
    E: 'gtceu:double_neutronium_plate'
  })
  ctnh.assembler('ctnhcore:naquadah_alloy_casing_block')
    .itemInputs(['4x gtceu:double_naquadah_alloy_plate', '2x gtceu:double_neutronium_plate', 'gtceu:tritanium_frame'])
    .circuit(6)
    .itemOutputs('2x ctnhcore:naquadah_alloy_casing_block')
    .EUt(16)
    .duration(50)
})