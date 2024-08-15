
ServerEvents.recipes(event =>{
  event.remove({id:'enderio:iron_gear'})
  event.remove({id:'enderio:alloy_smelting/energetic_alloy_ingot'})
  event.recipes.gtceu.alloy_smelter('conductive_alloy_ingot')
  .EUt(30)
  .duration(40)
  .itemInputs(['1x minecraft:iron_ingot','2x minecraft:redstone'])
  .itemOutputs('1x gtceu:conductive_alloy_ingot')
  event.recipes.gtceu.alloy_smelter('pulsating_alloy_ingot')
  .EUt(30)
  .duration(50)
  .itemInputs(['1x minecraft:iron_ingot','1x minecraft:ender_pearl'])
  .itemOutputs('1x gtceu:pulsating_alloy_ingot')
  event.recipes.gtceu.alloy_smelter('soularium_ingot')
  .EUt(120)
  .duration(60)
  .itemInputs(['1x minecraft:gold_ingot','#forge:ground/soul'])
  .itemOutputs('1x gtceu:soularium_ingot')
  event.recipes.gtceu.alloy_smelter('copper_alloy_ingot')
  .EUt(120)
  .duration(40)
  .itemInputs(['1x minecraft:copper_ingot','1x gtceu:silicon_ingot'])
  .itemOutputs('1x gtceu:copper_alloy_ingot')
  event.recipes.gtceu.alloy_smelter('redstone_alloy_ingot')
  .EUt(120)
  .duration(50)
  .itemInputs(['1x minecraft:redstone','1x gtceu:silicon_ingot'])
  .itemOutputs('1x gtceu:redstone_alloy_ingot')
  event.remove({id:'enderio:energy_conduit'})
  event.shaped(
    Item.of('enderio:basic_energy_conduit', 2),[
      "AAA",
      "BBB",
      "AAA"
    ],{
      A: 'enderio:conduit_binder',
      B: 'gtceu:conductive_alloy_single_wire'
    })
  event.recipes.gtceu.assembler('enhanced_energy_conduit')
  .EUt(30)
  .duration(100)
  .itemInputs(['1x enderio:basic_energy_conduit','2x gtceu:energetic_alloy_single_wire','4x enderio:conduit_binder'])
  .itemOutputs('2x enderio:enhanced_energy_conduit')
  event.recipes.gtceu.assembler('vibrant_energy_conduit')
  .EUt(30)
  .duration(100)
  .itemInputs(['1x enderio:enhanced_energy_conduit','2x gtceu:vibrant_alloy_single_wire','4x enderio:conduit_binder'])
  .itemOutputs('2x enderio:vibrant_energy_conduit')
  event.recipes.gtceu.assembler('ender_energy_conduit')
  .EUt(30)
  .duration(100)
  .itemInputs(['1x enderio:vibrant_energy_conduit','2x gtceu:end_steel_single_wire','4x enderio:conduit_binder'])
  .itemOutputs('2x enderio:ender_energy_conduit')
  event.recipes.gtceu.assembler('melodic_energy_conduit')
  .EUt(30)
  .duration(100)
  .itemInputs(['1x enderio:ender_energy_conduit','2x gtceu:melodic_alloy_single_wire','4x enderio:conduit_binder'])
  .itemOutputs('2x enderio:melodic_energy_conduit')
  event.recipes.gtceu.assembler('stellar_energy_conduit')
  .EUt(30)
  .duration(100)
  .itemInputs(['1x enderio:melodic_energy_conduit','2x gtceu:stellar_alloy_single_wire','4x enderio:conduit_binder'])
  .itemOutputs('2x enderio:stellar_energy_conduit')
  event.recipes.gtceu.mixer('energetic_alloy')
  .EUt(30)
  .duration(100)
  .itemInputs(['minecraft:redstone','minecraft:glowstone','2x gtceu:gold_dust'])
  .itemOutputs('2x gtceu:energetic_alloy_dust')
  event.recipes.gtceu.mixer('vibrant_alloy')
  .EUt(120)
  .duration(100)
  .itemInputs(['gtceu:energetic_alloy_dust','gtceu:ender_pearl_dust'])
  .itemOutputs('gtceu:vibrant_alloy_dust')
  event.recipes.gtceu.mixer('end_steel')
  .EUt(480)
  .duration(100)
  .itemInputs(['gtceu:dark_steel_dust','gtceu:obsidian_dust','gtceu:endstone_dust'])
  .itemOutputs('3x gtceu:end_steel_dust')
  event.replaceInput({id:'enderio:ensouled_chassis'},'minecraft:quartz','enderio:void_chassis')
  // event.remove({id:'enderio:kjs/e447tb35ps8jdu9tf2ijyxjaf'})
  // event.remove({id:'enderio:kjs/27zokrmagcin1mlx9cyixdwzl'})
  // event.remove({id:''})
  // event.remove({id:''})
  // event.remove({id:''})
  // event.remove({id:''})
    /*event.custom(
        {
            "type": "enderio:alloy_smelting",
            "energy": 4800,
            "experience": 0.3,
            "inputs": [
              {
                "count": 1,
                "ingredient": {
                  "tag": "forge:dusts/redstone"
                }
              },
              {
                "count": 1,
                "ingredient": {
                  "tag": "forge:ingots/gold"
                }
              },
              {
                "count": 1,
                "ingredient": {
                  "tag": "forge:dusts/glowstone"
                }
              }
            ],
            "result": {
              "item": "gtceu:energetic_alloy_ingot"
            }
          }
    )
    event.custom(
        {
            "type": "enderio:alloy_smelting",
            "energy": 4800,
            "experience": 0.3,
            "inputs": [
              {
                "count": 1,
                "ingredient": {
                  "tag": "forge:ingots/energetic_alloy"
                }
              },
              {
                "count": 1,
                "ingredient": {
                  "tag": "forge:ender_pearls"
                }
              }
            ],
            "result": {
              "item": "gtceu:vibrant_alloy_ingot"
            }
          }
    )
    event.custom(
        {
            "type": "enderio:alloy_smelting",
            "energy": 6400,
            "experience": 0.3,
            "inputs": [
              {
                "count": 1,
                "ingredient": {
                  "tag": "forge:ingots/iron"
                }
              },
              {
                "count": 1,
                "ingredient": {
                  "tag": "forge:dusts/coal"
                }
              },
              {
                "count": 1,
                "ingredient": {
                  "tag": "forge:obsidian"
                }
              }
            ],
            "result": {
              "item": "gtceu:dark_steel_ingot"
            }
          }
    )
    event.custom(
        {
            "type": "enderio:alloy_smelting",
            "energy": 3200,
            "experience": 0.3,
            "inputs": [
              {
                "count": 1,
                "ingredient": {
                  "tag": "forge:ingots/copper"
                }
              },
              {
                "count": 1,
                "ingredient": {
                  "tag": "forge:silicon"
                }
              }
            ],
            "result": {
              "item": "gtceu:copper_alloy_ingot"
            }
          }
    )
    event.custom(
        {
            "type": "enderio:alloy_smelting",
            "energy": 6400,
            "experience": 0.3,
            "inputs": [
              {
                "count": 1,
                "ingredient": {
                  "tag": "forge:end_stones"
                }
              },
              {
                "count": 1,
                "ingredient": {
                  "tag": "forge:ingots/dark_steel"
                }
              },
              {
                "count": 1,
                "ingredient": {
                  "tag": "forge:obsidian"
                }
              }
            ],
            "result": {
              "item": "gtceu:end_steel_ingot"
            }
          }
    )
    event.custom(
        {
            "type": "enderio:alloy_smelting",
            "energy": 4800,
            "experience": 0.3,
            "inputs": [
              {
                "count": 1,
                "ingredient": {
                  "tag": "forge:ingots/iron"
                }
              },
              {
                "count": 1,
                "ingredient": {
                  "tag": "forge:ender_pearls"
                }
              }
            ],
            "result": {
              "item": "gtceu:pulsating_alloy_ingot"
            }
          }
    )
    /*event.custom(
        {
            "type": "enderio:alloy_smelting",
            "energy": 3200,
            "experience": 0.3,
            "inputs": [
              {
                "count": 1,
                "ingredient": {
                  "tag": "forge:dusts/redstone"
                }
              },
              {
                "count": 1,
                "ingredient": {
                  "tag": "forge:silicon"
                }
              }
            ],
            "result": {
              "item": "gtceu:red_alloy_ingot"
            }
          }
    )
    event.custom(
        {
            "type": "enderio:alloy_smelting",
            "energy": 5600,
            "experience": 0.3,
            "inputs": [
              {
                "count": 1,
                "ingredient": [
                  {
                    "item": "minecraft:soul_sand"
                  },
                  {
                    "item": "minecraft:soul_soil"
                  }
                ]
              },
              {
                "count": 1,
                "ingredient": {
                  "tag": "forge:ingots/gold"
                }
              }
            ],
            "result": {
              "item": "gtceu:soularium_ingot"
            }
          }
    )
    event.custom(
        {
            "type": "enderio:alloy_smelting",
            "energy": 4800,
            "experience": 0.3,
            "inputs": [
              {
                "count": 1,
                "ingredient": {
                  "tag": "forge:ingots/copper_alloy"
                }
              },
              {
                "count": 1,
                "ingredient": {
                  "tag": "forge:ingots/iron"
                }
              },
              {
                "count": 1,
                "ingredient": {
                  "tag": "forge:dusts/redstone"
                }
              }
            ],
            "result": {
              "item": "gtceu:conductive_alloy_ingot"
            }
          }
    )*/
})