EntityEvents.hurt((event) => {
    let entity = event.entity; // 被击杀的实体
    let source = event.source; // 伤害来源
    let attacker = source.getActual(); // 实际攻击者
 
    // 检查攻击者是否为玩家
    if (attacker && attacker.isPlayer()) {
        let player = attacker; // 直接使用 attacker，因为 isPlayer() 确认其为玩家
        let handSlots = player.getHandSlots(); // 获取玩家手中的物品槽位（主手和副手）
        let mainHandItem = null;
 
        // 获取主手物品（通常是第一个槽位）
        let iterator = handSlots.iterator();//这里是一个迭代器
        if (iterator.hasNext())
            mainHandItem = iterator.next(); // 主手物品是第一个槽位
 
        if (mainHandItem.hasTag('tconstruct:modifiable')) {// 检查主手物品是否为匠魂工具
            let modifiers = mainHandItem.getNbt().getAsString(); // 获取工具的NBT
            let hasGapingModifier = false;
            // 检查NBT中是否包含 "kubejs:add_drop"
            if (modifiers.includes("kubejs:gaping"))
                hasGapingModifier = true;
 
            // 如果工具具有 "kubejs:add_drop" 修饰符
            if (hasGapingModifier) {
                let random = Utils.getRandom();
                let offsetx = random.nextInt(-1, 2)
                let offsety = random.nextInt(-1, 2)
                let world = entity.level; // 获取实体所在的世界
                let x = entity.x + offsetx; // 实体 X 坐标
                let y = entity.y + 1; // 实体 Y 坐标上方 1 格
                let z = entity.z + offsety; // 实体 Z 坐标
 
                world.runCommandSilent(`/summon minecraft:item ${x} ${y} ${z} {Item:{id:"ctnhcore:animal_excreta",Count:1b}}`);
                world.runCommandSilent(`/effect give @s minecraft:nausea 10 1`);
                world.runCommandSilent(`/effect give @e[type=${entity.type}] minecraft:slowness 5 3`);
            }
        }
    }
});