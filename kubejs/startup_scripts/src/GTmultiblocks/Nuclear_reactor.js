const { $WorkableElectricMultiblockMachine } = require("packages/com/gregtechceu/gtceu/api/machine/multiblock/$WorkableElectricMultiblockMachine")

GTCEuStartupEvents.registry('gtceu:recipe_type',event =>{
    event.create('nuclear_reactor')
        .category('ctnh')
        .setMaxIOSize(2, 2, 1, 1)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})
GTCEuStartupEvents.registry('gtceu:machine', event =>{
    event.create('nuclear_reactor','multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('nuclear_reactor')
        //.appearanceBlock(GTBlocks.get('kubejs:manasteel_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("DDD", "ABA", "ABA", "ABA", "ABA", "ABA", "ABA", "ABA", "DDD") 
            .aisle("DDD", "BCB", "BCB", "BCB", "BCB", "BCB", "BCB", "BCB", "DDD") 
            .aisle("D@D", "ABA", "ABA", "ABA", "ABA", "ABA", "ABA", "ABA", "DDD") 
            .where("A", Predicates.blocks("kubejs:shielded_reactor_casing"))
            .where("B", Predicates.blocks("gtceu:tempered_glass"))
            .where("C", Predicates.blocks("gtceu:thorium_block"))
            .where("D",Predicates.blocks("kubejs:shielded_reactor_casing")
                    .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        // .onWorking((/**@type {$WorkableElectricMultiblockMachine} */machine) =>{
        //     if(machine.getOffsetTimer() %20 == 0){
        //         machine.parts.find()
        //     }
        // })
        .workableCasingRenderer('kubejs:block/shielded_reactor_casing',  'gtceu:block/multiblock/generator/large_steam_turbine', false)
})
