// priority: 96
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    GTRecipeTypes.register('desalting', 'multiblock')
        //.category('ctnh')
        .setEUIO('in')
        .setMaxIOSize(1, 4, 1, 1)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
        .addDataInfo(data => {
            return $LocalizationUtils.format("gtceu.recipe.temperature", $FormattingUtil.formatNumbers(data.getInt("ebf_temp")))
        })
        .addDataInfo(data => {
            let requiredCoil = $ICoilType.getMinRequiredType(data.getInt("ebf_temp"))
            if ($LDLib.isClient() && requiredCoil != null && requiredCoil.getMaterial() != null) {
                return $LocalizationUtils.format("gtceu.recipe.coil.tier", $I18n.get(requiredCoil.getMaterial().getUnlocalizedName()))
            }
            return ""
        })
        .setUiBuilder((recipe, widgetGroup) => {
            /**@param {$List_} items*/
            let temp = recipe.data.getInt("ebf_temp");
            let items = new $ArrayList()
            items.add(GTCEuAPI.HEATING_COILS.entrySet().stream().filter(coil => coil.getKey().getCoilTemperature() >= temp).map(coil => new $ItemStack(coil.getValue().get())).toList());
            widgetGroup.addWidget(new SlotWidget(new CycleItemStackHandler(items), 0, widgetGroup.getSize().width - 25, widgetGroup.getSize().height - 32, false, false));
        })
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('seawater_desalting_factory', 'multiblock', (holder) => new $CoilWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('desalting')
        .recipeModifier((machine, recipe, params, result) => {
            let newrecipe = GTRecipeModifiers.ebfOverclock(machine, recipe, params, result)
            let parallel = 1
            if (newrecipe.duration < 1) {
                parallel = 1 / newrecipe.duration
            }
            return GTRecipeModifiers.accurateParallel(machine, newrecipe, parallel, false).getFirst()
        })
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('C   C', 'C   C', 'CGGGC', ' GGG ')
            .aisle('     ', '     ', 'GMMMG', 'G###G')
            .aisle('     ', '     ', 'GMBMG', 'G###G')
            .aisle('     ', '     ', 'GMMMG', 'G###G')
            .aisle('C   C', 'C   C', 'CGKGC', ' GGG ')
            .where('C', Predicates.blocks('gtceu:steel_frame'))
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('M', Predicates.heatingCoils())
            .where('B', Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1))
            .where('G', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()).setMinGlobalLimited(15)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            )
            .where('#', Predicates.blocks('minecraft:water'))
            .where(' ', Predicates.any())
            .build()
        )
        .additionalDisplay((machine, l) => {
            if (machine.isFormed()) {
                l.add(Component.translatable("gtceu.multiblock.blast_furnace.max_temperature", Text.of(machine.getCoilType().getCoilTemperature() + "K").red()))
            }
        })
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_solid_steel', 'gtceu:block/multiblock/implosion_compressor', false)
})

/*GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('greenhouse', 'multiblock')
      .rotationState(RotationState.NON_Y_AXIS)
      .recipeType('desalting')
      .appearanceBlock(GTBlocks.MACHINE_CASING_ULV)
      .recipeModifier(GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK))
      .pattern(definition => FactoryBlockPattern.start()
        .aisle('#BBB#', '#BBB#', '#BBB#', '#BBB#')
        .aisle('BBBBB', 'BDDDB', 'B###B', 'BGGGB')
        .aisle('BBBBB', 'BDDDB', 'B###B', 'BGGGB')
        .aisle('BBBBB', 'BDDDB', 'B###B', 'BGGGB')
        .aisle('#BBB#', '#BEB#', '#BBB#', '#BBB#')
        .where('E', Predicates.controller(Predicates.blocks(definition.get())))
        .where('D', Predicates.blocks('minecraft:dirt'))
        .where('G', Predicates.blocks('gtceu:tempered_glass'))
        .where('B', Predicates.blocks('gtceu:ulv_machine_casing').setMinGlobalLimited(5).or(Predicates.autoAbilities(definition.getRecipeTypes())))
        .where('#', Predicates.air())
        .build())
      .workableCasingRenderer('gtceu:block/casings/voltage/ulv/side', 'gtceu:block/multiblock/implosion_compressor', true)
  })
*/