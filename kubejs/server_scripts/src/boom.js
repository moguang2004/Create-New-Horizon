//1
ServerEvents.recipes(event => {
    event.shaped(
        Item.of('enderio:basic_energy_conduit', 2), [
        "DED",
        "ACA",
        "BAB"
      ], {
        A: 'gtceu:iv_conveyor_module',
        B: 'gtceu:crystal_processor',
        C: 'gtceu:iv_machine_hull',
        D: 'gtceu:iv_electric_pump',
        E: 'gtceu:big_dam'
      })
})