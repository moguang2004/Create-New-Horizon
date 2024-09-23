ServerEvents.recipes(event => {
    event.recipes.create.compacting('createmetallurgy:graphite_blank_mold', '2x gtceu:graphite_dust') // 石墨坯模
    Object.entries ({ // 三种铸模
        "createmetallurgy:graphite_ingot_mold" : ["B","A"],
        "createmetallurgy:graphite_plate_mold" : ["A","B"],
        "createmetallurgy:graphite_nugget_mold": ["B A"]
    }).forEach(([result, recipe]) => {
        event.shaped(Item.of(result, 1), recipe, {
            A: "#forge:tools/hammers",
            B: "createmetallurgy:graphite_blank_mold"
        })
    });

    event.recipes.create.mixing('4x createmetallurgy:refractory_mortar', 
                                ['2x gtceu:fireclay_dust', 'minecraft:sand', 'minecraft:gravel'])
    for (var rcp of [['createmetallurgy:foundry_basin', ["A   A","AB BA","ABCBA","ABBBA","AAAAA"], {C: "kubejs:steel_casing"}],
        ['createmetallurgy:foundry_lid', ["AA AA","ABCBA","ABBBA","A   A"], {C: "kubejs:basic_mechanism"}],
        ['createmetallurgy:glassed_foundry_lid', ["AA AA","DBCBD","ABBBA","A   A"], {C: "kubejs:basic_mechanism",D: "minecraft:glass"}]]) {
        var result = rcp[0],
            recipe = rcp[1],
            target = {A: "gtceu:andesite_alloy_plate", B: "createmetallurgy:refractory_mortar"}
        Object.assign(target, rcp[2]);
        event.recipes.create.mechanical_crafting(result, recipe, target);
    }
    
    // [['createmetallurgy:foundry_basin', ["A   A","AB BA","ABCBA","ABBBA","AAAAA"], {C: "kubejs:steel_casing"}],
    //  ['createmetallurgy:foundry_lid', ["AA AA","ABCBA","ABBBA","A   A"], {C: "kubejs:basic_mechanism"}],
    //  ['createmetallurgy:glassed_foundry_lid', ["AA AA","DBCBD","ABBBA","A   A"], {C: "kubejs:basic_mechanism",D: "minecraft:glass"}]]
    //  .forEach((rcp) => {
    //     // var result = rcp[0],
    //     //     recipe = rcp[1],
    //     //     target = {A: "gtceu:andesite_alloy_plate", B: "createmetallurgy:refractory_mortar"}
    //     // Object.assign(target, rcp[2]);
    //     // event.recipes.create.mechanical_crafting(result, recipe, target);
    // })
    // event.recipes.create.mechanical_crafting('createmetallurgy:foundry_basin', [
    //     "A   A",
    //     "AB BA",
    //     "ABCBA",
    //     "ABBBA",
    //     "AAAAA"
    // ], {
    //     A: "gtceu:andesite_alloy_plate",
    //     B: "createmetallurgy:refractory_mortar",
    //     C: "kubejs:steel_casing"
    // })
    // event.recipes.create.mechanical_crafting('createmetallurgy:foundry_lid', [
    //     "AA AA",
    //     "ABCBA",
    //     "ABBBA",
    //     "A   A"
    // ], {
    //     A: "gtceu:andesite_alloy_plate",
    //     B: "createmetallurgy:refractory_mortar",
    //     C: "kubejs:basic_mechanism"
    // })
    // event.recipes.create.mechanical_crafting('createmetallurgy:glassed_foundry_lid', [
    //     "AA AA",
    //     "DBCBD",
    //     "ABBBA",
    //     "A   A"
    // ], {
    //     A: "gtceu:andesite_alloy_plate",
    //     B: "createmetallurgy:refractory_mortar",
    //     C: "kubejs:basic_mechanism",
    //     D: "minecraft:glass"
    // })

    event.shaped(
        Item.of("createmetallurgy:casting_basin", 1), [
        "A A",
        "A A",
        "ABA"
    ], {
        A: "gtceu:andesite_alloy_plate",
        B: "gtceu:double_andesite_alloy_plate"
    })
    event.shaped(
        Item.of("createmetallurgy:casting_table", 1), [
        "ABA",
        "A A",
        "A A"
    ], {
        A: "gtceu:andesite_alloy_plate",
        B: "gtceu:double_andesite_alloy_plate"
    })
    event.shaped(
        Item.of("createmetallurgy:sturdy_whisk", 1), [
        " A ",
        "BCB",
        "DBD"
    ], {
        A: "create:shaft",
        B: "gtceu:obsidian_plate",
        C: "create:whisk",
        D: "gtceu:wrought_iron_plate"
    })
    event.shaped(
        Item.of("createmetallurgy:foundry_mixer", 1), [
        "ABA",
        "CDC",
        " E "
    ], {
        A: "create:precision_mechanism",
        B: "create:shaft",
        C: "create:copper_casing",
        D: "create:large_cogwheel",
        E: "createmetallurgy:sturdy_whisk"
    })
    event.shaped(
        Item.of("createmetallurgy:sandpaper_belt", 2), [
        "AAA",
        "AAA"
    ], {
        A: "#create:sandpaper"
    })
    event.shaped(
        Item.of("createmetallurgy:mechanical_belt_grinder", 1), [
        "AAA",
        "BCB",
        "DBD"
    ], {
        A: "createmetallurgy:sandpaper_belt",
        B: "create:andesite_casing",
        C: "kubejs:basic_mechanism",
        D: "create:shaft"
    })
    let materials = ['hematite', 'magnetite', 'precious_alloy', 'copper', 'diamond', 'tin', 'silver', 'vanadium_magnetite',
        'spodumene', 'rock_salt', 'salt', 'lepidolite', 'lazurite', 'lapis', 'sodalite', 'calcite', 'graphite', 'coal', 'zinc', 'gold',
        'cassiterite', 'chalcopyrite', 'pyrite', 'iron', 'yellow_limonite', 'malachite', 'oilsands', 'goethite', 'nether_quartz',
        'quartzite', 'opal', 'redstone', 'ruby', 'cinnabar', 'nickel', 'lead', 'pentlandite', 'realgar', 'yellow_garnet', 'red_garnet',
        'basaltic_mineral_sand', 'granitic_mineral_sand', 'beryllium', 'molybdenum', 'molybdenite', 'garnierite', 'pentlandite', 'cobaltite',
        'topaz', 'blue_topaz', 'sulfur', 'chalcocite', 'bornite', 'sphalerite', 'sulfur', 'saltpeter', 'diatomite', 'electrotine', 'alunite',
        'grossular', 'pyrolusite', 'tantalite', 'certus_quartz', 'barite','spessartine']
    let materials2 = ['nether_quartz', 'quartzite', 'coal', 'cassiterite', 'salt', 'rock_salt', 'lepidolite', 'blue_topaz', 'saltpeter', 'certus_quartz', 'emerald']
    let materials3 = ['alunite', 'grossular','spessartine']
    let materials4 = ['yellow_garnet', 'red_garnet']
    let materials6 = ['lazurite', 'lapis', 'sodalite']
    let materials5 = ['redstone', 'electrotine']
    let ingots = ['precious_alloy', 'tin', 'silver', 'zinc', 'nickel', 'lead', 'beryllium', 'molybdenum']
    let minecraftIngots = ['iron', 'copper', 'gold']
    let gems = ['salt', 'rock_salt', 'lazurite', 'ruby', 'cinnabar', 'opal', 'quartzite', 'realgar', 'topaz', 'blue_topaz', 'grossular','spessartine']
    let iron = ['hematite', 'magnetite', 'yellow_limonite', 'pyrite', 'goethite', 'basaltic_mineral_sand', 'granitic_mineral_sand']
    let copper = ['chalcopyrite', 'malachite', 'chalcocite', 'bornite']
    let zinc = ['sphalerite']
    let molybdenum = ['molybdenite']
    let nickel = ['garnierite', 'pentlandite']
    let cobalt = ['cobaltite']
    let manganese = ['pyrolusite']
    let fluidmaterials = ['precious_alloy', 'tin', 'silver', 'zinc', 'nickel', 'lead', 'beryllium', 'molybdenum','brass','gold','iron','bronze','copper','cobalt','manganese', 'slag']
    materials.forEach(material => {
        if (materials2.includes(material)) {
            event.recipes.create.crushing([`2x gtceu:crushed_${material}_ore`, Item.of(`gtceu:crushed_${material}_ore`).withChance(0.6)], `gtceu:raw_${material}`)
        }
        else if (materials3.includes(material)) {
            event.recipes.create.crushing([`3x gtceu:crushed_${material}_ore`, Item.of(`gtceu:crushed_${material}_ore`).withChance(0.9)], `gtceu:raw_${material}`)
        }
        else if (materials5.includes(material)) {
            event.recipes.create.crushing([`6x gtceu:crushed_${material}_ore`, Item.of(`gtceu:crushed_${material}_ore`).withChance(0.5)], `gtceu:raw_${material}`)
        }
        else if (materials6.includes(material)) {
            event.recipes.create.crushing([`7x gtceu:crushed_${material}_ore`, Item.of(`gtceu:crushed_${material}_ore`).withChance(0.8)], `gtceu:raw_${material}`)
        }
        else if (materials4.includes(material)) {
            event.recipes.create.crushing([`5x gtceu:crushed_${material}_ore`, Item.of(`gtceu:crushed_${material}_ore`).withChance(0.2)], `gtceu:raw_${material}`)
        }
        else if (material == 'iron' || material == 'copper' || material == 'gold') {
            event.recipes.create.crushing([`gtceu:crushed_${material}_ore`, Item.of(`gtceu:crushed_${material}_ore`).withChance(0.3)], `minecraft:raw_${material}`)
        }
        else {
            event.recipes.create.crushing([`gtceu:crushed_${material}_ore`, Item.of(`gtceu:crushed_${material}_ore`).withChance(0.3)], `gtceu:raw_${material}`)
        }
        event.recipes.create.crushing([`gtceu:impure_${material}_dust`, Item.of(`gtceu:impure_${material}_dust`).withChance(0.3)], `gtceu:crushed_${material}_ore`)
        event.recipes.create.splashing(`gtceu:purified_${material}_ore`, `gtceu:crushed_${material}_ore`)
        if (material != 'redstone') {
            event.recipes.create.splashing(`gtceu:${material}_dust`, `gtceu:impure_${material}_dust`)
        }
        else {
            event.recipes.create.splashing(Item.of(`minecraft:redstone`), `gtceu:impure_${material}_dust`)
        }
    })
    ingots.forEach(material => {
        event.recipes.create.splashing([`11x gtceu:${material}_nugget`, Item.of(`gtceu:${material}_nugget`, 2).withChance(0.4)], `gtceu:purified_${material}_ore`)
        event.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": `gtceu:crushed_${material}_ore`
                }
            ],
            "processingTime": 40,
            "results": [
                {
                    "fluid": `gtceu:${material}`,
                    "amount": 108
                },
                {
                    "fluid": "gtceu:slag",
                    "amount": 100
                }
            ],
            "heatRequirement": "superheated"
        })
        event.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": `gtceu:purified_${material}_ore`
                }
            ],
            "processingTime": 40,
            "results": [
                {
                    "fluid": `gtceu:${material}`,
                    "amount": 144
                }
            ],
            "heatRequirement": "superheated"
        })
        event.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": `gtceu:impure_${material}_dust`
                }
            ],
            "processingTime": 40,
            "results": [
                {
                    "fluid": `gtceu:${material}`,
                    "amount": 144
                },
                {
                    "fluid": "gtceu:slag",
                    "amount": 50
                }
            ],
            "heatRequirement": "superheated"
        })
        event.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": `gtceu:${material}_dust`
                }
            ],
            "processingTime": 40,
            "results": [
                {
                    "fluid": `gtceu:${material}`,
                    "amount": 144
                }
            ],
            "heatRequirement": "superheated"
        })
        event.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": `gtceu:${material}_ingot`
                }
            ],
            "processingTime": 80,
            "results": [
                {
                    "fluid": `gtceu:${material}`,
                    "amount": 144
                }
            ],
            "heatRequirement": "superheated"
        })
    })
    minecraftIngots.forEach(material => {
        if (material != 'copper') {
            event.recipes.create.splashing([`11x minecraft:${material}_nugget`, Item.of(`minecraft:${material}_nugget`, 2).withChance(0.4)], `gtceu:purified_${material}_ore`)
        }
        else{
            event.recipes.create.splashing([`11x gtceu:copper_nugget`, Item.of(`gtceu:copper_nugget`, 2).withChance(0.4)], `gtceu:purified_copper_ore`)
        }
        event.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": `gtceu:crushed_${material}_ore`
                }
            ],
            "processingTime": 40,
            "results": [
                {
                    "fluid": `gtceu:${material}`,
                    "amount": 108
                },
                {
                    "fluid": "gtceu:slag",
                    "amount": 100
                }
            ],
            "heatRequirement": "superheated"
        })
        event.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": `gtceu:purified_${material}_ore`
                }
            ],
            "processingTime": 40,
            "results": [
                {
                    "fluid": `gtceu:${material}`,
                    "amount": 144
                }
            ],
            "heatRequirement": "superheated"
        })
        event.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": `gtceu:impure_${material}_dust`
                }
            ],
            "processingTime": 40,
            "results": [
                {
                    "fluid": `gtceu:${material}`,
                    "amount": 144
                },
                {
                    "fluid": "gtceu:slag",
                    "amount": 50
                }
            ],
            "heatRequirement": "superheated"
        })
        event.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": `minecraft:${material}_ingot`
                }
            ],
            "processingTime": 80,
            "results": [
                {
                    "fluid": `gtceu:${material}`,
                    "amount": 144
                }
            ],
            "heatRequirement": "superheated"
        })
        event.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": `gtceu:${material}_dust`
                }
            ],
            "processingTime": 40,
            "results": [
                {
                    "fluid": `gtceu:${material}`,
                    "amount": 144
                }
            ],
            "heatRequirement": "superheated"
        })
    })
    gems.forEach(material => {
        event.recipes.create.splashing([Item.of(`gtceu:flawless_${material}_gem`).withChance(0.2), Item.of(`gtceu:${material}_gem`).withChance(0.4), Item.of(`gtceu:flawed_${material}_gem`).withChance(0.4)], `gtceu:purified_${material}_ore`)
    })
    event.recipes.create.splashing([Item.of(`gtceu:flawless_nether_quartz_gem`).withChance(0.2), Item.of(`minecraft:quartz`).withChance(0.4), Item.of(`gtceu:flawed_nether_quartz_gem`).withChance(0.4)], `gtceu:purified_nether_quartz_ore`)
    event.recipes.create.splashing([Item.of(`gtceu:flawless_diamond_gem`).withChance(0.2), Item.of(`minecraft:diamond`).withChance(0.4), Item.of(`gtceu:flawed_diamond_gem`).withChance(0.4)], `gtceu:purified_diamond_ore`)
    event.recipes.create.splashing([Item.of(`gtceu:flawless_coal_gem`).withChance(0.2), Item.of(`minecraft:coal`).withChance(0.4), Item.of(`gtceu:flawed_coal_gem`).withChance(0.4)], `gtceu:purified_coal_ore`)
    event.recipes.create.splashing([Item.of(`gtceu:flawless_lapis_gem`).withChance(0.2), Item.of(`minecraft:lapis_lazuli`).withChance(0.4), Item.of(`gtceu:flawed_lapis_gem`).withChance(0.4)], `gtceu:purified_lapis_ore`)
    event.recipes.create.splashing([Item.of(`gtceu:flawless_emerald_gem`).withChance(0.2), Item.of(`minecraft:emerald`).withChance(0.4), Item.of(`gtceu:flawed_emerald_gem`).withChance(0.4)], `gtceu:purified_emerald_ore`)
    event.recipes.create.splashing([Item.of(`gtceu:flawless_certus_quartz_gem`).withChance(0.2), Item.of(`ae2:certus_quartz_crystal`).withChance(0.4), Item.of(`gtceu:flawed_certus_quartz_gem`).withChance(0.4)], `gtceu:purified_certus_quartz_ore`)
    //Iron
    iron.forEach(material => {
        event.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": `gtceu:crushed_${material}_ore`
                }
            ],
            "processingTime": 40,
            "results": [
                {
                    "fluid": `gtceu:iron`,
                    "amount": 108
                },
                {
                    "fluid": "gtceu:slag",
                    "amount": 125
                }
            ],
            "heatRequirement": "superheated"
        })
        event.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": `gtceu:purified_${material}_ore`
                }
            ],
            "processingTime": 40,
            "results": [
                {
                    "fluid": `gtceu:iron`,
                    "amount": 144
                }
            ],
            "heatRequirement": "superheated"
        })
        event.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": `gtceu:impure_${material}_dust`
                }
            ],
            "processingTime": 40,
            "results": [
                {
                    "fluid": `gtceu:iron`,
                    "amount": 144
                },
                {
                    "fluid": "gtceu:slag",
                    "amount": 75
                }
            ],
            "heatRequirement": "superheated"
        })
        event.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": `gtceu:${material}_dust`
                }
            ],
            "processingTime": 40,
            "results": [
                {
                    "fluid": `gtceu:iron`,
                    "amount": 144
                }
            ],
            "heatRequirement": "superheated"
        })
    })
    //Copper
    copper.forEach(material => {
        event.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": `gtceu:crushed_${material}_ore`
                }
            ],
            "processingTime": 40,
            "results": [
                {
                    "fluid": `gtceu:copper`,
                    "amount": 108
                },
                {
                    "fluid": "gtceu:slag",
                    "amount": 125
                }
            ],
            "heatRequirement": "superheated"
        })
        event.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": `gtceu:purified_${material}_ore`
                }
            ],
            "processingTime": 40,
            "results": [
                {
                    "fluid": `gtceu:copper`,
                    "amount": 144
                }
            ],
            "heatRequirement": "superheated"
        })
        event.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": `gtceu:impure_${material}_dust`
                }
            ],
            "processingTime": 40,
            "results": [
                {
                    "fluid": `gtceu:copper`,
                    "amount": 144
                },
                {
                    "fluid": "gtceu:slag",
                    "amount": 75
                }
            ],
            "heatRequirement": "superheated"
        })
        event.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": `gtceu:${material}_dust`
                }
            ],
            "processingTime": 40,
            "results": [
                {
                    "fluid": `gtceu:copper`,
                    "amount": 144
                }
            ],
            "heatRequirement": "superheated"
        })
    })
    zinc.forEach(material => {
        event.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": `gtceu:crushed_${material}_ore`
                }
            ],
            "processingTime": 40,
            "results": [
                {
                    "fluid": `gtceu:zinc`,
                    "amount": 108
                },
                {
                    "fluid": "gtceu:slag",
                    "amount": 125
                }
            ],
            "heatRequirement": "superheated"
        })
        event.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": `gtceu:purified_${material}_ore`
                }
            ],
            "processingTime": 40,
            "results": [
                {
                    "fluid": `gtceu:zinc`,
                    "amount": 144
                }
            ],
            "heatRequirement": "superheated"
        })
        event.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": `gtceu:impure_${material}_dust`
                }
            ],
            "processingTime": 40,
            "results": [
                {
                    "fluid": `gtceu:zinc`,
                    "amount": 144
                },
                {
                    "fluid": "gtceu:slag",
                    "amount": 75
                }
            ],
            "heatRequirement": "superheated"
        })
        event.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": `gtceu:${material}_dust`
                }
            ],
            "processingTime": 40,
            "results": [
                {
                    "fluid": `gtceu:zinc`,
                    "amount": 144
                }
            ],
            "heatRequirement": "superheated"
        })
    })
    molybdenum.forEach(material => {
        event.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": `gtceu:crushed_${material}_ore`
                }
            ],
            "processingTime": 40,
            "results": [
                {
                    "fluid": `gtceu:molybdenum`,
                    "amount": 108
                },
                {
                    "fluid": "gtceu:slag",
                    "amount": 125
                }
            ],
            "heatRequirement": "superheated"
        })
        event.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": `gtceu:purified_${material}_ore`
                }
            ],
            "processingTime": 40,
            "results": [
                {
                    "fluid": `gtceu:molybdenum`,
                    "amount": 144
                }
            ],
            "heatRequirement": "superheated"
        })
        event.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": `gtceu:impure_${material}_dust`
                }
            ],
            "processingTime": 40,
            "results": [
                {
                    "fluid": `gtceu:molybdenum`,
                    "amount": 144
                },
                {
                    "fluid": "gtceu:slag",
                    "amount": 75
                }
            ],
            "heatRequirement": "superheated"
        })
        event.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": `gtceu:${material}_dust`
                }
            ],
            "processingTime": 40,
            "results": [
                {
                    "fluid": `gtceu:molybdenum`,
                    "amount": 144
                }
            ],
            "heatRequirement": "superheated"
        })
    })
    nickel.forEach(material => {
        event.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": `gtceu:crushed_${material}_ore`
                }
            ],
            "processingTime": 40,
            "results": [
                {
                    "fluid": `gtceu:nickel`,
                    "amount": 108
                },
                {
                    "fluid": "gtceu:slag",
                    "amount": 125
                }
            ],
            "heatRequirement": "superheated"
        })
        event.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": `gtceu:purified_${material}_ore`
                }
            ],
            "processingTime": 40,
            "results": [
                {
                    "fluid": `gtceu:nickel`,
                    "amount": 144
                }
            ],
            "heatRequirement": "superheated"
        })
        event.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": `gtceu:impure_${material}_dust`
                }
            ],
            "processingTime": 40,
            "results": [
                {
                    "fluid": `gtceu:nickel`,
                    "amount": 144
                },
                {
                    "fluid": "gtceu:slag",
                    "amount": 75
                }
            ],
            "heatRequirement": "superheated"
        })
        event.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": `gtceu:${material}_dust`
                }
            ],
            "processingTime": 40,
            "results": [
                {
                    "fluid": `gtceu:nickel`,
                    "amount": 144
                }
            ],
            "heatRequirement": "superheated"
        })
    })
    cobalt.forEach(material => {
        event.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": `gtceu:crushed_${material}_ore`
                }
            ],
            "processingTime": 40,
            "results": [
                {
                    "fluid": `gtceu:cobalt`,
                    "amount": 108
                },
                {
                    "fluid": "gtceu:slag",
                    "amount": 125
                }
            ],
            "heatRequirement": "superheated"
        })
        event.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": `gtceu:purified_${material}_ore`
                }
            ],
            "processingTime": 40,
            "results": [
                {
                    "fluid": `gtceu:cobalt`,
                    "amount": 144
                }
            ],
            "heatRequirement": "superheated"
        })
        event.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": `gtceu:impure_${material}_dust`
                }
            ],
            "processingTime": 40,
            "results": [
                {
                    "fluid": `gtceu:cobalt`,
                    "amount": 144
                },
                {
                    "fluid": "gtceu:slag",
                    "amount": 75
                }
            ],
            "heatRequirement": "superheated"
        })
        event.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": `gtceu:${material}_dust`
                }
            ],
            "processingTime": 40,
            "results": [
                {
                    "fluid": `gtceu:cobalt`,
                    "amount": 144
                }
            ],
            "heatRequirement": "superheated"
        })
    })
    manganese.forEach(material => {
        event.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": `gtceu:crushed_${material}_ore`
                }
            ],
            "processingTime": 40,
            "results": [
                {
                    "fluid": `gtceu:manganese`,
                    "amount": 108
                },
                {
                    "fluid": "gtceu:slag",
                    "amount": 125
                }
            ],
            "heatRequirement": "superheated"
        })
        event.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": `gtceu:purified_${material}_ore`
                }
            ],
            "processingTime": 40,
            "results": [
                {
                    "fluid": `gtceu:manganese`,
                    "amount": 144
                }
            ],
            "heatRequirement": "superheated"
        })
        event.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": `gtceu:impure_${material}_dust`
                }
            ],
            "processingTime": 40,
            "results": [
                {
                    "fluid": `gtceu:manganese`,
                    "amount": 144
                },
                {
                    "fluid": "gtceu:slag",
                    "amount": 75
                }
            ],
            "heatRequirement": "superheated"
        })
        event.custom({
            "type": "createmetallurgy:melting",
            "ingredients": [
                {
                    "item": `gtceu:${material}_dust`
                }
            ],
            "processingTime": 40,
            "results": [
                {
                    "fluid": `gtceu:manganese`,
                    "amount": 144
                }
            ],
            "heatRequirement": "superheated"
        })
    })
    event.custom({
        "type": "createmetallurgy:alloying",
        "ingredients": [
            {
                "fluid": "gtceu:copper",
                "amount": 432
            },
            {
                "fluid": "gtceu:zinc",
                "amount": 144
            }
        ],
        "processingTime": 200,
        "results": [
            {
                "fluid": "gtceu:brass",
                "amount": 576
            }
        ],
        "heatRequirement": "superheated"
    })
    event.custom({
        "type": "createmetallurgy:alloying",
        "ingredients": [
            {
                "fluid": "gtceu:copper",
                "amount": 432
            },
            {
                "fluid": "gtceu:tin",
                "amount": 144
            }
        ],
        "processingTime": 200,
        "results": [
            {
                "fluid": "gtceu:bronze",
                "amount": 576
            }
        ],
        "heatRequirement": "superheated"
    })
    event.custom({
        "type": "createmetallurgy:alloying",
        "ingredients": [
            {
                "fluid": "gtceu:bronze",
                "amount": 576
            },
            {
                "fluid": "gtceu:lead",
                "amount": 72
            }
        ],
        "processingTime": 400,
        "results": [
            {
                "fluid": "gtceu:potin",
                "amount": 648
            }
        ],
        "heatRequirement": "superheated"
    })
    event.custom({
        "type": "createmetallurgy:melting",
        "ingredients": [
            {
                "item": `gtceu:rubber_ingot`,
                "count": 1
            }
        ],
        "processingTime": 40,
        "results": [
            {
                "fluid": `gtceu:rubber`,
                "amount": 144
            }
        ],
        "heatRequirement": "superheated"
    })
    fluidmaterials.forEach(fluidmaterial =>{
        if(fluidmaterial == 'iron' || fluidmaterial == 'copper' || fluidmaterial == 'gold'){
            event.custom({
                "type": "createmetallurgy:casting_in_table",
                "ingredients": [
                {
                    "item": "createmetallurgy:graphite_ingot_mold"
                },
                {
                    "fluid": `gtceu:${fluidmaterial}`,
                    "amount": 144
                }
                ],
                "processingTime": 80,
                "mold_consumed": false,
                "result": {
                "item": `gtceu:${fluidmaterial}_ingot`
                }
            })
            event.custom({
                "type": "createmetallurgy:casting_in_table",
                "ingredients": [
                {
                    "item": "createmetallurgy:graphite_nugget_mold"
                },
                {
                    "fluid": `gtceu:${fluidmaterial}`,
                    "amount": 16
                }
                ],
                "processingTime": 40,
                "mold_consumed": false,
                "result": {
                "item": `gtceu:${fluidmaterial}_nugget`
                }
            })
            event.custom({
                "type": "createmetallurgy:casting_in_basin",
                "ingredients": [
                {
                    "fluid": `gtceu:${fluidmaterial}`,
                    "amount": 1296
                }
                ],
                "processingTime": 150,
                "mold_consumed": false,
                "result": {
                "item": `gtceu:${fluidmaterial}_block`
                }
            })
        }
        else{
            event.custom({
                "type": "createmetallurgy:casting_in_table",
                "ingredients": [
                {
                    "item": "createmetallurgy:graphite_ingot_mold"
                },
                {
                    "fluid": `gtceu:${fluidmaterial}`,
                    "amount": 144
                }
                ],
                "processingTime": 80,
                "mold_consumed": false,
                "result": {
                "item": `minecraft:${fluidmaterial}_ingot`
                }
            })
            if(fluidmaterial == 'copper'){
                event.custom({
                    "type": "createmetallurgy:casting_in_table",
                    "ingredients": [
                    {
                        "item": "createmetallurgy:graphite_nugget_mold"
                    },
                    {
                        "fluid": `gtceu:${fluidmaterial}`,
                        "amount": 16
                    }
                    ],
                    "processingTime": 40,
                    "mold_consumed": false,
                    "result": {
                    "item": `gtceu:${fluidmaterial}_nugget`
                    }
                })
            }
            else{
                event.custom({
                    "type": "createmetallurgy:casting_in_table",
                    "ingredients": [
                    {
                        "item": "createmetallurgy:graphite_nugget_mold"
                    },
                    {
                        "fluid": `gtceu:${fluidmaterial}`,
                        "amount": 16
                    }
                    ],
                    "processingTime": 40,
                    "mold_consumed": false,
                    "result": {
                    "item": `minecraft:${fluidmaterial}_nugget`
                    }
                })
            }
            event.custom({
                "type": "createmetallurgy:casting_in_basin",
                "ingredients": [
                {
                    "fluid": `gtceu:${fluidmaterial}`,
                    "amount": 1296
                }
                ],
                "processingTime": 150,
                "mold_consumed": false,
                "result": {
                "item": `minecraft:${fluidmaterial}_block`
                }
            })
        }
    })
    remove_recipes_id(event, [
        'create:crushing/raw_copper'
    ])
    remove_recipes_output(event, [
        'create:crushed_raw_lead',
        'create:crushed_raw_copper',
        'create:crushed_raw_iron',
        'create:crushed_raw_uranium',
        'create:crushed_raw_gold',
        'create:crushed_raw_zinc',
        'create:crushed_raw_osmium',
        'create:crushed_raw_platinum',
        'create:crushed_raw_silver',
        'create:crushed_raw_tin',
        'create:crushed_raw_nickel'
    ])
})