ServerEvents.recipes(event => {
    let transitional = 'minecraft:polished_blackstone_slab'//中间产物
    event.recipes.create.sequenced_assembly([
      'immersive_aircraft:engine'
    ], 'minecraft:polished_blackstone_slab', [
      event.recipes.createDeploying(transitional, [transitional, 'minecraft:piston']),
      event.recipes.createDeploying(transitional, [transitional, 'minecraft:piston']),
      event.recipes.createDeploying(transitional, [transitional, 'immersive_aircraft:boiler']),
      event.recipes.createDeploying(transitional, [transitional, 'gtceu:steel_plate']),
      event.recipes.createPressing(transitional,[transitional])
    ]).transitionalItem(transitional)
      .loops(1)
  })
ServerEvents.recipes(event => {
    let transitional = 'immersive_aircraft:hull'
    event.recipes.create.sequenced_assembly([
      'immersive_aircraft:hull_reinforcement'
    ], 'immersive_aircraft:hull', [
      event.recipes.createDeploying(transitional, [transitional, 'gtceu:brass_plate']),
      event.recipes.createDeploying(transitional, [transitional, 'gtceu:brass_screw']),
      event.recipes.createPressing(transitional,[transitional])
    ]).transitionalItem(transitional)
      .loops(3)
  })
ServerEvents.recipes(event => {
    let transitional = 'immersive_aircraft:engine'
    event.recipes.create.sequenced_assembly([
      'immersive_aircraft:eco_engine'
    ], 'immersive_aircraft:engine', [
      event.recipes.createDeploying(transitional, [transitional, 'gtceu:double_gold_plate']),
      event.recipes.createDeploying(transitional, [transitional, 'minecraft:brick']),
      event.recipes.createDeploying(transitional, [transitional, 'create:precision_mechanism']),
      event.recipes.createPressing(transitional,[transitional])
    ]).transitionalItem(transitional)
      .loops(1)
   })
ServerEvents.recipes(event => {
    let transitional = 'immersive_aircraft:engine'
    event.recipes.create.sequenced_assembly([
      'immersive_aircraft:nether_engine'
    ], 'immersive_aircraft:engine', [
      event.recipes.createDeploying(transitional, [transitional, 'minecraft:blaze_rod']),
      event.recipes.createDeploying(transitional, [transitional, 'minecraft:netherite_ingot']),
      event.recipes.createDeploying(transitional, [transitional, 'create:blaze_burner']),
      event.recipes.createDeploying(transitional, [transitional, 'kubejs:steel_mechanism']),
      event.recipes.createPressing(transitional,[transitional])
    ]).transitionalItem(transitional)
      .loops(1)
   })
ServerEvents.recipes(event => {
    let transitional = 'gtceu:double_copper_plate'
    event.recipes.create.sequenced_assembly([
      'immersive_aircraft:rotary_cannon'
    ], 'gtceu:double_copper_plate', [
      event.recipes.createDeploying(transitional, [transitional, 'immersive_aircraft:industrial_gears']),
      event.recipes.createDeploying(transitional, [transitional, 'minecraft:dispenser']),
      event.recipes.createDeploying(transitional, [transitional, 'create:precision_mechanism']),
      event.recipes.createDeploying(transitional, [transitional, 'gtceu:copper_plate']),
      event.recipes.createPressing(transitional,[transitional])
    ]).transitionalItem(transitional)
      .loops(1)
   })
ServerEvents.recipes(event => {
    let transitional = 'gtceu:double_iron_plate'
    event.recipes.create.sequenced_assembly([
      'immersive_aircraft:telescope'
    ], 'gtceu:double_iron_plate', [
      event.recipes.createDeploying(transitional, [transitional, 'immersive_aircraft:industrial_gears']),
      event.recipes.createDeploying(transitional, [transitional, 'create:precision_mechanism']),
      event.recipes.createDeploying(transitional, [transitional, 'minecraft:glass']),
      event.recipes.createPressing(transitional,[transitional])
    ]).transitionalItem(transitional)
      .loops(1)
   })
ServerEvents.recipes(event =>{
	event.recipes.create.mechanical_crafting('immersive_aircraft:quadrocopter', [
		"QAQ",
		"SWS",
        "SAS",
		"QEQ"
	],
		{
			Q:  'immersive_aircraft:enhanced_propeller',
			W:	'immersive_aircraft:engine',
			E:  'create:precision_mechanism',
            A: 'immersive_aircraft:hull_reinforcement',
            S:'immersive_aircraft:industrial_gears'
		}
	)
    event.recipes.create.mechanical_crafting('immersive_aircraft:airship', [
		" QDQ ",
        " SWS ",
		"A E A",
		"AAAAA"
	],
		{
			Q:  'immersive_aircraft:sail',
			W:	'immersive_aircraft:engine',
			A:  'immersive_aircraft:hull',
            D:  'immersive_aircraft:enhanced_propeller',
            S:  'immersive_aircraft:propeller',
            E:  'create:precision_mechanism'
		}
	)
    event.recipes.create.mechanical_crafting('immersive_aircraft:cargo_airship', [
		" WQW ",
        " DWD ",
		"SEAES",
		"SERES"
	],
		{
            A:'immersive_aircraft:airship',
            S:'minecraft:chest',
            D:'immersive_aircraft:enhanced_propeller',
            Q:'immersive_aircraft:propeller',
            W:'immersive_aircraft:sail',
            E:'immersive_aircraft:hull_reinforcement',
            R:'immersive_aircraft:eco_engine'
		}
	)
    event.recipes.create.mechanical_crafting('immersive_aircraft:warship', [
		"ABCBK",
        "AFEFK",
		"AGHGK",
		"JJIJJ",
        "D   K"
	],
		{
            A:'gtceu:steel_plate',
            B:'immersive_aircraft:sail',
            C:'immersive_aircraft:enhanced_propeller',
            D:'immersive_aircraft:telescope',
            E:'immersive_aircraft:cargo_airship',
            F:'immersive_aircraft:nether_engine',
            G:'immersive_aircraft:steel_boiler',
            H:'immersive_aircraft:industrial_gears',
            I:'kubejs:steel_mechanism',
            J:'immersive_aircraft:hull_reinforcement',
            K:'immersive_aircraft:propeller'
		}
	)
    event.recipes.create.mechanical_crafting('immersive_aircraft:biplane', [
		"AABAA",
        " DCD ",
		" DED ",
		" DFD ",
        "  G  "
	],
		{
            A:'immersive_aircraft:hull_reinforcement',
            B:'immersive_aircraft:propeller',
            C:'immersive_aircraft:industrial_gears',
            D:'immersive_aircraft:hull',
            E:'immersive_aircraft:steel_boiler',
            F:'immersive_aircraft:engine',
            G:'immersive_aircraft:enhanced_propeller',
		}
	)
})
