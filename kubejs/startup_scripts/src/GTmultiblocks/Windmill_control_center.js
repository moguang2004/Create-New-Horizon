GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    GTRecipeTypes.register('windmill_control_center','multiblock')
        .setMaxIOSize(0, 0, 1, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_GAS_COLLECTOR, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.TURBINE)
        .addDataInfo(data => {
            return $LocalizationUtils.format('ctnh.stress_output', (data.getFloat('output_stress')).toFixed(1))
        })
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('windmill_control_center', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('windmill_control_center')
        .recipeModifier((machine,recipe) =>{
            let kineticoutput = machine.getHolder().self().getPersistentData().getFloat("totaloutput")
            let efficiency = machine.getHolder().self().getPersistentData().getFloat("efficiency")
            let copyRecipe = recipe.copy()
            copyRecipe.outputs.put($StressRecipeCapability.CAP, copyRecipe.copyContents(copyRecipe.outputs, $ContentModifier.of(1,kineticoutput)).get($StressRecipeCapability.CAP))
            copyRecipe.outputs.put($StressRecipeCapability.CAP, copyRecipe.copyContents(copyRecipe.outputs, $ContentModifier.of(efficiency,0)).get($StressRecipeCapability.CAP))
            return copyRecipe
        })
        .appearanceBlock(() => Block.getBlock('create:brass_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("BBBBB", "CBBBC", "CBBBC", "#CCC#") 
            .aisle("BBBBB", "BDBDB", "BDBDB", "#C#C#") 
            .aisle("BBBBB", "CB@BC", "CBBBC", "#CCC#") 
            .where("A", Predicates.blocks("minecraft:stone"))
            .where("B", Predicates.blocks("create:brass_casing")
                .or(Predicates.abilities(PartAbility.OUTPUT_KINETIC))
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where("C", Predicates.blocks("gtceu:treated_wood_frame"))
            .where("#", Predicates.any())
            .where("D", Predicates.blocks("kubejs:steel_casing"))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .onWorking((/**@type {$WorkableMultiblockMachine}*/machine) =>{
            let level = machine.level
            let pos = machine.pos
            if(machine.getOffsetTimer() % 20 == 0) {
                let WindMillAround = [];
                let TotalOutput = 0;
                for (let x = -10; x < 11; x++) {
                    for (let y = -10; y < 11; y++) {
                        for (let z = -10; z < 11; z++) {
                            if (x == 0 && y == 0 && z == 0) {
                            } else {
                                let kineticBlockEntity = level.getBlockEntity(pos.offset(x, y, z))
                                if (kineticBlockEntity != null && kineticBlockEntity instanceof $WindmillBearingBlockEntity ) {
                                    let speed = kineticBlockEntity.getGeneratedSpeed();
                                    if(speed != 0){
                                        WindMillAround.push(speed);
                                        TotalOutput += speed * 512;
                                    }
                                }
                            }
                        }
                    }
                }
                let Efficency = WindMillAround.length;
                Efficency = Math.min(Efficency,16)
                machine.getHolder().self().getPersistentData().putFloat("totaloutput",TotalOutput)
                machine.getHolder().self().getPersistentData().putFloat("efficiency",Efficency)
            }
            return true;
        })
        .additionalDisplay((machine, l) => {
            if (machine.isFormed()) {
                let outputStress = machine.getHolder().self().persistentData.getFloat('totaloutput')
                let efficiency = machine.getHolder().self().persistentData.getFloat('efficiency')
                l.add(l.size(), Text.translate("multiblock.ctnh.windmill_control_center1", efficiency.toFixed()))
                l.add(l.size(), Text.translate("multiblock.ctnh.windmill_control_center2", outputStress.toFixed()))
                l.add(l.size(), Text.translate('multiblock.ctnh.windmill_control_center.efficiency', (efficiency*100).toFixed(0)))
                l.add(l.size(), Text.translate("multiblock.ctnh.windmill_control_center.output",(outputStress + 512) * efficiency))
            }
        })
        .workableCasingRenderer('create:block/brass_casing', 'gtceu:block/machines/miner', false)
})