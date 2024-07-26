Ponder.registry(event=>{
    event.create('minecraft:stone')
    .scene('test',
            'test',
            'kubejs:test',
            (scene,util)=>{
                scene.showStructure()
                scene.idle(40)
                /*scene.world.modifyBlockEntityNBT([2,1,2],nbt =>{
                    nbt.Items = [{
                        Slot:1,
                        id:"minecraft:book",
                        Count:1,
                    },]
                })*/
                scene.world.modifyBlockEntityNBT([4,1,4],nbt=>{
                    console.info(nbt.Inventory)
                })
                scene.idle(40)
            })
})