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
    const FluidStack = Java.loadClass('com.lowdragmc.lowdraglib.side.fluid.FluidStack')
    event.create('blaze_blast_furnace','multiblock',(holder) => new $CoilWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('electric_blast_furnace')
        .recipeModifier((machine,recipe) =>{
            let parallel = 8
            let newrecipe = GTRecipeModifiers.accurateParallel(machine,newrecipe,parallel,false).getFirst()
            return GTRecipeModifiers.ebfOverclock(machine,recipe)
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
            let current = 0
            machine.getParts().forEach((/** @type {$IMultiPart} */part) =>{
                part.getRecipeHandlers().forEach((/** @type {$IRecipeHandlerTrait} */trait) =>{
                    if(trait.getHandlerIO() == IO.IN){
                        trait.getContents().forEach((contents )=>{
                            if(contents instanceof FluidStack){
                                if(contents.getFluid() == 'gtceu:pyrotheum'){
                                    current += contents.getAmount()
                                }
                            }
                        })
                    }
                })
        })
            if (machine.isFormed()) {
                l.add(Component.translatable("gtceu.multiblock.blast_furnace.max_temperature", Text.of(machine.getCoilType().getCoilTemperature() + "K").red()))
                l.add(l.size(),Text.translate('ctnh.blaze_blast_furnace.cryotheum',current))
            }
        })
        .onWorking(machine =>{
            if (machine.getOffsetTimer() % 20 == 0){
                let tier = machine.self().getTier()
                if (machine.input(true, machine.getContentBuilder().fluid("gtceu:pyrotheum " + (2 ** (tier - 2)) * 10).build()).isSuccess()) {
                    machine.input(false, machine.getContentBuilder().fluid("gtceu:pyrotheum " + (2 ** (tier - 2)) * 10).build())
                    return true
                }
                machine.getRecipeLogic().setProgress(0)
            }
            return true
        })
        .beforeWorking((/**@type {$WorkableElectricMultiblockMachine}*/machine,recipe)=>{
            if (machine.input(true, machine.getContentBuilder().fluid("gtceu:pyrotheum " + (2 ** (machine.self().getTier() - 2)) * 10).build()).isSuccess()) {
                return true
            }
            machine.getRecipeLogic().interruptRecipe()
            return false
        })
        .workableCasingRenderer('kubejs:block/blaze_blast_furnace_casing', 'gtceu:block/multiblock/implosion_compressor', false)
})