GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    GTRecipeTypes.register('fuel_refining', 'multiblock')
        //.category('ctnh')
        .setEUIO('in')
        .setMaxIOSize(3, 3, 3, 3)
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
            widgetGroup.addWidget(new SlotWidget(new $CycleItemStackHandler(items), 0, widgetGroup.getSize().width - 25, widgetGroup.getSize().height - 32, false, false));
        })
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('fuel_refining_factory', 'multiblock', (holder) => new $CoilWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('fuel_refining')
        .recipeModifier((machine, recipe, params, result) => GTRecipeModifiers.ebfOverclock(machine, recipe, params, result))
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("#####ABBBA#####", "#####BCCCB#####", "#####BCCCB#####", "#####BCCCB#####", "#####ABBBA#####", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "###############")
            .aisle("###DDBEEEBDD###", "###DEEDFDEED###", "###DDBDGDBDD###", "###DBBDBDBBD###", "######EAE######", "######EEE######", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "###############")
            .aisle("####BBEEEBB####", "###EHHBFBHHE###", "####BBBCBBB####", "###E##BBB##E###", "######BBB######", "######EEE######", "######EEE######", "####BBBBBBB####", "####DDDDDDD####", "####EEEEEEE####", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "###############")
            .aisle("#D#B##EEE##B#D#", "#DEHBBBFBBBHED#", "#D#B###C###B#D#", "#DED#######DED#", "###D#######D###", "###D##EEE##D###", "###D##DFD##D###", "###BEEECEEEB###", "###DHHHHHHHD###", "###EBBBBBBBE###", "######D#D######", "######D#D######", "######D#D######", "######D#D######", "######EEE######", "######DDD######", "######BBB######", "###############", "###############")
            .aisle("#DB###EEE###BD#", "#EHB##DFD##BHE#", "#DB####C####BD#", "#B###########B#", "###############", "######EEE######", "######DFD######", "##BE###C###EB##", "##DHBBBBBBBHD##", "##EBF#####FBE##", "####F#####F####", "####F#####F####", "####EEEEEEE####", "###############", "#####EEEEE#####", "#####DHHHD#####", "#####BACAB#####", "######ACA######", "###############")
            .aisle("ABB###EEE###BBA", "BEHB##DFD##BHEB", "BBB####C####BBB", "BB###########BB", "A#############A", "######EEE######", "######DFD######", "##BE###C###EB##", "##DHB#####BHD##", "##EB#######BE##", "###############", "#####BBBBB#####", "####EAAAAAE####", "###############", "####EBEEEBE####", "####DHDFDHD####", "####BB#C#BB####", "#####EEEEE#####", "######EEE######")
            .aisle("BEEEEEEEEEEEEEB", "IDBBDDDFDDDBBDJ", "IDB###DKD###BDJ", "IDB###DKD###BDJ", "BEB###DKD###BEB", "#EEEEEDKDEEEEE#", "##EDDDDFDDDDE##", "##BE##DKD##EB##", "##DHB#DKD#BHD##", "##EB##DKD##BE##", "###D##DKD##D###", "###D#BDKDB#D###", "###DEADKDAED###", "###D##DKD##D###", "###EEEDKDEEE###", "###DHDLLLDHD###", "###BA#LLL#AB###", "####AELLLEA####", "#####EMMME#####")
            .aisle("BEEEEEEEEEEEEEB", "IFFFFFFFFFFFFFJ", "IGCCCCKFKCCCCGJ", "IBB###KFK###BBJ", "BAB###KFK###BAB", "#EEEEEKFKEEEEE#", "##EFFFFFFFFFE##", "##BCCCKFKCCCB##", "##DHB#KFK#BHD##", "##EB##KFK##BE##", "######KFK######", "#####BKFKB#####", "####EAKFKAE####", "######KFK######", "###EEEKFKEEE###", "###DHFLLLFHD###", "###BCCLOLCCB###", "####CELLLEC####", "#####EMMME#####")
            .aisle("BEEEEEEEEEEEEEB", "IDBBDDDFDDDBBDJ", "IDB###DKD###BDJ", "IDB###DKD###BDJ", "BEB###DKD###BEB", "#EEEEEDKDEEEEE#", "##EDDDDFDDDDE##", "##BE##DKD##EB##", "##DHB#DKD#BHD##", "##EB##DKD##BE##", "###D##DKD##D###", "###D#BDKDB#D###", "###DEADKDAED###", "###D##DKD##D###", "###EEEDKDEEE###", "###DHDLLLDHD###", "###BA#LLL#AB###", "####AELLLEA####", "#####EMMME#####")
            .aisle("ABB###EEE###BBA", "BEHB##DFD##BHEB", "BBB####C####BBB", "BB###########BB", "A#############A", "######EEE######", "######DFD######", "##BE###C###EB##", "##DHB#####BHD##", "##EB#######BE##", "###############", "#####BBBBB#####", "####EAAAAAE####", "###############", "####EBEEEBE####", "####DHDFDHD####", "####BB#C#BB####", "#####EEEEE#####", "######EEE######")
            .aisle("#DB###EEE###BD#", "#EHB##DFD##BHE#", "#DB####C####BD#", "#B###########B#", "###############", "######EEE######", "######DFD######", "##BE###C###EB##", "##DHBBBBBBBHD##", "##EBF#####FBE##", "####F#####F####", "####F#####F####", "####EEEEEEE####", "###############", "#####EEEEE#####", "#####DHHHD#####", "#####BACAB#####", "######ACA######", "###############")
            .aisle("#D#B##EEE##B#D#", "#DEHBBBFBBBHED#", "#D#B###C###B#D#", "#DED#######DED#", "###D#######D###", "###D##EEE##D###", "###D##DFD##D###", "###BEEECEEEB###", "###DHHHHHHHD###", "###EBBBBBBBE###", "######D#D######", "######D#D######", "######D#D######", "######D#D######", "######EEE######", "######DDD######", "######BBB######", "###############", "###############")
            .aisle("####BBEEEBB####", "###EHHBFBHHE###", "####BBBCBBB####", "###E##BBB##E###", "######BBB######", "######EEE######", "######EEE######", "####BBBBBBB####", "####DDDDDDD####", "####EEEEEEE####", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "###############")
            .aisle("###DDBEEEBDD###", "###DEEDFDEED###", "###DDBDGDBDD###", "###DBBDBDBBD###", "######EAE######", "######EEE######", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "###############")
            .aisle("####DNNNNND####", "####ENN@NNE####", "####DNNNNND####", "####EEDEDEE####", "######EAE######", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "###############")
            .where("#", Predicates.any())
            .where("A", Predicates.blocks("gtceu:steel_gearbox"))
            .where("B", Predicates.blocks("gtceu:solid_machine_casing"))
            .where("C", Predicates.blocks("gtceu:black_steel_block"))
            .where("D", Predicates.blocks("gtceu:black_steel_frame"))
            .where("E", Predicates.blocks("gtceu:steel_firebox_casing"))
            .where("F", Predicates.blocks("gtceu:steel_pipe_casing"))
            .where("G", Predicates.blocks("gtceu:lv_hermetic_casing"))
            .where("H", Predicates.heatingCoils())
            .where("I", Predicates.blocks("gtceu:red_steel_block"))
            .where("J", Predicates.blocks("gtceu:blue_steel_block"))
            .where("K", Predicates.blocks("gtceu:hv_hermetic_casing"))
            .where("L", Predicates.blocks("kubejs:blaze_blast_furnace_casing"))
            .where("M", Predicates.abilities(PartAbility.MUFFLER).setExactLimit(9))
            .where("N", Predicates.blocks("gtceu:solid_machine_casing")
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where("O", Predicates.blocks('tetranichematerials:burning_steel_block'))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .additionalDisplay((machine, l) => {
            if (machine.isFormed()) {
                l.add(Component.translatable("gtceu.multiblock.blast_furnace.max_temperature", Text.of(machine.getCoilType().getCoilTemperature() + "K").red()))
            }
        })
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_solid_steel', 'gtceu:block/multiblock/fusion_reactor', false)
})
