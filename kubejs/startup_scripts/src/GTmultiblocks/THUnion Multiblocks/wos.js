// priority: 0

// Visit the wiki for more info - https://kubejs.com/

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    let builder=event.create('digital_well_of_suffer')
    .category('ctnh')
    .setMaxIOSize(1,0,0,1)
    .setEUIO('in')
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.BATH)
})


GTCEuStartupEvents.registry('gtceu:machine', event => {
    /**
     * @type {Internal.MachineBuilder}
     */
    let builder=event.create('digital_well_of_suffer', 'simple', GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV) 
    builder.recipeType(GTRecipeTypes.get('digital_well_of_suffer'))
    
        .editableUI($SimpleTieredMachine.EDITABLE_UI_CREATOR.apply(GTCEu.id('digital_well_of_suffer'),GTRecipeTypes.get('digital_well_of_suffer')))
        .rotationState(RotationState.NON_Y_AXIS)
        .workableTieredHullRenderer(GTCEu.id("block/machines/digital_well_of_suffer"))
        .recipeModifier( (/** @type {$WorkableTieredMachine} */ machine, recipe)=> {
            /** @type {InputItem} */
            try{
                /** @type {Internal.ItemStack} */
                var stack=machine.importItems.getContents()[0];
                var count=stack.getNbt().getCompound('data_model').getInt('data')
                var multiplier=1;
                if(count<6) multiplier=0;
                else if(count<48) multiplier=1;
                else if(count<300) multiplier=1.5;
                else if(count<900) multiplier=2;
                else multiplier=3;
                return modifyRecipe(recipe, $GTRecipeCapabilities.FLUID, $ContentModifier.multiplier(multiplier), false, false);
            }catch(error){}
            return recipe;
            })
        .tankScalingFunction(tier => tier * 32000)
        
        
    
    
})

//This machine comes from the modpack THUnion自制整合包vol.2, and is made by Sigmit64
