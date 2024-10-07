StartupEvents.registry('attribute', event => {
    event.createCustom('kubejs:pressure_defense', () => {
        return new $RangedAttribute('kubejs.attribute.pressure_defense', 0, 0, 10).setSyncable(true)
    })
})

ForgeModEvents.onEvent("net.minecraftforge.event.entity.EntityAttributeModificationEvent", event => {
    event.add("player", 'kubejs:pressure_defense')
})
