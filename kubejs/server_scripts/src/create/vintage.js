const $GTRecipeCapabilities=Java.loadClass('com.gregtechceu.gtceu.common.data.GTRecipeCapabilities');
ServerEvents.recipes(event =>{
    event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:centrifuge' }, recipe => { 
        if(EUt(recipe)>8){ return; }
        try { 
            /** @type {InputItem} */var input = allInputs(recipe);
            /** @type {OutputItem[]} */var outputs=allOutputs(recipe);
            event.recipes.vintageimprovements.centrifugation(outputs,input)
            .processingTime(recipe.get('duration'))
            .minimalRPM(64);
        } catch (err) {
            
        }
    });
})



function allInputs(recipe){
    var inputList=[];
    recipe.get("inputs").get($GTRecipeCapabilities.ITEM).forEach( (content) => {
        inputList.push(content.content);
    });
    return inputList;
}
function allOutputs(recipe){
    var outputList=[];
    recipe.get("outputs").get($GTRecipeCapabilities.ITEM).forEach( (content) => {
        outputList.push(toOutput(content));
    } );
    return outputList;
}
function EUt(recipe){
    try{
        return Number(recipe.get("tickInputs").get($GTRecipeCapabilities.EU)[0].content);
    }catch(error){
        //真的有sb配方不要电
        return 0;
    }
}