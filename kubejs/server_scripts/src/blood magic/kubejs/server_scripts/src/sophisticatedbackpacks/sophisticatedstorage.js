ServerEvents.recipes(event => {
    let material = ['basic', 'copper', 'iron', 'gold', 'diamond', 'netherite']
    let item = ['#minecraft:planks', 'minecraft:copper_ingot', 'minecraft:iron_ingot', 'minecraft:gold_ingot', 'minecraft:diamond']
    for (let i = 0; i < 5; i++) {
        for (let j = i + 1; j < 5; j++) {
            event.remove({ output: `sophisticatedstorage:${material[i]}_to_${material[j]}_tier_upgrade` })
            if (j != 1) {
                if (j == i + 1) {
                    event.shaped(
                        Item.of(`sophisticatedstorage:${material[i]}_to_${material[j]}_tier_upgrade`, 1), [
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
                        Item.of(`sophisticatedstorage:${material[i]}_to_${material[j]}_tier_upgrade`, 1), [
                        "DBE",
                        "BAB",
                        "CBC"
                    ], {
                        A: `sophisticatedstorage:${material[i]}_to_${material[j - 1]}_tier_upgrade`,
                        B: `gtceu:${material[j]}_plate`,
                        C: `gtceu:${material[j]}_rod`,
                        D: `gtceu:${material[j]}_screw`,
                        E: `gtceu:${material[j]}_bolt`,
                    })
                }
            }
        }
        event.remove({ output: `sophisticatedstorage:${material[i]}_to_netherite_tier_upgrade` })
        if (i != 4) {
            event.shaped(
                Item.of(`sophisticatedstorage:${material[i]}_to_netherite_tier_upgrade`, 1), [
                " B ",
                "BAB",
                " B "
            ], {
                A: `sophisticatedstorage:${material[i]}_to_diamond_tier_upgrade`,
                B: `minecraft:netherite_ingot`
            })
        }
        else {
            event.shaped(
                Item.of(`sophisticatedstorage:${material[i]}_to_netherite_tier_upgrade`, 1), [
                " B ",
                "BAB",
                " B "
            ], {
                A: 'minecraft:diamond',
                B: `minecraft:netherite_ingot`
            })
        }
    }
    event.shaped(
        Item.of(`sophisticatedstorage:basic_to_copper_tier_upgrade`, 1), [
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

    event.remove({ output: /sophisticatedstorage:(.*)_barrel/})
    event.remove({ output: /sophisticatedstorage:limited_(.*)_barrel/})
    event.remove({ output: /sophisticatedstorage:(.*)_chest/})
    event.remove({ output: /sophisticatedstorage:(.*)_shulker_box/})
})