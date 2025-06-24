//应力仓
Ponder.registry(event=>{
    event.create([
        "ctpp:lv_kinetic_input_box", 
        "ctpp:mv_kinetic_input_box", 
        "ctpp:hv_kinetic_input_box", 
        "ctpp:ev_kinetic_input_box", 
        "ctpp:iv_kinetic_input_box", 
        "ctpp:luv_kinetic_input_box", 
        "ctpp:zpm_kinetic_input_box"
        ])
        .scene("block_ponder",
        "应力输入/输出仓",
        "kubejs:kinetic_input",
        (scene,util)=>{
            scene.showBasePlate();
            //scene.showStructure()
            scene.world.showSection([0, 1, 0, 6, 1, 6], Direction.DOWN)

            scene.idle(80)

            scene.overlay.showOutline("red", {}, [1, 1, 3, 5, 1, 3], 60)
            scene.text(60,"这是应力仓，它们拥有不同的等级",[1, 2, 3]).attachKeyFrame()

            scene.idle(80)

            scene.overlay.showOutline("red", {}, [5, 1, 3], 60)
            scene.text(60,"你可能用到的最低等级的应力仓为lv应力仓，它在256RPM转速的情况下需要输入32768su的应力",[5, 2, 3]).attachKeyFrame()

            scene.idle(80)

            scene.text(120,"与格雷的升压机制类似，应力仓每升一级需要将所需应力*4",[1, 2, 3]).attachKeyFrame()
            scene.overlay.showOutline("red", {}, [4, 1, 3], 20)
            scene.text(20,"131072su",[4, 2.5, 3]).attachKeyFrame()
            scene.idle(30)
            scene.overlay.showOutline("red", {}, [3, 1, 3], 20)
            scene.text(20,"524288su",[3, 2.5, 3]).attachKeyFrame()
            scene.idle(30)
            scene.overlay.showOutline("red", {}, [2, 1, 3], 20)
            scene.text(20,"2097152su",[2, 2.5, 3]).attachKeyFrame()
            scene.idle(30)
            scene.overlay.showOutline("red", {}, [1, 1, 3], 20)
            scene.text(20,"8388608su",[1, 2.5, 3]).attachKeyFrame()
        })
})


//牧场
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


//粉碎工厂
Ponder.registry(event=>{
    event.create('ctpp:smashing_factory')
        .scene("multiblock_building",
        "How to build a gregtech multiblock",
        "kubejs:smashing_factory",
        (scene,util)=>{
            scene.showBasePlate();
            //scene.showStructure()
            
            var crushing_wheel_right= util.select.fromTo(2, 3, 2, 4, 3, 4)
            var crushing_wheel_control= util.select.fromTo(3, 3, 2, 3, 3, 4)
            var crushing_wheel = "create:crushing_wheel"

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
            scene.world.replaceBlocks(crushing_wheel_right, "minecraft:air", true)
            scene.world.setBlock([2, 3, 2], crushing_wheel, true)
            scene.world.setBlock([4, 3, 2], crushing_wheel, true)
            scene.world.setBlock([2, 3, 4], crushing_wheel, true)
            scene.world.setBlock([4, 3, 4], crushing_wheel, true)
            scene.overlay.showOutline("red", {}, crushing_wheel_right, 60)
            scene.idle(100)

            scene.addKeyframe()
            scene.text(80,'这时候我们需要手动将粉碎轮以正确的方向替换回去')
            scene.world.setBlock([2, 3, 3], crushing_wheel, true)
            scene.world.setBlock([4, 3, 3], crushing_wheel, true)
            scene.world.modifyBlocks(crushing_wheel_right, () => Block.id(crushing_wheel).with("axis", "z"), true)
            scene.world.replaceBlocks(crushing_wheel_control, "minecraft:air", false)


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


//风车控制中心
Ponder.registry(event=>{
    event.create('ctpp:windmill_control_center')
        .scene("multiblock_building",
        "How to build a gregtech multiblock",
        "kubejs:windmill_control_center",
        (scene,util)=>{
            scene.showBasePlate();
            //scene.showStructure()
            
            var windmill1= util.select.fromTo(2, 6, 2, 2, 14, 2)
            var windmill2= util.select.fromTo(2, 6, 4, 2, 14, 4)
            var windmill3= util.select.fromTo(4, 6, 2, 4, 14, 2)
            var windmill4= util.select.fromTo(4, 6, 4, 4, 14, 4)
            var kinetic_output = "ctpp:lv_kinetic_output_box"

            scene.idle(10)

            scene.world.showSection([3, 2, 2],"down")
            scene.text(60,"放置风车控制中心主方块",[2.5, 3.5, 1]).attachKeyFrame()

            scene.idle(60)

            scene.showControls(40,[2.5, 3.5, 1],"left")
                .rightClick()
                .withItem('gtceu:terminal')
                .whileSneaking()
            scene.idle(40)
            scene.world.showSection([1, 1, 1, 5, 4, 5],"down")
            scene.text(40,'使用终端一键放置').attachKeyFrame()
            
            scene.idle(60)
            
            scene.world.setBlock([3, 3, 2], "gtceu:lv_input_hatch", true)
            scene.text(60,'放置输入仓以确保可以输入润滑油').attachKeyFrame()
            scene.idle(20)
            scene.showControls(40,[2.5, 4.5, 1],"left")
                .rightClick()
                .withItem('gtceu:lubricant_bucket')
            
            scene.idle(80)

            scene.world.setBlock([2, 3, 2], kinetic_output, true)
            scene.world.setBlock([4, 3, 2], kinetic_output, true)
            scene.world.setBlock([2, 2, 2], kinetic_output, true)
            scene.world.setBlock([4, 2, 2], kinetic_output, true)
            scene.text(60,'放置足够的应力输出仓确保可以输出应力').attachKeyFrame()

            scene.idle(80)

            scene.world.showSection([2, 5, 2, 4, 5, 4],"down")
            scene.text(60,'在主方块16格半径内放置风车轴承，放置的越多输出的应力就越多,最多计入16个风车轴承').attachKeyFrame()

            scene.idle(80)

            scene.text(60,'在每个风车轴承上连接128个风帆或羊毛，让每个风车轴承的应力量为最大').attachKeyFrame()
            const WINDMILL1 = scene.world.showIndependentSection(windmill1,Direction.down)
            const WINDMILL2 = scene.world.showIndependentSection(windmill2,Direction.down)
            const WINDMILL3 = scene.world.showIndependentSection(windmill3,Direction.down)
            const WINDMILL4 = scene.world.showIndependentSection(windmill4,Direction.down)

            scene.idle(80)

            scene.text(60,'使风车轴承为激活状态').attachKeyFrame()
            scene.showControls(40,[2, 5.5, 2],"left")
                .rightClick()
            scene.world.rotateSection(WINDMILL1, 0, 360, 0, 400)
            scene.world.rotateSection(WINDMILL2, 0, 360, 0, 400)
            scene.world.rotateSection(WINDMILL3, 0, 360, 0, 400)
            scene.world.rotateSection(WINDMILL4, 0, 360, 0, 400)

            scene.idle(80)

            scene.text(60,'确保应力输出仓足够的情况下，你现在就可以享受风车神力了').attachKeyFrame()
            //scene.particles.simple(50,'minecraft:composter',[8,3,8]).density(20)
            //let blockpos = []
        })
})