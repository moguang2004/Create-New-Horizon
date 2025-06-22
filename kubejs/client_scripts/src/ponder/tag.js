Ponder.tags((event) => {
    event.createTag(
      "kubejs:ctnhponder", // 你设定的 PonderTag 的 id, 必须小写
      "create:wrench", // 你设定的 PonderTag 的图标
      "CTNH Ponder", // 你设定的 PonderTag 的名称
      "关于一些整合包内多方块的思索。", // 你设定的 PonderTag 的介绍
      ["ctnhcore:meadow", "gtnn:neutron_activator", "mythicbotany:central_rune_holder", "gtceu:coke_oven", "gtceu:assembly_line"] // **可选参数** 你设定的 PonderTag 的关联词条, 只有一个时也能不用 [ ]
    )
  })