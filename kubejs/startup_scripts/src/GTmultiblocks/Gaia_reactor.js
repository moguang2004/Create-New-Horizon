GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('gaia_reactor')
        .category('ctnh')
        .setMaxIOSize(2, 24, 2, 2)
        .setEUIO('in')
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CUT)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('gaia_reactor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('gaia_reactor')
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("#############################", "#############################", "#############################", "#############################", "#############################", "###########BBBBBBB###########", "#############################", "#############################", "#############################", "#############################")
            .aisle("###########JJJJJJJ###########", "###########DDDDDDD###########", "###########DDDDDDD###########", "###########DDDDDDD###########", "###########DDDDDDD###########", "#########BBDDDDDDDBB#########", "#############################", "#############################", "#############################", "#############################")
            .aisle("########BJJCCCCCCCJJB########", "########BDDAAAAAAADDB########", "########BDDAAAAAAADDB########", "########BDDAAAAAAADDB########", "########BDDAAAAAAADDB########", "#######BBDDAAAAAAADDBB#######", "###########EEEEEEE###########", "#############################", "#############################", "#############################")
            .aisle("#######JCCCCCCCCCCCCCJ#######", "#######DDAAAAAAAAAAADD#######", "#######DDAAAAAAAAAAADD#######", "#######DDAAAAAAAAAAADD#######", "#######DDAAAAAAAAAAADD#######", "######BDDAAAAAAAAAAADDB######", "#########EEAAAAAAAEE#########", "###########EEEEEEE###########", "#############################", "#############################")
            .aisle("######JCCCCCCCCCCCCCCCJ######", "######DAAAAAAAAAAAAAAAD######", "######DAAAAAAAAAAAAAAAD######", "######DAAAAAAAAAAAAAAAD######", "######DAAAAAAAAAAAAAAAD######", "#####BDAAAAAAAAAAAAAAADB#####", "#######EEAAAAAAAAAAAEE#######", "#########EEAAAAAAAEE#########", "###########EEEEEEE###########", "#############################")
            .aisle("#####JCCCCCCCCCCCCCCCCCJ#####", "#####DAAAAAAAAAAAAAAAAAD#####", "#####DAAAAAAAAAAAAAAAAAD#####", "#####DAAAAAAAAAAAAAAAAAD#####", "#####DAAAAAAAAAAAAAAAAAD#####", "####BDAAAAAAAAAAAAAAAAADB####", "######EAAAAAAAAAAAAAAAE######", "#######EEAAAAAAAAAAAEE#######", "#########EEAAAAAAAEE#########", "###########EEEEEEE###########")
            .aisle("####JCCCCCCCCCCCCCCCCCCCJ####", "####CAAAAAAAAAAAAAAAAAAAC####", "####DAAAAAAAAAAAAAAAAAAAD####", "####DAAAAAAAAAAAAAAAAAAAD####", "####DAAAAAAAAAAAAAAAAAAAD####", "###BDAAAAAAAAAAAAAAAAAAADB###", "#####EAAAAAAAAAAAAAAAAAE#####", "######EAAAAAAAAAAAAAAAE######", "#######EEAAAAAAAAAAAEE#######", "#########EEFFFFFFFEE#########")
            .aisle("###JCCCCCCCCCCCCCCCCCCCCCJ###", "###CAAAAAAAAAAAAAAAAAAAAAC###", "###CAAAAAAAAAAAAAAAAAAAAAC###", "###CAAAAAAAAAAAAAAAAAAAAAC###", "###CAAAAAAAAAAAAAAAAAAAAAC###", "##BDAAAAAAAAAAAAAAAAAAAAADB##", "####EAAAAAAAAAAAAAAAAAAAE####", "#####EAAAAAAAAAAAAAAAAAE#####", "######EAAAAAAAAAAAAAAAE######", "#######EEFFFFFFFFFFFEE#######")
            .aisle("###JCCCCCCCCCCCCCCCCCCCCCJ###", "###CAAAAAAAAAAAAAAAAAAAAAC###", "###DAAAAAAAAAAAAAAAAAAAAAD###", "###DAAAAAAAAAAAAAAAAAAAAAD###", "###DAAAAAAAAAAAAAAAAAAAAAD###", "##BDAAAAAAAAAAAAAAAAAAAAADB##", "####EAAAAAAAAAAAAAAAAAAAE####", "#####EAAAAAAAAAAAAAAAAAE#####", "######EAAAAAAAAAAAAAAAE######", "#######EFFFFFFFFFFFFFE#######")
            .aisle("##JCCCCCCCCCCCCCCCCCCCCCCCJ##", "##DAAAAAAAAAAAAAAAAAAAAAAAD##", "##DAAAAAAAAAAAAAAAAAAAAAAAD##", "##DAAAAAAAAAAAAAAAAAAAAAAAD##", "##DAAAAAAAAAAAAAAAAAAAAAAAD##", "#BDAAAAAAAAAAAAAAAAAAAAAAADB#", "###EAAAAAAAAAAAAAAAAAAAAAE###", "####EAAAAAAAAAAAAAAAAAAAE####", "#####EAAAAAAAAAAAAAAAAAE#####", "######EFFFFFFFFFFFFFFFE######")
            .aisle("##JCCCCCCCCCCCCCCCCCCCCCCCJ##", "##DAAAAAAAAAAAAAAAAAAAAAAAD##", "##DAAAAAAAGAAAAAAAGAAAAAAAD##", "##DAAAAAAAAAAAAAAAAAAAAAAAD##", "##DAAAAAAAAAAAAAAAAAAAAAAAD##", "#BDAAAAAAAAAAAAAAAAAAAAAAADB#", "###EAAAAAAAAAAAAAAAAAAAAAE###", "####EAAAAAAAAAAAAAAAAAAAE####", "#####EAAAAAAAAAAAAAAAAAE#####", "######EFFFFFFFFFFFFFFFE######")
            .aisle("#JCCCCCCCCCCCCCCCCCCCCCCCCCJ#", "#DAAAAAAAAAAAAAAAAAAAAAAAAAD#", "#DAAAAAAAAAAAAAAAAAAAAAAAAAD#", "#DAAAAAAAAAAAAAAAAAAAAAAAAAD#", "#DAAAAAAAAAAAAAAAAAAAAAAAAAD#", "BDAAAAAAAAAAAAAAAAAAAAAAAAADB", "##EAAAAAAAAAAAAAAAAAAAAAAAE##", "###EAAAAAAAAAAAAAAAAAAAAAE###", "####EAAAAAAAAAAAAAAAAAAAE####", "#####EFFFFFFFFFFFFFFFFFE#####")
            .aisle("#JCCCCCCCCCCCCCCCCCCCCCCCCCJ#", "#DAAAAAAAAAAAAAAAAAAAAAAAAAD#", "#DAAAAAAAAAAAAAAAAAAAAAAAAAD#", "#DAAAAAAAAAAAAAAAAAAAAAAAAAD#", "#DAAAAAAAAAAAAAAAAAAAAAAAAAD#", "BDAAAAAAAAAAAAAAAAAAAAAAAAADB", "##EAAAAAAAAAAAAAAAAAAAAAAAE##", "###EAAAAAAAAAAAAAAAAAAAAAE###", "####EAAAAAAAAAAAAAAAAAAAE####", "#####EFFFFFFFFFFFFFFFFFE#####")
            .aisle("#JCCCCCCCCCCCHHHCCCCCCCCCCCJ#", "#DAAAAAAAAAAAAAAAAAAAAAAAAAD#", "#DAAAAAAAAAAAAAAAAAAAAAAAAAD#", "#DAAAAAAAAAAAAAAAAAAAAAAAAAD#", "#DAAAAAAAAAAAAAAAAAAAAAAAAAD#", "BDAAAAAAAAAAAAAAAAAAAAAAAAADB", "##EAAAAAAAAAAAAAAAAAAAAAAAE##", "###EAAAAAAAAAAAAAAAAAAAAAE###", "####EAAAAAAAAAAAAAAAAAAAE####", "#####EFFFFFFFFFFFFFFFFFE#####")
            .aisle("#JCCCCCCCCCCCHHHCCCCCCCCCCCJ#", "#DAAAAAAAAAAAAIAAAAAAAAAAAAD#", "#DAAAAAAAAAAAAAAAAAAAAAAAAAD#", "#DAAAAAAAAAAAAAAAAAAAAAAAAAD#", "#DAAAAAAAAAAAAAAAAAAAAAAAAAD#", "BDAAAAAAAAAAAAAAAAAAAAAAAAADB", "##EAAAAAAAAAAAAAAAAAAAAAAAE##", "###EAAAAAAAAAAAAAAAAAAAAAE###", "####EAAAAAAAAAAAAAAAAAAAE####", "#####EFFFFFFFFFFFFFFFFFE#####")
            .aisle("#JCCCCCCCCCCCHHHCCCCCCCCCCCJ#", "#DAAAAAAAAAAAAAAAAAAAAAAAAAD#", "#DAAAAAAAAAAAAAAAAAAAAAAAAAD#", "#DAAAAAAAAAAAAAAAAAAAAAAAAAD#", "#DAAAAAAAAAAAAAAAAAAAAAAAAAD#", "BDAAAAAAAAAAAAAAAAAAAAAAAAADB", "##EAAAAAAAAAAAAAAAAAAAAAAAE##", "###EAAAAAAAAAAAAAAAAAAAAAE###", "####EAAAAAAAAAAAAAAAAAAAE####", "#####EFFFFFFFFFFFFFFFFFE#####")
            .aisle("#JCCCCCCCCCCCCCCCCCCCCCCCCCJ#", "#DAAAAAAAAAAAAAAAAAAAAAAAAAD#", "#DAAAAAAAAAAAAAAAAAAAAAAAAAD#", "#DAAAAAAAAAAAAAAAAAAAAAAAAAD#", "#DAAAAAAAAAAAAAAAAAAAAAAAAAD#", "BDAAAAAAAAAAAAAAAAAAAAAAAAADB", "##EAAAAAAAAAAAAAAAAAAAAAAAE##", "###EAAAAAAAAAAAAAAAAAAAAAE###", "####EAAAAAAAAAAAAAAAAAAAE####", "#####EFFFFFFFFFFFFFFFFFE#####")
            .aisle("#JCCCCCCCCCCCCCCCCCCCCCCCCCJ#", "#DAAAAAAAAAAAAAAAAAAAAAAAAAD#", "#DAAAAAAAAAAAAAAAAAAAAAAAAAD#", "#DAAAAAAAAAAAAAAAAAAAAAAAAAD#", "#DAAAAAAAAAAAAAAAAAAAAAAAAAD#", "BDAAAAAAAAAAAAAAAAAAAAAAAAADB", "##EAAAAAAAAAAAAAAAAAAAAAAAE##", "###EAAAAAAAAAAAAAAAAAAAAAE###", "####EAAAAAAAAAAAAAAAAAAAE####", "#####EFFFFFFFFFFFFFFFFFE#####")
            .aisle("##JCCCCCCCCCCCCCCCCCCCCCCCJ##", "##DAAAAAAAAAAAAAAAAAAAAAAAD##", "##DAAAAAAAGAAAAAAAGAAAAAAAD##", "##DAAAAAAAAAAAAAAAAAAAAAAAD##", "##DAAAAAAAAAAAAAAAAAAAAAAAD##", "#BDAAAAAAAAAAAAAAAAAAAAAAADB#", "###EAAAAAAAAAAAAAAAAAAAAAE###", "####EAAAAAAAAAAAAAAAAAAAE####", "#####EAAAAAAAAAAAAAAAAAE#####", "######EFFFFFFFFFFFFFFFE######")
            .aisle("##JCCCCCCCCCCCCCCCCCCCCCCCJ##", "##DAAAAAAAAAAAAAAAAAAAAAAAD##", "##DAAAAAAAAAAAAAAAAAAAAAAAD##", "##DAAAAAAAAAAAAAAAAAAAAAAAD##", "##DAAAAAAAAAAAAAAAAAAAAAAAD##", "#BDAAAAAAAAAAAAAAAAAAAAAAADB#", "###EAAAAAAAAAAAAAAAAAAAAAE###", "####EAAAAAAAAAAAAAAAAAAAE####", "#####EAAAAAAAAAAAAAAAAAE#####", "######EFFFFFFFFFFFFFFFE######")
            .aisle("###JCCCCCCCCCCCCCCCCCCCCCJ###", "###CAAAAAAAAAAAAAAAAAAAAAC###", "###DAAAAAAAAAAAAAAAAAAAAAD###", "###DAAAAAAAAAAAAAAAAAAAAAD###", "###DAAAAAAAAAAAAAAAAAAAAAD###", "##BDAAAAAAAAAAAAAAAAAAAAADB##", "####EAAAAAAAAAAAAAAAAAAAE####", "#####EAAAAAAAAAAAAAAAAAE#####", "######EAAAAAAAAAAAAAAAE######", "#######EFFFFFFFFFFFFFE#######")
            .aisle("###JCCCCCCCCCCCCCCCCCCCCCJ###", "###CAAAAAAAAAAAAAAAAAAAAAC###", "###CAAAAAAAAAAAAAAAAAAAAAC###", "###CAAAAAAAAAAAAAAAAAAAAAC###", "###CAAAAAAAAAAAAAAAAAAAAAC###", "##BDAAAAAAAAAAAAAAAAAAAAADB##", "####EAAAAAAAAAAAAAAAAAAAE####", "#####EAAAAAAAAAAAAAAAAAE#####", "######EAAAAAAAAAAAAAAAE######", "#######EEFFFFFFFFFFFEE#######")
            .aisle("####JCCCCCCCCCCCCCCCCCCCJ####", "####CAAAAAAAAAAAAAAAAAAAC####", "####DAAAAAAAAAAAAAAAAAAAD####", "####DAAAAAAAAAAAAAAAAAAAD####", "####DAAAAAAAAAAAAAAAAAAAD####", "###BDAAAAAAAAAAAAAAAAAAADB###", "#####EAAAAAAAAAAAAAAAAAE#####", "######EAAAAAAAAAAAAAAAE######", "#######EEAAAAAAAAAAAEE#######", "#########EEFFFFFFFEE#########")
            .aisle("#####JCCCCCCCCCCCCCCCCCJ#####", "#####DAAAAAAAAAAAAAAAAAD#####", "#####DAAAAAAAAAAAAAAAAAD#####", "#####DAAAAAAAAAAAAAAAAAD#####", "#####DAAAAAAAAAAAAAAAAAD#####", "####BDAAAAAAAAAAAAAAAAADB####", "######EAAAAAAAAAAAAAAAE######", "#######EEAAAAAAAAAAAEE#######", "#########EEAAAAAAAEE#########", "###########EEEEEEE###########")
            .aisle("######JCCCCCCCCCCCCCCCJ######", "######DAAAAAAAAAAAAAAAD######", "######DAAAAAAAAAAAAAAAD######", "######DAAAAAAAAAAAAAAAD######", "######DAAAAAAAAAAAAAAAD######", "#####BDAAAAAAAAAAAAAAADB#####", "#######EEAAAAAAAAAAAEE#######", "#########EEAAAAAAAEE#########", "###########EEEEEEE###########", "#############################")
            .aisle("#######JCCCCCCCCCCCCCJ#######", "#######DDAAAAAAAAAAADD#######", "#######DDAAAAAAAAAAADD#######", "#######DDAAAAAAAAAAADD#######", "#######DDAAAAAAAAAAADD#######", "######BDDAAAAAAAAAAADDB######", "#########EEAAAAAAAEE#########", "###########EEEEEEE###########", "#############################", "#############################")
            .aisle("########BJJCCCCCCCJJB########", "########BDCAAAAAAACDB########", "########BDDAAAAAAADDB########", "########BDDAAAAAAADDB########", "########BDDAAAAAAADDB########", "#######BBDDAAAAAAADDBB#######", "###########EEEEEEE###########", "#############################", "#############################", "#############################")
            .aisle("###########JJJ@JJJ###########", "###########JJDDDJJ###########", "###########CDDDDDC###########", "###########DDDDDDD###########", "###########DDDDDDD###########", "#########BBDDDDDDDBB#########", "#############################", "#############################", "#############################", "#############################")
            .aisle("#############################", "#############################", "#############################", "#############################", "#############################", "###########BBBBBBB###########", "#############################", "#############################", "#############################", "#############################")
            .where("#", Predicates.any())
            .where("A", Predicates.air())
            .where("B", Predicates.blocks("gtceu:steel_frame"))
            .where("C", Predicates.blocks("gtceu:solid_machine_casing"))
            .where("D", Predicates.blocks("botania:mana_glass"))
            .where("E", Predicates.blocks("botania:elf_glass"))
            .where("F", Predicates.blocks("botania:bifrost_perm"))
            .where("G", Predicates.blocks("botania:gaia_pylon"))
            .where("H", Predicates.blocks("minecraft:iron_block"))
            .where("I", Predicates.blocks("minecraft:beacon"))
            .where("J", Predicates.blocks("gtceu:solid_machine_casing")
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_solid_steel', 'gtceu:block/multiblock/generator/large_steam_turbine', false)
})
