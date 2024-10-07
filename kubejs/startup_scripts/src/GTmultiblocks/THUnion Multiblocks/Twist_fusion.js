GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    let builder=event.create('twisted_fusion')
    .category('ctnh')
    .setMaxIOSize(0, 0, 2, 2)
    .setEUIO('in')
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.TURBINE);
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    /**
     * @type {Internal.CustomMultiblockBuilder}
     */
    let builder=event.create('twisted_fusion_mk1', 'multiblock')
    for(let i=0;i<=9;i++) builder.tooltips(Component.translatable(`ctnh.${builder.id}.${i}`));
    builder.rotationState(RotationState.NON_Y_AXIS)
        .recipeModifier(
            (machine,/** @type {Internal.GTRecipe} */ recipe, params, result)=>{
                if(recipe.getType().toString()=='gtceu:fusion_reactor'){
					var startEU=recipe.data.getLong('eu_to_start');
					if(startEU<=160000000){
						recipe=GTRecipeModifiers.accurateParallel(machine,recipe,64,false).getFirst();
					}else if(startEU<=320000000){
						recipe=GTRecipeModifiers.accurateParallel(machine,recipe,16,false).getFirst();
					}else if(startEU<=480000000){
						recipe=GTRecipeModifiers.accurateParallel(machine,recipe,4,false).getFirst();
					}
				}
				recipe=GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK).apply(machine,recipe,params,result);
				return recipe;
            }
        )
        .recipeTypes([GTRecipeTypes.FUSION_RECIPES,GTRecipeTypes.get('twisted_fusion')])
        .workableCasingRenderer(
            "kubejs:block/twisted_fusion_casing",
            "gtceu:block/multiblock/fusion_reactor",
            false
        )
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("###############", "###############", "###############", "######AAA######", "###############", "###############", "###############") 
            .aisle("###############", "###############", "######AAA######", "####AA###AA####", "######AAA######", "###############", "###############") 
            .aisle("###############", "###############", "####AA###AAA###", "###A##AAA##A###", "###AAA###AA####", "###############", "###############") 
            .aisle("###############", "###########A###", "###A######ABA##", "##ABAA###AABA##", "##ABA######A###", "###A###########", "###############") 
            .aisle("###############", "############A##", "###########A#A#", "##AA#######AA##", "#A#A###########", "##A############", "###############") 
            .aisle("###############", "############A##", "###########A#A#", "##A#########A##", "#A#A###########", "##A############", "###############") 
            .aisle("###############", "#############A#", "############A#A", "#A###########A#", "A#A############", "#A#############", "###############") 
            .aisle("###############", "#############A#", "############A#A", "#A###########A#", "A#A############", "#A#############", "###############") 
            .aisle("###############", "#############A#", "############A#A", "#A###########A#", "A#A############", "#A#############", "###############") 
            .aisle("###############", "############A##", "###########A#A#", "##A#########A##", "#A#A###########", "##A############", "###############") 
            .aisle("###############", "###########AA##", "###########A#A#", "##A#########A##", "#A#A###########", "##AA###########", "###############") 
            .aisle("###########A###", "#########AABA##", "##########ABA##", "###A#######A###", "##ABA##########", "##ABAA#########", "###A###########") 
            .aisle("#########AA####", "######AAA##A###", "#########AAA###", "###############", "###AAA#########", "###A##AAA######", "####AA#########") 
            .aisle("######AAA######", "####AA###AA####", "######CCC######", "######C@C######", "######CCC######", "####AA###AA####", "######AAA######") 
            .aisle("####AA#########", "###A##AAA######", "###AAA#########", "###############", "#########AAA###", "######AAA##A###", "#########AA####") 
            .aisle("###A###########", "##ABAA#########", "##ABA##########", "###A#######A###", "##########ABA##", "#########AABA##", "###########A###") 
            .aisle("###############", "##AA###########", "#A#A###########", "##A#########A##", "###########A#A#", "###########AA##", "###############") 
            .aisle("###############", "##A############", "#A#A###########", "##A#########A##", "###########A#A#", "############A##", "###############") 
            .aisle("###############", "#A#############", "A#A############", "#A###########A#", "############A#A", "#############A#", "###############") 
            .aisle("###############", "#A#############", "A#A############", "#A###########A#", "############A#A", "#############A#", "###############") 
            .aisle("###############", "#A#############", "A#A############", "#A###########A#", "############A#A", "#############A#", "###############") 
            .aisle("###############", "##A############", "#A#A###########", "##A#########A##", "###########A#A#", "############A##", "###############") 
            .aisle("###############", "##A############", "#A#A###########", "##AA#######AA##", "###########A#A#", "############A##", "###############") 
            .aisle("###############", "###A###########", "##ABA######A###", "##ABAA###AABA##", "###A######ABA##", "###########A###", "###############") 
            .aisle("###############", "###############", "###AAA###AA####", "###A##AAA##A###", "####AA###AAA###", "###############", "###############") 
            .aisle("###############", "###############", "######AAA######", "####AA###AA####", "######AAA######", "###############", "###############") 
            .aisle("###############", "###############", "###############", "######AAA######", "###############", "###############", "###############") 
            .where("#", Predicates.any())
            .where("A", Predicates.blocks("kubejs:twisted_fusion_casing"))
            .where("B", Predicates.blocks("gtceu:fusion_coil"))
            .where("C", Predicates.blocks("kubejs:twisted_fusion_casing").or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build());  
})

//This multiblock comes from the modpack THUnion自制整合包vol.2, and is made by Sigmit64