StartupEvents.registry("item", event => {
    event.create("ark_of_homo", "pickaxe")
        .speedBaseline(100.0)
        .tier(9)
        .attackDamageBaseline(1597.0)
        .maxDamage(114514)
        .displayName("§c鸿§e蒙§9方§a舟")
        .rarity('rare')
        .glow(true)

    .tooltip("§m你的旅程的物理的顶点，拥有着能使homo分崩离析的力量§r\n§c左键进行一次五连斩，斩击以掷出剑刃结束。掷出的剑刃会跟随你的光标。在剑刃掷出时松开左键会释放爆炸剪击\n§r§e右键用剑刃向前方剪出剑刃。击中敌人时会进行招架，并使你短暂无敌你也可以用剑刃格挡弹幕，并短暂使其伤害造成的伤害减少160点。格挡后会获得15层充能，充能会强化普通攻击\n§9当处于强化状态时，按住上并点击右键会引起时空之中的大撕裂，并一次性释放所有充能。若释放的充能超过5层，保持按住上键将允许你冲过撕裂§r\n---------------\n以上均没有实现\n§a这里是工业包，所以其实他根本就是一把普通的镐子§r\n哈哈\nHave Fun!(NOT)")
})