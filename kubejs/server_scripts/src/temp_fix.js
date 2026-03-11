ServerEvents.recipes(event => {
    // ad_astra: 疑似会抢走部分 gtceu: 生成的块锭粒转换的配方，然后 ad_astra: 被全部删掉导致缺了这九条配方。由于幸运方块不想调这个问题，我拼尽全力调不出问题，只好额外补上这九个配方。
    event.shapeless('9x gtceu:desh_ingot', 'gtceu:desh_block')
    event.shapeless('9x gtceu:desh_nugget', 'gtceu:desh_ingot')
    event.shapeless('9x gtceu:ostrum_ingot', 'gtceu:ostrum_block')
    event.shapeless('9x gtceu:ostrum_nugget', 'gtceu:ostrum_ingot')
    event.shapeless('9x gtceu:calorite_ingot', 'gtceu:calorite_block')
    event.shapeless('9x gtceu:calorite_nugget', 'gtceu:calorite_ingot')
    event.shapeless('9x gtceu:steel_ingot', 'gtceu:steel_block')
    event.shapeless('9x gtceu:steel_nugget', 'gtceu:steel_ingot')
    event.shaped(Item.of("gtceu:steel_block"), [
        "AAA",
        "AAA",
        "AAA"
    ], {
        A: "gtceu:steel_ingot"
    })
})
