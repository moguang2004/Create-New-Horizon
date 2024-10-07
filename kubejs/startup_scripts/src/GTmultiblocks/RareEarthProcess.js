GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    GTRecipeTypes.register('vacuum_sintering', 'multiblock')
        .setEUIO('in')
        .setMaxIOSize(6, 6, 6, 6)
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
    GTRecipeTypes.register('crystallizer', 'multiblock')
        .setEUIO('in')
        .setMaxIOSize(6, 6, 6, 6)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_CRYSTALLIZATION, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)
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
    event.create('vacuum_sintering_tower', 'multiblock', (holder) => new $CoilWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('vacuum_sintering')
        .recipeModifier((machine, recipe, params, result) => {
            let newrecipe = GTRecipeModifiers.ebfOverclock(machine, recipe, params, result)
            let parallel = 16
            if (newrecipe.duration < 1) {
                parallel = 16 / newrecipe.duration
            }
            return GTRecipeModifiers.accurateParallel(machine, newrecipe, parallel, false).getFirst()
        })
        .appearanceBlock(GCyMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("AAAAA", "AAAAA", "A###A", "#####", "#####", "#####") 
            .aisle("AAAAA", "ABBBA", "ABSBA", "#BBB#", "#BBB#", "#####") 
            .aisle("AAAAA", "CBBBC", "DBEBD", "DB#BD", "DBBBD", "DDDDD") 
            .aisle("AAAAA", "ABBBA", "ABEBA", "#B#B#", "#BBB#", "##C##") 
            .aisle("AAAAA", "CBBBC", "DBEBD", "DB#BD", "DBBBD", "DDDDD") 
            .aisle("AAAAA", "ABBBA", "ABEBA", "#B#B#", "#BBB#", "##C##") 
            .aisle("AAAAA", "CBBBC", "DBEBD", "DB#BD", "DBBBD", "DDDDD") 
            .aisle("AAAAA", "ABBBA", "ABEBA", "#B#B#", "#BBB#", "##C##") 
            .aisle("AAAAA", "CBBBC", "DB@BD", "DBBBD", "DBBBD", "DDDDD") 
            .aisle("AAAAA", "AA#AA", "A###A", "#####", "#####", "#####")  
            .where("A", Predicates.blocks("gtceu:heatproof_machine_casing")) 
            .where("#", Predicates.any())
            .where("B", Predicates.blocks("gtceu:high_temperature_smelting_casing")
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .where("C", Predicates.blocks("gtceu:titanium_pipe_casing"))
            .where("D", Predicates.blocks("gtceu:tungsten_steel_frame"))
            .where("E", Predicates.heatingCoils())
            .where("S", Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1))
            .build()
        )
        .additionalDisplay((machine, l) => {
            if (machine.isFormed()) {
                l.add(Component.translatable("gtceu.multiblock.blast_furnace.max_temperature", Text.of(machine.getCoilType().getCoilTemperature() + "K").red()))
            }
        })
        .workableCasingRenderer('gtceu:block/casings/gcym/high_temperature_smelting_casing', 'gtceu:block/multiblock/implosion_compressor', false)

    event.create('crystallizer', 'multiblock', (holder) => new $CoilWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('crystallizer')
        .recipeModifier((machine, recipe, params, result) => {
            let newrecipe = GTRecipeModifiers.ebfOverclock(machine, recipe, params, result)
            let parallel = 16
            if (newrecipe.duration < 1) {
                parallel = 16 / newrecipe.duration
            }
            return GTRecipeModifiers.accurateParallel(machine, newrecipe, parallel, false).getFirst()
        })
        .appearanceBlock(GCyMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("##AAAAA##", "###BCB###", "###BBB###", "#########", "#########", "#########", "#########", "#########", "#########") 
            .aisle("#AAAAAAA#", "##AACAA##", "###AAA###", "####D####", "####D####", "####D####", "####D####", "####A####", "#########") 
            .aisle("AAAAAAAAA", "#ADCCCDA#", "##DAAAD##", "##D###D##", "##D###D##", "##D###D##", "##D#A#D##", "##AAAAA##", "####B####") 
            .aisle("AAACCCAAA", "BACEEECAB", "BAAAEAAAB", "####F####", "####F####", "####F####", "###AEA###", "##AAAAA##", "###AAA###") 
            .aisle("AAACCCAAA", "CCCEGECCC", "BAAEGEAAB", "#D#FGF#D#", "#D#FGF#D#", "#D#FGF#D#", "#DAEEEAD#", "#AAACAAA#", "##BASAB##") 
            .aisle("AAACCCAAA", "BACEEECAB", "BAAAEAAAB", "####F####", "####F####", "####F####", "###AEA###", "##AAAAA##", "###AAA###") 
            .aisle("AAAAAAAAA", "#ADCCCDA#", "##DAAAD##", "##D###D##", "##D###D##", "##D###D##", "##D#A#D##", "##AAAAA##", "####B####") 
            .aisle("#AAAAAAA#", "##AACAA##", "###AAA###", "####D####", "####D####", "####D####", "####D####", "####A####", "#########") 
            .aisle("##AAAAA##", "###B@B###", "###BBB###", "#########", "#########", "#########", "#########", "#########", "#########")  
            .where("#", Predicates.any())
            .where("A", Predicates.blocks("gtceu:sturdy_machine_casing")
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where("B", Predicates.blocks("gtceu:heat_vent"))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .where("C", Predicates.blocks("gtceu:high_temperature_smelting_casing"))
            .where("D", Predicates.blocks("gtceu:tungsten_frame"))
            .where("E", Predicates.heatingCoils())
            .where("F", Predicates.blocks("gtceu:laminated_glass"))
            .where("G", Predicates.blocks("gtceu:ptfe_pipe_casing"))
            .where("S", Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1))
            .build()
        )
        .additionalDisplay((machine, l) => {
            if (machine.isFormed()) {
                l.add(Component.translatable("gtceu.multiblock.blast_furnace.max_temperature", Text.of(machine.getCoilType().getCoilTemperature() + "K").red()))
            }
        })
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_sturdy_hsse', 'gtceu:block/multiblock/implosion_compressor', false)
})