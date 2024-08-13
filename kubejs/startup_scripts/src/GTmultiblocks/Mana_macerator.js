GTCEuStartupEvents.registry('gtceu:machine', event =>{
    event.create('mana_macerator','multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('macerator')
        //.appearanceBlock(GTBlocks.get('kubejs:manasteel_casing'))
        .recipeModifier((machine,recipe) => {
            let newrecipe = recipe.copy()
            newrecipe = GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK).apply(machine,newrecipe)
            return GTRecipeModifiers.accurateParallel(machine,newrecipe,4,false).getFirst()
        })
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("ABBA", "AAAA", "ABBA") 
            .aisle("ABBA", "ACCA", "ABBA") 
            .aisle("ABBA", "A@DA", "ABBA") 
            .where("A", Predicates.blocks("botania:polished_livingrock")
                    .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where("B", Predicates.blocks("kubejs:manasteel_casing"))
            .where("C", Predicates.blocks("gtceu:steel_gearbox"))
            .where("D",Predicates.abilities(PartAbility.IMPORT_FLUIDS))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .onWorking(machine =>{
            if (machine.getOffsetTimer() % 20 == 0){
                let tier = machine.self().getTier()
                if (machine.input(true, machine.getContentBuilder().fluid("gtceu:mana " + (2 ** (tier)) * 10).build()).isSuccess()) {
                    machine.input(false, machine.getContentBuilder().fluid("gtceu:mana " + (2 ** (tier)) * 10).build())
                    return true
                }
                machine.getRecipeLogic().setProgress(0)
            }
            return true
        })
        .beforeWorking((/**@type {$WorkableElectricMultiblockMachine}*/machine,recipe)=>{
            if (machine.input(true, machine.getContentBuilder().fluid("gtceu:mana " + (2 ** (machine.self().getTier())) * 10).build()).isSuccess()) {
                return true
            }
            machine.getRecipeLogic().interruptRecipe()
            return false
        })
        .workableCasingRenderer('botania:block/polished_livingrock',  'gtceu:block/multiblock/generator/large_steam_turbine', false)
})
