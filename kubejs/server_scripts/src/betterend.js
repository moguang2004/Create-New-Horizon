ServerEvents.recipes(event =>{
    event.custom({
        "type": "bclib:alloying",
        "experience": 4.5,
        "ingredients": [
          {
            "item": "betterend:terminite_ingot"
          },
          {
            "item": "minecraft:netherite_ingot"
          }
        ],
        "result": {
          "item": "betterend:aeternium_ingot"
        },
        "smelttime": 850
      })
})