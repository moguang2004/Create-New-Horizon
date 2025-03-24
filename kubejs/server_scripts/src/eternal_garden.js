ServerEvents.recipes(event => {
    Ingredient.of('#forge:foods').getItemTypes().forEach(food => {
        if (food.toString() != 'pumpkin_pie') {
            let nutrition = food.getFoodProperties().getNutrition()
            let saturation = food.getFoodProperties().getSaturationModifier()
            let rate = nutrition + saturation / 2
            event.recipes.gtceu.eternal_garden(food.toString() + '_gourmaryllis')
                .EUt(512)
                .itemInputs(food.asIngredient().getItemIds())
                .notConsumable('botania:gourmaryllis')
                .outputFluids(Fluid.of('gtceu:mana', 5 * Math.floor(Math.pow(rate, 2))))
                .duration(30 * rate / 2)
                .addData("type", "eat")
                .addData("nutrition", nutrition + saturation * 0.5)
        }
    })

})