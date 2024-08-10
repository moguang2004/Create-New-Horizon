GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('deep_vein_mining')
        .category('deep_vein_mining')
        .setEUIO('in')
        .setMaxIOSize(3, 24, 3, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MINER);
});

// Multiblock

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('deep_vein_mining_drill_rig', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('deep_vein_mining')
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CCCCCCC", "XF   FX", "XF   FX", "XXXXXXX", "XF   FX", "XF   FX", "XF   FX", " F   F ", "       ", "       ", "       ", "       ")
            .aisle("CCCCCCC", "F     F", "F     F", "X     X", "F     F", "F     F", "FX   XF", "FX   XF", " FFFFF ", "       ", "       ", "       ")
            .aisle("CCBBBCC", "       ", "   A   ", "X  F  X", "   F   ", "   F   ", "  PGP  ", "  PGP  ", " FVFVF ", "  #F#  ", "  #F#  ", "  ###  ")
            .aisle("CCBBBCC", "   A   ", "  AAA  ", "X FPF X", "  FPF  ", "  FPF  ", "  GGG  ", "  GGG  ", " FFXFF ", "  FXF  ", "  FXF  ", "  #F#  ")
            .aisle("CCBBBCC", "       ", "   A   ", "X  F  X", "   F   ", "   F   ", "  PGP  ", "  PGP  ", " FVFVF ", "  #F#  ", "  #F#  ", "  ###  ")
            .aisle("CCCCCCC", "F     F", "F     F", "X     X", "F     F", "F     F", "FX   XF", "FX   XF", " FFFFF ", "       ", "       ", "       ")
            .aisle("CCCCCCC", "XF   FX", "XF   FX", "XXXYXXX", "XF   FX", "XF   FX", "XF   FX", " F   F ", "       ", "       ", "       ", "       ")
            .where('C', Predicates.blocks('gtceu:dark_concrete'))
            .where('B', Predicates.blocks('gtceu:flint_block'))
            .where('A', Predicates.blocks('gtceu:tungsten_carbide_block'))
            .where('V', Predicates.blocks('gtceu:heat_vent'))
            .where('F', Predicates.frames('tungsten_steel'))
            .where('P', Predicates.blocks('gtceu:tungstensteel_pipe_casing'))
            .where('G', Predicates.blocks('gtceu:tungstensteel_gearbox'))
            .where('X', Predicates.blocks('gtceu:robust_machine_casing').or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('#', Predicates.air())
            .where(' ', Predicates.any())
            .where('Y', Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_robust_tungstensteel', 'gtceu:block/multiblock/large_chemical_reactor', false);


});