const { $WorkableElectricMultiblockMachine } = require("packages/com/gregtechceu/gtceu/api/machine/multiblock/$WorkableElectricMultiblockMachine")
const { $GTRecipe } = require("packages/com/gregtechceu/gtceu/api/recipe/$GTRecipe")
const { $GTRecipeType } = require("packages/com/gregtechceu/gtceu/api/recipe/$GTRecipeType")
const { $Content } = require("packages/com/gregtechceu/gtceu/api/recipe/content/$Content")
const { $List } = require("packages/java/util/$List")
const { $Map } = require("packages/java/util/$Map")
const $FluidRecipeCapability = Java.loadClass('com.gregtechceu.gtceu.api.capability.recipe.FluidRecipeCapability')
GTCEuStartupEvents.registry('gtceu:machine',event =>{
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
            /*const coilmachine = machine.getParts().find(part => part instanceof $CoilWorkableElectricMultiblockMachine)
            let temperature = coilmachine.getCoilType().getCoilTemperature() + 100 * Math.max(0, coilmachine.getTier() - GTValues.MV)
            console.info(temperature)
            l.add(l.size(),Text.translate('kubejs.coilmachine_temperature',temperature))*/
            if (machine.isFormed()) {
                l.add(Component.translatable("gtceu.multiblock.blast_furnace.max_temperature", Text.of(machine.getCoilType().getCoilTemperature() + "K").red()))
            }
        })
        // .onWorking(machine =>{
        //     if (machine.getOffsetTimer() % 20 == 0){
        //         let contents = $Map.of($FluidRecipeCapability.CAP,new $List.of(new $Content(Fluid.of('gtceu:cryotheum',Math.pow(2,machine.self().getTier() - 2)*10,1,0,null,null))))
        //         let tmp = new $GTRecipe(new $GTRecipeType(new ResourceLocation("gt_machine_io"), "gt"),
        //                 new ResourceLocation("___recipe_test_ids__"), contents, null, null,
        //                 null, null, $List.of(), null, 0, false)
        //         if(tmp.matchRecipeContents(IO.IN, machine, contents).isSuccess()){
        //             tmp.handleRecipe(IO.IN, machine, contents)
        //             return true
        //         }
        //         else{
        //             machine.getRecipeLogic().setProgress(0)
        //         }
        //     }
        //     return true
        // })
        // .beforeWorking((/**@type {$WorkableElectricMultiblockMachine}*/machine,recipe)=>{
        //     let contents = $Map.of($FluidRecipeCapability.CAP,new $List.of(new $Content(Fluid.of('gtceu:cryotheum',Math.pow(2,machine.self().getTier() - 2)*10,1,0,null,null))))
        //     let tmp = new $GTRecipe(new $GTRecipeType(new ResourceLocation("gt_machine_io"), "gt"),
        //                 new ResourceLocation("___recipe_test_ids__"), contents, null, null,
        //                 null, null, $List.of(), null, 0, false)
        //     if(tmp.matchRecipeContents(IO.IN, machine, contents).isSuccess()){
        //         return true
        //     }
        //     machine.getRecipeLogic().interruptRecipe()
        //     return false
        // })
        .workableCasingRenderer('kubejs:block/blaze_blast_furnace_casing', 'gtceu:block/multiblock/implosion_compressor', false)
})