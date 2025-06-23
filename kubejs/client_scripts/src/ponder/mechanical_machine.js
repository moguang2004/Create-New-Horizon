//粉碎工厂
Ponder.registry(event=>{
    event.create('ctpp:smashing_factory')
        .scene("multiblock_building",
        "How to build a gregtech multiblock",
        "kubejs:smashing_factory",
        (scene,util)=>{
            scene.showBasePlate();
            //scene.showStructure()
            
            scene.idle(10)

            scene.world.showSection([3, 2, 1],"down")
            scene.text(60,"放置粉碎工厂主方块",[3, 2.5, 1]).attachKeyFrame()

            scene.idle(60)

            scene.showControls(40,[3, 2.5, 1],"left")
                .rightClick()
                .withItem('gtceu:terminal')
                .whileSneaking()
            scene.idle(40)
            scene.world.showSection([1, 1, 1, 5, 3, 5],"down")
            scene.text(40,'使用终端一键放置').attachKeyFrame()

            scene.idle(60)

            scene.addKeyframe()
            scene.text(100,'由于终端的问题，一键放置的粉碎轮并不会以正确的方向摆放,而是呈现为这样的形态')
            scene.idle(40)
            scene.world.replaceBlocks([2, 3, 2, 4, 3, 4], "minecraft:air", true)
            scene.world.setBlock([2, 3, 2], "create:crushing_wheel", true)
            scene.world.setBlock([4, 3, 2], "create:crushing_wheel", true)
            scene.world.setBlock([2, 3, 4], "create:crushing_wheel", true)
            scene.world.setBlock([4, 3, 4], "create:crushing_wheel", true)
            scene.overlay.showOutline("red", {}, [2, 3, 2, 4, 3, 4], 40)
            scene.idle(100)

            scene.addKeyframe()
            scene.text(80,'这时候我们需要手动将粉碎轮以正确的方向替换回去')
            scene.world.setBlock([2, 3, 3], "create:crushing_wheel", true)
            scene.world.setBlock([4, 3, 3], "create:crushing_wheel", true)
            scene.world.modifyBlock([2, 3, 2], state => state.with("axis", "z"), true)
            scene.world.modifyBlock([4, 3, 2], state => state.with("axis", "z"), true)
            scene.world.modifyBlock([2, 3, 4], state => state.with("axis", "z"), true)
            scene.world.modifyBlock([4, 3, 4], state => state.with("axis", "z"), true)
            scene.world.modifyBlock([2, 3, 3], state => state.with("axis", "z"), true)
            scene.world.modifyBlock([4, 3, 3], state => state.with("axis", "z"), true)

            scene.idle(100)

            scene.world.modifyBlockEntityNBT([2, 2, 1], nbt => { nbt.Speed = 256 })
            scene.text(80,'接入应力',[3,1.75,2]).attachKeyFrame()
            scene.overlay.showOutline("red", {}, [2, 2, 1], 80)
            scene.idle(100)
            scene.world.replaceBlocks([4, 2, 1], "ctpp:mv_kinetic_input_box", true)
            scene.text(80,'如果粉碎工厂里有多个不同等级的应力输入仓，那么实际运行速度会按照等级最高的应力仓计算',[5,1.75,2]).attachKeyFrame()
            scene.idle(20)
            scene.world.modifyBlockEntityNBT([4, 2, 1], nbt => { nbt.Speed = 64 })

            scene.idle(100)

            scene.text(80,'现在你可以正常使用粉碎工厂了，需要注意，本机器并没有研磨副产物',[4,1.75,2]).attachKeyFrame()
            //scene.particles.simple(50,'minecraft:composter',[8,3,8]).density(20)
            //let blockpos = []
        })
})