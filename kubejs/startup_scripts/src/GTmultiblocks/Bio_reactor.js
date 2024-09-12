import { $RegistrateEntityLootTables } from "packages/com/tterrag/registrate/providers/loot/$RegistrateEntityLootTables"
import { $EntityLootEventJS } from "packages/dev/latvian/mods/kubejs/loot/$EntityLootEventJS"

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('bio_reactor')
        .setEUIO('in')
        .setMaxIOSize(4, 4, 2, 2)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('bio_reactor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('bio_reactor')
        //.recipeModifier()
        //.appearanceBlock('kubejs:blaze_blast_frunace_casing')
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("AAAAA", "ABBBA", "ABBBA", "ABBBA", "AAAAA")
            .aisle("AAAAA", "B###B", "B###B", "B###B", "AAAAA")
            .aisle("AAAAA", "B###B", "B###B", "B###B", "AAAAA")
            .aisle("AAAAA", "B###B", "B###B", "B###B", "AAAAA")
            .aisle("AA@AA", "ABBBA", "ABBBA", "ABBBA", "AAAAA")
            .where("A", Predicates.blocks("kubejs:bio_reactor_casing").setMinGlobalLimited(35)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE)).setMinGlobalLimited(1))
            .where("B", Predicates.blocks("gtceu:cleanroom_glass"))
            .where("#", Predicates.air())
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .workableCasingRenderer('kubejs:block/bio_reactor_casing', 'gtceu:block/multiblock/implosion_compressor', false)
})
