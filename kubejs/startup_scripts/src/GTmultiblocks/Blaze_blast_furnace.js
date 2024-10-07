GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('blaze_blast_furnace', 'multiblock', (holder) => new $CoilWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('electric_blast_furnace')
        .recipeModifier((machine,/**@type {$GTRecipe}*/recipe, params, result) => {
            let parallel = 8
            let newrecipe = recipe.copy()
            newrecipe.tickInputs.put($EURecipeCapability.CAP, newrecipe.copyContents(newrecipe.tickInputs, $ContentModifier.of(0.75, 0)).get($EURecipeCapability.CAP))
            newrecipe = GTRecipeModifiers.accurateParallel(machine, newrecipe, parallel, false).getFirst()
            return GTRecipeModifiers.ebfOverclock(machine, newrecipe, params, result)
        })
        //.appearanceBlock('kubejs:blaze_blast_frunace_casing')
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('GGG', 'MMM', 'MMM', 'GGG')
            .aisle('GGG', 'M M', 'M M', 'GBG')
            .aisle('GKG', 'MMM', 'MMM', 'GGG')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('M', Predicates.heatingCoils())
            .where('B', Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1))
            .where('G', Predicates.blocks('kubejs:blaze_blast_furnace_casing').setMinGlobalLimited(4)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            )
            .where(' ', Predicates.air())
            .build()
        )
        .additionalDisplay((machine, l) => {
            let current = 0
            machine.getParts().forEach((/** @type {$IMultiPart} */part) => {
                part.getRecipeHandlers().forEach((/** @type {$IRecipeHandlerTrait} */trait) => {
                    if (trait.getHandlerIO() == $IO.IN) {
                        trait.getContents().forEach((contents) => {
                            if (contents instanceof $FluidStack) {
                                if (contents.getFluid().isSame(Fluid.of('gtceu:pyrotheum').getFluid())) {
                                    current += contents.getAmount()
                                }
                            }
                        })
                    }
                })
            })
            if (machine.isFormed()) {
                l.add(Component.translatable("gtceu.multiblock.blast_furnace.max_temperature", Text.of(machine.getCoilType().getCoilTemperature() + "K").red()))
                l.add(l.size(), Text.translate('ctnh.blaze_blast_furnace.pyrotheum', current))
            }
        })
        .onWorking(machine => {
            if (machine.getOffsetTimer() % 20 == 0) {
                let tier = machine.self().getTier()
                let recipe = $GTRecipeBuilder.ofRaw()["inputFluids(com.lowdragmc.lowdraglib.side.fluid.FluidStack)"]("gtceu:pyrotheum " + Math.pow(2, (tier - 2)) * 10).buildRawRecipe()
                if (recipe.matchRecipe(machine).isSuccess()) {
                    recipe.handleRecipeIO($IO.IN, machine, machine.recipeLogic.getChanceCaches())
                    return true
                }
                machine.getRecipeLogic().setProgress(0)
            }
            return true
        })
        .beforeWorking((/**@type {$WorkableElectricMultiblockMachine}*/machine, recipe) => {
            let tier = machine.self().getTier()
            let recipe1 = $GTRecipeBuilder.ofRaw()["inputFluids(com.lowdragmc.lowdraglib.side.fluid.FluidStack)"]("gtceu:pyrotheum " + Math.pow(2, (tier - 2)) * 10).buildRawRecipe()
            if (recipe1.matchRecipe(machine).isSuccess()) {
                return true
            }
            machine.getRecipeLogic().interruptRecipe()
            return false
        })
        .workableCasingRenderer('kubejs:block/blaze_blast_furnace_casing', 'gtceu:block/multiblock/implosion_compressor', false)
})