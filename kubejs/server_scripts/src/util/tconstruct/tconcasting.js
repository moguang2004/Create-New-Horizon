/**
 * 匠魂浇筑配方生成工具
 */

/**
 * 生成浇筑台配方（casting_table）
 * @param { Internal.RecipesEventJS } event - 事件对象
 * @param { string } result - 输出物品ID或tag（如 'gtceu:iron_ingot' 或 '#forge:ingots/iron'）
 * @param { string } fluid - 流体ID或tag（如 'gtceu:iron' 或 '#forge:iron'）
 * @param { number } amount - 流体数量（mB）
 * @param { string | null } cast - 铸模ID或tag（可为null）
 * @param { boolean } cast_consumed - 是否消耗铸模
 * @param { number } cooling_time - 冷却时间（ticks）
 */
function tconstruct_casting_table(event, result, fluid, amount, cast, cast_consumed, cooling_time) {
    const recipe = {
        "type": "tconstruct:casting_table",
        "cooling_time": cooling_time,
        "fluid": {
            "amount": amount
        },
        "result": {}
    };

    // 处理流体（支持tag或fluid ID）
    if (fluid.startsWith('#')) {
        recipe.fluid.tag = fluid.substring(1);
    } else {
        recipe.fluid.fluid = fluid;
    }

    // 处理结果（支持tag或item）
    if (result.startsWith('#')) {
        recipe.result.tag = result.substring(1);
    } else {
        recipe.result.item = result;
    }

    // 处理铸模（支持tag或item，可为null）
    if (cast !== null) {
        recipe.cast = {};
        if (cast.startsWith('#')) {
            recipe.cast.tag = cast.substring(1);
        } else {
            recipe.cast.item = cast;
        }
    }

    // 添加铸模消耗标志
    if (cast_consumed !== undefined) {
        recipe.cast_consumed = cast_consumed;
    }

    event.custom(recipe);
}

/**
 * 生成浇筑盆配方（casting_basin）
 * @param { Internal.RecipesEventJS } event - 事件对象
 * @param { string } result - 输出物品ID或tag（如 'gtceu:iron_block' 或 '#forge:storage_blocks/iron'）
 * @param { string } fluid - 流体ID或tag（如 'gtceu:iron' 或 '#forge:iron'）
 * @param { number } amount - 流体数量（mB）
 * @param { string | null } cast - 铸模ID或tag（可为null）
 * @param { boolean } cast_consumed - 是否消耗铸模
 * @param { number } cooling_time - 冷却时间（ticks）
 */
function tconstruct_casting_basin(event, result, fluid, amount, cast, cast_consumed, cooling_time) {
    const recipe = {
        "type": "tconstruct:casting_basin",
        "cooling_time": cooling_time,
        "fluid": {
            "amount": amount
        },
        "result": {}
    };

    // 处理流体（支持tag或fluid ID）
    if (fluid.startsWith('#')) {
        recipe.fluid.tag = fluid.substring(1);
    } else {
        recipe.fluid.fluid = fluid;
    }

    // 处理结果（支持tag或item）
    if (result.startsWith('#')) {
        recipe.result.tag = result.substring(1);
    } else {
        recipe.result.item = result;
    }

    // 处理铸模（支持tag或item，可为null）
    if (cast !== null) {
        recipe.cast = {};
        if (cast.startsWith('#')) {
            recipe.cast.tag = cast.substring(1);
        } else {
            recipe.cast.item = cast;
        }
    }

    // 添加铸模消耗标志
    if (cast_consumed !== undefined) {
        recipe.cast_consumed = cast_consumed;
    }

    event.custom(recipe);
}

/**
 * 批量生成浇筑台配方
 * @param { Internal.RecipesEventJS } event - 事件对象
 * @param { Array } materials - 材料数组，每个元素包含：{id, fluid_id, amount, cast, cast_consumed, cooling_time}
 * @param { string } result_type - 结果类型前缀（如 'ingot', 'nugget'）
 * @param { string } result_namespace - 结果命名空间（如 'gtceu'）
 */
function tconstruct_batch_casting_table(event, materials, result_type, result_namespace) {
    materials.forEach(material => {
        const result = `${result_namespace}:${material.id}_${result_type}`;
        const cast = material.cast || `tconstruct:${result_type}_cast`;
        const cast_consumed = material.cast_consumed !== undefined ? material.cast_consumed : false;
        const cooling_time = material.cooling_time || 90;

        tconstruct_casting_table(
            event,
            result,
            material.fluid_id,
            material.amount,
            cast,
            cast_consumed,
            cooling_time
        );
    });
}

/**
 * 批量生成浇筑盆配方
 * @param { Internal.RecipesEventJS } event - 事件对象
 * @param { Array } materials - 材料数组，每个元素包含：{id, fluid_id, amount, cast, cast_consumed, cooling_time}
 * @param { string } result_type - 结果类型前缀（如 'block'）
 * @param { string } result_namespace - 结果命名空间（如 'gtceu'）
 */
function tconstruct_batch_casting_basin(event, materials, result_type, result_namespace) {
    materials.forEach(material => {
        const result = `${result_namespace}:${material.id}_${result_type}`;
        const cast = material.cast || null;
        const cast_consumed = material.cast_consumed !== undefined ? material.cast_consumed : false;
        const cooling_time = material.cooling_time || 90;

        tconstruct_casting_basin(
            event,
            result,
            material.fluid_id,
            material.amount,
            cast,
            cast_consumed,
            cooling_time
        );
    });
}
