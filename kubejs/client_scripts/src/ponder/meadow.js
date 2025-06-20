Ponder.registry(event=>{
    event.create('ctnhcore:meadow')
    .scene("multiblock_building",
        "How to build a gregtech multiblock",
        "kubejs:meadow",
        (scene,util)=>{
            scene.showBasePlate();
            //scene.showStructure()
            
            scene.idle(10)
            scene.world.showSection([6, 1, 1],"down")
            scene.text(40,"放置牧场主方块",[3, 2, 2]).attachKeyFrame()

            scene.idle(60)

            scene.showControls(40,[6, 1, 1],"left")
                .rightClick()
                .withItem('gtceu:terminal')
                .whileSneaking()
            scene.text(40,"使用终端一键放置",[6, 2, 1]).attachKeyFrame()
            scene.idle(10)
            scene.world.showSection([1, 1, 1, 11, 7, 11],"down")
            scene.world.modifyBlockEntityNBT([5, 1, 1], nbt => { nbt.Speed = 0 });
            
            scene.idle(60)

            scene.overlay.showOutline("red", {}, [4, 1, 6, 2, 1, 2], 40)
            scene.text(40,"睡莲和水不会自动放置，记得手动填上",[2,5,1]).attachKeyFrame()

            scene.idle(60)

            scene.overlay.showOutline("red", {}, [4, 1, 1, 3, 1, 1], 40)
            scene.text(40,"确保有足够的输出物品和液体的空间",[3,2,1]).attachKeyFrame()

            scene.idle(60)

            scene.overlay.showOutline("red", {}, [7, 1, 1], 40)

            scene.text(40,"别忘了将电路设置为0号",[7,2,1]).attachKeyFrame()

            scene.idle(60)

            scene.world.showSection([5, 1, 0],"down")
            scene.world.modifyBlockEntityNBT([5, 1, 1], nbt => { nbt.Speed = 256 });
            scene.text(40,"接入应力",[4, 1, 1]).attachKeyFrame()

            scene.idle(60)

            scene.text(60,"放入动物，动物越多产出越多",[5, 1, 5]).attachKeyFrame()
            scene.world.createEntity("minecraft:cow", [9, 2, 5])
            scene.idle(10)
            scene.world.createEntity("minecraft:sheep", [7, 2, 5])
            scene.idle(10)
            scene.world.createEntity("minecraft:pig", [5, 2, 5])
            scene.idle(10)
            scene.world.createEntity("minecraft:chicken", [3, 2, 5])
            scene.idle(10)


            scene.idle(60)
            
            scene.overlay.showOutline("red", {}, [9, 2, 5 , 8, 3, 4], 30)
            scene.text(30,"牛的产出物为牛奶和皮革",[9,3,5]).attachKeyFrame()
            scene.idle(40)
            scene.overlay.showOutline("red", {}, [7, 2, 5 , 6, 3, 4], 30)
            scene.text(30,"羊的产出物为羊毛",[7,3,5]).attachKeyFrame()
            scene.idle(40)
            scene.overlay.showOutline("red", {}, [5, 2, 5 , 4, 3, 4], 30)
            scene.text(30,"猪的产出物为猪肉",[5,3,5]).attachKeyFrame()
            scene.idle(40)
            scene.overlay.showOutline("red", {}, [3, 2, 5 , 2, 3, 4], 30)
            scene.text(30,"鸡的产出物为鸡蛋",[3,3,5]).attachKeyFrame()
            scene.idle(40)
            scene.overlay.showOutline("red", {}, [9, 2, 5 , 2, 3, 4], 60)
            scene.text(60,"所有动物都会产生粪便",[3,3,5]).attachKeyFrame()

            scene.idle(60)

            scene.world.showSection([4, 1, 0, 3, 1, 0],"down")
            scene.text(40,"最后放上容器，就可以完美的使用牧场了",[2, 1, 1]).attachKeyFrame()
            //scene.particles.simple(50,'minecraft:composter',[8,3,8]).density(20)
            //let blockpos = []
        })
})