GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
    event.create('twilightforest_layer')
        .targets('#minecraft:stone_ore_replaceables') // [*] 
        .dimensions('twilightforest:twilight_forest') // [*]
    event.create('aether')
        .targets('aether:holystone','aether:mossy_holystone','aether:icestone')
        .dimensions('aether:the_aether') 
})
