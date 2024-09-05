import { $WorkableElectricMultiblockMachine } from "packages/com/gregtechceu/gtceu/api/machine/multiblock/$WorkableElectricMultiblockMachine"
import { $RecipeLogic } from "packages/com/gregtechceu/gtceu/api/machine/trait/$RecipeLogic"
import { $GTRecipe } from "packages/com/gregtechceu/gtceu/api/recipe/$GTRecipe"
import { $FormattingUtil } from "packages/com/gregtechceu/gtceu/utils/$FormattingUtil"

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	event.create("kinetic_generator")
		.category("kinetic_generator")
		.setMaxIOSize(0, 0, 1, 0)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.ARC)

})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    const $GTUtil = Java.loadClass('com.gregtechceu.gtceu.utils.GTUtil')
    event.create("kinetic_generator", "multiblock")
            .rotationState(RotationState.NON_Y_AXIS)
            .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
            .recipeType("kinetic_generator")
            .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
            .recipeModifier((machine, recipe) => {
                const kinetic = machine.getParts().find(part => part instanceof IKineticMachine);
                if (!kinetic) {
                    return null;
                }
                let energyoutput = Math.abs(kinetic.getKineticHolder().getSpeed()) * kinetic.getKineticDefinition().torque / 160
                machine.getHolder().self().persistentData.putFloat('energyoutput', energyoutput)
                const modifiedRecipe = recipe.copy();
                RecipeHelper.setOutputEUt(modifiedRecipe, Math.floor(energyoutput));
                return modifiedRecipe;
            }, true)
            .pattern(definition => FactoryBlockPattern.start()
                .aisle("CCTP", "CCTP", "  TP")
                .aisle("CCTP", "EAGK", "CCTP")
                .aisle("CCTP", "CSTP", "  TP")
                .where("S", Predicates.controller(Predicates.blocks(definition.get())))
                .where("G", Predicates.blocks('gtceu:steel_gearbox'))
                .where("A", Predicates.blocks('gtceu:graphene_block'))
                .where("C", Predicates.blocks('gtceu:solid_machine_casing')
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                )
                .where("P", Predicates.blocks('gtceu:solid_machine_casing')
                    .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setExactLimit(1))
                )
                .where("K", Predicates.abilities(PartAbility.INPUT_KINETIC).setExactLimit(1))
                .where("E", Predicates.abilities(PartAbility.OUTPUT_ENERGY).setExactLimit(1))
                .where('T', Predicates.heatingCoils())
                .build()
            )
            .additionalDisplay((machine, l) => {
                if (machine.isFormed()) {
                    let outputEnergy = machine.getHolder().self().persistentData.getFloat('energyoutput')
                    if (outputEnergy == null) {
                        outputEnergy = 0
                    }
                    let voltageName = GTValues.VNF[$GTUtil.getTierByVoltage(outputEnergy)]
                    l.add(l.size(), Text.translate("multiblock.ctnh.kinetic_generator", $FormattingUtil.formatNumbers(outputEnergy), voltageName))
                }
            })
            .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_solid_steel","gtceu:block/multiblock/generator/large_steam_turbine", false)
})