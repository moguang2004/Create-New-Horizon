Ponder.registry(event=>{
    event.create('minecraft:stick'/*'bloodmagic:ritualdivinerdusk'*/)
    .scene("ritual_diviner",
        "How to use ritual diviner",
        "kubejs:mark_of_falling_tower",
        (scene,util)=>{
            scene.scaleSceneView(0.6)
            scene.showBasePlate();
            //scene.showStructure()
            scene.idle(10)
            scene.world.showSection([8,1,8],"down")
            scene.text(60,"First, you need a master ritual stone.",[8,2,8]).attachKeyFrame()

            scene.idle(60)
            scene.showControls(40,[8,2.5,8],"down")
                .rightClick()
                .withItem('bloodmagic:ritualdivinerdusk')
            scene.particles.simple(50,'minecraft:composter',[8,3,8]).density(20)
            //let blockpos = []
        })
})