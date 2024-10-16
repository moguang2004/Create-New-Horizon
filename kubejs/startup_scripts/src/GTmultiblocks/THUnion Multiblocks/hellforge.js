GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    GTRecipeTypes.register('hellforge','multiblock')
    .setMaxIOSize(4, 1, 0, 0)
    .setEUIO('in')
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.TURBINE)
    .addDataInfo(data => {
        return Component.translatable('ctnh.gtceu.hellforge.minimumdrain',data.getInt('minimumDrain')).getString();
    })
    .addDataInfo(data => {
        return Component.translatable('ctnh.gtceu.hellforge.drain',data.getInt('drain')).getString();
    });
    
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    /**
     * @type {Internal.CustomMultiblockBuilder}
     */
    let builder=event.create('hellforge', 'multiblock')
    for(let i=0;i<=7;i++) builder.tooltips(Component.translatable(`ctnh.${builder.id}.${i}`));
    builder.rotationState(RotationState.NON_Y_AXIS)

        .recipeTypes(GTRecipeTypes.get('hellforge'))
        .workableCasingRenderer(
            "bloodmagic:block/obsidiantilepath",
            "gtceu:block/machines/autoclave",
            false
        )
        .beforeWorking((machine,recipe)=>{
            try{
                var will=machine.self().getHolder().self().persistentData.getInt('will');
                if(will==null) will=0;
                var minimumDrain=recipe.data.getInt('minimumDrain');
                var drain=recipe.data.getInt('drain');

                if(will>=minimumDrain){
                    machine.self().getHolder().self().persistentData.putInt('will',will-drain);
                    return true;
                }else{
                
                    return false;
                }
            }catch(error){
                machine.self().getHolder().self().persistentData.putInt('will',0);
                return false;
            }
            
        })
        .additionalDisplay((controller, list)=>{
            if(controller.isFormed()){
                var will=controller.getHolder().self().persistentData.getInt('will');
                if(will===null) will=0;
                list.add(Component.translatable('ctnh.gtceu.hellforge.will',will));
            }
        })
        .pattern(definition => FactoryBlockPattern.start()
	.aisle("AAAAAAA", "B#####B", "B#####B", "B#####B", "B#####B", "B#####B", "B#####B", "B#####B", "AAAAAAA", "AAAAAAA", "A#A#A#A") 
	.aisle("AAAAAAA", "#A###A#", "#A###A#", "#A###A#", "#A###A#", "#A###A#", "#A###A#", "#A###A#", "AAAAAAA", "A#####A", "#######") 
	.aisle("AAAAAAA", "##CCC##", "##D#D##", "##BCB##", "##BEB##", "##B#B##", "##D#D##", "##D#D##", "AAAAAAA", "A#AAA#A", "A#####A") 
	.aisle("AAAAAAA", "##CFC##", "###G###", "##CCC##", "##EHE##", "#######", "#######", "#######", "AAAAAAA", "A#AIA#A", "#######") 
	.aisle("AAAAAAA", "##CCC##", "##D#D##", "##BCB##", "##BEB##", "##B#B##", "##D#D##", "##D#D##", "AAAAAAA", "A#AAA#A", "A#####A") 
	.aisle("AAAAAAA", "#A###A#", "#A###A#", "#A###A#", "#A###A#", "#A###A#", "#A###A#", "#A###A#", "AAAAAAA", "A#####A", "#######") 
	.aisle("AAA@AAA", "B#####B", "B#####B", "B#####B", "B#####B", "B#####B", "B#####B", "B#####B", "AAAAAAA", "AAAAAAA", "A#A#A#A") 
	.where("A", Predicates.blocks("bloodmagic:obsidiantilepath").or(Predicates.autoAbilities(definition.getRecipeTypes())))
	.where("B", Predicates.blocks("minecraft:chain"))
	.where("#", Predicates.any())
	.where("C", Predicates.blocks("bloodmagic:dungeon_brick_slab"))
	.where("D", Predicates.blocks("bloodmagic:dungeon_metal"))
	.where("E", Predicates.blocks("bloodmagic:dungeon_brick1"))
	.where("F", Predicates.blocks("bloodmagic:dungeon_tile"))
	.where("G", Predicates.blocks("bloodmagic:dungeon_brick_wall"))
	.where("H", Predicates.blocks("bloodmagic:life_essence_block"))
    .where("@", Predicates.controller(Predicates.blocks(definition.get())))
	.where("I", Predicates.blocks("minecraft:lava")).build())
});

//This multiblock comes from the modpack THUnion自制整合包vol.2, and is made by Sigmit64