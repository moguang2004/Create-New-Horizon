ServerEvents.recipes(event => {
    event.remove({mod:'immersive_aircraft'})//
    event.shaped("1x immersive_aircraft:hull", [
		'DQD',
		'SWA',
		'DQD'
	], {
		D: '#minecraft:logs',
		W: 'kubejs:basic_mechanism',
		S:'#forge:tools/screwdrivers',
		A:'#forge:tools/hammers',
		Q:'gtceu:andesite_alloy_plate'
    });
    event.shaped("1x immersive_aircraft:propeller", [
		'SDA',
		'DWD',
		' D '
	], {
		D: 'gtceu:andesite_alloy_plate',
		W: 'kubejs:basic_mechanism',
		S:'#forge:tools/screwdrivers',
		A:'#forge:tools/hammers'
    });
	event.shaped("1x immersive_aircraft:sail", [
		'DDW',
		'DDA',
		'DDW'
	], {
		D: 'minecraft:leather',
		W: 'minecraft:string',
		A:'#forge:tools/wire_cutters'
    });
	event.shaped("1x immersive_aircraft:gyrodyne", [
		'SAE',
		'QWD',
		'ZAX'
	], {
		D: 'immersive_aircraft:hull',
		W: 'immersive_aircraft:propeller',
		S: '#forge:tools/files',
		A: 'immersive_aircraft:sail',
		Q: 'create:mechanical_bearing',
		E: '#forge:tools/hammers',
		Z: '#forge:tools/screwdrivers',
		X: '#forge:tools/wrenches'
    });
	event.shaped("1x immersive_aircraft:sturdy_pipes", [
		'SAW',
		'DDD',
		'WQE'
	], {
		D: 'create:fluid_pipe',
		W: '#forge:plates/andesite_alloy',
		S: '#forge:tools/mallets',
		A: '#forge:tools/hammers',
		Q: '#forge:tools/files',
		E: '#forge:tools/wrenches'
    });
	event.shaped("1x immersive_aircraft:boiler", [
		'DDD',
		'DAD',
		'DWD'
	], {
		D: 'gtceu:bronze_plate',
		W: 'gtceu:bronze_firebox_casing',
		A: '#forge:tools/wrenches'
    });
	event.shaped("1x immersive_aircraft:enhanced_propeller", [
		'SAE',
		'AWA',
		'ZAX'
	], {
		W: 'immersive_aircraft:propeller',
		S: '#forge:tools/files',
		A: 'gtceu:brass_plate',
		E: '#forge:tools/hammers',
		Z: '#forge:tools/screwdrivers',
		X: '#forge:tools/wrenches'
    });
	event.shaped("1x immersive_aircraft:gyroscope", [
		'AWD',
		'QSE',
		' X '
	], {
		A:'#forge:tools/hammers',
		W:'#forge:tools/wrenches',
		D:'#forge:tools/screwdrivers',
		Q:'create:powered_latch',
		S:'minecraft:compass',
		E:'create:powered_toggle_latch',
		X:'minecraft:comparator'
    });
	event.shaped("1x immersive_aircraft:industrial_gears", [
		'AWD',
		'QS ',
		'   '
	], {
		A:'#forge:tools/files',
		W:'gtceu:small_copper_gear',
		D:'#forge:tools/wrenches',
		Q:'gtceu:small_iron_gear',
		S:'#forge:tools/hammers'
    });
	event.shaped("1x immersive_aircraft:heavy_crossbow", [
		'AWD',
		'QSE',
		'AZD'
	], {
		A:'gtceu:iron_plate',
		W:'#forge:tools/hammers',
		D:'#minecraft:logs',
		Q:'#forge:tools/files',
		S:'minecraft:crossbow',
		E:'minecraft:tripwire_hook',
		Z:'#forge:tools/screwdrivers'
    });
	event.shaped("1x immersive_aircraft:steel_boiler", [
		'DDD',
		'SAS',
		'DWD'
	], {
		D: 'gtceu:steel_plate',
		W: 'gtceu:steel_firebox_casing',
		A: '#forge:tools/wrenches',
		S:'immersive_aircraft:boiler'
    });
	event.shaped("1x immersive_aircraft:bomb_bay",[
		'QDW',
		'DAD',
		'EDS'
	],{
		Q:'#forge:tools/hammers',
		W:'#forge:tools/files',
		E:'#forge:tools/wrenches',
		A:'minecraft:tnt',
		S:'gtceu:steel_rod',
		D:'gtceu:steel_plate'
	})
	event.shaped("1x immersive_aircraft:improved_landing_gear",[
		'QEW',
		'AWW',
		'SAD'
	],{
		Q:'#forge:tools/hammers',
		W:'gtceu:brass_rod',
		E:'#forge:tools/wrenches',
		A:'gtceu:steel_screw',
		S:'gtceu:steel_ring',
		D:'#forge:tools/screwdrivers'
	})
});