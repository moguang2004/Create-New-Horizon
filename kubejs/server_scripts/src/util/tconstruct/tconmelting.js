/**
 * 生成融化配方
 * @param { Internal.RecipesEventJS } event - 事件对象
 * @param { string } result_fluid - 输出流体ID或tag（如 'gtceu:iron' 或 '#forge:iron'）
 * @param { number } result_amount - 输出流体数量（mB）
 * @param { string } ingredient - 输入物品ID或tag（如 'minecraft:iron_ingot' 或 '#forge:ingots/iron'）
 * @param { number } temperature - 熔化温度
 * @param { number } time - 熔化时间（ticks）
 */
function tconstruct_melting(event, result_fluid, result_amount, ingredient, temperature, time) {
    const recipe = {
        "type": "tconstruct:melting",
        "ingredient": {},
        "result": {
            "amount": result_amount
        },
        "temperature": temperature,
        "time": time
    };

    // 处理结果流体（支持tag或fluid）
    if (result_fluid.startsWith('#')) {
        recipe.result.tag = result_fluid.substring(1);
    } else {
        recipe.result.fluid = result_fluid;
    }

    // 处理输入物品（支持tag或item）
    if (ingredient.startsWith('#')) {
        recipe.ingredient.tag = ingredient.substring(1);
    } else {
        recipe.ingredient.item = ingredient;
    }

    event.custom(recipe);
}
