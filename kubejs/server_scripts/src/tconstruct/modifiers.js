//通便
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
            // 检查NBT中是否包含 "kubejs:add_drop"
            if (matchModifiers(modifiers, "gaping")) {
                let random = Utils.getRandom();
                let offsetx = random.nextInt(-1, 2)
                let offsety = random.nextInt(-1, 2)
                let world = entity.level; // 获取实体所在的世界
                let x = entity.x + offsetx; // 实体 X 坐标
                let y = entity.y + 1; // 实体 Y 坐标上方 1 格
                let z = entity.z + offsety; // 实体 Z 坐标
                let lvl = getModifierLevel(modifiers, "gaping");
                let chance = lvl * 10; // 概率为等级*10
                if (Utils.getRandom().nextInt(100) < chance) { // 以chance%的概率执行
                    world.runCommandSilent(`/summon minecraft:item ${x} ${y} ${z} {Item:{id:"ctnhcore:animal_excreta",Count:1b}}`);
                    world.runCommandSilent(`/effect give @s minecraft:nausea 10 1`);
                    world.runCommandSilent(`/effect give @e[type=${entity.type}] minecraft:slowness 5 3`);
                }
                
            }
            
        }
    }
})
//护盾
//初始化
PlayerEvents.loggedIn(event => {
    let player = event.player;
    player.persistentData.shieldcooldownTicks = 120
});
PlayerEvents.tick(event => {
    let player = event.player;
    // 如果玩家有冷却时间，则递减
    if (player.persistentData.shieldcooldownTicks > 0) {
        player.persistentData.shieldcooldownTicks--;
    }
});
EntityEvents.hurt((event) => {
    let entity = event.entity; // 受伤实体
    // 检查受伤实体是否为玩家
    if (entity && entity.isPlayer()) {
        let player = entity;
        let handSlots = player.getHandSlots(); // 获取玩家手中的物品槽位（主手和副手）
        let mainHandItem = null;

        // 获取主手物品（通常是第一个槽位）
        let iterator = handSlots.iterator();
        if (iterator.hasNext())
            mainHandItem = iterator.next(); // 主手物品是第一个槽位

        if (mainHandItem && mainHandItem.hasTag('tconstruct:modifiable')) { // 检查主手物品是否为匠魂工具
            let modifiers = mainHandItem.getNbt().getAsString(); // 获取工具的NBT
            if (matchModifiers(modifiers, "fortification")) {
                let lvl = getModifierLevel(modifiers, "fortification");
                let world = player.level; // 获取实体所在的世界
                if (player.persistentData.shieldcooldownTicks <= 0) {
                    world.runCommandSilent(`/twilightforest shield @s set ${lvl}`);
                    player.persistentData.shieldcooldownTicks = 100 * (1 - 0.05 * lvl);
                }
            }
        }
    }
})
