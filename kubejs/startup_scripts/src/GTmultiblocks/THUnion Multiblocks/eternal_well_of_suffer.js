GTCEuStartupEvents.registry('gtceu:machine', event => {
	/**
     * @type {Internal.CustomMultiblockBuilder}
     */
    let builder=event.create('eternal_well_of_suffer', 'multiblock')
    for(let i=0;i<=7;i++) builder.tooltips(Component.translatable(`ctnh.${builder.id}.${i}`));
    builder.rotationState(RotationState.NON_Y_AXIS)

        .recipeTypes([GTRecipeTypes.get('digital_well_of_suffer')])
        .workableCasingRenderer(
            "bloodmagic:block/largebloodstonebrick",
            "gtceu:block/machines/digital_well_of_suffer",
            false
        )
		.recipeModifiers([
			(/** @type {Internal.IMultiController} */ machine,/** @type {Internal.GTRecipe} */ recipe,params,result)=>{
				recipe=GTRecipeModifiers.accurateParallel(machine, recipe, 2147483647, false).getFirst();

				var multiplier=1;
				machine.getParts().forEach(part=>{
					part.getRecipeHandlers().forEach(trait=>{
						if(trait.getHandlerIO().toString()==='IN' && trait.getCapability()==$GTRecipeCapabilities.ITEM){
							trait.getContents().forEach((/** @type {Internal.ItemStack} */ content)=>{
								try{
									var count=content.getNbt().getCompound('data_model').getInt('data')
                					if(count<6) multiplier=0;
                					else if(count<48) multiplier=1;
                					else if(count<300) multiplier=1.5;
                					else if(count<900) multiplier=2;
                					else multiplier=3;
									
								}catch(error){}
							})
						}
					})
				})

				var level=machine.self().getLevel();
				var pos=machine.self().getPos();
				pos=pos.offset(0,-11,0);
				if(level.getBlock(pos).id=='gtceu:hellforge'){
					var will=level.getBlockEntity(pos).persistentData.getInt('will');
					try{
						var outputAmount=recipe.getOutputContents($GTRecipeCapabilities.FLUID).get(0).content.amount;
						level.getBlockEntity(pos).persistentData.putInt('will',will+(outputAmount*multiplier/100000));
						multiplier=0;
					}catch(error){}
		
				}


				
				return modifyRecipe(recipe,$GTRecipeCapabilities.FLUID, $ContentModifier.multiplier(multiplier),false,false);
            }
		])
		
		.pattern(definition => FactoryBlockPattern.start()
	.aisle("#########", "#########", "#########", "#########", "#########", "####A####", "####A####", "####A####", "####A####", "####A####", "####A####", "####A####", "####A####", "###AAA###", "#########", "#########") 
	.aisle("#########", "#########", "##B#B#B##", "#ABABABA#", "#ABABABA#", "#A#BBB#A#", "#A#CCC#A#", "#A#DDD#A#", "#A#DDD#A#", "#A#####A#", "#A#####A#", "#A#####A#", "#A#####A#", "#AA###AA#", "###AAA###", "#########") 
	.aisle("#########", "####A####", "#BAA#AAB#", "#BA###AB#", "#BA###AB#", "##BCCCB##", "##CEEEC##", "##D###D##", "##D###D##", "###DDD###", "#########", "#########", "#########", "#A#####A#", "##AAAAA##", "#########") 
	.aisle("###AAA###", "###AAA###", "##A###A##", "#A#####A#", "#A#####A#", "#BCFFFCB#", "#CEEEEEC#", "#D#####D#", "#D#####D#", "##DD#DD##", "####D####", "####G####", "#########", "A#######A", "#AAA#AAA#", "###AAA###") 
	.aisle("###AAA###", "##AAHAA##", "#B#####B#", "#B#####B#", "#B#####B#", "ABCFCFCBA", "ACEEEEECA", "AD#####DA", "AD#####DA", "A#D###D#A", "A##DGD##A", "A##GGG##A", "A###G###A", "A#######A", "#AA###AA#", "###AAA###") 
	.aisle("###AAA###", "###AAA###", "##A###A##", "#A#####A#", "#A#####A#", "#BCFFFCB#", "#CEEEEEC#", "#D#####D#", "#D#####D#", "##DD#DD##", "####D####", "####G####", "#########", "A#######A", "#AAA#AAA#", "###AAA###") 
	.aisle("#########", "####A####", "#BAA#AAB#", "#BA###AB#", "#BA###AB#", "##BCCCB##", "##CEEEC##", "##D###D##", "##D###D##", "###DDD###", "#########", "#########", "#########", "#A#####A#", "##AAAAA##", "#########") 
	.aisle("#########", "#########", "##B#B#B##", "#ABA@ABA#", "#ABABABA#", "#A#BBB#A#", "#A#CCC#A#", "#A#DDD#A#", "#A#DDD#A#", "#A#####A#", "#A#####A#", "#A#####A#", "#A#####A#", "#AA###AA#", "###AAA###", "#########") 
	.aisle("#########", "#########", "#########", "#########", "#########", "####A####", "####A####", "####A####", "####A####", "####A####", "####A####", "####A####", "####A####", "###AAA###", "#########", "#########") 
	.where("#", Predicates.any())
	.where("A", Predicates.blocks("bloodmagic:obsidiantilepath"))
	.where("B", Predicates.blocks("bloodmagic:largebloodstonebrick").or(Predicates.autoAbilities(definition.getRecipeTypes())))
	.where("C", Predicates.blocks("bloodmagic:ritualstone"))
	.where("D", Predicates.blocks("minecraft:tinted_glass"))
	.where("E", Predicates.blocks("bloodmagic:life_essence_block"))
	.where("F", Predicates.blocks("bloodmagic:sacrificerune"))
	.where("G", Predicates.blocks("bloodmagic:dungeon_metal"))
	.where("H", Predicates.blocks("minecraft:lava"))
	.where("@", Predicates.controller(Predicates.blocks(definition.get())))
	.build());
});
function modifyRecipe(/** @type {Internal.GTRecipe} */recipe, /** @type {Internal.GTRecipeCapabilities} */capability, modifier, /** @type {Boolean} */isInput,/** @type {Boolean} */ isTick){
    var newRecipe=recipe.copy();
    
    if(isInput){
        if(isTick){

        }else{
            newRecipe.inputs.replace(capability, newRecipe.copyContents(newRecipe.inputs, modifier).get(capability));
        }
    }else{
        if(isTick){

        }else{
            newRecipe.outputs.replace(capability, newRecipe.copyContents(newRecipe.outputs, modifier).get(capability));
        }
    }
    return newRecipe;

}
//This multiblock comes from the modpack THUnion自制整合包vol.2, and is made by Sigmit64