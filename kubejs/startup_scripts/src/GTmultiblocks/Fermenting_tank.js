// GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
//     GTRecipeTypes.register('fermenting', 'multiblock')
//         .setEUIO('in')
//         .setMaxIOSize(4, 4, 1, 1)
//         .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
//         .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
//         .setSound(GTSoundEntries.CHEMICAL)
//         .addDataInfo(data => {
//             return $LocalizationUtils.format("gtceu.recipe.temperature", $FormattingUtil.formatNumbers(data.getInt("ebf_temp")))
//         })
//         .addDataInfo(data => {
//             let requiredCoil = $ICoilType.getMinRequiredType(data.getInt("ebf_temp"))
//             if ($LDLib.isClient() && requiredCoil != null && requiredCoil.getMaterial() != null) {
//                 return $LocalizationUtils.format("gtceu.recipe.coil.tier", $I18n.get(requiredCoil.getMaterial().getUnlocalizedName()))
//             }
//             return ""
//         })
//         .setUiBuilder((recipe, widgetGroup) => {
//             /**@param {$List_} items*/
//             let temp = recipe.data.getInt("ebf_temp");
//             let items = new $ArrayList()
//             items.add(GTCEuAPI.HEATING_COILS.entrySet().stream().filter(coil => coil.getKey().getCoilTemperature() >= temp).map(coil => new $ItemStack(coil.getValue().get())).toList());
//             widgetGroup.addWidget(new SlotWidget(new $CycleItemStackHandler(items), 0, widgetGroup.getSize().width - 25, widgetGroup.getSize().height - 32, false, false));
//         })
// })
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('fermenting_tank', 'multiblock', (holder) => new $FermentingTankMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType("fermenting")
        .recipeModifier((/**@type {$MultiblockControllerMachine}*/machine,/**@type {$GTRecipe}*/recipe, params, result) => {
            return $FermentingTankMachine.recipeModifier(machine,recipe,params,result)
        })
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('C   C', 'C   C', 'CCCCC', 'H   H', 'H   H', 'H   H', 'DAAAD')
            .aisle('     ', ' GGG ', 'CGGGC', ' MMM ', ' GGG ', ' GGG ', 'AAAAA')
            .aisle('     ', ' GGG ', 'CG GC', ' M M ', ' G G ', ' G G ', 'AABAA')
            .aisle('     ', ' GGG ', 'CGGGC', ' MMM ', ' GGG ', ' GGG ', 'AAAAA')
            .aisle('C   C', 'CAKAC', 'CAAAC', 'H   H', 'H   H', 'H   H', 'DAAAD')
            .where('C', Predicates.blocks('gtceu:steel_frame'))
            .where('H', Predicates.blocks('create:metal_girder'))
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('M', Predicates.heatingCoils())
            .where('D', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()))
            .where('B', Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1))
            .where('A', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()).setMinGlobalLimited(15)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            )
            .where('G', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
            .where(' ', Predicates.air())
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_solid_steel', 'gtceu:block/multiblock/implosion_compressor', false)
})
