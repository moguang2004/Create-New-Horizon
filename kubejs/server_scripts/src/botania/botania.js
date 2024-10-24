ServerEvents.recipes(event => {
  function mana_infusion(event,input,output,mana){
    event.custom({
      "type": "botania:mana_infusion",
      "input": {
        "item": input
      },
      "mana": mana,
      "output": {
        "item": output
      }
    })
  }
  event.custom({
    "type": "botania:mana_infusion",
    "input": {
      "tag": 'minecraft:wool'
    },
    "mana": 3000,
    "output": {
      "item": 'cold_sweat:goat_fur'
    }
  })
  //manasteel
  mana_infusion(event,'minecraft:iron_ingot','botania:manasteel_ingot',3000)
  mana_infusion(event,'minecraft:iron_block','botania:manasteel_block',27000)
  mana_infusion(event,'gtceu:resistor','kubejs:mana_resistor',3000)
  mana_infusion(event,'gtceu:capacitor','kubejs:mana_capacitor',3000)
  mana_infusion(event,'gtceu:diode','kubejs:mana_diode',4000)
  mana_infusion(event,'gtceu:transistor','kubejs:mana_transistor',4000)
  mana_infusion(event,'gtceu:inductor','kubejs:mana_inductor',5000)

  function runic_altar(event,input,output,mana){
    event.custom({
      "type": "botania:runic_altar",
      "ingredients": input.map(item =>{
        return Item.of(item).toJson()
      }),
      "mana": mana,
      "output": output
    })
  }
  function elven_trade(event,input,output){
    event.custom({
      "type": "botania:elven_trade",
      "ingredients": input.map(item =>{
        return Item.of(item).toJson()
      }),
      "output": Item.of(output).toJson()
    })
  }
  //elvenquartz
  elven_trade(event,['botania:quartz_mana'],'botania:quartz_elven')
  //elementiumingot
  elven_trade(event,['botania:manasteel_ingot','botania:manasteel_ingot'],'botania:elementium_ingot')
  elven_trade(event,['botania:manasteel_block','botania:manasteel_block'],'botania:elementium_block')
  elven_trade(event,['kubejs:mana_resistor','kubejs:mana_resistor'],'kubejs:advanced_mana_resistor')
  elven_trade(event,['kubejs:mana_inductor','kubejs:mana_inductor'],'kubejs:advanced_mana_inductor')
  elven_trade(event,['kubejs:mana_capacitor','kubejs:mana_capacitor'],'kubejs:advanced_mana_capacitor')
  elven_trade(event,['kubejs:mana_transistor','kubejs:mana_transistor'],'kubejs:advanced_mana_transistor')
  elven_trade(event,['kubejs:mana_diode','kubejs:mana_diode'],'kubejs:advanced_mana_diode')

  function terra_plate(event,input,output,mana){
    event.custom({
      "type": "botania:terra_plate",
      "ingredients": input.map(item =>{
        return Item.of(item).toJson()
      }),
      "mana": mana,
      "result": Item.of(output).toJson()
    })
  }
  //terra_steel
  terra_plate(event,['botania:manasteel_ingot','botania:mana_pearl','botania:mana_diamond','botania:rune_mana'],'botania:terrasteel_ingot',500000)
  terra_plate(event,['kubejs:mana_resistor','kubejs:mana_capacitor','kubejs:mana_diode','gtceu:good_electronic_circuit'],'kubejs:mana_electronic_circuit',100000)
  
  //mana_reactor
  event.recipes.gtceu.mana_reactor('hydroangeas')
  .itemInputs('botania:hydroangeas')
  .inputFluids(Fluid.of('minecraft:water',8000))
  .outputFluids(Fluid.of('gtceu:mana',800))
  .duration(600)
  .EUt(7)
  event.recipes.gtceu.mana_reactor('kekimurus')
  .notConsumable('botania:kekimurus')
  .itemInputs('minecraft:cake')
  .outputFluids(Fluid.of('gtceu:mana',280))
  .duration(500)
  .EUt(7)
  event.recipes.gtceu.mana_reactor('munchdew')
  .notConsumable('botania:munchdew')
  .itemInputs('16x #forge:leaves')
  .outputFluids(Fluid.of('gtceu:mana',64))
  .duration(80)
  .EUt(7)
  event.recipes.gtceu.mana_reactor('rosa_arcana')
  .notConsumable('botania:rosa_arcana')
  .inputFluids(Fluid.of('enderio:xp_juice',2000))
  .outputFluids(Fluid.of('gtceu:mana',150))
  .duration(100)
  .EUt(7)
//热爆花
  event.recipes.gtceu.mana_reactor('entropinnyum')
  .notConsumable('botania:entropinnyum')
  .itemInputs('minecraft:tnt')
  .outputFluids(Fluid.of('gtceu:mana',180))
  .duration(100)
  .EUt(7)
//粘球草
  event.recipes.gtceu.mana_reactor('narslimmus')
  .notConsumable('botania:narslimmus')
  .itemInputs('64x minecraft:slime_ball')
  .outputFluids(Fluid.of('gtceu:mana',240))
  .duration(250)
  .EUt(7)
//炽玫瑰
  event.recipes.gtceu.mana_reactor('thermalily')
  .notConsumable('botania:thermalily')
  .inputFluids(Fluid.of('minecraft:lava',10000))
  .outputFluids(Fluid.of('gtceu:mana',480))
  .duration(900)
  .EUt(7)
  Ingredient.of('#forge:foods').getItemTypes().forEach(food => {
    if (food.toString() != 'pumpkin_pie') {
        let nutrition = food.getFoodProperties().getNutrition()
        let saturation = food.getFoodProperties().getSaturationModifier()
        let rate = nutrition + saturation / 2
        event.recipes.gtceu.mana_reactor(food.toString() + '_gourmaryllis')
            .EUt(7)
            .itemInputs(food.asIngredient().getItemIds())
            .notConsumable('botania:gourmaryllis')
            .outputFluids(Fluid.of('gtceu:mana', 3 * Math.floor(Math.pow(rate,2))))
            .duration(30*rate/2)
    }
})

  //custom
  event.custom({
    "type": "botania:runic_altar",
    "ingredients": [
      {
        "item": "minecraft:kelp"
      },
      {
        "tag": "minecraft:boats"
      },
      {
        "item": "minecraft:sugar_cane"
      },
      {
        "item": "minecraft:fishing_rod"
      },
      {
        "item": "minecraft:lily_pad"
      },
      {
        "item": "ars_nouveau:blue_archwood_log"
      }
    ],
    "mana": 6000,
    "output": {
      "item": "botania:rune_water",
      "count": 2
    }
  })
  event.custom({
    "type": "botania:runic_altar",
    "ingredients": [
      {
        "item": "gtceu:andesite_alloy_ingot"
      },
      {
        "item": "gtceu:calcite_dust"
      },
      {
        "item": "minecraft:sandstone"
      },
      {
        "item": "minecraft:clay_ball"
      },
      {
        "item": "alexscaves:limestone"
      },
      {
        "item": "ars_nouveau:green_archwood_log"
      }
    ],
    "mana": 6000,
    "output": {
      "item": "botania:rune_earth",
      "count": 2
    }
  })
  event.custom({
    "type": "botania:runic_altar",
    "ingredients": [
      {
        "item": "ars_nouveau:red_archwood_log"
      },
      {
        "item": "minecraft:magma_block"
      },
      {
        "item": "minecraft:gunpowder"
      },
      {
        "item": "minecraft:crimson_fungus"
      },
      {
        "item": "minecraft:blaze_powder"
      },
      {
        "item": "create:blaze_cake"
      }
    ],
    "mana": 6000,
    "output": {
      "item": "botania:rune_fire",
      "count": 2
    }
  })
  event.custom({
    "type": "botania:runic_altar",
    "ingredients": [
      {
        "item": "minecraft:dandelion"
      },
      {
        "item": "create:white_sail"
      },
      {
        "item": "ars_nouveau:purple_archwood_log"
      },
      {
        "item": "create:propeller"
      },
      {
        "item": "minecraft:feather"
      },
      {
        "item": "minecraft:string"
      }
    ],
    "mana": 6000,
    "output": {
      "item": "botania:rune_air",
      "count": 2
    }
  })
  event.remove({ output: 'botania:rune_water' })
  event.remove({ output: 'botania:rune_earth' })
  event.remove({ output: 'botania:rune_fire' })
  event.remove({ output: 'botania:rune_air' })
  let remove = ['botania:mana_pool',
    'botania:mana_infusion/manasteel',
    'botania:mana_infusion/manasteel_block',
    'botania:petal_apothecary/endoflame',
    'mythicbotany:central_rune_holder',
    'mythicbotany:rune_holder',
    'botania:terra_plate/terrasteel_ingot',
    'botania:runic_altar/mana',
    'botania:elven_trade/elf_quartz',
    'botania:elven_trade/elementium',
    'botania:elven_trade/elementium_block',

    'botania:mana_ring',
    'botania:mana_ring_greater',
    'botania:terra_pick',
    'botania:terrasteel_helmet',
    'botania:terrasteel_chestplate',
    'botania:terrasteel_leggings',
    'botania:terrasteel_boots',
    'botania:runic_altar/spring',
    'botania:runic_altar/summer',
    'botania:runic_altar/autumn',
    'botania:runic_altar/winter'
  ]
  remove.forEach(r => {
    event.remove({ id: r })
  })
  event.shaped(
    Item.of('botania:mana_pool', 1), [
    "   ",
    "ABA",
    "AAA"
  ], {
    A: 'botania:livingrock',
    B: 'botania:mana_tablet',
  })
  //endoflame
  event.custom({
    "type": "botania:petal_apothecary",
    "ingredients": [
      {
        "tag": "botania:petals/brown"
      },
      {
        "tag": "botania:petals/brown"
      },
      {
        "tag": "botania:petals/red"
      },
      {
        "tag": "botania:petals/light_gray"
      },
      {
        "item": "botania:rune_fire"
      }
    ],
    "output": {
      "item": "botania:endoflame"
    },
    "reagent": {
      "tag": "botania:seed_apothecary_reagent"
    }
  })
  event.recipes.gtceu.forming_press('central_rune_holder')
    .EUt(30)
    .duration(100)
    .itemInputs(['gtceu:terra_steel_plate', '2x gtceu:terra_steel_screw'])
    .itemOutputs('mythicbotany:central_rune_holder')
  event.recipes.gtceu.forming_press('rune_holder')
    .EUt(30)
    .duration(100)
    .itemInputs(['gtceu:steel_plate', '2x gtceu:steel_screw'])
    .itemOutputs('mythicbotany:rune_holder')
  event.replaceInput({ id: 'botania:mana_spreader' }, 'minecraft:copper_ingot', 'minecraft:dispenser')
  //manarune
  event.custom({
    "type": "botania:runic_altar",
    "ingredients": [
      {
        "item": "botania:quartz_mana"
      },
      {
        "item": "botania:mana_powder"
      },
      {
        "item": "botania:manaweave_cloth"
      },
      {
        "item": "botania:mana_bottle"
      },
      {
        "item": "botania:mana_glass"
      },
      {
        "item": "botania:mana_cookie"
      }
    ],
    "mana": 8000,
    "output": {
      "item": "botania:rune_mana"
    }
  })
  //manaring
  event.shaped(
    Item.of('botania:mana_ring', 1), [
    "ABC",
    "DED",
    "CFG"
  ], {
    A: 'botania:mana_tablet',
    B: 'gtceu:mana_steel_screw',
    C: 'gtceu:mana_steel_rod',
    D: 'gtceu:mana_steel_plate',
    E: 'gtceu:mana_steel_ring',
    F: 'gtceu:mana_steel_bolt',
    G: '#forge:tools/hammers'
  })
  //manaringgreater
  event.shaped(
    Item.of('botania:mana_ring_greater', 1), [
    "ABC",
    "DED",
    "CFG"
  ], {
    A: 'botania:mana_ring',
    B: 'gtceu:terra_steel_screw',
    C: 'gtceu:terra_steel_rod',
    D: 'gtceu:terra_steel_plate',
    E: 'gtceu:terra_steel_ring',
    F: 'gtceu:terra_steel_bolt',
    G: '#forge:tools/hammers'
  })
  event.shaped(
    Item.of('botania:terra_pick', 1), [
    "ABA",
    "ACA",
    " D "
  ], {
    A: 'gtceu:terra_steel_plate',
    B: 'botania:manasteel_pick',
    C: 'botania:mana_tablet',
    D: 'botania:livingwood_twig',
  })
  event.shaped(
    Item.of('botania:terrasteel_helmet', 1), [
    "ABA",
    "BCB",
    "EDE"
  ], {
    A: 'botania:livingwood_twig',
    B: 'gtceu:terra_steel_plate',
    C: 'botania:manasteel_helmet',
    D: 'botania:rune_spring',
    E: 'gtceu:terra_steel_foil'
  })
  event.shaped(
    Item.of('botania:terrasteel_chestplate', 1), [
    "ABA",
    "CDC",
    "EFE"
  ], {
    A: 'botania:livingwood_twig',
    B: 'botania:rune_summer',
    C: 'gtceu:double_terra_steel_plate',
    D: 'botania:manasteel_chestplate',
    E: 'gtceu:terra_steel_screw',
    F: 'gtceu:small_terra_steel_gear'
  })
  event.shaped(
    Item.of('botania:terrasteel_leggings', 1), [
    "ABA",
    "CDC",
    "EFE"
  ], {
    A: 'gtceu:terra_steel_rod',
    B: 'botania:manasteel_leggings',
    C: 'gtceu:terra_steel_plate',
    D: 'botania:rune_autumn',
    E: 'gtceu:terra_steel_foil',
    F: 'gtceu:terra_steel_ring'
  })
  event.shaped(
    Item.of('botania:terrasteel_boots', 1), [
    "A A",
    "BCB",
    "DED"
  ], {
    A: 'botania:livingwood_twig',
    B: 'gtceu:terra_steel_rod',
    C: 'botania:manasteel_boots',
    D: 'gtceu:terra_steel_foil',
    E: 'botania:rune_winter',
  })
  //spring
  event.custom({
    "type": "botania:runic_altar",
    "ingredients": [
      {
        "item": "botania:rune_water"
      },
      {
        "item": "botania:rune_fire"
      },
      {
        "item": "twilightforest:root"
      },
      {
        "item": "minecraft:moss_block"
      },
      {
        "item": "minecraft:cherry_sapling"
      },
      {
        "item": "twilightforest:hollow_oak_sapling"
      }
    ],
    "mana": 10000,
    "output": {
      "item": "botania:rune_spring",
      "count": 1
    }
  })

  //summer
  event.custom({
    "type": "botania:runic_altar",
    "ingredients": [
      {
        "item": "botania:rune_earth"
      },
      {
        "item": "botania:rune_air"
      },
      {
        "item": "twilightforest:cicada"
      },
      {
        "item": "create:propeller"
      },
      {
        "item": "minecraft:melon_slice"
      },
      {
        "item": "cold_sweat:hoglin_hide"
      }
    ],
    "mana": 10000,
    "output": {
      "item": "botania:rune_summer",
      "count": 1
    }
  })
  //autumn
  event.custom({
    "type": "botania:runic_altar",
    "ingredients": [
      {
        "item": "botania:rune_fire"
      },
      {
        "item": "botania:rune_air"
      },
      {
        "item": "twilightforest:fallen_leaves"
      },
      {
        "item": "minecraft:wheat"
      },
      {
        "item": "biomesoplenty:maple_sapling"
      },
      {
        "item": "farmersdelight:straw"
      }
    ],
    "mana": 10000,
    "output": {
      "item": "botania:rune_autumn",
      "count": 1
    }
  })
  //winter
  event.custom({
    "type": "botania:runic_altar",
    "ingredients": [
      {
        "item": "botania:rune_water"
      },
      {
        "item": "botania:rune_earth"
      },
      {
        "tag": "minecraft:wool"
      },
      {
        "item": "minecraft:snow_block"
      },
      {
        "item": "twilightforest:arctic_fur"
      },
      {
        "item": "gtceu:ice_dust"
      }
    ],
    "mana": 10000,
    "output": {
      "item": "botania:rune_winter",
      "count": 1
    }
  })
  //pure daisy
  event.custom({
    "type": "botania:petal_apothecary",
    "ingredients": [
      {
        "tag": "botania:petals/white"
      },
      {
        "tag": "botania:petals/yellow"
      },
      {
        "tag": "botania:petals/white"
      },
      {
        "item": "minecraft:dandelion"
      }
    ],
    "output": {
      "item": "botania:pure_daisy"
    },
    "reagent": {
      "item": "minecraft:fern"
    }
  })
    .id('botania:petal_apothecary/pure_daisy')
  //vanaheim_rune
  event.custom({
    "type": "botania:runic_altar",
    "ingredients": [
      {
        "item": "botania:rune_spring"
      },
      {
        "item": "botania:rune_earth"
      },
      {
        "item": "botania:rune_pride"
      },
      {
        "item": "botania:alfheim_portal"
      },
      {
        "item": "botania:terrasteel_ingot"
      }
    ],
    "mana": 20000,
    "output": {
      "item": "mythicbotany:vanaheim_rune",
      "count": 1
    }
  })
    .id('mythicbotany:vanaheim_rune_runic_altar')

  //alfheim_rune
  event.custom({
    "type": "botania:runic_altar",
    "ingredients": [
      {
        "item": "botania:rune_air"
      },
      {
        "item": "botania:rune_summer"
      },
      {
        "item": "botania:rune_lust"
      },
      {
        "tag": "minecraft:leaves"
      },
      {
        "item": "botania:elementium_ingot"
      }
    ],
    "mana": 20000,
    "output": {
      "item": "mythicbotany:alfheim_rune",
      "count": 1
    }
  })
    .id('mythicbotany:alfheim_rune_runic_altar')

  //midgard_rune
  event.custom({
    "type": "botania:runic_altar",
    "ingredients": [
      {
        "item": "botania:rune_earth"
      },
      {
        "item": "botania:rune_spring"
      },
      {
        "item": "botania:rune_greed"
      },
      {
        "item": "minecraft:grass_block"
      },
      {
        "item": "botania:manasteel_ingot"
      }
    ],
    "mana": 20000,
    "output": {
      "item": "mythicbotany:midgard_rune",
      "count": 1
    }
  })
    .id('mythicbotany:midgard_rune_runic_altar')

  event.shaped(
        Item.of("botania:natura_pylon", 1), [
          "ADA",
          "ABA",
          "CDC"
        ], {
        A: "gtceu:terra_steel_foil",
        B: "botania:mana_pylon",
        C: "gtceu:terra_steel_ring",
        D: "botania:mana_pearl"
    }).id('botania:natura_pylon')
  event.custom({
    "type": "botania:petal_apothecary",
    "ingredients": [
      {
        "item": "alexscaves:primal_magma"
      },
      {
        "tag": "botania:petals/red"
      },
      {
        "tag": "botania:petals/gray"
      },
      {
        "tag": "botania:petals/gray"
      },
      {
        "item": "gtceu:industrial_tnt"
      },
      {
        "item": "gtceu:super_mana_ingot"
      },
      {
        "item": "botania:rune_wrath"
      },
      {
        "item": "botania:rune_fire"
      }
    ],
    "output": {
      "item": "botania:entropinnyum"
    },
    "reagent": {
      "tag": "botania:seed_apothecary_reagent"
    }
  }).id('botania:petal_apothecary/entropinnyum')
})
