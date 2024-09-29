ServerEvents.recipes(event => {
  function infuser(event,input,output,mana){
    event.custom({
      "type": "mythicbotany:infuser",
      "fromColor": 255,
      "group": "infuser",
      "ingredients": input.map(item =>{
        return Item.of(item).toJson()
      }),
      "mana": mana,
      "output": Item.of(output).toJson(),
      "toColor": 65280
    })
  }
  infuser(event,['botania:manasteel_ingot','botania:mana_pearl','botania:mana_diamond','botania:rune_mana'],'botania:terrasteel_ingot',500000)
  infuser(event,['kubejs:advanced_mana_transistor','kubejs:advanced_mana_capacitor','kubejs:advanced_mana_inductor','gtceu:advanced_integrated_circuit'],'kubejs:mana_integrated_circuit',250000)
  event.custom({
    "type": "mythicbotany:infuser",
    "fromColor": 255,
    "group": "infuser",
    "ingredients": [
      {
        "item": "botania:manasteel_ingot"
      },
      {
        "item": "botania:mana_pearl"
      },
      {
        "tag": "botania:mana_diamond_gems"
      },
      {
        "item": "botania:rune_mana"
      }
    ],
    "mana": 500000,
    "output": {
      "count": 1,
      "item": "botania:terrasteel_ingot"
    },
    "toColor": 65280
  }).id('mythicbotany:mythicbotany_infusion/terrasteel_ingot')
  event.custom({
    "type": "mythicbotany:infuser",
    "fromColor": 16711821,
    "group": "infuser",
    "ingredients": [
      {
        "item": "botania:elementium_ingot"
      },
      {
        "tag": "botania:dragonstone_gems"
      },
      {
        "item": "botania:pixie_dust"
      },
      {
        "item": "botania:quartz_elven"
      },
      {
        "item": "botania:elf_glass"
      }
    ],
    "mana": 1500000,
    "output": {
      "count": 1,
      "item": "mythicbotany:alfsteel_ingot"
    },
    "toColor": 16750080
  }).id('mythicbotany:mythicbotany_infusion/alfsteel_ingot')
  event.custom({
    "type": "mythicbotany:infuser",
    "fromColor": 16711821,
    "group": "infuser",
    "ingredients": [
      {
        "item": "botania:gaia_ingot"
      },
      {
        "item": "botania:terrasteel_ingot"
      },
      {
        "item": "mythicbotany:alfsteel_ingot"
      }
    ],
    "mana": 2000000,
    "output": {
      "count": 1,
      "item": "gtceu:super_mana_ingot"
    },
    "toColor": 16750080
  })
  event.custom({
    "type": "mythicbotany:rune_ritual",
    "center": {
      "item": "botania:gaia_ingot"
    },
    "group": "rune_rituals",
    "inputs": [
      {
        "item": "mythicbotany:vanaheim_rune"
      },
      {
        "item": "mythicbotany:alfheim_rune"
      },
      {
        "item": "mythicbotany:niflheim_rune"
      }
    ],
    "mana": 1000000,
    "outputs": [
      {
        "count": 1,
        "item": "mythicbotany:mana_collector"
      }
    ],
    "runes": [
      {
        "consume": true,
        "rune": {
          "item": "botania:dragonstone"
        },
        "x": 2,
        "z": 2
      },
      {
        "consume": true,
        "rune": {
          "item": "botania:dragonstone"
        },
        "x": 2,
        "z": -2
      },
      {
        "consume": true,
        "rune": {
          "item": "botania:dragonstone"
        },
        "x": -2,
        "z": 2
      },
      {
        "consume": true,
        "rune": {
          "item": "botania:dragonstone"
        },
        "x": -2,
        "z": -2
      },
      {
        "consume": true,
        "rune": {
          "item": "botania:glimmering_dreamwood"
        },
        "x": 1,
        "z": 4
      },
      {
        "consume": true,
        "rune": {
          "item": "botania:glimmering_dreamwood"
        },
        "x": 1,
        "z": -4
      },
      {
        "consume": true,
        "rune": {
          "item": "botania:glimmering_dreamwood"
        },
        "x": -1,
        "z": 4
      },
      {
        "consume": true,
        "rune": {
          "item": "botania:glimmering_dreamwood"
        },
        "x": -1,
        "z": -4
      },
      {
        "consume": true,
        "rune": {
          "item": "botania:glimmering_dreamwood"
        },
        "x": 4,
        "z": 0
      },
      {
        "consume": true,
        "rune": {
          "item": "botania:glimmering_dreamwood"
        },
        "x": 4,
        "z": 1
      },
      {
        "consume": true,
        "rune": {
          "item": "botania:glimmering_dreamwood"
        },
        "x": 4,
        "z": -1
      },
      {
        "consume": true,
        "rune": {
          "item": "botania:glimmering_dreamwood"
        },
        "x": -4,
        "z": 0
      },
      {
        "consume": true,
        "rune": {
          "item": "botania:glimmering_dreamwood"
        },
        "x": -4,
        "z": 1
      },
      {
        "consume": true,
        "rune": {
          "item": "botania:glimmering_dreamwood"
        },
        "x": -4,
        "z": -1
      },
      {
        "consume": true,
        "rune": {
          "item": "botania:glimmering_dreamwood"
        },
        "x": 0,
        "z": 4
      },
      {
        "consume": true,
        "rune": {
          "item": "botania:glimmering_dreamwood"
        },
        "x": 0,
        "z": -4
      },
      {
        "consume": true,
        "rune": {
          "item": "botania:pixie_dust"
        },
        "x": 2,
        "z": 3
      },
      {
        "consume": true,
        "rune": {
          "item": "botania:pixie_dust"
        },
        "x": 3,
        "z": 2
      },
      {
        "consume": true,
        "rune": {
          "item": "botania:pixie_dust"
        },
        "x": 3,
        "z": -2
      },
      {
        "consume": true,
        "rune": {
          "item": "botania:pixie_dust"
        },
        "x": 2,
        "z": -3
      },
      {
        "consume": true,
        "rune": {
          "item": "botania:pixie_dust"
        },
        "x": -3,
        "z": -2
      },
      {
        "consume": true,
        "rune": {
          "item": "botania:pixie_dust"
        },
        "x": -2,
        "z": -3
      },
      {
        "consume": true,
        "rune": {
          "item": "botania:pixie_dust"
        },
        "x": -3,
        "z": 2
      },
      {
        "consume": true,
        "rune": {
          "item": "botania:pixie_dust"
        },
        "x": -2,
        "z": 3
      },
      {
        "consume": true,
        "rune": {
          "item": "bloodmagic:reagentmagnetism"
        },
        "x": 4,
        "z": 4
      },
      {
        "consume": true,
        "rune": {
          "item": "bloodmagic:reagentmagnetism"
        },
        "x": 4,
        "z": -4
      },
      {
        "consume": true,
        "rune": {
          "item": "bloodmagic:reagentmagnetism"
        },
        "x": -4,
        "z": 4
      },
      {
        "consume": true,
        "rune": {
          "item": "bloodmagic:reagentmagnetism"
        },
        "x": -4,
        "z": -4
      },
      {
        "consume": true,
        "rune": {
          "item": "botania:spark"
        },
        "x": 5,
        "z": 0
      },
      {
        "consume": true,
        "rune": {
          "item": "botania:spark"
        },
        "x": -5,
        "z": 0
      },
      {
        "consume": true,
        "rune": {
          "item": "botania:light_relay"
        },
        "x": 0,
        "z": 5
      },
      {
        "consume": true,
        "rune": {
          "item": "botania:light_relay"
        },
        "x": 0,
        "z": -5
      }
    ],
    "ticks": 200
  })
    .id('mythicbotany:mana_collector')
  event.replaceInput({}, 'mythicbotany:alfsteel_ingot', 'mythicbotany:alfsteel_ingot')
  event.replaceOutput({}, 'mythicbotany:alfsteel_ingot', 'mythicbotany:alfsteel_ingot')
})