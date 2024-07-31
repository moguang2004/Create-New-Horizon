GTCEuStartupEvents.registry('gtceu:recipe_type',event =>{
    event.create('bio_reactor')
        .setEUIO('in')
        .setMaxIOSize(4, 4, 2, 2)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)
})

GTCEuStartupEvents.registry('gtceu:machine',event =>{
    event.create('bio_reactor','multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('bio_reactor')
        //.recipeModifier()
        //.appearanceBlock('kubejs:blaze_blast_frunace_casing')
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("AAAAA", "ABBBA", "ABBBA", "ABBBA", "AAAAA") 
            .aisle("AAAAA", "B###B", "B###B", "B###B", "AAAAA") 
            .aisle("AAAAA", "B###B", "B###B", "B###B", "AAAAA") 
            .aisle("AAAAA", "B###B", "B###B", "B###B", "AAAAA") 
            .aisle("AA@AA", "ABBBA", "ABBBA", "ABBBA", "AAAAA") 
            .where("A", Predicates.blocks("kubejs:bio_reactor_casing").setMinGlobalLimited(35)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE)).setMinGlobalLimited(1))
            .where("B", Predicates.blocks("gtceu:cleanroom_glass"))
            .where("#", Predicates.air())
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        // .additionalDisplay((machine,l) => {
        //     /*const coilmachine = machine.getParts().find(part => part instanceof $CoilWorkableElectricMultiblockMachine)
        //     let temperature = coilmachine.getCoilType().getCoilTemperature() + 100 * Math.max(0, coilmachine.getTier() - GTValues.MV)
        //     console.info(temperature)
        //     l.add(l.size(),Text.translate('kubejs.coilmachine_temperature',temperature))*/
        //     if (machine.isFormed()) {
        //         l.add(Component.translatable("gtceu.multiblock.blast_furnace.max_temperature", Text.of(machine.getCoilType().getCoilTemperature() + "K").red()))
        //     }
        // })
        .workableCasingRenderer('kubejs:block/bio_reactor_casing', 'gtceu:block/multiblock/implosion_compressor', false)
})



