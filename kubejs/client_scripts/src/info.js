JEIEvents.information(event =>{
    event.addItem('gtceu:hv_emitter', Text.translate('ctnh.blood_magic_gregtech_hv'))
    event.addItem('kubejs:stone_process_catalyst',Text.translate('ctnh.stone_process_catalyst'))
    event.addItem('kubejs:metallurgical_catalyst',Text.translate('ctnh.metallurgical_catalyst'))
    event.addItem('kubejs:bauxite_process_catalyst',Text.translate('ctnh.bauxite_process_catalyst'))
    event.addItem('kubejs:platinum_metal_catalyst_shard1',Text.translate('ctnh.platinum_metal_catalyst_shard1'))
    event.addItem('kubejs:platinum_metal_catalyst_shard2',Text.translate('ctnh.platinum_metal_catalyst_shard2'))
    event.addFluid(Fluid.of('gtceu:mana'),Text.translate('ctnh.mana_generation'))
})