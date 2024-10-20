GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('mana_macerator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('macerator')
        .recipeModifier((machine, recipe,params,result) => {
            let newrecipe = recipe.copy()
            newrecipe = GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK).apply(machine, newrecipe,params,result)
            return GTRecipeModifiers.accurateParallel(machine, newrecipe, 4, false).getFirst()
        })
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("ABBA", "AAAA", "ABBA")
            .aisle("ABBA", "ACCA", "ABBA")
            .aisle("ABBA", "A@DA", "ABBA")
            .where("A", Predicates.blocks("botania:polished_livingrock")
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where("B", Predicates.blocks("kubejs:mana_steel_casing"))
            .where("C", Predicates.blocks("gtceu:steel_gearbox"))
            .where("D", Predicates.abilities(PartAbility.IMPORT_FLUIDS))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .onWorking(machine => {
            if (machine.getOffsetTimer() % 20 == 0) {
                let tier = machine.self().getTier()
                let recipe = $GTRecipeBuilder.ofRaw()["inputFluids(com.lowdragmc.lowdraglib.side.fluid.FluidStack)"]("gtceu:mana " + Math.pow(2, tier) * 2).buildRawRecipe()
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
            let recipe1 = $GTRecipeBuilder.ofRaw()["inputFluids(com.lowdragmc.lowdraglib.side.fluid.FluidStack)"]("gtceu:mana " + Math.pow(2, tier) * 2).buildRawRecipe()
            if (recipe1.matchRecipe(machine).isSuccess()) {
                return true
            }
            machine.getRecipeLogic().interruptRecipe()
            return false
        })
        .workableCasingRenderer('botania:block/polished_livingrock', 'gtceu:block/multiblock/generator/large_steam_turbine', false)

        event.create('mana_bender', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('bender')
        .recipeModifier((machine, recipe,params,result) => {
            let newrecipe = recipe.copy()
            newrecipe = GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK).apply(machine, newrecipe,params,result)
            return GTRecipeModifiers.accurateParallel(machine, newrecipe, 4, false).getFirst()
        })
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("EEEEE", "ABBBA", "ABBBA", "ACCCA") 
            .aisle("EDDDE", "B###B", "B###B", "CDDDC") 
            .aisle("EDDDE", "B#F#B", "B#F#B", "CDDDC") 
            .aisle("EDDDE", "B###B", "B###B", "CDDDC") 
            .aisle("EEEEE", "AE@EA", "AEEEA", "ACCCA") 
            .where("A", Predicates.blocks("botania:polished_livingrock"))
            .where("B", Predicates.blocks("gtceu:mana_steel_frame"))
            .where("C", Predicates.blocks("botania:livingrock_bricks_stairs"))
            .where("D", Predicates.blocks("kubejs:mana_steel_casing"))
            .where("#", Predicates.any())
            .where("E",Predicates.blocks("botania:polished_livingrock")
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS)))
            .where("F", Predicates.blocks("gtceu:steel_gearbox"))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .onWorking(machine => {
            if (machine.getOffsetTimer() % 20 == 0) {
                let tier = machine.self().getTier()
                let recipe = $GTRecipeBuilder.ofRaw()["inputFluids(com.lowdragmc.lowdraglib.side.fluid.FluidStack)"]("gtceu:mana " + Math.pow(2, tier) * 2).buildRawRecipe()
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
            let recipe1 = $GTRecipeBuilder.ofRaw()["inputFluids(com.lowdragmc.lowdraglib.side.fluid.FluidStack)"]("gtceu:mana " + Math.pow(2, tier) * 2).buildRawRecipe()
            if (recipe1.matchRecipe(machine).isSuccess()) {
                return true
            }
            machine.getRecipeLogic().interruptRecipe()
            return false
        })
        .workableCasingRenderer('botania:block/polished_livingrock', 'gtceu:block/multiblock/generator/large_steam_turbine', false)

        event.create('mana_lathe', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('lathe')
        .recipeModifier((machine, recipe,params,result) => {
            let newrecipe = recipe.copy()
            newrecipe = GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK).apply(machine, newrecipe,params,result)
            return GTRecipeModifiers.accurateParallel(machine, newrecipe, 4, false).getFirst()
        })
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("ABA", "AAA", "AAA", "CAC") 
            .aisle("ABA", "D#D", "D#D", "CAC") 
            .aisle("ABA", "D#D", "D#D", "CAC") 
            .aisle("ABA", "D#D", "D#D", "CAC") 
            .aisle("ABA", "A@A", "AAA", "CAC") 
            .where("A", Predicates.blocks("botania:polished_livingrock")
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS)))
            .where("B", Predicates.blocks("kubejs:mana_steel_casing"))
            .where("C", Predicates.blocks("botania:livingrock_bricks_stairs"))
            .where("D", Predicates.blocks("gtceu:mana_steel_frame"))
            .where("#", Predicates.any())
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .onWorking(machine => {
            if (machine.getOffsetTimer() % 20 == 0) {
                let tier = machine.self().getTier()
                let recipe = $GTRecipeBuilder.ofRaw()["inputFluids(com.lowdragmc.lowdraglib.side.fluid.FluidStack)"]("gtceu:mana " + Math.pow(2, tier) * 2).buildRawRecipe()
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
            let recipe1 = $GTRecipeBuilder.ofRaw()["inputFluids(com.lowdragmc.lowdraglib.side.fluid.FluidStack)"]("gtceu:mana " + Math.pow(2, tier) * 2).buildRawRecipe()
            if (recipe1.matchRecipe(machine).isSuccess()) {
                return true
            }
            machine.getRecipeLogic().interruptRecipe()
            return false
        })
        .workableCasingRenderer('botania:block/polished_livingrock', 'gtceu:block/multiblock/generator/large_steam_turbine', false)

        event.create('mana_assembler', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('assembler')
        .recipeModifier((machine, recipe,params,result) => {
            let newrecipe = recipe.copy()
            newrecipe = GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK).apply(machine, newrecipe,params,result)
            return GTRecipeModifiers.accurateParallel(machine, newrecipe, 4, false).getFirst()
        })
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("ABBBBBA", "ABBBBBA", "ABBBBBA", "ACCCCCA", "AAAAAAA") 
            .aisle("BDEEEDB", "B#####B", "B#####B", "C#####C", "ABBBBBA") 
            .aisle("BEDFDEB", "B#####B", "B##G##B", "C#####C", "ABBBBBA") 
            .aisle("BEFDFEB", "B##H##B", "B#GHG#B", "C##H##C", "ABBBBBA") 
            .aisle("BEDFDEB", "B#####B", "B##G##B", "C#####C", "ABBBBBA") 
            .aisle("BDEEEDB", "B#####B", "B#####B", "C#####C", "ABBBBBA") 
            .aisle("ABBBBBA", "ABB@BBA", "ABBBBBA", "ACCCCCA", "AAAAAAA") 
            .where("A", Predicates.blocks("gtceu:alfsteel_frame"))
            .where("B", Predicates.blocks("botania:polished_livingrock")
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS)))
            .where("C", Predicates.blocks("botania:mana_glass"))
            .where("D", Predicates.blocks("kubejs:elementium_casing"))
            .where("E", Predicates.blocks("kubejs:mana_steel_casing"))
            .where("#", Predicates.any())
            .where("F", Predicates.blocks("kubejs:terra_steel_casing"))
            .where("G", Predicates.blocks("gtceu:stainless_steel_gearbox"))
            .where("H", Predicates.blocks("gtceu:titanium_gearbox"))
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

        event.create('mana_wiremill', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('wiremill')
        .recipeModifier((machine, recipe,params,result) => {
            let newrecipe = recipe.copy()
            newrecipe = GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK).apply(machine, newrecipe,params,result)
            return GTRecipeModifiers.accurateParallel(machine, newrecipe, 4, false).getFirst()
        })
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("AAA", "BBB", "CCC") 
            .aisle("AAA", "BBB", "CCC") 
            .aisle("AAA", "B@B", "CCC") 
            .where("A", Predicates.blocks("botania:polished_livingrock")
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS)))
            .where("B", Predicates.blocks("gtceu:elementium_frame"))
            .where("C", Predicates.blocks("kubejs:elementium_casing"))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .onWorking(machine => {
            if (machine.getOffsetTimer() % 20 == 0) {
                let tier = machine.self().getTier()
                let recipe = $GTRecipeBuilder.ofRaw()["inputFluids(com.lowdragmc.lowdraglib.side.fluid.FluidStack)"]("gtceu:mana " + Math.pow(2, tier) * 2).buildRawRecipe()
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
            let recipe1 = $GTRecipeBuilder.ofRaw()["inputFluids(com.lowdragmc.lowdraglib.side.fluid.FluidStack)"]("gtceu:mana " + Math.pow(2, tier) * 2).buildRawRecipe()
            if (recipe1.matchRecipe(machine).isSuccess()) {
                return true
            }
            machine.getRecipeLogic().interruptRecipe()
            return false
        })
        .workableCasingRenderer('botania:block/polished_livingrock', 'gtceu:block/multiblock/generator/large_steam_turbine', false)
})
