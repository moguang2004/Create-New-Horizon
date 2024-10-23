//添加传动杆切割配方
//鼓风机动力合成配方

ServerEvents.recipes(e => {
  let ingot = ['tin', 'bronze', 'zinc', 'brass', 'nickel', 'lead']
  for (let i of ingot) {
    e.recipes.create.crushing(`gtceu:${i}_dust`, `gtceu:${i}_ingot`)
    e.recipes.create.milling(`gtceu:${i}_dust`, `gtceu:${i}_ingot`)
  }
  let crushingot = ['andesite_alloy']
  for (let i of crushingot) {
    e.recipes.create.crushing(`gtceu:${i}_dust`, `gtceu:${i}_ingot`)
    e.recipes.create.milling(`gtceu:${i}_dust`, `gtceu:${i}_ingot`)
  }
  e.recipes.create.crushing('gtceu:coke_dust','gtceu:coke_gem')
  e.recipes.create.milling('gtceu:coke_dust','gtceu:coke_gem')
})
ServerEvents.recipes(e => {
  let ingot = ['copper', 'iron', 'gold']
  for (let i of ingot) {
    e.recipes.create.crushing(`gtceu:${i}_dust`, `minecraft:${i}_ingot`)
    e.recipes.create.milling(`gtceu:${i}_dust`, `minecraft:${i}_ingot`)

  }
})

//切割
ServerEvents.recipes(event => {
  event.recipes.create.cutting('2x create:shaft', 'gtceu:andesite_alloy_ingot')
  let plates = ['copper','iron','gold','lead','nickel','tin','silver','annealed_copper','cupronickel','steel','red_alloy','mana_steel','conductive_alloy']
  plates.forEach(plate => {
    event.recipes.create.cutting(`2x gtceu:${plate}_single_wire`,`gtceu:${plate}_plate`)
  })
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

  event.recipes.create.mechanical_crafting('create:large_water_wheel',[
    " AAA ",
    "ABCBA",
    "ACDCA",
    "ABCBA",
    " AAA "
  ],
    {
      A: "gtceu:treated_wood_planks",

      B: "gtceu:treated_wood_screw",

      C: "gtceu:gold_ring",

      D: 'create:water_wheel'
    }
  )

  event.recipes.create.mechanical_crafting('javd:portal_block',[
    "AAAAA",
    "ABCBA",
    "ACDCA",
    "ABCBA",
    "AAAAA"
  ],
    {
      A: "gtceu:double_shadow_steel_plate",

      B: "#gtceu:circuits/hv",

      C: "createutilities:void_steel_sheet",

      D: 'gtceu:hv_machine_casing'
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
  event.recipes.create.mixing('2x gtceu:treated_wood_planks',[Fluid.of('gtceu:creosote',250),'2x #minecraft:planks'])
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
    event.recipes.createFilling(transitional, [transitional, Fluid.of('gtceu:lubricant', 250)])
  ]).transitionalItem(transitional)
    .loops(3)
  event.remove({ output: 'create:steam_engine' })
})
ServerEvents.recipes(event => {
  let transitional = 'minecraft:paper'
  event.recipes.create.sequenced_assembly([
    '2x gtceu:resistor'
  ], 'minecraft:paper', [
    event.recipes.createDeploying(transitional, [transitional, 'gtceu:copper_single_wire']),
    event.recipes.createDeploying(transitional, [transitional, 'gtceu:coal_dust']),
    event.recipes.createDeploying(transitional, [transitional, 'gtceu:sticky_resin']),
    event.recipes.createPressing(transitional, [transitional]),
  ]).transitionalItem(transitional)
    .loops(1)
})
ServerEvents.recipes(event => {
  let transitional = 'gtceu:small_gallium_arsenide_dust'
  event.recipes.create.sequenced_assembly([
    '2x gtceu:diode'
  ], 'gtceu:small_gallium_arsenide_dust', [
    event.recipes.createDeploying(transitional, [transitional, 'gtceu:copper_single_wire']),
    event.recipes.createFilling(transitional, [transitional, Fluid.of('gtceu:tin',144)]),
    event.recipes.createPressing(transitional, [transitional]),
  ]).transitionalItem(transitional)
    .loops(1)
})

ServerEvents.recipes(event =>{
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": 'gtceu:resin_circuit_board'
    },
    "loops": 1,
    "results": {
        "item": "gtceu:basic_electronic_circuit"
      },
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "gtceu:resin_circuit_board"
          },
          {
            "item": "gtceu:copper_quadruple_wire"
          }
        ],
        "results": [
          {
            "item": "gtceu:resin_circuit_board"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "gtceu:resin_circuit_board"
          },
          {
            "item": "gtceu:red_alloy_double_wire"
          }
        ],
        "results": [
          {
            "item": "gtceu:resin_circuit_board"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "gtceu:resin_circuit_board"
          },
          {
            "item": 'gtceu:vacuum_tube'
          }
        ],
        "results": [
          {
            "item": "gtceu:resin_circuit_board"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "gtceu:resin_circuit_board"
          },
          {
            "item": 'gtceu:resistor'
          }
        ],
        "results": [
          {
            "item": "gtceu:resin_circuit_board"
          }
        ]
      },
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": "gtceu:resin_circuit_board"
          },
          {
            "amount": 288,
            "fluid": 'gtceu:rubber'
          }
        ],
        "results": [
          {
            "item": "gtceu:resin_circuit_board"
          }
        ]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          {
            "item": "gtceu:resin_circuit_board"
          }
        ],
        "results": [
          {
            "item": "gtceu:resin_circuit_board"
          }
        ]
      },
      {
        "type": "create_new_age:energising",
        "energy_needed": 10000,
        "ingredients": [
          {
            "item": "gtceu:resin_circuit_board"
          }
        ],
        "results": [
          {
            "item": "gtceu:resin_circuit_board"
          }
        ]
      }      
    ],
    "transitionalItem": {
      "item": "gtceu:resin_circuit_board"
    }
  })
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
  event.recipes.create.crushing('gtceu:flint_dust', 'minecraft:flint')
  event.recipes.create.crushing('gtceu:quartz_sand_dust', 'minecraft:sand')
  event.recipes.create.milling('gtceu:flint_dust', 'minecraft:flint')
  event.recipes.create.milling('gtceu:quartz_sand_dust', 'minecraft:sand')
  event.recipes.create.crushing('gtceu:asurine_dust','create:asurine')
  event.recipes.create.crushing('gtceu:crimsite_dust','create:crimsite')
  event.recipes.create.crushing('gtceu:ochrum_dust','create:ochrum')
  event.recipes.create.crushing('gtceu:veridium_dust','create:veridium')
  event.recipes.create.splashing(['gtceu:silicon_dioxide_dust',Item.of('4x gtceu:zinc_nugget').withChance(0.5)],'gtceu:asurine_dust')
  event.recipes.create.splashing(['gtceu:silicon_dioxide_dust',Item.of('4x minecraft:iron_nugget').withChance(0.5)],'gtceu:crimsite_dust')
  event.recipes.create.splashing(['gtceu:silicon_dioxide_dust',Item.of('4x gtceu:precious_alloy_nugget').withChance(0.5)],'gtceu:ochrum_dust')
  event.recipes.create.splashing(['gtceu:silicon_dioxide_dust',Item.of('4x gtceu:copper_nugget').withChance(0.5)],'gtceu:veridium_dust')
  event.recipes.create.splashing(['gtceu:stone_dust',Item.of('minecraft:diamond').withChance(0.05),Item.of('minecraft:gold_nugget').withChance(0.05),Item.of('minecraft:iron_nugget').withChance(0.1),Item.of('gtceu:copper_nugget').withChance(0.08),Item.of('gtceu:zinc_nugget').withChance(0.05),Item.of('gtceu:platinum_nugget').withChance(0.01),Item.of('gtceu:manganese_nugget').withChance(0.04),Item.of('gtceu:chromium_nugget').withChance(0.02)],'gtceu:deepslate_dust')
  event.recipes.create.crushing(['gtceu:deepslate_dust',Item.of('gtceu:flint_dust').withChance(0.25)],'minecraft:tuff')
  event.remove({id:'create:crushing/tuff'})
  event.remove({id:'create:crushing/tuff_recycling'})
})

ServerEvents.recipes(event => {
  event.recipes.create.item_application('create:shadow_steel_casing', ['minecraft:obsidian', 'gtceu:shadow_steel_plate'])
  event.recipes.create.mixing('createutilities:void_steel_ingot', ['create:shadow_steel', 'gtceu:ender_pearl_dust']).superheated()
  event.remove({ id: 'createutilities:mixing/void_steel_ingot' })
  event.recipes.create.mixing('4x create:chromatic_compound', [Fluid.of('minecraft:lava', 500), 'gtceu:netherite_dust', 'gtceu:andesite_alloy_ingot', 'create:polished_rose_quartz'])
})
