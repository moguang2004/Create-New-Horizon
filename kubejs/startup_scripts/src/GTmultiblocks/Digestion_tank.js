GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('digesting')
        .setEUIO('in')
        .setMaxIOSize(2, 1, 2, 4)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('digestion_tank', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('digesting')
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
            machine.getHolder().self().persistentData.putFloat('growth_efficiency', efficiency)
            machine.getHolder().self().persistentData.putFloat('temperature',temperature)
            return newrecipe
        })
        //.appearanceBlock(Block.getBlock('minecraft:bricks'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCCC', 'CAAAC', 'CCCCC')
            .aisle('CCCCC', 'AWWWA', 'CDDDC')
            .aisle('CCCCC', 'CAKAC', 'CGGGC')
            .where('C', Predicates.blocks('minecraft:bricks'))
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('D', Predicates.blocks('minecraft:iron_trapdoor'))
            //.where('B',Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1))
            .where('A', Predicates.blocks('minecraft:bricks')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            )
            .where('G', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
            .where('W', Predicates.blocks('minecraft:water'))
            .build()
        )
        .additionalDisplay((/** @type {$MetaMachine}*/machine, l) => {
            if (machine.isFormed()) {
                let temperature = machine.getHolder().self().persistentData.getFloat('temperature')
                if(temperature == null){
                    temperature = $Temperature.getTemperatureAt(machine.pos, machine.getLevel()) * 25
                }
                else{
                    if(machine.getOffsetTimer() % 20 == 0){
                        temperature = $Temperature.getTemperatureAt(machine.pos, machine.getLevel()) * 25
                    }
                }
                let efficiency = machine.getHolder().self().persistentData.getFloat('growth_efficiency')
                //l.add(Component.translatable("gtceu.multiblock.blast_furnace.max_temperature", Text.of(machine.getCoilType().getCoilTemperature() + "K").red()))
                l.add(l.size(), Text.translate('ctnh.digestion_tank.growing_temperature', temperature.toFixed(1)).green())
                l.add(l.size(), Text.translate('ctnh.digestion_tank.growth_efficiency', (efficiency * 100).toFixed(1)))
            }
        })
        .workableCasingRenderer('minecraft:block/bricks', 'gtceu:block/multiblock/implosion_compressor', false)
})