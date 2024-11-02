GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('mana_generator')
        .category('ctnh')
        .setMaxIOSize(2, 0, 1, 1)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_GAS_COLLECTOR, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.TURBINE)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('mana_generator_turbine_tier1', 'multiblock', holder => new $ManaLargeTurbineMachine(holder,256,GTValues.MV))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('mana_generator')
        .recipeModifier((machine, recipe) => $ManaLargeTurbineMachine.recipeModifier(machine, recipe), true)
        .appearanceBlock(() => Block.getBlock('kubejs:mana_steel_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("AAAA", "ASSA", "AAAA")
            .aisle("ASSA", "BCCB", "ASSA")
            .aisle("AAAA", "A@SA", "AAAA")
            .where("A", Predicates.blocks("kubejs:mana_steel_casing"))
            .where("B", Predicates.abilities(PartAbility.OUTPUT_ENERGY).setExactLimit(1)
                .or(Predicates.abilities(PartAbility.ROTOR_HOLDER).setExactLimit(1)))
            .where("C", Predicates.blocks("gtceu:steel_gearbox"))
            .where('S', Predicates.blocks('kubejs:mana_steel_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1)))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .beforeWorking((/**@type {$WorkableElectricMultiblockMachine}*/machine, recipe) => {
            const rotorHolder = machine.getParts().find(part => part instanceof $IRotorHolderMachine)
            if (!rotorHolder || !rotorHolder.hasRotor()) {
                return false;
            }
            if (rotorHolder.getTier() > GTValues.MV) {
                machine.getRecipeLogic().interruptRecipe()
                return false
            }
            return true
        })
        .workableCasingRenderer('kubejs:block/mana_steel_casing', 'gtceu:block/multiblock/generator/large_steam_turbine', false)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('mana_generator_turbine_tier2', 'multiblock', holder => new $ManaLargeTurbineMachine(holder, 512 ,GTValues.MV))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('mana_generator')
        .recipeModifier((machine, recipe) => $ManaLargeTurbineMachine.recipeModifier(machine, recipe), true)
        .appearanceBlock(() => Block.getBlock('kubejs:elementium_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("AAAA", "ASSA", "AAAA")
            .aisle("ASSA", "BCCB", "ASSA")
            .aisle("AAAA", "A@SA", "AAAA")
            .where("A", Predicates.blocks("kubejs:elementium_casing"))
            .where("B", Predicates.abilities(PartAbility.OUTPUT_ENERGY).setExactLimit(1)
                .or(Predicates.abilities(PartAbility.ROTOR_HOLDER).setExactLimit(1)))
            .where("C", Predicates.blocks(GTBlocks.CASING_STAINLESS_STEEL_GEARBOX.get()))
            .where('S', Predicates.blocks('kubejs:elementium_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1)))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .beforeWorking((/**@type {$WorkableElectricMultiblockMachine}*/machine, recipe) => {
            const rotorHolder = machine.getParts().find(part => part instanceof $IRotorHolderMachine)
            if (!rotorHolder || !rotorHolder.hasRotor()) {
                return false;
            }
            if (rotorHolder.getTier() > GTValues.EV) {
                machine.getRecipeLogic().interruptRecipe()
                return false
            }
            return true
        })
        .workableCasingRenderer('kubejs:block/elementium_casing', 'gtceu:block/multiblock/generator/large_steam_turbine', false)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('mana_generator_turbine_tier3', 'multiblock', holder => new $ManaLargeTurbineMachine(holder,2048 ,GTValues.HV))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('mana_generator')
        .recipeModifier((machine, recipe) => $ManaLargeTurbineMachine.recipeModifier(machine, recipe), true)
        .appearanceBlock(() => Block.getBlock('kubejs:terra_steel_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("AAAA", "ASSA", "AAAA")
            .aisle("ASSA", "BCCB", "ASSA")
            .aisle("AAAA", "A@SA", "AAAA")
            .where("A", Predicates.blocks("kubejs:terra_steel_casing"))
            .where("B", Predicates.abilities(PartAbility.OUTPUT_ENERGY).setExactLimit(1)
                .or(Predicates.abilities(PartAbility.ROTOR_HOLDER).setExactLimit(1)))
            .where("C", Predicates.blocks(GTBlocks.CASING_TITANIUM_GEARBOX.get()))
            .where('S', Predicates.blocks('kubejs:terra_steel_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1)))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .beforeWorking((/**@type {$WorkableElectricMultiblockMachine}*/machine, recipe) => {
            const rotorHolder = machine.getParts().find(part => part instanceof $IRotorHolderMachine)
            if (!rotorHolder || !rotorHolder.hasRotor()) {
                return false;
            }
            if (rotorHolder.getTier() > GTValues.LuV) {
                machine.getRecipeLogic().interruptRecipe()
                return false
            }
            return true
        })
        .workableCasingRenderer('kubejs:block/terra_steel_casing', 'gtceu:block/multiblock/generator/large_steam_turbine', false)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('mana_generator_turbine_tier4', 'multiblock', holder => new $ManaLargeTurbineMachine(holder,8192 ,GTValues.EV))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('mana_generator')
        .recipeModifier((machine, recipe) => $ManaLargeTurbineMachine.recipeModifier(machine, recipe), true)
        .appearanceBlock(() => Block.getBlock('kubejs:alfsteel_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("AAAA", "ASSA", "AAAA")
            .aisle("ASSA", "BCCB", "ASSA")
            .aisle("AAAA", "A@SA", "AAAA")
            .where("A", Predicates.blocks("kubejs:alfsteel_casing"))
            .where("B", Predicates.abilities(PartAbility.OUTPUT_ENERGY).setExactLimit(1)
                .or(Predicates.abilities(PartAbility.ROTOR_HOLDER).setExactLimit(1)))
            .where("C", Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_GEARBOX.get()))
            .where('S', Predicates.blocks('kubejs:alfsteel_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1)))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .beforeWorking((/**@type {$WorkableElectricMultiblockMachine}*/machine, recipe) => {
            const rotorHolder = machine.getParts().find(part => part instanceof $IRotorHolderMachine)
            if (!rotorHolder || !rotorHolder.hasRotor()) {
                return false;
            }
            if (rotorHolder.getTier() > GTValues.UV) {
                machine.getRecipeLogic().interruptRecipe()
                return false
            }
            return true
        })
        .workableCasingRenderer('kubejs:block/alfsteel_casing', 'gtceu:block/multiblock/generator/large_steam_turbine', false)
})
