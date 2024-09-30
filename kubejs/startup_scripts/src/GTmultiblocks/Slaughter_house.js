// const SlaughterHouse = Java.loadClass('io.github.cpearl0.ctnhcore.common.machine.multiblock.SlaughterHouse')

// GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
//     event.create('slaughter_house')
//         .setEUIO('in')
//         .setMaxIOSize(4, 4, 2, 2)
//         .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
//         .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
//         .setSound(GTSoundEntries.CHEMICAL)
// })
// GTCEuStartupEvents.registry('gtceu:machine', event => {
//     event.create('slaughter_house', 'multiblock',holder => new SlaughterHouse(holder))
//         .rotationState(RotationState.NON_Y_AXIS)
//         .recipeType('slaughter_house')
//         .recipeModifier((machine, recipe) => {
//             let newrecipe = recipe.copy()
//             let timecost = machine.timecost
//             if (timecost == null) {
//                 timecost = 1
//             }
//             newrecipe.duration = 40 * timecost
//             return newrecipe
//         })
//         .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
//         .pattern(definition => FactoryBlockPattern.start()
//             .aisle("ABBBA", "ABBBA", "CCCCC", "CCCCC", "CCCCC", "CCCCC", "ABBBA")
//             .aisle("BAAAB", "BDDDB", "CDDDC", "CDDDC", "CDDDC", "CDDDC", "BAAAB")
//             .aisle("BAAAB", "BD#DB", "CD#DC", "CD#DC", "CD#DC", "CD#DC", "BAEAB")
//             .aisle("BAAAB", "BDDDB", "CDDDC", "CDDDC", "CDDDC", "CDDDC", "BAAAB")
//             .aisle("AB@BA", "ABBBA", "CCCCC", "CCCCC", "CCCCC", "CCCCC", "ABBBA")
//             .where("A", Predicates.blocks("gtceu:solid_machine_casing"))
//             .where("B", Predicates.blocks("gtceu:solid_machine_casing").setMinGlobalLimited(15)
//                 .or(Predicates.autoAbilities(definition.getRecipeTypes()))
//                 .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
//             )
//             .where("#", Predicates.any())
//             .where("C", Predicates.blocks("gtceu:tempered_glass"))
//             .where("D", Predicates.blocks("enderio:dark_steel_bars"))
//             .where("E", Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1))
//             .where("@", Predicates.controller(Predicates.blocks(definition.get())))
//             .build()
//         )
//         .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_solid_steel', 'gtceu:block/multiblock/implosion_compressor', false)
// })


