GTCEuStartupEvents.registry('gtceu:machine', event => {
    
        event.create('mana_mixer', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('mixer')
        .recipeModifier((machine, recipe,params,result) => {
            let newrecipe = recipe.copy()
            newrecipe = GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK).apply(machine, newrecipe,params,result)
            return GTRecipeModifiers.accurateParallel(machine, newrecipe, 4, false).getFirst()
        })
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("#EEE#", "#EEE#", "#EEE#", "#EEE#", "#EEE#", "##B##") 
            .aisle("EEEEE", "E#A#E", "E###E", "E#A#E", "E###E", "##B##") 
            .aisle("EEEEE", "EAAAE", "E###E", "EAAAE", "E#C#E", "BBCBB") 
            .aisle("EEEEE", "E#A#E", "E###E", "E#A#E", "E###E", "##B##") 
            .aisle("#EEE#", "#E@E#", "#EEE#", "#EEE#", "#EEE#", "##B##") 
            .where("A", Predicates.blocks("kubejs:elementium_pipe_casing"))
            .where("B", Predicates.blocks("gtceu:mana_steel_frame"))
            .where("C", Predicates.blocks("kubejs:mana_steel_tungstensteel_gearbox_casing"))
            .where("D", Predicates.blocks("kubejs:mana_steel_casing"))
            .where("#", Predicates.any())
            .where("E",Predicates.blocks("kubejs:mana_steel_casing")
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS)))
            .where("F", Predicates.blocks("gtceu:steel_gearbox"))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .onWorking(machine => {
            if (machine.getOffsetTimer() % 20 == 0) {
                let tier = machine.self().getTier()
                let recipe = $GTRecipeBuilder.ofRaw()["inputFluids(com.lowdragmc.lowdraglib.side.fluid.FluidStack)"]("gtceu:mana " + Math.pow(2, tier) * 5).buildRawRecipe()
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
            let recipe1 = $GTRecipeBuilder.ofRaw()["inputFluids(com.lowdragmc.lowdraglib.side.fluid.FluidStack)"]("gtceu:mana " + Math.pow(2, tier) * 5).buildRawRecipe()
            if (recipe1.matchRecipe(machine).isSuccess()) {
                return true
            }
            machine.getRecipeLogic().interruptRecipe()
            return false
        })
        .workableCasingRenderer('botania:block/polished_livingrock', 'gtceu:block/multiblock/generator/large_steam_turbine', false)

})
