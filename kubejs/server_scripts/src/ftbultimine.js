ServerEvents.tags('item', event => {
    GTMaterialRegistry.getRegisteredMaterials().forEach(id => {
      event.add('ftbultimine:excluded_tools', [`gtceu:${id.name}_mining_hammer`])
    })
  })
ServerEvents.tags('block', event => {
  GTMaterialRegistry.getRegisteredMaterials().forEach(id => {
    event.add('ftbultimine:excluded_blocks', 
    [`gtceu:andesite_${id.name}_ore`,
            `gtceu:diorite_${id.name}_ore`, 
            `gtceu:deepslate_${id.name}_ore`, 
            `gtceu:${id.name}_ore`, 
            `gtceu:granite_${id.name}_ore`, 
            `gtceu:netherrack_${id.name}_ore`, 
            `gtceu:endstone_${id.name}_ore`,
            `gtceu:moon_${id.name}_ore`,
            `gtceu:basalt_${id.name}_ore`,
            `gtceu:venus_${id.name}_ore`])
  })
})