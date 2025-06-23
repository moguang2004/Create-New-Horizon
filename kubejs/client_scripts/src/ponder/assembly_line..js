Ponder.registry(event=>{
    event.create('gtceu:assembly_line')
    .scene("multiblock_building",
        "How to build a gregtech multiblock",
        "kubejs:assembly_line",
        (scene,util)=>{
            scene.world.showSection([0, 0, 0, 17, 0, 10],"down")
            //scene.showStructure()

            scene.idle(10)
            scene.world.showSection([1, 3, 8],"down")
            scene.text(40,"放置装配线主方块",[1, 4, 9]).attachKeyFrame()

            scene.idle(60)

            scene.showControls(40,[1, 4, 8],"left")
                .rightClick()
                .withItem('gtceu:terminal')
                .whileSneaking()
            scene.text(60,"使用终端一键放置",[0, 5.5, 8]).attachKeyFrame()
            scene.idle(20)
            scene.world.showSection([1, 1, 6, 17, 4, 10],"down")

            scene.idle(80)

            scene.overlay.showOutline("red", {}, [16, 2, 6], 60)
            scene.text(60,"ulv输出总线",[16, 3, 6]).attachKeyFrame()
            scene.idle(80)
            scene.overlay.showOutline("red", {}, [16, 3, 6], 60)
            scene.text(60,"四重输入仓",[16, 4, 6]).attachKeyFrame()
            scene.idle(80)
            scene.overlay.showOutline("red", {}, [15, 2, 6, 1, 2, 6], 60)
            scene.text(60,"ulv输入总线",[1, 3, 6]).attachKeyFrame()

            scene.idle(80)

            scene.world.showSection([16, 1, 5, 16, 2, 5],"down")
            scene.idle(20)
            scene.text(60,"在ae主网络中放置样板供应器，注意紧贴ulv输出总线",[16, 3, 5]).attachKeyFrame()
            scene.overlay.showOutline("red", {}, [16, 1, 5, 16, 2, 5], 60)
            scene.idle(80)
            scene.overlay.showOutline("red", {}, [16, 2, 5], 60)
            scene.text(60,"使用扳手将样板供应器调整为向上发送材料",[16, 3, 5]).attachKeyFrame()

            scene.idle(80)

            scene.world.showSection([16, 3, 5],"down")
            scene.idle(20)
            scene.text(60,"放置任意等级缓存仓，注意紧贴四重输入仓",[16, 4, 5]).attachKeyFrame()
            scene.idle(80)
            scene.text(60,"设置物品自动输出方向",[16, 3.5, 5.5]).attachKeyFrame()

            scene.idle(80)

            scene.world.showSection([15, 3, 1, 1, 2, 5], Direction.DOWN)
            scene.idle(20)
            scene.text(60,"放置AE子网络的存储部分",[15, 4, 5]).attachKeyFrame()
            scene.idle(80)
            scene.text(60,"注意这里要用石英纤维断开子网和主网的直接连接，顺便给子网供电",[15.5, 2.75, 5]).attachKeyFrame()
            scene.idle(80)
            scene.overlay.showOutline("red", {}, [15, 2, 5, 1, 2, 5], 140)
            scene.text(140,"设置存储总线的优先级，从主方块方向到输出总线递减，这意味着你的材料是否会以正确的顺序进入装配线进行合成",[11, 3.25, 5.5]).attachKeyFrame()

            scene.idle(160)

            scene.world.showSection([0, 2, 9, 0, 2, 10], Direction.DOWN)
            scene.text(60,"接入电网",[0, 3, 10]).attachKeyFrame()
            scene.idle(80)
            scene.overlay.showOutline("red", {}, [16, 2, 5], 240)
            scene.idle(20)
            scene.text(140,"在样板供应器中放置在样板编码终端中'一键编写的样板'(+按钮)，确保材料会以正确的顺序输出到缓存器中",[16, 3, 5]).attachKeyFrame()
            scene.idle(160)
            scene.text(60,"在样板供应器左侧将锁定合成模式改为'直到主产物被返回'",[16, 3, 5]).attachKeyFrame()
            scene.idle(80)
            scene.overlay.showOutline("red", {}, [2, 3, 8], 60)
            scene.text(60,"放入配方需要的研究数据",[2, 4, 8]).attachKeyFrame()

            scene.idle(80)

            scene.text(60,"恭喜你，你已经学会如何使用ae2进行装配线自动化了",[1, 4, 8]).attachKeyFrame()
        })
    })
