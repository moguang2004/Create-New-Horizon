Ponder.tags((event) => {
  event.createTag(
    "kubejs:ctnhponder", // 你设定的 PonderTag 的 id, 必须小写
    "create:wrench", // 你设定的 PonderTag 的图标
    "CTNH Ponder", // 你设定的 PonderTag 的名称
    "部分CTNH中工业/魔法多方块的思索。", // 你设定的 PonderTag 的介绍
    [
      "gtceu:assembly_line", 
      "gtnn:neutron_activator", 
      "mythicbotany:central_rune_holder", 
      "gtceu:coke_oven"
    ] // **可选参数** 你设定的 PonderTag 的关联词条, 只有一个时也能不用 [ ]
  )
})

Ponder.tags((event) => {
  event.createTag(
    "kubejs:kinetic_input", // 你设定的 PonderTag 的 id, 必须小写
    "ctpp:hv_kinetic_input_box", // 你设定的 PonderTag 的图标
    "应力仓", // 你设定的 PonderTag 的名称
    "关于CTPP中应力仓的思索。", // 你设定的 PonderTag 的介绍
    [
      "ctpp:lv_kinetic_input_box", 
      "ctpp:mv_kinetic_input_box", 
      "ctpp:hv_kinetic_input_box", 
      "ctpp:ev_kinetic_input_box", 
      "ctpp:iv_kinetic_input_box", 
      "ctpp:luv_kinetic_input_box", 
      "ctpp:zpm_kinetic_input_box",
      "ctpp:lv_kinetic_output_box", 
      "ctpp:mv_kinetic_output_box", 
      "ctpp:hv_kinetic_output_box", 
      "ctpp:ev_kinetic_output_box", 
      "ctpp:iv_kinetic_output_box", 
      "ctpp:luv_kinetic_output_box", 
      "ctpp:zpm_kinetic_output_box"
    ] // **可选参数** 你设定的 PonderTag 的关联词条, 只有一个时也能不用 [ ]
  )
})

Ponder.tags((event) => {
  event.createTag(
    "kubejs:mechanical_multiblock", // 你设定的 PonderTag 的 id, 必须小写
    "ctnhcore:mechanical_pressor", // 你设定的 PonderTag 的图标
    "机械多方块机器", // 你设定的 PonderTag 的名称
    "CTNH中应力多方块机器的思索。", // 你设定的 PonderTag 的介绍
    [
      "ctnhcore:meadow", 
      "ctpp:smashing_factory",
      "ctpp:windmill_control_center",
      "ctnhcore:big_dam", 
      "ctnhcore:mechanical_pressor", 
      "ctnhcore:mechanical_mixer", 
      "ctnhcore:mechanical_centrifuge", 
      "ctnhcore:mechanical_sifter", 
      "ctnhcore:mechanical_extractor", 
      "ctnhcore:mechanical_lathe", 
      "ctnhcore:mechanical_laser"
    ] // **可选参数** 你设定的 PonderTag 的关联词条, 只有一个时也能不用 [ ]
  )
})