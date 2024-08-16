const { $WorkableElectricMultiblockMachine } = require("packages/com/gregtechceu/gtceu/api/machine/multiblock/$WorkableElectricMultiblockMachine")
const { $GTRecipe } = require("packages/com/gregtechceu/gtceu/api/recipe/$GTRecipe")

GTCEuStartupEvents.registry('gtceu:recipe_type',event =>{
    const LocalizationUtils = Java.loadClass('com.lowdragmc.lowdraglib.utils.LocalizationUtils')
    GTRecipeTypes.register('nuclear_reactor','multiblock')
        //.category('ctnh')
        .setEUIO('in')
        .setMaxIOSize(3, 4, 1, 1)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)
        .addDataInfo(data =>{
            return LocalizationUtils.format('ctnh.nuclear_reactor_heat',data.getInt('heat'))
        })
})
GTCEuStartupEvents.registry('gtceu:machine', event =>{
    const IO = Java.loadClass('com.gregtechceu.gtceu.api.capability.recipe.IO')
    const FluidStack = Java.loadClass('com.lowdragmc.lowdraglib.side.fluid.FluidStack')
    event.create('nuclear_reactor','multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('nuclear_reactor')
        .recipeModifier((machine,/**@type {$GTRecipe}*/recipe) =>{
            let heat = recipe.data.get('heat')
            machine.getHolder().self().persistentData.putInt('heat',heat)
            return recipe
        })
        //.appearanceBlock(GTBlocks.get('kubejs:manasteel_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("DDD", "ABA", "ABA", "ABA", "ABA", "ABA", "ABA", "ABA", "DDD") 
            .aisle("DDD", "BCB", "BCB", "BCB", "BCB", "BCB", "BCB", "BCB", "DDD") 
            .aisle("D@D", "ABA", "ABA", "ABA", "ABA", "ABA", "ABA", "ABA", "DDD") 
            .where("A", Predicates.blocks("kubejs:shielded_reactor_casing"))
            .where("B", Predicates.blocks("gtceu:tempered_glass"))
            .where("C", Predicates.blocks("gtceu:thorium_block"))
            .where("D",Predicates.blocks("kubejs:shielded_reactor_casing")
                    .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .onWorking((/**@type {$WorkableElectricMultiblockMachine} */machine) =>{
            let heat = machine.getHolder().self().persistentData.getInt('heat')
            console.info(heat)
            if(machine.getOffsetTimer() %20 == 0){
                machine.getParts().forEach((/** @type {$IMultiPart} */part) =>{
                    part.getRecipeHandlers().forEach((/** @type {$IRecipeHandlerTrait} */trait) =>{
                        if(trait.getHandlerIO() == IO.IN){
                            trait.getContents().forEach((contents )=>{
                                if(contents instanceof FluidStack){
                                    if(contents.getFluid().isSame(Fluid.of('gtceu:sodium_potassium').getFluid())){
                                        if(contents.getAmount() >= heat*16.6){
                                            machine.getHolder().self().persistentData.putString('coolant','gtceu:sodium_potassium')
                                            machine.getHolder().self().persistentData.putFloat('coolant_amount',contents.getAmount())
                                            if (machine.input(true, machine.getContentBuilder().fluid("gtceu:sodium_potassium " + heat*16.6).build()).isSuccess() && machine.output(true,machine.getContentBuilder().fluid("gtceu:hot_sodium_potassium_alloy " + heat*16.6).build()).isSuccess()) {
                                                machine.input(false, machine.getContentBuilder().fluid("gtceu:sodium_potassium " + heat*16.6).build())
                                                machine.output(false,machine.getContentBuilder().fluid("gtceu:hot_sodium_potassium " + heat*16.6).build())
                                                machine.recipeLogic.setProgress(machine.getProgress() + 20)
                                                return true
                                            }
                                        }
                                    }
                                    else if(contents.getFluid().isSame(Fluid.of('gtceu:sodium').getFluid())){
                                        if(contents.getAmount() >= heat*18.75){
                                            console.info('here')
                                            machine.getHolder().self().persistentData.putString('coolant','gtceu:sodium')
                                            machine.getHolder().self().persistentData.putFloat('coolant_amount',contents.getAmount())
                                            if (machine.input(true, machine.getContentBuilder().fluid("gtceu:sodium " + heat*18.75).build()).isSuccess() && machine.output(true, machine.getContentBuilder().fluid("gtceu:hot_sodium " + heat*18.75).build()).isSuccess()) {
                                                machine.input(false, machine.getContentBuilder().fluid("gtceu:sodium " + heat*18.75).build())
                                                machine.output(false, machine.getContentBuilder().fluid("gtceu:hot_sodium " + heat*18.75).build())
                                                machine.recipeLogic.setProgress(machine.getProgress() + 20)
                                                return true
                                            }
                                        }
                                    }
                                    else if(contents.getFluid().isSame(Fluid.of('gtceu:deuterium').getFluid())){
                                        if(contents.getAmount() >= heat*33.3){
                                            machine.getHolder().self().persistentData.putString('coolant','gtceu:deuterium')
                                            machine.getHolder().self().persistentData.putFloat('coolant_amount',contents.getAmount())
                                            if (machine.input(true, machine.getContentBuilder().fluid("gtceu:deuterium " + heat*33.3).build()).isSuccess() && machine.output(true, machine.getContentBuilder().fluid("gtceu:hot_deuterium " + heat*33.3).build()).isSuccess()) {
                                                machine.input(false, machine.getContentBuilder().fluid("gtceu:deuterium " + heat*33.3).build())
                                                machine.output(false, machine.getContentBuilder().fluid("gtceu:hot_deuterium " + heat*33.3).build())
                                                machine.recipeLogic.setProgress(machine.getProgress() + 20)
                                                return true
                                            }
                                        }
                                    }
                                    else if(contents.getFluid().isSame(Fluid.of('gtceu:steam').getFluid())){
                                        if(contents.getAmount() >= heat*100){
                                            machine.getHolder().self().persistentData.putString('coolant','gtceu:steam')
                                            machine.getHolder().self().persistentData.putFloat('coolant_amount',contents.getAmount())
                                            if (machine.input(true, machine.getContentBuilder().fluid("gtceu:steam " + heat*100).build()).isSuccess() &&  machine.output(true, machine.getContentBuilder().fluid("gtceu:hot_steam " + heat*100).build()).isSuccess()) {
                                                machine.input(false, machine.getContentBuilder().fluid("gtceu:steam " + heat*100).build())
                                                machine.output(false, machine.getContentBuilder().fluid("gtceu:hot_steam " + heat*100).build())
                                                machine.recipeLogic.setProgress(machine.getProgress() + 20)
                                                return true
                                            }
                                        }
                                    }
                                }
                            })
                        }
                    })
                })
            }
            return true
        })
        .workableCasingRenderer('kubejs:block/shielded_reactor_casing',  'gtceu:block/multiblock/generator/large_steam_turbine', false)
})
