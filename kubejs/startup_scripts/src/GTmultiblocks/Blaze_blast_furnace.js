const { $WorkableElectricMultiblockMachine } = require("packages/com/gregtechceu/gtceu/api/machine/multiblock/$WorkableElectricMultiblockMachine")
const { $GTRecipe } = require("packages/com/gregtechceu/gtceu/api/recipe/$GTRecipe")
const { $GTRecipeType } = require("packages/com/gregtechceu/gtceu/api/recipe/$GTRecipeType")
const { $Content } = require("packages/com/gregtechceu/gtceu/api/recipe/content/$Content")
const { $FluidIngredient } = require("packages/com/gregtechceu/gtceu/api/recipe/ingredient/$FluidIngredient")
const { $List } = require("packages/java/util/$List")
const { $Map } = require("packages/java/util/$Map")
const { $Fluid } = require("packages/net/minecraft/world/level/material/$Fluid")

GTCEuStartupEvents.registry('gtceu:machine',event =>{
    const IO = Java.loadClass('com.gregtechceu.gtceu.api.capability.recipe.IO')
    const $FluidRecipeCapability = Java.loadClass('com.gregtechceu.gtceu.api.capability.recipe.FluidRecipeCapability')
    event.create('blaze_blast_furnace','multiblock',(holder) => new $CoilWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('electric_blast_furnace')
        .recipeModifier((machine,recipe) =>{
            let newrecipe = GTRecipeModifiers.ebfOverclock(machine,recipe)
            let parallel = 8
            return GTRecipeModifiers.accurateParallel(machine,newrecipe,parallel,false).getFirst()
        })
        //.appearanceBlock('kubejs:blaze_blast_frunace_casing')
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('GGG', 'MMM', 'MMM', 'GGG')
            .aisle('GGG', 'M M', 'M M', 'GBG')
            .aisle('GKG', 'MMM', 'MMM', 'GGG')
            .where('K',Predicates.controller(Predicates.blocks(definition.get())))
            .where('M',Predicates.heatingCoils())
            .where('B',Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1))
            .where('G',Predicates.blocks('kubejs:blaze_blast_furnace_casing').setMinGlobalLimited(4)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE)).setMinGlobalLimited(1)
                )
            .where(' ',Predicates.air())
            .build()
        )
        .additionalDisplay((machine,l) => {
            if (machine.isFormed()) {
                l.add(Component.translatable("gtceu.multiblock.blast_furnace.max_temperature", Text.of(machine.getCoilType().getCoilTemperature() + "K").red()))
            }
        })
        .onWorking(machine =>{
            if (machine.input(true, machine.getContentBuilder().fluid("gtceu:cryotheum " + (2 ** (machine.self().getTier() - 2)) * 10).build()).isSuccess()) {
                return true
            }
            machine.getRecipeLogic().interruptRecipe()
            return false
        })
        .beforeWorking((/**@type {$WorkableElectricMultiblockMachine}*/machine,recipe)=>{
            if (machine.input(true, machine.getContentBuilder().fluid("gtceu:cryotheum " + (2 ** (machine.self().getTier() - 2)) * 10).build()).isSuccess()) {
                return true
            }
            machine.getRecipeLogic().interruptRecipe()
            return false
        })
        .workableCasingRenderer('kubejs:block/blaze_blast_furnace_casing', 'gtceu:block/multiblock/implosion_compressor', false)
})