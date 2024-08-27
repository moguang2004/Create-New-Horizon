//priority: -10
ServerEvents.recipes(event => {
  event.shaped(Item.of('createdieselgenerators:engine_piston', 2), [
    "AB ",
    "BC ",
    "  D"
  ], {
    A: "kubejs:steel_mechanism",
    B: "gtceu:iron_plate",
    C: "minecraft:piston",
    D: "gtceu:zinc_ingot"
  }).id('createdieselgenerators:crafting/engine_piston')
  event.shaped(
    Item.of('createdieselgenerators:pumpjack_hole', 1), [
    "ABA",
    "CDC",
    "EFE"
  ], {
    A: 'kubejs:steel_mechanism',
    B: 'create:hose_pulley',
    C: 'create:copper_casing',
    D: 'kubejs:steel_casing',
    E: 'minecraft:chain',
    F: 'create:fluid_pipe'
  }).id('createdieselgenerators:crafting/pumpjack_hole')
  event.shaped(
    Item.of('createdieselgenerators:pumpjack_bearing', 1), [
    "   ",
    "ABA",
    "ACA"
  ], {
    A: 'gtceu:steel_plate',
    B: 'create:mechanical_bearing',
    C: 'kubejs:heavy_machinery_casing'
  }).id('createdieselgenerators:crafting/pumpjack_bearing')
  event.shaped(
    Item.of('createdieselgenerators:basin_lid', 1), [
    "   ",
    "ABA",
    "CDC"
  ], {
    A: 'minecraft:redstone',
    B: 'gtceu:double_steel_plate',
    C: 'gtceu:steel_plate',
    D: 'minecraft:clock'
  }).id('createdieselgenerators:crafting/basin_lid')
  event.replaceInput({ id: 'createdieselgenerators:mechanical_crafting/pumpjack_crank' }, 'gtceu:andesite_alloy_ingot', 'gtceu:andesite_alloy_plate')
  event.replaceInput({ id: 'createdieselgenerators:mechanical_crafting/pumpjack_crank' }, 'gtceu:iron_plate', 'gtceu:steel_plate')
  event.replaceInput({ id: 'createdieselgenerators:mechanical_crafting/pumpjack_crank' }, 'gtceu:zinc_ingot', 'gtceu:zinc_plate')
  event.remove({ id: 'createdieselgenerators:crafting/engine_piston_from_rods' })
  event.recipes.create.item_application('kubejs:steel_casing', ['gtceu:treated_wood_planks', 'gtceu:wrought_iron_plate'])
  event.recipes.create.item_application('kubejs:heavy_machinery_casing', ['kubejs:steel_casing', 'gtceu:steel_plate'])
})
