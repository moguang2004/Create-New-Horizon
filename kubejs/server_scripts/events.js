
BlockEvents.leftClicked('block', event => {
    if (event.hand == "OFF_HAND") return
    let player = event.getPlayer()
    if (player == null) return
    if (event.getItem().is("kubejs:snow_city_sword")){
        let spawnItem = event.getLevel().createEntity("item")
        event.level.destroyBlock(event.block.pos,true)
    }
})

ServerEvents.tags("item",event=>{
    event.add("minecraft:sword",['kubejs:snow_city_sword']);
})
