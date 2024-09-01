import { $MetaMachine } from "packages/com/gregtechceu/gtceu/api/machine/$MetaMachine"
import { $GTRecipe } from "packages/com/gregtechceu/gtceu/api/recipe/$GTRecipe"


const RecipeHelper = Java.loadClass("com.gregtechceu.gtceu.api.recipe.RecipeHelper")
const StressRecipeCapability = Java.loadClass("com.gregtechceu.gtceu.api.capability.recipe.StressRecipeCapability")
const ContentModifier = Java.loadClass("com.gregtechceu.gtceu.api.recipe.content.ContentModifier")
const IKineticMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.kinetic.IKineticMachine")
const IRotorHolderMachine = Java.loadClass("com.gregtechceu.gtceu.api.machine.feature.multiblock.IRotorHolderMachine")

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('kinetic_steam_turbine')
        .category('ctnh')
        .setMaxIOSize(0, 0, 1, 1)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_GAS_COLLECTOR, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.TURBINE)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('kinetic_steam_turbine', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('kinetic_steam_turbine')
        .recipeModifier((/**@type {$MetaMachine}*/ machine,/**@type {$GTRecipe}*/recipe) => {
            let tier = 1
            const modifiedByKinetic = recipe => {
                const kineticMachine = machine.getParts().find(part => part instanceof IKineticMachine)
                if (kineticMachine === null) {
                    return null;
                }
                tier = kineticMachine.self().definition.tier
                const parallelResult = GTRecipeModifiers.fastParallel(machine, recipe, GTValues.VH[kineticMachine.getTier()] / 4, false);
                return parallelResult.getFirst() === recipe ? recipe.copy() : parallelResult.getFirst();
            }
            const modifiedByRotor = recipe => {
                if (recipe === null) {
                    return null;
                }
                const rotorHolder = machine.getParts().find(part => part instanceof IRotorHolderMachine);
                if (!rotorHolder || !rotorHolder.hasRotor()) {
                    return null;
                }
                const holderEfficiency = rotorHolder.getTotalEfficiency() / 100.0;
                const boostRate = rotorHolder.getRotorSpeed() < rotorHolder.getMaxRotorHolderSpeed() ? rotorHolder.getRotorSpeed() / rotorHolder.getMaxRotorHolderSpeed() : 1.0;
                tier = Math.max(tier, rotorHolder.self().definition.tier)
                let lossrate = 1
                if (tier > GTValues.HV) {
                    lossrate = Math.max(0.5, 1 - (tier - GTValues.HV) * 0.1)
                }
                machine.getHolder().self().persistentData.putFloat('lossrate', lossrate)
                const contentModifier = ContentModifier.of(holderEfficiency * boostRate * boostRate * lossrate, 0);
                const copyRecipe = recipe.copy();
                copyRecipe.outputs.put(StressRecipeCapability.CAP, copyRecipe.copyContents(copyRecipe.outputs, contentModifier).get(StressRecipeCapability.CAP));
                return copyRecipe;
            }
            const rotorHolder = machine.getParts().find(part => part instanceof IRotorHolderMachine);
            if (!rotorHolder || !rotorHolder.hasRotor()) {
                return null;
            }
            return modifiedByRotor(modifiedByKinetic(recipe))
        }, true)
        /**
         *  @param {Internal.List<Internal.Component>} l
         */
        .additionalDisplay((machine, l) => {
            const rotorHolder = machine.getParts().find(part => part instanceof IRotorHolderMachine)
            let _holderEfficiency = rotorHolder.getTotalEfficiency() / 100.0
            if (_holderEfficiency < 0) {
                _holderEfficiency = 0
            }
            let _rotorspeed = rotorHolder.getRotorSpeed()
            let _maxrotorspeed = rotorHolder.getMaxRotorHolderSpeed()
            let lossrate = machine.getHolder().self().persistentData.getFloat('lossrate')
            l.add(l.size(), Text.translate("multiblock.ctnh.kinetic_steam_turbine1", (_holderEfficiency * 100).toFixed(1)))
            l.add(l.size(), Text.translate("multiblock.ctnh.kinetic_steam_turbine3", (_holderEfficiency * lossrate * 100).toFixed(1)))
            l.add(l.size(), Text.translate("multiblock.ctnh.kinetic_steam_turbine2", _rotorspeed, _maxrotorspeed))
        })
        .appearanceBlock(GTBlocks.CASING_BRONZE_BRICKS)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCC', 'CSSC', 'CCCC')
            .aisle('CSSC', 'TGGT', 'CSSC')
            .aisle('CCCC', 'CKSC', 'CCCC')
            .where('C', Predicates.blocks('gtceu:steam_machine_casing'))
            .where('S', Predicates.blocks('gtceu:steam_machine_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE)).setMinGlobalLimited(1)
                .or(Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1)))
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('T', Predicates.abilities(PartAbility.OUTPUT_KINETIC).setExactLimit(1)
                .or(Predicates.abilities(PartAbility.ROTOR_HOLDER).setExactLimit(1)))
            .where('G', Predicates.blocks('gtceu:bronze_gearbox'))
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_bronze_plated_bricks', 'gtceu:block/multiblock/generator/large_steam_turbine', false)
})