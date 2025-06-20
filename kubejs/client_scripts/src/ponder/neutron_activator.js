Ponder.registry(event=>{
    event.create('gtnn:neutron_activator')
    .scene("multiblock_building",
        "How to build a gregtech multiblock",
        "kubejs:neutron_activator",
        (scene,util)=>{
            scene.showBasePlate();
            //scene.showStructure()
            
            scene.idle(10)
            scene.world.showSection([3,1,1],"down")
            scene.text(40,"放置中子加速器主方块",[3,2,2]).attachKeyFrame()

            scene.idle(60)

            scene.showControls(40,[3,1,1],"left")
                .rightClick()
                .withItem('gtceu:terminal')
                .whileSneaking()
            scene.text(40,"使用终端一键放置",[3,2,1]).attachKeyFrame()
            scene.idle(10)
            scene.world.showSection([1,1,5,5,6,1],"down")

            scene.idle(60)

            scene.showControls(40,[1,1,2],"left")
                .rightClick()
                .withItem('gtceu:machine_controller_cover')
                .whileSneaking()
            scene.text(40,"在中子加速器面向红石的方向放置机器控制覆盖板",[1,2,2]).attachKeyFrame()
            scene.world.showSection([0,1,1,0,1,2],"down")
            scene.idle(60)
            scene.text(40,"接入电网",[1,2,2]).attachKeyFrame()
            scene.world.showSection([1,1,0,0,1,0],"down")
            scene.idle(60)
            scene.text(60,"将中子传感器的最大动能设置为配方所需最大动能，最小动能设置为配方所需最小动能+5MeV(1MeV=1000Kev)",[1,2,3]).attachKeyFrame()
            scene.idle(70)
            scene.text(60,"现在中子活化器的动能将维持在配方所需动能范围内",[4,1,2]).attachKeyFrame()
            //scene.particles.simple(50,'minecraft:composter',[8,3,8]).density(20)
            //let blockpos = []
        })
})