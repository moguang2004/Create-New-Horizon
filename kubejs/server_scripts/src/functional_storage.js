ServerEvents.recipes(event =>{
    event.replaceInput({id:'functionalstorage:fluid_2'},'minecraft:bucket','enderio:fluid_tank')
    event.replaceInput({id:'functionalstorage:fluid_2'},'#minecraft:planks','minecraft:smooth_stone')
    event.replaceInput({id:'functionalstorage:fluid_4'},'minecraft:bucket','enderio:fluid_tank')
    event.replaceInput({id:'functionalstorage:fluid_4'},'#minecraft:planks','minecraft:smooth_stone')
    event.shaped(
        Item.of("functionalstorage:fluid_1", 1), [
        "AAA",
        " B ",
        "AAA"
    ], {
        A: "minecraft:smooth_stone",
        B: "enderio:fluid_tank"
    }).id('functionalstorage:fluid_1')
    event.shaped(
        Item.of("functionalstorage:storage_controller", 1), [
        "AAA",
        "BCB",
        "DED"
    ], {
        A: "minecraft:smooth_stone",
        B: "gtceu:double_steel_plate",
        C: "gtceu:exquisite_emerald_gem",
        D: "gtceu:steel_plate",
        E: "minecraft:comparator"
    })
    event.shaped(
        Item.of("functionalstorage:copper_upgrade", 1), [
        "ABA",
        "BCB",
        "DED"
    ], {
        A: "gtceu:copper_plate",
        B: "gtceu:bronze_plate",
        C: "functionalstorage:fluid_1",
        D: "minecraft:copper_block",
        E: "#functionalstorage:drawer"
    })
    event.shaped(
        Item.of("functionalstorage:gold_upgrade", 1), [
        "ABA",
        "CDC",
        "EFE"
    ], {
        A: "gtceu:electrum_screw",
        B: "functionalstorage:fluid_1",
        C: "gtceu:double_electrum_plate",
        D: "functionalstorage:copper_upgrade",
        E: "gtceu:electrum_rod",
        F: "#functionalstorage:drawer"
    })
    event.recipes.gtceu.assembler('diamond_upgrade')
    .itemInputs(['gtceu:hv_super_tank', 'gtceu:hv_super_chest', '2x gtceu:diamond_plate', '2x gtceu:diamond_rod', 'functionalstorage:gold_upgrade'])
    .itemOutputs('functionalstorage:diamond_upgrade')
    .EUt(480)
    .duration(100)

    event.recipes.gtceu.assembly_line('netherite_upgrade')
    .itemInputs('functionalstorage:diamond_upgrade','gtceu:luv_quantum_tank','gtceu:luv_quantum_chest')
    .inputFluids(Fluid.of('gtceu:netherite',576))
    .itemOutputs('functionalstorage:netherite_upgrade')
    .EUt(GTValues.VA[GTValues.LuV])
    .duration(100)
    event.shapeless('functionalstorage:framed_storage_controller','functionalstorage:storage_controller')
    
    event.remove({id:'functionalstorage:storage_controller'})
    event.remove({id:'functionalstorage:framed_storage_controller'})
    event.remove({id:'functionalstorage:copper_upgrade'})
    event.remove({id:'functionalstorage:gold_upgrade'})
    event.remove({id:'functionalstorage:diamond_upgrade'})
    event.remove({id:'functionalstorage:netherite_upgrade'})
})