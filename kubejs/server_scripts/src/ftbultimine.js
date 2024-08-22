//priority -10
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
            `gtceu:tuff_${id.name}_ore`,
            `gtceu:sand_${id.name}_ore`,
            `gtceu:red_sand_${id.name}_ore`,
            `gtceu:gravel_${id.name}_ore`,
            `gtceu:blackstone_${id.name}_ore`,
            `gtceu:red_granite_${id.name}_ore`, 
            `gtceu:marble_${id.name}_ore`, 
            `gtceu:netherrack_${id.name}_ore`, 
            `gtceu:endstone_${id.name}_ore`,
            `gtceu:moon_stone_${id.name}_ore`,
            `gtceu:venus_stone_${id.name}_ore`,
            `gtceu:mercury_stone_${id.name}_ore`,
            `gtceu:glacio_stone_${id.name}_ore`,
            `gtceu:holystone_${id.name}_ore`,
            `gtceu:mossy_holystone_${id.name}_ore`,
            `gtceu:icestone_${id.name}_ore`,
            `gtceu:livingrock_${id.name}_ore`,
            `gtceu:jupiter_stone_${id.name}_ore`,
            `gtceu:basalt_${id.name}_ore`,
            `gtceu:mars_stone_${id.name}_ore`])
  })
})