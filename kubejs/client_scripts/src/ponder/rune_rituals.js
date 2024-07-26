Ponder.registry(event=>{
    event.create('mythicbotany:central_rune_holder')
    .scene('rune_ritual',
            'How to finish the rune ritual',
            "kubejs:rune_rituals",
            (scene,util)=>{
                scene.showBasePlate();
                scene.idle(10)
                let blockpos = [[0,1,0],[0,1,1],[0,1,2],[0,1,3],[0,1,4],[0,1,5],[0,1,6],[0,1,7],[0,1,8],
                                            [1,1,0],[2,1,0],[3,1,0],[4,1,0],[5,1,0],[6,1,0],[7,1,0],[8,1,0],
                                            [8,1,1],[8,1,2],[8,1,3],[8,1,4],[8,1,5],[8,1,6],[8,1,7],[8,1,8],
                                            [1,1,8],[2,1,8],[3,1,8],[4,1,8],[5,1,8],[6,1,8],[7,1,8]]
                blockpos.forEach(pos=>{
                    scene.world.showSection(pos,"down")
                })
                scene.idle(20)
                scene.world.showSection([4,1,4],"down")

                scene.overlay.showOutline('green',{},[4,1,4],60)
                scene.text(60,'First, place the central rune holder',[4,1.5,4]).attachKeyFrame()
                scene.idle(70)

                let holder = [[1,1,4],[3,1,2],[3,1,6],[5,1,2],[5,1,6],[7,1,4]]
                scene.text(60,'Then place other rune holder at the position you see in the jei').attachKeyFrame()
                holder.forEach(pos => {
                    scene.world.showSection(pos,"down")
                    scene.idle(5)
                })
                scene.idle(30)

                scene.showControls(40,[4,1.75,4],'down')
                    .rightClick()
                    .withItem('gtceu:chipped_glass_gem')
                //scene.overlay.showOutline('red',{},[4,2,4],60)
                scene.text(80,'Put the right item on the right position',[4,1.75,4]).attachKeyFrame()
                scene.idle(20)
                scene.world.modifyBlockEntityNBT([4,1,4],nbt=> {
                    nbt.Inventory = {Items:[{Count:1,Slot:0,id:"gtceu:chipped_glass_gem"}],Size:1}
                })
                scene.idle(40)
                scene.world.modifyBlockEntityNBT([1,1,4], nbt=>{
                    nbt.Inventory = {Items:[{Count:1,Slot:0,id:"ars_nouveau:wilden_spike"}],Size:1}
                })
                scene.idle(5)
                scene.world.modifyBlockEntityNBT([3,1,2], nbt=>{
                    nbt.Inventory = {Items:[{Count:1,Slot:0,id:"cataclysm:athame"}],Size:1}
                })
                scene.idle(5)
                scene.world.modifyBlockEntityNBT([3,1,6], nbt=>{
                    nbt.Inventory = {Items:[{Count:1,Slot:0,id:"gtceu:rose_gold_knife"}],Size:1}
                })
                scene.idle(5)
                scene.world.modifyBlockEntityNBT([5,1,2], nbt=>{
                    nbt.Inventory = {Items:[{Count:1,Slot:0,id:"botania:ender_dagger"}],Size:1}
                })
                scene.idle(5)
                scene.world.modifyBlockEntityNBT([5,1,6], nbt=>{
                    nbt.Inventory = {Items:[{Count:1,Slot:0,id:"alexscaves:desolate_dagger"}],Size:1}
                })
                scene.idle(5)
                scene.world.modifyBlockEntityNBT([7,1,4], nbt=>{
                    nbt.Inventory = {Items:[{Count:1,Slot:0,id:"enderio:dark_steel_sword"}],Size:1}
                })
                scene.idle(20)  

                scene.text(60,'Then drop the catalysm of the ritual in the area').attachKeyFrame()
                const wrath = scene.world.createItemEntity([3,2,4],util.vector.of(0.1,0,0.2),'botania:rune_wrath')
                scene.idle(10)
                const greed = scene.world.createItemEntity([3,2,4],util.vector.of(0.2,0,0.2),'botania:rune_greed')
                scene.idle(10)
                const silk = scene.world.createItemEntity([3,2,4],util.vector.of(0.1,0,0.15),'alexscaves:shadow_silk')
                scene.idle(10)
                scene.idle(50)

                scene.text(60,"Also, don't forget to prepare a wandering trader here for sacrifice")
                scene.idle(20)
                const trader = scene.world.createEntity('minecraft:wandering_trader',[5,1,4])
                scene.addKeyframe()

                scene.idle(60)
                scene.text(60, 'Finally, make sure you have enough mana in your mana ring and just right click the central rune holder',[4,1.5,4])
                    .placeNearTarget()
                scene.showControls(20,[4,1.75,4],'down')
                    .rightClick()
                    .withItem('botania:twig_wand')
                scene.idle(60)

                scene.text(40,'If you find that all items on the ground have been cleared, it means the ritual has started successfully.')
                scene.world.modifyEntity(trader, e=>{
                    e.animateHurt(10)
                    e.setYBodyRot(90)
                })
                scene.world.removeEntity(trader)
                scene.world.removeEntity(wrath)
                scene.world.removeEntity(greed)
                scene.world.removeEntity(silk)
                //scene.particles.simple(20,'botania:wisp',[1,1,4])
            })
})