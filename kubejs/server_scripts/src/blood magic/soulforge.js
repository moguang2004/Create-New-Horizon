ServerEvents.recipes(event =>{
    let removeid = ['bloodmagic:soulforge/demon_crucible',
                    'bloodmagic:soulforge/demon_crystallizer',
                    'bloodmagic:soul_forge',
                    'bloodmagic:soulforge/demon_pylon']
    removeid.forEach(r => {
        event.remove({id:r})
    })
    event.custom({
        "type": "bloodmagic:soulforge",
        "drain": 100.0,
        "input0": {
          "item": "minecraft:cauldron"
        },
        "input1": {
          "item": "bloodmagic:reagentvoid"
        },
        "input2": {
          "item": "bloodmagic:reagentsight"
        },
        "input3": {
          "item": "bloodmagic:reinforcedslate"
        },
        "minimumDrain": 400.0,
        "output": {
          "item": "bloodmagic:demoncrucible"
        }
      })
    event.custom({
        "type": "bloodmagic:soulforge",
        "drain": 100.0,
        "input0": {
          "item": "bloodmagic:soulforge"
        },
        "input1": {
          "item": "bloodmagic:reagentmagnetism"
        },
        "input2": {
          "item": "bloodmagic:reagentbloodlight"
        },
        "input3": {
          "item": "botania:mana_glass"
        },
        "minimumDrain": 500.0,
        "output": {
          "item": "bloodmagic:demoncrystallizer"
        }
      })
    event.custom({
        "type": "bloodmagic:soulforge",
        "drain": 50.0,
        "input0": 
          {
            "item": "bloodmagic:reagentsuppression"
          },
        "input1": {
          "item": "bloodmagic:reagentteleposition"
        },
        "input2": {
          "item": "bloodmagic:demoncrucible"
        },
        "input3": {
          "item": "bloodmagic:demoncrystallizer"
        },
        "minimumDrain": 400.0,
        "output": {
          "item": "bloodmagic:demonpylon"
        }
      })
    event.recipes.extendedcrafting.shaped_table('bloodmagic:soulforge',[
        "     ",
        "A   A",
        "BCDCB",
        "EFGFE",
        "H I H"
      ],{
        A:'gtceu:dark_steel_plate',
        B:'gtceu:dark_steel_ingot',
        C:'gtceu:dark_steel_block',
        D:'bloodmagic:blankslate',
        E:'botania:elf_glass_pane',
        F:'gtceu:small_terrasteel_gear',
        G:'gtceu:dark_steel_gear',
        H:'gtceu:dark_steel_rod',
        I:'botania:rune_fire'
      })
})
