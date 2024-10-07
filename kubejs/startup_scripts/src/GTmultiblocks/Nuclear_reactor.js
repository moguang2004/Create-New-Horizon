GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    GTRecipeTypes.register('nuclear_reactor', 'multiblock')
        //.category('ctnh')
        .setEUIO('in')
        .setMaxIOSize(3, 4, 1, 1)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)
        .addDataInfo(data => {
            return $LocalizationUtils.format('ctnh.nuclear_reactor_heat', (data.getFloat('heat')).toFixed(1))
        })
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('nuclear_reactor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('nuclear_reactor')
        .recipeModifier((machine,/**@type {$GTRecipe}*/recipe) => {
            let heat = recipe.data.getFloat('heat')
            machine.getHolder().self().persistentData.putFloat('heat', heat)
            return recipe
        })
        .appearanceBlock(() => Block.getBlock('kubejs:shielded_reactor_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("DDD", "ABA", "ABA", "ABA", "ABA", "ABA", "ABA", "ABA", "DDD")
            .aisle("DDD", "BCB", "BCB", "BCB", "BCB", "BCB", "BCB", "BCB", "DDD")
            .aisle("D@D", "ABA", "ABA", "ABA", "ABA", "ABA", "ABA", "ABA", "DDD")
            .where("A", Predicates.blocks("kubejs:shielded_reactor_casing"))
            .where("B", Predicates.blocks("gtceu:tempered_glass"))
            .where("C", Predicates.blocks("gtceu:thorium_block"))
            .where("D", Predicates.blocks("kubejs:shielded_reactor_casing")
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .onWorking((/**@type {$WorkableElectricMultiblockMachine} */machine) => {
            let heat = machine.getHolder().self().persistentData.getFloat('heat')
            if (machine.getOffsetTimer() % 20 == 0) {
                machine.getParts().forEach((/** @type {$IMultiPart} */part) => {
                    part.getRecipeHandlers().forEach((/** @type {$IRecipeHandlerTrait} */trait) => {
                        if (trait.getHandlerIO() == IO.IN) {
                            trait.getContents().forEach((contents) => {
                                if (contents instanceof $FluidStack) {
                                    if (contents.getFluid().isSame(Fluid.of('gtceu:sodium_potassium').getFluid())) {
                                        if (contents.getAmount() >= heat * 50 / 3) {
                                            machine.getHolder().self().persistentData.putString('coolant', 'gtceu:sodium_potassium')
                                            machine.getHolder().self().persistentData.putFloat('coolant_amount', contents.getAmount())
                                            machine.getHolder().self().persistentData.putFloat('consume_amount', heat * 50 / 3)
                                            let recipeIn = $GTRecipeBuilder.ofRaw()["inputFluids(com.lowdragmc.lowdraglib.side.fluid.FluidStack)"]("gtceu:sodium_potassium " + Number((heat * 50 / 3).toFixed(0))).buildRawRecipe()
                                            let recipeOut = $GTRecipeBuilder.ofRaw()["outputFluids(com.lowdragmc.lowdraglib.side.fluid.FluidStack)"]("gtceu:hot_sodium_potassium " + Number((heat * 50 / 3).toFixed(0))).buildRawRecipe()
                                            if (recipeIn.matchRecipe(machine).isSuccess() && recipeOut.matchRecipe(machine).isSuccess()) {
                                                recipeIn.handleRecipeIO(IO.IN, machine, machine.recipeLogic.getChanceCaches())
                                                recipeOut.handleRecipeIO(IO.OUT, machine, machine.recipeLogic.getChanceCaches())
                                                machine.recipeLogic.setProgress(machine.getProgress() + 20)
                                                return true
                                            }
                                        }
                                    }
                                    else if (contents.getFluid().isSame(Fluid.of('gtceu:sodium').getFluid())) {
                                        if (contents.getAmount() >= heat * 18.75) {
                                            machine.getHolder().self().persistentData.putString('coolant', 'gtceu:sodium')
                                            machine.getHolder().self().persistentData.putFloat('coolant_amount', contents.getAmount())
                                            machine.getHolder().self().persistentData.putFloat('consume_amount', heat * 18.75)
                                            let recipeIn = $GTRecipeBuilder.ofRaw()["inputFluids(com.lowdragmc.lowdraglib.side.fluid.FluidStack)"]("gtceu:sodium " + Number((heat * 18.75).toFixed(0))).buildRawRecipe()
                                            let recipeOut = $GTRecipeBuilder.ofRaw()["outputFluids(com.lowdragmc.lowdraglib.side.fluid.FluidStack)"]("gtceu:hot_sodium " + Number((heat * 18.75).toFixed(0))).buildRawRecipe()
                                            if (recipeIn.matchRecipe(machine).isSuccess() && recipeOut.matchRecipe(machine).isSuccess()) {
                                                recipeIn.handleRecipeIO(IO.IN, machine, machine.recipeLogic.getChanceCaches())
                                                recipeOut.handleRecipeIO(IO.OUT, machine, machine.recipeLogic.getChanceCaches())
                                                machine.recipeLogic.setProgress(machine.getProgress() + 20)
                                                return true
                                            }
                                        }
                                    }
                                    else if (contents.getFluid().isSame(Fluid.of('gtceu:deuterium').getFluid())) {
                                        if (contents.getAmount() >= heat * 100 / 3) {
                                            machine.getHolder().self().persistentData.putString('coolant', 'gtceu:deuterium')
                                            machine.getHolder().self().persistentData.putFloat('coolant_amount', contents.getAmount())
                                            machine.getHolder().self().persistentData.putFloat('consume_amount', heat * 100 / 3)
                                            let recipeIn = $GTRecipeBuilder.ofRaw()["inputFluids(com.lowdragmc.lowdraglib.side.fluid.FluidStack)"]("gtceu:deuterium " + Number((heat * 100 / 3).toFixed(0))).buildRawRecipe()
                                            let recipeOut = $GTRecipeBuilder.ofRaw()["outputFluids(com.lowdragmc.lowdraglib.side.fluid.FluidStack)"]("gtceu:hot_deuterium " + Number((heat * 100 / 3).toFixed(0))).buildRawRecipe()
                                            if (recipeIn.matchRecipe(machine).isSuccess() && recipeOut.matchRecipe(machine).isSuccess()) {
                                                recipeIn.handleRecipeIO(IO.IN, machine, machine.recipeLogic.getChanceCaches())
                                                recipeOut.handleRecipeIO(IO.OUT, machine, machine.recipeLogic.getChanceCaches())
                                                machine.recipeLogic.setProgress(machine.getProgress() + 20)
                                                return true
                                            }
                                        }
                                    }
                                    else if (contents.getFluid().isSame(Fluid.of('gtceu:steam').getFluid())) {
                                        if (contents.getAmount() >= heat * 100) {
                                            machine.getHolder().self().persistentData.putString('coolant', 'gtceu:steam')
                                            machine.getHolder().self().persistentData.putFloat('coolant_amount', contents.getAmount())
                                            machine.getHolder().self().persistentData.putFloat('consume_amount', heat * 100)
                                            let recipeIn = $GTRecipeBuilder.ofRaw()["inputFluids(com.lowdragmc.lowdraglib.side.fluid.FluidStack)"]("gtceu:steam " + Number((heat * 100 / 3).toFixed(0))).buildRawRecipe()
                                            let recipeOut = $GTRecipeBuilder.ofRaw()["outputFluids(com.lowdragmc.lowdraglib.side.fluid.FluidStack)"]("gtceu:hot_steam " + Number((heat * 100 / 3).toFixed(0))).buildRawRecipe()
                                            if (recipeIn.matchRecipe(machine).isSuccess() && recipeOut.matchRecipe(machine).isSuccess()) {
                                                recipeIn.handleRecipeIO(IO.IN, machine, machine.recipeLogic.getChanceCaches())
                                                recipeOut.handleRecipeIO(IO.OUT, machine, machine.recipeLogic.getChanceCaches())
                                                machine.recipeLogic.setProgress(machine.getProgress() + 20)
                                                return true
                                            }
                                        }
                                    }
                                }
                            })
                        }
                    })
                })
            }
            return true
        })
        .additionalDisplay((machine, l) => {
            if (machine.isFormed()) {
                // let coolant = Fluid.of(machine.getHolder().self().persistentData.getString('coolant')).getFluidStack().getName().getString()
                // console.info(coolant)
                // if(coolant == null){
                //     coolant = 'none'
                // }
                let coolant_amount = machine.getHolder().self().persistentData.getFloat('coolant_amount')
                if (coolant_amount == null) {
                    coolant_amount = 0
                }
                let consume_amount = machine.getHolder().self().persistentData.getFloat('consume_amount')
                if (consume_amount == null) {
                    consume_amount = 0
                }
                //l.add(l.size(), Text.of("冷却液：" + coolant))
                l.add(l.size(), Text.translate("multiblock.ctnh.nuclear_reactor.coolant_amount", coolant_amount.toFixed(1)))
                l.add(l.size(), Text.translate("multiblock.ctnh.nuclear_reactor.consume_amount", consume_amount.toFixed(1)))
            }
        })
        .workableCasingRenderer('kubejs:block/shielded_reactor_casing', 'gtceu:block/machines/nuclear_reactor', false)
})
