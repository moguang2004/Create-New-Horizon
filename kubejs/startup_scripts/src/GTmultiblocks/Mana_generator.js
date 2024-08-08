const { $MetaMachine } = require("packages/com/gregtechceu/gtceu/api/machine/$MetaMachine")
const { $WorkableElectricMultiblockMachine } = require("packages/com/gregtechceu/gtceu/api/machine/multiblock/$WorkableElectricMultiblockMachine")
const { $GTRecipe } = require("packages/com/gregtechceu/gtceu/api/recipe/$GTRecipe")
const LargeTurbineMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.generator.LargeTurbineMachine")

GTCEuStartupEvents.registry('gtceu:recipe_type',event =>{
    event.create('mana_generator')
        .category('ctnh')
        .setMaxIOSize(1, 0, 1, 1)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.TURBINE_OVERLAY, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.TURBINE)
})
GTCEuStartupEvents.registry('gtceu:machine', event =>{
    event.create('mana_generator_turbine_tier1','multiblock', holder => new LargeTurbineMachine(holder,GTValues.MV))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('mana_generator')
        .recipeModifier((machine, recipe) => LargeTurbineMachine.recipeModifier(machine, recipe), true)
        //.appearanceBlock(GTBlocks.get('kubejs:manasteel_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("AAAA", "ASSA", "AAAA") 
            .aisle("ASSA", "BCCB", "ASSA") 
            .aisle("AAAA", "A@SA", "AAAA") 
            .where("A", Predicates.blocks("kubejs:manasteel_casing"))
            .where("B", Predicates.abilities(PartAbility.OUTPUT_ENERGY).setExactLimit(1)
                .or(Predicates.abilities(PartAbility.ROTOR_HOLDER).setExactLimit(1)))
            .where("C", Predicates.blocks("gtceu:steel_gearbox"))
            .where('S',Predicates.blocks('kubejs:manasteel_casing')
                    .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                    .or(Predicates.abilities(PartAbility.MAINTENANCE)).setMinGlobalLimited(1)
                    .or(Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1)))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .beforeWorking((/**@type {$WorkableElectricMultiblockMachine}*/machine,recipe) =>{
            const rotorHolder = machine.getParts().find(part => part instanceof IRotorHolderMachine)
            if (!rotorHolder || !rotorHolder.hasRotor()) {
                return false;
            }
            if(rotorHolder.getTier() > GTValues.MV){
                machine.getRecipeLogic().interruptRecipe()
                return false
            }
            return true
        })
        .workableCasingRenderer('kubejs:block/manasteel_casing',  'gtceu:block/multiblock/generator/large_steam_turbine', false)
})
GTCEuStartupEvents.registry('gtceu:machine', event =>{
    event.create('mana_generator_turbine_tier2','multiblock', holder => new LargeTurbineMachine(holder,GTValues.MV))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('mana_generator')
        .recipeModifier((machine, recipe) => LargeTurbineMachine.recipeModifier(machine, recipe), true)
        //.appearanceBlock(GTBlocks.get('kubejs:elementium_steel_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("AAAA", "ASSA", "AAAA") 
            .aisle("ASSA", "BCCB", "ASSA") 
            .aisle("AAAA", "A@SA", "AAAA") 
            .where("A", Predicates.blocks("kubejs:elementium_steel_casing"))
            .where("B", Predicates.abilities(PartAbility.OUTPUT_ENERGY).setExactLimit(1)
                .or(Predicates.abilities(PartAbility.ROTOR_HOLDER).setExactLimit(1)))
            .where("C", Predicates.blocks(GTBlocks.CASING_STAINLESS_STEEL_GEARBOX.get()))
            .where('S',Predicates.blocks('kubejs:elementium_steel_casing')
                    .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                    .or(Predicates.abilities(PartAbility.MAINTENANCE)).setMinGlobalLimited(1)
                    .or(Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1)))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .beforeWorking((/**@type {$WorkableElectricMultiblockMachine}*/machine,recipe) =>{
            const rotorHolder = machine.getParts().find(part => part instanceof IRotorHolderMachine)
            if (!rotorHolder || !rotorHolder.hasRotor()) {
                return false;
            }
            if(rotorHolder.getTier() > GTValues.EV){
                machine.getRecipeLogic().interruptRecipe()
                return false
            }
            return true
        })
        .workableCasingRenderer('kubejs:block/elementium_steel_casing',  'gtceu:block/multiblock/generator/large_steam_turbine', false)
})
GTCEuStartupEvents.registry('gtceu:machine', event =>{
    event.create('mana_generator_turbine_tier3','multiblock', holder => new LargeTurbineMachine(holder,GTValues.HV))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('mana_generator')
        .recipeModifier((machine, recipe) => LargeTurbineMachine.recipeModifier(machine, recipe), true)
        //.appearanceBlock(GTBlocks.get('kubejs:terrasteel_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("AAAA", "ASSA", "AAAA") 
            .aisle("ASSA", "BCCB", "ASSA") 
            .aisle("AAAA", "A@SA", "AAAA") 
            .where("A", Predicates.blocks("kubejs:terrasteel_casing"))
            .where("B", Predicates.abilities(PartAbility.OUTPUT_ENERGY).setExactLimit(1)
                .or(Predicates.abilities(PartAbility.ROTOR_HOLDER).setExactLimit(1)))
            .where("C", Predicates.blocks(GTBlocks.CASING_TITANIUM_GEARBOX.get()))
            .where('S',Predicates.blocks('kubejs:terrasteel_casing')
                    .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                    .or(Predicates.abilities(PartAbility.MAINTENANCE)).setMinGlobalLimited(1)
                    .or(Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1)))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .beforeWorking((/**@type {$WorkableElectricMultiblockMachine}*/machine,recipe) =>{
            const rotorHolder = machine.getParts().find(part => part instanceof IRotorHolderMachine)
            if (!rotorHolder || !rotorHolder.hasRotor()) {
                return false;
            }
            if(rotorHolder.getTier() > GTValues.LuV){
                machine.getRecipeLogic().interruptRecipe()
                return false
            }
            return true
        })
        .workableCasingRenderer('kubejs:block/terrasteel_casing',  'gtceu:block/multiblock/generator/large_steam_turbine', false)
})
GTCEuStartupEvents.registry('gtceu:machine', event =>{
    event.create('mana_generator_turbine_tier4','multiblock', holder => new LargeTurbineMachine(holder,GTValues.EV))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('mana_generator')
        .recipeModifier((machine, recipe) => LargeTurbineMachine.recipeModifier(machine, recipe), true)
        //.appearanceBlock(GTBlocks.get('kubejs:alfsteel_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("AAAA", "ASSA", "AAAA") 
            .aisle("ASSA", "BCCB", "ASSA") 
            .aisle("AAAA", "A@SA", "AAAA") 
            .where("A", Predicates.blocks("kubejs:alfsteel_casing"))
            .where("B", Predicates.abilities(PartAbility.OUTPUT_ENERGY).setExactLimit(1)
                .or(Predicates.abilities(PartAbility.ROTOR_HOLDER).setExactLimit(1)))
            .where("C", Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_GEARBOX.get()))
            .where('S',Predicates.blocks('kubejs:alfsteel_casing')
                    .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                    .or(Predicates.abilities(PartAbility.MAINTENANCE)).setMinGlobalLimited(1)
                    .or(Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1)))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .beforeWorking((/**@type {$WorkableElectricMultiblockMachine}*/machine,recipe) =>{
            const rotorHolder = machine.getParts().find(part => part instanceof IRotorHolderMachine)
            if (!rotorHolder || !rotorHolder.hasRotor()) {
                return false;
            }
            if(rotorHolder.getTier() > GTValues.UV){
                machine.getRecipeLogic().interruptRecipe()
                return false
            }
            return true
        })
        .workableCasingRenderer('kubejs:block/alfsteel_casing',  'gtceu:block/multiblock/generator/large_steam_turbine', false)
})