ServerEvents.recipes(event =>{
    Ingredient.of('#minecraft:logs').getItemIds().forEach(e=>{
        let pos = e.indexOf(':')
        let result = e.substring(0,pos+1) + 'stripped_'+e.substring(pos+1)
        event.custom({
          "type": "farmersdelight:cutting",
          "ingredients": [
              {
                  "item": e
              }
          ],
          "result": [
            {
              "item" : result
            },
            {
              "item" : "farmersdelight:tree_bark"
            }
          ],
          "tool": {
              "type": "farmersdelight:tool_action",
              "action": "pickaxe_dig"
          }
        })
      })
})