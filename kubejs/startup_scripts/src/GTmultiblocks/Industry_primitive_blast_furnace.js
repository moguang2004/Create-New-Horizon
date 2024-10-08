GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('industrial_primitive_blast_furnace')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.FURNACE)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('industrial_primitive_blast_furnace', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('primitive_blast_furnace')
        .recipeModifier((/**@type {$MultiblockControllerMachine}*/machine,/**@type {$GTRecipe}*/recipe) => {
            let temperature = machine.getHolder().self().persistentData.getInt('furnace_temperature')
            let parallel = 1
            if (temperature == null || temperature < 300) {
                machine.getHolder().self().persistentData.putInt('furnace_temperature', 300)
                temperature = 300
            }
            if (temperature < 600) {
                parallel = 1
            }
            else if (temperature >= 600 && temperature < 1000) {
                parallel = 2
            }
            else if (temperature >= 1000 && temperature < 1500) {
                parallel = 4
            }
            else {
                parallel = 8
            }
            let newrecipe = recipe.copy()
            newrecipe.duration *= (1.25 - (temperature - 300) / 1500 * 0.75)
            let GTRecipeModifier = GTRecipeModifiers.accurateParallel(machine, newrecipe, parallel, false)
            machine.getHolder().self().persistentData.putInt('parallel_count', parallel)
            return GTRecipeModifier.getFirst()
        })
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CAAAC', ' CCC ', ' CCC ', ' CCC ', '  C  ', '  C  ', '  C  ')
            .aisle('ABBBA', 'C   C', 'C   C', 'C   C', ' C C ', ' C C ', ' C C ')
            .aisle('CCBCC', 'FC CF', 'FC CF', 'FC CF', '  C  ', '  C  ', '  C  ')
            .aisle('CAAAC', ' AKA ', ' CAC ', ' CCC ', '     ', '     ', '     ')
            .where('C', Predicates.blocks('gtceu:firebricks'))
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('F', Predicates.blocks('gtceu:bronze_frame'))
            //.where('B',Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1))
            .where('A', Predicates.blocks('gtceu:firebricks')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            )
            .where('B', Predicates.blocks(GTBlocks.FIREBOX_BRONZE.get()))
            .where(' ', Predicates.any())
            .build()
        )
        .additionalDisplay((/** @type {$MetaMachine}*/machine, l) => {
            let temperature = machine.getHolder().self().persistentData.getInt('furnace_temperature')
            let parallel = machine.getHolder().self().persistentData.getInt('parallel_count')
            if (temperature == null || temperature < 300) {
                temperature = 300
            }
            if (machine.isFormed()) {
                l.add(Component.translatable("gtceu.multiblock.blast_furnace.max_temperature", Text.of(temperature + "K").red()))
                l.add(l.size(), Text.translate('ctnh.industrial_primitive_blast_furnace.parallel_count', parallel))
            }
        })
        .onWorking((/**@type {$WorkableMultiblockMachine}*/ machine) => {
            if (machine.getOffsetTimer() % 20 == 0) {
                // let temperature = machine.getHolder().self().persistentData.getInt('furnace_temperature')
                // if(temperature == null || temperature < 300){
                //     temperature = 300
                // }
                let temperature = machine.getRecipeLogic().getTotalContinuousRunningTime() + 300
                machine.getHolder().self().persistentData.putInt('furnace_temperature', Math.min(1800, temperature))
            }
            return true
        })
        //.appearanceBlock(Block.getBlock('minecraft:bricks'))
        .workableCasingRenderer('gtceu:block/casings/solid/machine_primitive_bricks', 'gtceu:block/multiblock/steam_oven', false)
})
