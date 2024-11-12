ServerEvents.recipes(event => {
    let material = ['wood', 'copper', 'iron', 'gold', 'diamond', 'obsidian']
    let item = ['#minecraft:planks', 'minecraft:copper_ingot', 'minecraft:iron_ingot', 'minecraft:gold_ingot', 'minecraft:diamond']
    let chest = ['', '#forge:chests/wooden', 'expandedstorage:iron_chest', 'expandedstorage:gold_chest', 'expandedstorage:diamond_chest']
    let barrels = ['', 'expandedstorage:copper_barrel', 'expandedstorage:iron_barrel', 'expandedstorage:gold_barrel', 'expandedstorage:diamond_barrel']
    for (let i = 0; i < 5; i++) {
        for (let j = i + 1; j < 5; j++) {
            event.remove({ output: `expandedstorage:${material[i]}_to_${material[j]}_conversion_kit` })
            if (j != 1) {
                if (j == i + 1) {
                    event.shaped(
                        Item.of(`expandedstorage:${material[i]}_to_${material[j]}_conversion_kit`, 1), [
                        "DBE",
                        "BAB",
                        "CBC"
                    ], {
                        A: `${item[i]}`,
                        B: `gtceu:${material[j]}_plate`,
                        C: `gtceu:${material[j]}_rod`,
                        D: `gtceu:${material[j]}_screw`,
                        E: `gtceu:${material[j]}_bolt`,
                    })
                }
                else {
                    event.shaped(
                        Item.of(`expandedstorage:${material[i]}_to_${material[j]}_conversion_kit`, 1), [
                        "DBE",
                        "BAB",
                        "CBC"
                    ], {
                        A: `expandedstorage:${material[i]}_to_${material[j - 1]}_conversion_kit`,
                        B: `gtceu:${material[j]}_plate`,
                        C: `gtceu:${material[j]}_rod`,
                        D: `gtceu:${material[j]}_screw`,
                        E: `gtceu:${material[j]}_bolt`,
                    })
                }
            }
        }
        event.remove({ output: `expandedstorage:${material[i]}_to_obsidian_conversion_kit` })
        if (i != 4) {
            event.shaped(
                Item.of(`expandedstorage:${material[i]}_to_obsidian_conversion_kit`, 1), [
                "BBB",
                "BAB",
                "BBB"
            ], {
                A: `expandedstorage:${material[i]}_to_diamond_conversion_kit`,
                B: `gtceu:obsidian_plate`
            })
        }
        else {
            event.shaped(
                Item.of(`expandedstorage:${material[i]}_to_obsidian_conversion_kit`, 1), [
                "BBB",
                "BAB",
                "BBB"
            ], {
                A: 'minecraft:diamond',
                B: `gtceu:obsidian_plate`
            })
        }
    }
    event.shaped(
        Item.of(`expandedstorage:wood_to_copper_conversion_kit`, 1), [
        "DBE",
        "BAB",
        "CBC"
    ], {
        A: '#minecraft:planks',
        B: `gtceu:bronze_plate`,
        C: `gtceu:bronze_rod`,
        D: `gtceu:bronze_screw`,
        E: `gtceu:bronze_bolt`,
    })
    event.remove({ output: 'expandedstorage:copper_barrel' })
    event.shaped(
        Item.of('expandedstorage:copper_barrel', 1), [
        "DBE",
        "BAB",
        "CBC"
    ], {
        A: 'minecraft:barrel',
        B: `gtceu:bronze_plate`,
        C: `gtceu:bronze_rod`,
        D: `gtceu:bronze_screw`,
        E: `gtceu:bronze_bolt`,
    })
    for (let i = 2; i < 5; i++) {
        event.remove({ output: `${barrels[i]}` })
        event.shaped(
            Item.of(`${barrels[i]}`, 1), [
            "DBE",
            "BAB",
            "CBC"
        ], {
            A: `${barrels[i - 1]}`,
            B: `gtceu:${material[i]}_plate`,
            C: `gtceu:${material[i]}_rod`,
            D: `gtceu:${material[i]}_screw`,
            E: `gtceu:${material[i]}_bolt`,
        })
    }
    event.remove({ output: 'expandedstorage:obsidian_barrel' })
    event.shaped(
        Item.of(`expandedstorage:obsidian_barrel`, 1), [
        "BBB",
        "BAB",
        "BBB"
    ], {
        A: 'expandedstorage:diamond_barrel',
        B: `gtceu:obsidian_plate`
    })
    for (let i = 2; i < 5; i++) {
        event.remove({ output: `${chest[i]}` })
        event.shaped(
            Item.of(`${chest[i]}`, 1), [
            "DBE",
            "BAB",
            "CBC"
        ], {
            A: `${chest[i - 1]}`,
            B: `gtceu:${material[i]}_plate`,
            C: `gtceu:${material[i]}_rod`,
            D: `gtceu:${material[i]}_screw`,
            E: `gtceu:${material[i]}_bolt`,
        })
    }
    event.remove({ output: 'expandedstorage:obsidian_chest' })
    event.shaped(
        Item.of(`expandedstorage:obsidian_chest`, 1), [
        "BBB",
        "BAB",
        "BBB"
    ], {
        A: 'expandedstorage:diamond_chest',
        B: `gtceu:obsidian_plate`
    })
    event.remove({ id: 'expandedstorage:old_iron_chest' })
    event.remove({ id: 'expandedstorage:old_gold_chest' })
    event.remove({ id: 'expandedstorage:old_diamond_chest' })
    event.remove({ id: 'expandedstorage:old_obsidian_chest' })
})