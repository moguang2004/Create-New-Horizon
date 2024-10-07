GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    GTRecipeTypes.register('fuel_refining_mk1', 'multiblock')
        //.category('ctnh')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 3, 3)
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
    const CoilWorkableElectricMultiblockMachine = Java.loadClass('com.gregtechceu.gtceu.api.machine.multiblock.CoilWorkableElectricMultiblockMachine')
    event.create('fuel_refining_factory_mk1', 'multiblock', (holder) => new CoilWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('fuel_refining_mk1')
        .recipeModifier((machine, recipe, params, result) => {
            let newrecipe = GTRecipeModifiers.ebfOverclock(machine, recipe, params, result)
            let parallel = 1
            if (newrecipe.duration < 400) {
                parallel = 4 / newrecipe.duration
            }
            return GTRecipeModifiers.accurateParallel(machine, newrecipe, parallel, false).getFirst()
        })
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("##AABCCCBAA##", "##ACCADACCA##", "##AABAEABAA##", "##ABBABABBA##", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############")
            .aisle("###BBCCCBB###", "##CFFBDBFFC##", "###BBBGBBB###", "##C##BBB##C##", "#####BBB#####", "#####CCC#####", "#####CCC#####", "###BBBBBBB###", "###AAAAAAA###", "###CCCCCCC###", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############")
            .aisle("A#B##CCC##B#A", "ACFBBBDBBBFCA", "A#B###G###B#A", "ACA#######ACA", "##A#######A##", "##A##CCC##A##", "##A##ADA##A##", "##BCCCGCCCB##", "##AFFFFFFFA##", "##CBBBBBBBC##", "#####A#A#####", "#####A#A#####", "#####A#A#####", "#####A#A#####", "#####CCC#####", "#####AAA#####", "#####BBB#####", "#############")
            .aisle("AB###CCC###BA", "CFB##ADA##BFC", "AB####G####BA", "B###########B", "#############", "#####CCC#####", "#####ADA#####", "#BC###G###CB#", "#AFBBBBBBBFA#", "#CBD#####DBC#", "###D#####D###", "###D#####D###", "###CCCCCCC###", "#############", "####CCCCC####", "####AFFFA####", "####BHGHB####", "#############")
            .aisle("BB###CCC###BB", "CFB##ADA##BFC", "BB####G####BB", "B###########B", "#############", "#####CCC#####", "#####ADA#####", "#BC###G###CB#", "#AFB#####BFA#", "#CB#######BC#", "#############", "####BBBBB####", "###CHHHHHC###", "#############", "###CBCCCBC###", "###AFADAFA###", "###BB#G#BB###", "####CCCCC####")
            .aisle("CCCCCCCCCCCCC", "ABBAAADAAABBA", "AB###AIA###BA", "AB###AIA###BA", "#B###AIA###B#", "#CCCCAIACCCC#", "#CAAAADAAAAC#", "#BC##AIA##CB#", "#AFB#AIA#BFA#", "#CB##AIA##BC#", "##A##AIA##A##", "##A#BAIAB#A##", "##ACHAIAHCA##", "##A##AIA##A##", "##CCCAIACCC##", "##AFADDDAFA##", "##BH#CCC#HB##", "####CJJJC####")
            .aisle("CCCCCCCCCCCCC", "DDDDDDDDDDDDD", "EGGGGIDIGGGGE", "BB###IDI###BB", "#B###IDI###B#", "#CCCCIDICCCC#", "#CDDDDDDDDDC#", "#BGGGIDIGGGB#", "#AFB#IDI#BFA#", "#CB##IDI##BC#", "#####IDI#####", "####BIDIB####", "###CHIDIHC###", "#####IDI#####", "##CCCIDICCC##", "##AFDDDDDFA##", "##BGGCCCGGB##", "####CJJJC####")
            .aisle("CCCCCCCCCCCCC", "ABBAAADAAABBA", "AB###AIA###BA", "AB###AIA###BA", "#B###AIA###B#", "#CCCCAIACCCC#", "#CAAAADAAAAC#", "#BC##AIA##CB#", "#AFB#AIA#BFA#", "#CB##AIA##BC#", "##A##AIA##A##", "##A#BAIAB#A##", "##ACHAIAHCA##", "##A##AIA##A##", "##CCCAIACCC##", "##AFADDDAFA##", "##BH#CCC#HB##", "####CJJJC####")
            .aisle("BB###CCC###BB", "CFB##ADA##BFC", "BB####G####BB", "B###########B", "#############", "#####CCC#####", "#####ADA#####", "#BC###G###CB#", "#AFB#####BFA#", "#CB#######BC#", "#############", "####BBBBB####", "###CHHHHHC###", "#############", "###CBCCCBC###", "###AFADAFA###", "###BB#G#BB###", "####CCCCC####")
            .aisle("AB###CCC###BA", "CFB##ADA##BFC", "AB####G####BA", "B###########B", "#############", "#####CCC#####", "#####ADA#####", "#BC###G###CB#", "#AFBBBBBBBFA#", "#CBD#####DBC#", "###D#####D###", "###D#####D###", "###CCCCCCC###", "#############", "####CCCCC####", "####AFFFA####", "####BHGHB####", "#############")
            .aisle("A#B##CCC##B#A", "ACFBBBDBBBFCA", "A#B###G###B#A", "ACA#######ACA", "##A#######A##", "##A##CCC##A##", "##A##ADA##A##", "##BCCCGCCCB##", "##AFFFFFFFA##", "##CBBBBBBBC##", "#####A#A#####", "#####A#A#####", "#####A#A#####", "#####A#A#####", "#####CCC#####", "#####AAA#####", "#####BBB#####", "#############")
            .aisle("###BBCCCBB###", "##CFFBDBFFC##", "###BBBGBBB###", "##C##BBB##C##", "#####BBB#####", "#####CCC#####", "#####CCC#####", "###BBBBBBB###", "###AAAAAAA###", "###CCCCCCC###", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############")
            .aisle("##AABCCCBAA##", "##ACCADACCA##", "##AABAEABAA##", "##ABBABABBA##", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############")
            .aisle("###AKKKKKA###", "###CKK@KKC###", "###AKKKKKA###", "###CCACACC###", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############", "#############")
            .where("#", Predicates.any())
            .where("A", Predicates.blocks("gtceu:black_steel_frame"))
            .where("B", Predicates.blocks("gtceu:solid_machine_casing"))
            .where("C", Predicates.blocks("gtceu:steel_firebox_casing"))
            .where("D", Predicates.blocks("gtceu:steel_pipe_casing"))
            .where("E", Predicates.blocks("gtceu:lv_hermetic_casing"))
            .where("F", Predicates.heatingCoils())
            .where("G", Predicates.blocks("gtceu:black_steel_block"))
            .where("H", Predicates.blocks("gtceu:steel_gearbox"))
            .where("I", Predicates.blocks("gtceu:hv_hermetic_casing"))
            .where("J", Predicates.abilities(PartAbility.MUFFLER).setExactLimit(9))
            .where("K", Predicates.blocks("gtceu:solid_machine_casing")
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
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