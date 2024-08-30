//添加传动杆切割配方
//鼓风机动力合成配方

ServerEvents.recipes(e => {
  let ingot = ['tin', 'bronze', 'zinc', 'brass', 'nickel', 'lead']
  for (let i of ingot) {
    e.recipes.create.mixing(Fluid.of(`gtceu:${i}`, 144), `2x gtceu:${i}_dust`).superheated()
    e.recipes.create.crushing(`gtceu:${i}_dust`, `gtceu:${i}_ingot`)
    e.recipes.create.milling(`gtceu:${i}_dust`, `gtceu:${i}_ingot`)
  }
  let crushingot = ['andesite_alloy', 'magnetic_iron']
  for (let i of crushingot) {
    e.recipes.create.crushing(`gtceu:${i}_dust`, `gtceu:${i}_ingot`)
    e.recipes.create.milling(`gtceu:${i}_dust`, `gtceu:${i}_ingot`)
  }
})
ServerEvents.recipes(e => {
  let ingot = ['copper', 'iron', 'gold']
  for (let i of ingot) {
    e.recipes.create.mixing(Fluid.of(`gtceu:${i}`, 144), `2x gtceu:${i}_dust`).superheated()
    e.recipes.create.crushing(`gtceu:${i}_dust`, `minecraft:${i}_ingot`)
    e.recipes.create.milling(`gtceu:${i}_dust`, `minecraft:${i}_ingot`)

  }
})

//切割
ServerEvents.recipes(event => {
  event.recipes.create.cutting('2x create:shaft', 'gtceu:andesite_alloy_ingot')
})

//动力合成
ServerEvents.recipes(event => {
  event.recipes.create.mechanical_crafting('create:encased_fan', [
    "ABCBA",
    "DDEDD",
    "AFBFA",
    "AFBFA",
    "GGHGG"
  ],
    {
      A: "create:andesite_casing",

      B: "create:shaft",

      C: "minecraft:redstone_torch",

      D: 'gtceu:steel_rod',

      E: "minecraft:redstone",

      F: 'gtceu:steel_plate',

      G: "minecraft:iron_bars",

      H: "create:propeller"

    }
  )
  event.recipes.create.mechanical_crafting('2x create:crushing_wheel', [
    " AAA ",
    "ABCBA",
    "ACDCA",
    "ABCBA",
    " AAA "
  ],
    {
      A: "gtceu:wrought_iron_plate",

      B: "gtceu:andesite_alloy_plate",

      C: "gtceu:iron_rod",

      D: 'gtceu:wrought_iron_gear',

    }
  )
  event.recipes.create.mechanical_crafting('create_new_age:generator_coil', [
    "  A  ",
    " BCB ",
    "ACDCA",
    " BCB ",
    "  A  "
  ],
    {
      A: "create_new_age:copper_wire",

      B: "gtceu:andesite_alloy_plate",

      C: "create_new_age:copper_circuit",

      D: 'create:precision_mechanism',

    }
  )
})

//动力辊压机
ServerEvents.recipes(event => {
  event.recipes.create.compacting('minecraft:paper', '2x gtceu:paper_dust')
  let ingot = ['iron', 'copper', 'gold', 'zinc', 'brass', 'wrought_iron', 'steel', 'rubber', 'red_alloy', 'andesite_alloy', 'bronze', 'potin', 'nickel', 'tin', 'mana_steel']
  for (let i of ingot) {
    event.recipes.create.compacting(`gtceu:${i}_plate`, `2x #forge:ingots/${i}`)
  }
  event.recipes.create.compacting('gtceu:diamond_plate', '2x minecraft:diamond')
  event.recipes.create.compacting('gtceu:emerald_plate', '2x minecraft:emerald')
  event.recipes.create.compacting('gtceu:nether_quartz_plate', '2x minecraft:quartz')
  event.recipes.create.compacting('gtceu:lapis_plate', '2x minecraft:lapis_lazuli')
  event.recipes.create.compacting('minecraft:glass', '2x gtceu:glass_dust').heated()
  event.recipes.create.compacting('minecraft:netherrack',['minecraft:gravel','2x minecraft:redstone',Fluid.of('minecraft:lava',250)])
  event.recipes.create.compacting('gtceu:bronze',Fluid.of('gtceu:bronze',144))
  event.recipes.create.compacting('gtceu:brass',Fluid.of('gtceu:brass',144))
  /*Ingredient.of("#forge:ingots").itemIds.forEach((id) =>{
    id
  })*/
  event.remove({ id: 'create:pressing/copper_ingot' })
  event.remove({ id: 'create:pressing/brass_ingot' })
  event.remove({ id: 'create:pressing/gold_ingot' })
})

//搅拌机
ServerEvents.recipes(event => {
  event.recipes.create.mixing('3x gtceu:bronze_dust', ['3x gtceu:copper_dust', 'gtceu:tin_dust']).heated()
  event.recipes.create.mixing('3x gtceu:brass_dust', ['3x gtceu:copper_dust', 'gtceu:zinc_dust']).heated()
  event.recipes.create.mixing('8x gtceu:potin_dust', ['6x gtceu:copper_dust', '2x gtceu:tin_dust', 'gtceu:lead_dust']).heated()
  event.recipes.create.mixing('create:rose_quartz', ['minecraft:quartz', '4x minecraft:redstone']).heated()
  event.recipes.create.mixing('create:rose_quartz', ['2x biomesoplenty:rose_quartz_chunk', 'minecraft:redstone']).heated()
  event.recipes.create.mixing(Fluid.of('gtceu:concrete',/** @type {number} */1000), ['gtceu:stone_dust', 'gtceu:quartz_sand_dust', 'gtceu:clay_dust', '2x gtceu:calcite_dust', Fluid.of('minecraft:water', 1000)]).heated()
  event.recipes.create.mixing('2x gtceu:andesite_alloy_dust', [Fluid.of('gtceu:iron', 144), '2x gtceu:andesite_dust'])
  event.recipes.create.mixing(Fluid.of('gtceu:bronze',576),[Fluid.of('gtceu:copper',432),Fluid.of('gtceu:tin',144)])
  event.recipes.create.mixing(Fluid.of('gtceu:brass',576),[Fluid.of('gtceu:copper',432),Fluid.of('gtceu:zinc',144)])
})

//序列组装
ServerEvents.recipes(event => {
  let transitional = 'minecraft:oak_slab'
  event.recipes.create.sequenced_assembly([
    'kubejs:basic_mechanism'
  ], '#minecraft:wooden_slabs', [
    event.recipes.createDeploying(transitional, [transitional, 'gtceu:andesite_alloy_ingot']),
    event.recipes.createDeploying(transitional, [transitional, 'gtceu:iron_plate']),
    event.recipes.createCutting(transitional, transitional)
  ]).transitionalItem(transitional)
    .loops(1)
})
ServerEvents.recipes(event => {
  let transitional = 'create:incomplete_precision_mechanism'
  event.recipes.create.sequenced_assembly([
    'create:precision_mechanism'
  ], 'kubejs:basic_mechanism', [
    event.recipes.createDeploying(transitional, [transitional, 'gtceu:brass_plate']),
    event.recipes.createDeploying(transitional, [transitional, 'create:cogwheel']),
    event.recipes.createDeploying(transitional, [transitional, 'create:large_cogwheel']),
    event.recipes.createFilling(transitional, [transitional, Fluid.of('alexscaves:acid', 500)])
  ]).transitionalItem(transitional)
    .loops(1)
})
ServerEvents.recipes(event => {
  let transitional = 'create:electron_tube'
  event.recipes.create.sequenced_assembly([
    'gtceu:vacuum_tube'
  ], 'create:electron_tube', [
    event.recipes.createDeploying(transitional, [transitional, 'minecraft:glass']),
    event.recipes.createDeploying(transitional, [transitional, 'gtceu:steel_ingot']),
    event.recipes.createDeploying(transitional, [transitional, 'gtceu:copper_double_wire']),
  ]).transitionalItem(transitional)
    .loops(1)
})
ServerEvents.recipes(event => {
  let transitional = 'kubejs:unfinished_steel_mechanism'
  event.recipes.create.sequenced_assembly([
    'kubejs:steel_mechanism'
  ], 'create:precision_mechanism', [
    event.recipes.createDeploying(transitional, [transitional, 'gtceu:steel_plate']),
    event.recipes.createDeploying(transitional, [transitional, 'gtceu:red_alloy_plate']),
    event.recipes.createDeploying(transitional, [transitional, 'gtceu:steel_screw']),
    event.recipes.createFilling(transitional, [transitional, Fluid.of('gtceu:rubber', 576)])
  ]).transitionalItem(transitional)
    .loops(1)
})
ServerEvents.recipes(event => {
  let transitional = 'gtceu:ender_pearl_dust'
  event.recipes.create.sequenced_assembly([
    'gtceu:ender_eye_dust'
  ], 'gtceu:ender_pearl_dust', [
    event.recipes.createFilling(transitional, [transitional, Fluid.of('gtceu:blaze', 288)]),
    event.recipes.createPressing(transitional, [transitional])
  ]).transitionalItem(transitional)
    .loops(1)
})
ServerEvents.recipes(event => {
  let transitional = 'gtceu:bronze_machine_casing'
  event.recipes.create.sequenced_assembly([
    'create:steam_engine'
  ], 'gtceu:bronze_machine_casing', [
    event.recipes.createDeploying(transitional, [transitional, 'gtceu:steel_plate']),
    event.recipes.createDeploying(transitional, [transitional, 'gtceu:long_steel_rod']),
    event.recipes.createDeploying(transitional, [transitional, 'kubejs:steel_mechanism']),
    event.recipes.createPressing(transitional, [transitional]),
    event.recipes.createFilling(transitional, [transitional, Fluid.of('createdieselgenerators:gasoline', 250)])
  ]).transitionalItem(transitional)
    .loops(3)
  event.remove({ output: 'create:steam_engine' })
})



ServerEvents.recipes(event => {
  let transitional = 'gtceu:coke_oven_bricks'
  event.recipes.create.sequenced_assembly([
    '2x gtceu:firebricks'
  ], 'gtceu:coke_oven_bricks', [
    event.recipes.createDeploying(transitional, [transitional, 'gtceu:firebrick']),
    event.recipes.createDeploying(transitional, [transitional, 'gtceu:firebrick']),
    event.recipes.createDeploying(transitional, [transitional, 'gtceu:gypsum_dust']),
    event.recipes.createFilling(transitional, [transitional, Fluid.of('gtceu:concrete', 250)])
  ]).transitionalItem(transitional)
    .loops(4)
  event.remove({ output: 'gtceu:firebricks' })
})

ServerEvents.recipes(event => {
  let transitional = 'gtceu:coke_dust'
  event.recipes.create.sequenced_assembly([
    'kubejs:high_quality_solid_fuel'
  ], 'gtceu:coke_dust', [
    event.recipes.createCutting(transitional, [transitional]),
    event.recipes.createDeploying(transitional, [transitional, 'gtceu:lignin_dust']),
    event.recipes.createFilling(transitional, [transitional, Fluid.of('gtceu:creosote', 250)]),
    event.recipes.createPressing(transitional, [transitional]),
  ]).transitionalItem(transitional)
    .loops(1)
})

//注液器
ServerEvents.recipes(event => {
  event.recipes.create.filling('cold_sweat:thermometer', ['kubejs:thermometer_case', Fluid.of('gtceu:mercury', 1000)])
  event.remove({ output: 'cold_sweat:thermometer' })
})

ServerEvents.recipes(event => {
  event.recipes.create.crushing('gtceu:clay_dust', 'minecraft:clay_ball')
  event.recipes.create.crushing('4x gtceu:clay_dust', 'minecraft:clay')
  event.recipes.create.crushing('gtceu:brick_dust', 'minecraft:brick')
  event.recipes.create.crushing('4x gtceu:brick_dust', 'minecraft:bricks')
  event.recipes.create.crushing('gtceu:ender_pearl_dust', 'minecraft:ender_pearl')
})

ServerEvents.recipes(event => {
  event.recipes.create.item_application('create:shadow_steel_casing', ['minecraft:obsidian', 'gtceu:shadow_steel_plate'])
  event.recipes.create.mixing('createutilities:void_steel_ingot', ['create:shadow_steel', 'gtceu:ender_pearl_dust']).superheated()
  event.remove({ id: 'createutilities:mixing/void_steel_ingot' })
  event.recipes.create.mixing('4x create:chromatic_compound', [Fluid.of('minecraft:lava', 500), 'gtceu:netherite_dust', 'gtceu:andesite_alloy_ingot', 'create:polished_rose_quartz'])
})
