/**
 * 生成合金配方
 * @param { Internal.RecipesEventJS } event - 事件对象
 * @param { string } result - 输出流体ID或tag（如 'gtceu:brass' 或 '#forge:brass'）
 * @param { number } result_amount - 输出流体数量（mB）
 * @param { Array } inputs - 输入流体数组，格式为 [['fluid_id', amount], ...]
 * @param { number } temperature - 合金温度
 * @param { Array } conditions - 可选的条件数组
 */
function tconstruct_alloy(event, result, result_amount, inputs, temperature, conditions) {
    const recipe = {
        "type": "tconstruct:alloy",
        "inputs": [],
        "result": {
            "amount": result_amount
        },
        "temperature": temperature
    };

    // 处理结果（支持tag或fluid）
    if (result.startsWith('#')) {
        recipe.result.tag = result.substring(1);
    } else {
        recipe.result.fluid = result;
    }

    // 处理输入流体（数组格式）
    inputs.forEach(([fluid, amount]) => {
        const input_obj = { "amount": amount };
        if (fluid.startsWith('#')) {
            input_obj.tag = fluid.substring(1);
        } else {
            input_obj.fluid = fluid;
        }
        recipe.inputs.push(input_obj);
    });

    // 添加条件（如果有）
    if (conditions && conditions.length > 0) {
        recipe.conditions = conditions;
    }

    event.custom(recipe);
}
