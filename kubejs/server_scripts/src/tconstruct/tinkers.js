//ServerEvents.recipes(event => {
//    let fluidmaterials = ['precious_alloy', 'tin', 'silver', 'zinc', 'nickel', 'lead', 'beryllium',
//                         'molybdenum', 'brass', 'gold', 'iron', 'bronze', 'copper', 'cobalt', 'manganese', 'slag']
//    fluidmaterials.forEach(fluidmaterial => {
//        tconstruct_casting_all(event, fluidmaterial)
//    })//批量注册匠魂浇筑配方
//
//})
ServerEvents.tags('minecraft:fluid', event => {
    // 标签id，流体id
	let fluidmaterials = ['precious_alloy', 'tin', 'silver', 'zinc', 'nickel', 'lead', 'beryllium',
                         'molybdenum', 'brass', 'gold', 'iron', 'bronze', 'copper', 'cobalt', 'manganese', 'slag']
	fluidmaterials.forEach(fluidmaterial => {
		event.add(`forge:molten_${fluidmaterial}`, `gtceu:${fluidmaterial}`)
	})
})
//浇筑
ServerEvents.recipes(event => {
    event.recipes.tconstruct.casting_table(
		'gtceu:andesite_alloy_ingot', 
		Fluid.of('gtceu:andesite_alloy', 144), 
		'createmetallurgy:graphite_ingot_mold', 
		false, 90
	)

    event.recipes.tconstruct.casting_table(
		'gtceu:andesite_alloy_block', 
		Fluid.of('gtceu:andesite_alloy', 1296), 
		"kubejs:graphite_block_mold", 
		false, 120
	)

	event.recipes.tconstruct.casting_table(
		'createmetallurgy:foundry_unit',
		Fluid.of('gtceu:wrought_iron', 288), 
		'createdieselgenerators:distillation_controller', 
		false, 90
	)

	event.recipes.tconstruct.casting_table(
		'gtceu:rubber_ingot', 
		Fluid.of('gtceu:rubber', 144), 
		'createmetallurgy:graphite_ingot_mold', 
		false, 90
	)

    event.recipes.tconstruct.casting_table(
		'gtceu:rubber_block', 
		Fluid.of('gtceu:rubber', 1296),
		"kubejs:graphite_block_mold", 
		false, 120
	)

	event.recipes.tconstruct.casting_table(
		'minecraft:glass', 
		Fluid.of('tconstruct:molten_glass', 1000),
		"kubejs:graphite_block_mold", 
		false, 120
	)
})
//合金
ServerEvents.recipes(event => {
	
})
//融化
ServerEvents.recipes(event => {
	event.recipes.tconstruct.melting(
		Fluid.of("tconstruct:molten_clay", 125),
		"gtceu:fireclay_dust",
		1000,
		200
	)
	event.recipes.tconstruct.melting(
		Fluid.of('gtceu:rubber', 144),
		'kubejs:rubber_powder',
		400,
		90
	)
	event.recipes.tconstruct.melting(
		Fluid.of('tconstruct:molten_glass', 500),
		'gtceu:glass_dust',
		800,
		90
	)
})
//合成
ServerEvents.recipes(event => {
    for (let rcp of [
        ['tconstruct:seared_fuel_tank', [" BAB "," BCB "," BCB "," BBB "], {C: "tconstruct:seared_glass"}],
        ['tconstruct:seared_melter', ["BBBBB","BAAAB","BACAB","BADAB","BBBBB"], {C: "create:precision_mechanism", D: "createmetallurgy:foundry_basin"}],
		['tconstruct:smeltery_controller', ["BBBBB","BEEEB","BECEB","BADAB","BBBBB"], {C: "tconstruct:seared_melter", D: "kubejs:steel_mechanism", E: "gtceu:rubber_ingot"}]
    ])
    {
        let result = rcp[0],
            recipe = rcp[1],
            target = {A: "tconstruct:seared_brick", B: "tconstruct:seared_bricks"}
        Object.assign(target, rcp[2]);
        event.recipes.create.mechanical_crafting(result, recipe, target);
    }
	event.recipes.create.mixing('8x kubejs:heatproof_smelting_brick_dust', ['4x gtceu:fireclay_dust', '4x kubejs:grout_dust'])//耐热冶炼砖粉
	event.smelting("tconstruct:seared_brick", "kubejs:heatproof_smelting_brick_dust")//焦黑砖
	event.shapeless(Item.of('tconstruct:puny_smelting', 1), ['minecraft:book', 'kubejs:grout_dust'])
	//砖泥粉
	event.shaped(Item.of('kubejs:grout_dust', 2), [
		'CB ',
		'A  ',
		'   '
		],
    	{
		A: '#forge:gravel',
		B: '#forge:sand',
		C: 'gtceu:clay_dust'
	})
	event.shaped(Item.of('kubejs:grout_dust', 8), [
		'CBB',
		'BBA',
		'AAA'
		],
    	{
		A: '#forge:gravel',
		B: '#forge:sand',
		C: 'gtceu:clay_dust'
	})
})