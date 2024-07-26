/*CreateEvents.pipeFluidEffect(event =>{
    event.add(Fluid.of("create:chocolate"), (pipe, stack) => {
        var world = pipe.world;
        if (world.gameTime % 5 != 0)
            return;
        var level = Utils.getLevel(world);
        level.getEntitiesWithin(pipe.getAOE()).forEach(entity => {
            if (entity.living) {
                entity.heal(5);
            }
        })
    })
})*/