Ponder.registry(event=>{
    event.create('gtceu:coke_oven')
    .scene("multiblock_building",
        "How to build a gregtech multiblock",
        "kubejs:coke_oven",
        (scene,util)=>{
            scene.showBasePlate();
            //scene.showStructure()
            
            scene.idle(10)
            scene.world.showSection([3,2,2],"down")
            scene.text(60,"First, you need a multiblock main block.(Use a coke oven block as an example)",[3,2,2]).attachKeyFrame()

            scene.idle(60)
            scene.showControls(40,[3,2.5,2],"left")
                .rightClick()
                .withItem('gtceu:terminal')
                .whileSneaking()
            scene.idle(40)
            scene.world.showSection([2,1,2,4,3,4],"down")
            scene.text(40,'Then the whole sturcture will be placed as you have enough blocks').attachKeyFrame()
            scene.idle(60)
            scene.text(60,'You can replace any block in the structure with a coke oven hatch')
            scene.world.setBlock([2,2,2],'gtceu:coke_oven_hatch',true)
            scene.idle(60)
            scene.text(60,'So that you can export the fluid and item through it with pipes')
            scene.world.showSection([1,2,2,0,1,2],"down")
            scene.idle(60)
            //scene.particles.simple(50,'minecraft:composter',[8,3,8]).density(20)
            //let blockpos = []
        })
})