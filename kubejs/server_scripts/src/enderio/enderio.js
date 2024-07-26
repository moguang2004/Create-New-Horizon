
ServerEvents.recipes(event =>{
    event.custom(
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
    )*/
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
              "item": "gtceu:solarium_ingot"
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
    )
})