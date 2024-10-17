GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('bio_reactor')
        .setEUIO('in')
        .setMaxIOSize(4, 4, 2, 2)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('bio_reactor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('bio_reactor')
        .recipeModifier((/**@type {$MultiblockControllerMachine}*/machine,/**@type {$GTRecipe}*/recipe) => {
            let efficiency = 1
            let temperature = $Temperature.getTemperatureAt(machine.pos, machine.getLevel()) * 25
            let newrecipe = recipe.copy()
            if (temperature >= 36 && temperature <= 38) {
                efficiency *= 1.2
            }
            else {
                efficiency /= Math.min(3, Math.pow(Math.max(36 - temperature, temperature - 38), 2) / 10 + 1)
            }
            newrecipe.duration /= efficiency
            if (newrecipe.duration < 1) {
                let parallel = 1 / newrecipe.duration
                newrecipe.duration = 1
                let GTrecipemodifier = GTRecipeModifiers.accurateParallel(machine, newrecipe, parallel, false)
                return GTrecipemodifier.getFirst()
            }
            machine.getHolder().self().persistentData.putFloat('react_efficiency', efficiency)
            return newrecipe
        })
        .appearanceBlock(() => Block.getBlock('kubejs:bio_reactor_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("AAAAA", "ABBBA", "ABBBA", "ABBBA", "AAAAA")
            .aisle("AAAAA", "B###B", "B###B", "B###B", "AAAAA")
            .aisle("AAAAA", "B###B", "B###B", "B###B", "AAAAA")
            .aisle("AAAAA", "B###B", "B###B", "B###B", "AAAAA")
            .aisle("AA@AA", "ABBBA", "ABBBA", "ABBBA", "AAAAA")
            .where("A", Predicates.blocks("kubejs:bio_reactor_casing").setMinGlobalLimited(35)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where("B", Predicates.blocks("gtceu:cleanroom_glass"))
            .where("#", Predicates.air())
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .workableCasingRenderer('kubejs:block/bio_reactor_casing', 'gtceu:block/multiblock/implosion_compressor', false)
        .additionalDisplay((/** @type {$MetaMachine}*/machine, l) => {
            if (machine.isFormed()) {
                let temperature = $Temperature.getTemperatureAt(machine.pos, machine.getLevel()) * 25
                let efficiency = machine.getHolder().self().persistentData.getFloat('react_efficiency')
                //l.add(Component.translatable("gtceu.multiblock.blast_furnace.max_temperature", Text.of(machine.getCoilType().getCoilTemperature() + "K").red()))
                l.add(l.size(), Text.translate('ctnh.bio_reactor.growing_temperature', temperature.toFixed(1)).green())
                l.add(l.size(), Text.translate('ctnh.bio_reactor.growth_efficiency', (efficiency * 100).toFixed(1)))
            }
        })
})
