ServerEvents.recipes(event => {
    // 压缩黏土(未烧制的红砖)
    event.remove({output: "gtceu:compressed_clay"})
    event.shaped("3x gtceu:compressed_clay", 
        ['AAA', 'ABA', 'AAA'],
        {'A': 'minecraft:clay_ball', 'B': 'gtceu:brick_wooden_form'}
    ).keepIngredient('gtceu:brick_wooden_form');
    
    // 红砖
    event.remove({type: "minecraft:smelting", output: "minecraft:brick"});
    event.smelting("minecraft:brick", "gtceu:compressed_clay").cookingTime(900).xp(0.5);

    // 焦炉砖
    event.remove({type: "minecraft:smelting", output: "gtceu:coke_oven_brick"});
    event.smelting("gtceu:coke_oven_brick", "gtceu:compressed_coke_clay").cookingTime(900).xp(0.5);
})