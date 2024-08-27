ServerEvents.recipes(event => {
    let remove = ['sophisticatedbackpacks:void_upgrade']
    remove.forEach(r => {
        event.remove({ output: r })
    })
    event.shaped(
        Item.of('sophisticatedbackpacks:void_upgrade', 1), [
        " A ",
        "BCD",
        " E "
    ], {
        A: 'functionalstorage:void_upgrade',
        B: 'minecraft:dispenser',
        C: 'sophisticatedbackpacks:upgrade_base',
        D: 'minecraft:dropper',
        E: 'sophisticatedbackpacks:filter_upgrade'
    })
})
