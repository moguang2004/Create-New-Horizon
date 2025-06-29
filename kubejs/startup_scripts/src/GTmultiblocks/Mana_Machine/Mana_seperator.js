GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('mana_seperator')
        .category('ctnh')
        .setMaxIOSize(3, 6, 3, 2)
        .setEUIO('in')
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CENTRIFUGE)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('mana_seperator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('mana_seperator')
        .appearanceBlock(() => Block.getBlock('ctnhcore:mana_steel_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("A###A", "A###A", "ABBBA", "CHHHC", "#####", "#####", "#####", "#####")
            .aisle("#####", "#####", "BCCCB", "HDEDH", "#DED#", "#DED#", "#DFD#", "##G##")
            .aisle("#####", "#####", "BCCCB", "HE#EH", "#E#E#", "#E#E#", "#F#F#", "#GGG#")
            .aisle("#####", "#####", "BCCCB", "HDEDH", "#DED#", "#DED#", "#DFD#", "##G##")
            .aisle("A###A", "A###A", "AHHHA", "CH@HC", "#####", "#####", "#####", "#####")
            .where("A", Predicates.blocks("botania:glimmering_livingwood_log"))
            .where("#", Predicates.any())
            .where("B", Predicates.blocks("gtceu:mana_steel_frame"))
            .where("C", Predicates.blocks("botania:polished_livingrock"))
            .where("D", Predicates.blocks("gtceu:elementium_frame"))
            .where("E", Predicates.blocks("ctnhcore:mana_steel_casing"))
            .where("F", Predicates.blocks("ctnhcore:terra_steel_casing"))
            .where("G", Predicates.blocks("ctnhcore:alfsteel_casing"))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .where("H", Predicates.blocks("botania:polished_livingrock")
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .build()
        )
        .workableCasingRenderer('botania:block/polished_livingrock', 'gtceu:block/multiblock/generator/large_steam_turbine', false)
})
