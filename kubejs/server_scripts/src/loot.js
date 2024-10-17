LootJS.modifiers(event => {
    event.addLootTypeModifier(LootType.CHEST)
        .replaceLoot("minecraft:gold_ingot", "gtceu:precious_alloy_ingot", true)
        .replaceLoot("minecraft:gold_block", "gtceu:precious_alloy_block", true)
        .replaceLoot("minecraft:gold_nugget", "gtceu:precious_alloy_nugget", true)
        .replaceLoot("minecraft:raw_gold", "gtceu:raw_precious_alloy", true)
        .replaceLoot("minecraft:netherite_ingot", "gtceu:netherite_ingot", true)
        .replaceLoot("ad_astra:desh_ingot", "gtceu:desh_ingot", true)
        .replaceLoot("ad_astra:raw_desh", "gtceu:raw_desh", true)
        .replaceLoot("enderio:dark_steel_ingot", "gtceu:dark_steel_ingot", true)
        .replaceLoot("enderio:wood_gear", "gtceu:wood_gear", true)
        .replaceLoot("enderio:copper_alloy_ingot", "gtceu:copper_alloy_ingot", true)
        .replaceLoot("enderio:redstone_alloy_ingot", "gtceu:redstone_alloy_ingot", true)
        .replaceLoot("enderio:pulsating_alloy_ingot", "gtceu:pulsating_alloy_ingot", true)
        .replaceLoot("enderio:vibrant_alloy_ingot", "gtceu:vibrant_alloy_ingot", true)
        .replaceLoot("minecraft:gold_ore", "gtceu:precious_alloy_ore")
        .removeLoot("bloodmagic:strong_tau")
        .removeLoot("minecraft:flint_and_steel")
    event.addEntityLootModifier("minecraft:zombified_piglin", "twilightforest:kobold")
        .replaceLoot("minecraft:gold_nugget", "gtceu:precious_alloy_nugget", true)
        .replaceLoot("minecraft:gold_ingot", "gtceu:precious_alloy_ingot", true)
    event.addLootTypeModifier(LootType.ENTITY)
        .replaceLoot('minecraft:netherite_ingot','gtceu:netherite_ingot',true)
    //event.addLootTableModifier("dun")
    const gtceulv = [LootEntry.of("gtceu:lv_electric_motor", 1).when(c => { c.randomChance(0.2) }),
    LootEntry.of("gtceu:tin_single_wire", 2).when(c => { c.randomChance(0.4) }),
    LootEntry.of("gtceu:steel_ingot", 3).when(c => { c.randomChance(0.5) }),
    LootEntry.of("gtceu:lv_machine_hull", 1).when(c => { c.randomChance(0.1) }),
    LootEntry.of("gtceu:steel_frame", 2).when(c => { c.randomChance(0.3) }),
    LootEntry.of("gtceu:basic_electronic_circuit", 1).when(c => { c.randomChance(0.3) }),
    LootEntry.of("gtceu:phenolic_printed_circuit_board", 1).when(c => { c.randomChance(0.2) })]

    const steam = [LootEntry.of("gtceu:bronze_brick_casing").when(c => { c.randomChance(0.1) }),
    LootEntry.of("gtceu:bronze_plate", 2).when(c => { c.randomChance(0.3) }),
    LootEntry.of("kubejs:basic_mechanism", 1).when(c => { c.randomChance(0.5) }),
    LootEntry.of("gtceu:andesite_alloy_ingot", 3).when(c => { c.randomChance(0.6) }),
    LootEntry.of("gtceu:andesite_alloy_gear").when(c => { c.randomChance(0.2) }),
    LootEntry.of("gtceu:red_alloy_single_wire", 2).when(c => { c.randomChance(0.4) }),
    LootEntry.of("gtceu:vacuum_tube", 1).when(c => { c.randomChance(0.3) }),
    LootEntry.of("create:andesite_casing", 1).when(c => { c.randomChance(0.5) })]

    const gtceumv = [LootEntry.of("gtceu:mv_electric_motor", 1).when(c => { c.randomChance(0.2) }),
        LootEntry.of("gtceu:silver_single_wire", 2).when(c => { c.randomChance(0.4) }),
        LootEntry.of("gtceu:aluminium_ingot", 3).when(c => { c.randomChance(0.5) }),
        LootEntry.of("gtceu:mv_machine_hull", 1).when(c => { c.randomChance(0.1) }),
        LootEntry.of("gtceu:aluminium_frame", 2).when(c => { c.randomChance(0.3) }),
        LootEntry.of("gtceu:good_electronic_circuit", 1).when(c => { c.randomChance(0.3) }),
        LootEntry.of("gtceu:phenolic_printed_circuit_board", 1).when(c => { c.randomChance(0.2) }),
        LootEntry.of("botania:terrasteel_ingot", 1).when(c => { c.randomChance(0.2) })]

    const gtceuhv = [LootEntry.of("gtceu:hv_electric_motor", 1).when(c => { c.randomChance(0.2) }),
    LootEntry.of("gtceu:electrum_single_wire", 2).when(c => { c.randomChance(0.4) }),
    LootEntry.of("gtceu:stainless_steel_ingot", 3).when(c => { c.randomChance(0.5) }),
    LootEntry.of("gtceu:hv_machine_hull", 1).when(c => { c.randomChance(0.1) }),
    LootEntry.of("gtceu:stainless_steel_frame", 2).when(c => { c.randomChance(0.3) }),
    LootEntry.of("gtceu:micro_processor_assembly", 1).when(c => { c.randomChance(0.3) }),
    LootEntry.of("gtceu:plastic_printed_circuit_board", 1).when(c => { c.randomChance(0.2) }),
    LootEntry.of("botania:rune_summer", 1).when(c => { c.randomChance(0.2) }),
    LootEntry.of("botania:rune_spring", 1).when(c => { c.randomChance(0.2) }),
    LootEntry.of("botania:rune_autumn", 1).when(c => { c.randomChance(0.2) }),
    LootEntry.of("botania:rune_winter", 1).when(c => { c.randomChance(0.2) })]

    const ore = [LootEntry.of("gtceu:raw_galena", 4).when(c => { c.randomChance(0.2) }),
    LootEntry.of("gtceu:raw_precious_alloy", 3).when(c => { c.randomChance(0.4) }),
    LootEntry.of("gtceu:raw_coal", 6).when(c => { c.randomChance(0.6) }),
    LootEntry.of("gtceu:raw_redstone", 3).when(c => { c.randomChance(0.3) }),
    LootEntry.of("gtceu:raw_chalcopyrite", 5).when(c => { c.randomChance(0.5) }),
    LootEntry.of("gtceu:raw_realgar", 2).when(c => { c.randomChance(0.1) })]
    event.addLootTableModifier("dungeons_arise:chests/abandoned_temple/abandoned_temple_entrance")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("dungeons_arise:chests/abandoned_temple/abandoned_temple_map")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(gtceulv)
        })
    event.addLootTableModifier("dungeons_arise:chests/abandoned_temple/abandoned_temple_top")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("dungeons_arise:chests/aviary/aviary_barrels")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(gtceulv)
        })
    event.addLootTableModifier("dungeons_arise:chests/aviary/aviary_normal")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("dungeons_arise:chests/aviary/aviary_treasure")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(gtceulv)
        })
    event.addLootTableModifier("dungeons_arise:chests/bandit_towers/bandit_towers_barrels")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("dungeons_arise:chests/bandit_towers/bandit_towers_rooms")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(gtceulv)
        })
    event.addLootTableModifier("dungeons_arise:chests/bandit_towers/bandit_towers_supply")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(gtceulv)
        })
    event.addLootTableModifier("dungeons_arise:chests/bandit_towers/bandit_towers_gardens")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("dungeons_arise:chests/bandit_towers/bandit_towers_normal")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(gtceulv)
        })
    event.addLootTableModifier("dungeons_arise:chests/bandit_towers/bandit_towers_treasure")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(gtceulv)
        })
    event.addLootTableModifier("dungeons_arise:chests/bandit_village/bandit_village_barrels")
        .pool(pool => {
            pool.rolls([1, 2])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("dungeons_arise:chests/foundry/foundry_treasure")
        .pool(pool => {
            pool.rolls([3, 4])
            pool.addAlternativesLoot(gtceulv)
        })
    event.addLootTableModifier("dungeons_arise:chests/foundry/foundry_lava_pit")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(gtceulv)
        })
    event.addLootTableModifier("dungeons_arise:chests/foundry/foundry_passage_exterior")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("dungeons_arise:chests/heavenly_challenger/heavenly_challenger_normal")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("dungeons_arise:chests/heavenly_challenger/heavenly_challenger_treasure")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(gtceulv)
        })
    event.addLootTableModifier("dungeons_arise:chests/heavenly_challenger/heavenly_challenger_supply")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(gtceulv)
        })
    event.addLootTableModifier("dungeons_arise:chests/heavenly_challenger/heavenly_challenger_theater")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(gtceulv)
        })
    event.addLootTableModifier("dungeons_arise:chests/heavenly_conqueror/heavenly_conqueror_normal")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("dungeons_arise:chests/heavenly_conqueror/heavenly_conqueror_barrels")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("dungeons_arise:chests/heavenly_conqueror/heavenly_conqueror_treasure")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(gtceulv)
        })
    event.addLootTableModifier("dungeons_arise:chests/heavenly_rider/heavenly_rider_treasure")
        .pool(pool => {
            pool.rolls([1, 3])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("dungeons_arise:chests/heavenly_rider/heavenly_rider_normal")
        .pool(pool => {
            pool.rolls([1, 3])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("dungeons_arise:chests/heavenly_rider/heavenly_rider_barrels")
        .pool(pool => {
            pool.rolls([1, 3])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("dungeons_arise:chests/illager_fort/illager_fort_treasure")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("dungeons_arise:chests/illager_fort/illager_fort_barrels")
        .pool(pool => {
            pool.rolls([1, 3])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("dungeons_arise:chests/infested_temple/infested_temple_top_treasure")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(gtceulv)
        })
    event.addLootTableModifier("dungeons_arise:chests/infested_temple/infested_temple_room_normal")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("dungeons_arise:chests/infested_temple/infested_temple_room_garden")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("dungeons_arise:chests/infested_temple/infested_temple_room_table")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("dungeons_arise:chests/infested_temple/infested_temple_room_forge")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(gtceulv)
        })
    event.addLootTableModifier("dungeons_arise:chests/keep_kayra/keep_kayra_garden_treasure")
        .pool(pool => {
            pool.rolls([1, 3])
            pool.addAlternativesLoot(gtceulv)
        })
    event.addLootTableModifier("dungeons_arise:chests/keep_kayra/keep_kayra_library_treasure")
        .pool(pool => {
            pool.rolls([1, 3])
            pool.addAlternativesLoot(gtceulv)
        })
    event.addLootTableModifier("dungeons_arise:chests/keep_kayra/keep_kayra_treasure")
        .pool(pool => {
            pool.rolls([1, 3])
            pool.addAlternativesLoot(gtceulv)
        })
    event.addLootTableModifier("dungeons_arise:chests/keep_kayra/keep_kayra_garden_normal")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("dungeons_arise:chests/keep_kayra/keep_kayra_library_normal")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("dungeons_arise:chests/keep_kayra/keep_kayra_normal")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("dungeons_arise:chests/mechanical_nest/mechanical_nest_normal")
        .removeLoot("minecraft:cut_copper")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(gtceulv)
        })
    event.addLootTableModifier("dungeons_arise:chests/mechanical_nest/mechanical_nest_treasure")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(gtceulv)
        })
    event.addLootTableModifier("dungeons_arise:chests/mechanical_nest/mechanical_nest_equipment")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(gtceulv)
        })
    event.addLootTableModifier("dungeons_arise:chests/mining_system/mining_system_barrels")
        .removeLoot(["minecraft:iron_ore", "minecraft:gold_ore", "minecraft:coal_ore"])
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(ore)
        })
    event.addLootTableModifier("dungeons_arise:chests/mining_system/mining_system_treasure")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("dungeons_arise:chests/mushroom_village/mushroom_village_treasure")
        .pool(pool => {
            pool.rolls([1, 3])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("dungeons_arise:chests/plague_asylum/plague_asylum_treasure")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(gtceulv)
        })
    event.addLootTableModifier("dungeons_arise:chests/plague_asylum/plague_asylum_normal")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("dungeons_arise:chests/plague_asylum/plague_asylum_cells")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("dungeons_arise:chests/plague_asylum/plague_asylum_storage")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("dungeons_arise:chests/scorched_mines/scorched_mines_barrels")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("dungeons_arise:chests/scorched_mines/scorched_mines_housing")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("dungeons_arise:chests/scorched_mines/scorched_mines_hub")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("dungeons_arise:chests/scorched_mines/scorched_mines_normal")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("dungeons_arise:chests/scorched_mines/scorched_mines_treasure")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(gtceulv)
        })
    event.addLootTableModifier("dungeons_arise:chests/shiraz_palace/shiraz_palace_elite")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("dungeons_arise:chests/shiraz_palace/shiraz_palace_normal")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("dungeons_arise:chests/shiraz_palace/shiraz_palace_gardens")
        .pool(pool => {
            pool.rolls([1, 3])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("dungeons_arise:chests/shiraz_palace/shiraz_palace_library")
        .pool(pool => {
            pool.rolls([1, 3])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("dungeons_arise:chests/shiraz_palace/shiraz_palace_rooms")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("dungeons_arise:chests/shiraz_palace/shiraz_palace_supply")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("dungeons_arise:chests/shiraz_palace/shiraz_palace_towers")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("dungeons_arise:chests/shiraz_palace/shiraz_palace_treasure")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(gtceulv)
        })
    event.addLootTableModifier("dungeons_arise:chests/small_blimp/small_blimp_treasure")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("dungeons_arise:chests/thornborn_towers/thornborn_towers_rooms")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(gtceulv)
        })
    event.addLootTableModifier("dungeons_arise:chests/thornborn_towers/thornborn_towers_barrels")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("dungeons_arise:chests/undead_pirate_ship/undead_pirate_ship_barrels")
        .pool(pool => {
            pool.rolls([1, 3])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("dungeons_arise:chests/undead_pirate_ship/undead_pirate_ship_treasure")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(steam)
        })



    event.addLootTableModifier("explorations:chests/underground_temple/dungeon")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(steam)
        })
    event.addLootTableModifier("ad_astra:chests/village/moon/blacksmith")
        .pool(pool => {
            pool.rolls([1, 3])
            pool.addAlternativesLoot(gtceuhv)
        })
    event.addLootTableModifier("ad_astra:chests/village/moon/house")
        .pool(pool => {
            pool.rolls([1, 3])
            pool.addAlternativesLoot(gtceuhv)
        })
    event.addLootTableModifier("ad_astra:chests/dungeon/moon/dungeon_chest")
        .removeLoot("ad_astra:ice_shard")
        .pool(pool => {
            pool.rolls([1, 4])
            pool.addAlternativesLoot(gtceuhv)
        })
    event.addLootTableModifier("ad_astra:chests/dungeon/moon/large_dungeon_chest")
        .removeLoot("ad_astra:ice_shard")
        .pool(pool => {
            pool.rolls([3, 5])
            pool.addAlternativesLoot(gtceuhv)
        })
    event.addLootTableModifier("ad_astra:chests/temple/mars/temple")
        .removeLoot("ad_astra:ice_shard")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(gtceuhv)
        })

    event.addLootTableModifier("minecraft:chests/end_city_treasure")
        .pool(pool => {
            pool.rolls([2, 4])
            pool.addAlternativesLoot(gtceumv)
        })
    event.addLootTableModifier("minecraft:chests/bastion_treasure")
    .pool(pool => {
        pool.rolls([3, 4])
        pool.addAlternativesLoot(gtceulv)
    })
    event.addLootTableModifier("minecraft:chests/jungle_temple")
    .pool(pool => {
        pool.rolls([1, 2])
        pool.addAlternativesLoot(steam)
    })
    event.addLootTableModifier("minecraft:chests/desert_pyramid")
    .pool(pool => {
        pool.rolls([1, 3])
        pool.addAlternativesLoot(steam)
    })
    event.addLootTableModifier("aether:chests/ruined_portal")
    .pool(pool => {
        pool.rolls([0, 1])
        pool.addAlternativesLoot(gtceumv)
    })
    event.addLootTableModifier(["aether:chests/dungeon/gold/gold_dungeon_treasure","aether:chests/dungeon/gold/gold_dungeon_reward"])
    .pool(pool => {
        pool.rolls([1, 3])
        pool.addAlternativesLoot(gtceumv)
    })
    event.addLootTableModifier("aether:chests/dungeon/silver/silver_dungeon")
    .pool(pool => {
        pool.rolls([1, 3])
        pool.addAlternativesLoot(gtceulv)
    })
    //event.enableLogging()


    event.addBlockLootModifier("ae2:flawless_budding_quartz")
        .matchMainHand(ItemFilter.PICKAXE.hasEnchantment("minecraft:silk_touch", 2, 2))
        .removeLoot("ae2:flawed_budding_quartz")
        .addLoot("ae2:flawless_budding_quartz")
    /*event.addBlockLootModifier("ae2:large_quartz_bud")
    .replaceLoot("ae2:certus_quartz_dust","gtceu:certus_quartz_dust")
    event.addBlockLootModifier("ae2:medium_quartz_bud")
    .replaceLoot("ae2:certus_quartz_dust","gtceu:certus_quartz_dust")
    event.addBlockLootModifier("ae2:small_quartz_bud")
    .replaceLoot("ae2:certus_quartz_dust","gtceu:certus_quartz_dust")*/

    event.addEntityLootModifier("minecraft:zombie")
        .randomChanceWithEnchantment("minecraft:looting", [0.5, 0.51, 0.52, 0.53, 0.54, 0.55, 0.56, 0.57, 0.58])
        .matchMainHand("#forge:tools/butchery_knives")
        .killedByPlayer()
        .addLoot("minecraft:zombie_head")
    event.addEntityLootModifier("minecraft:skeleton")
        .randomChanceWithEnchantment("minecraft:looting", [0.5, 0.51, 0.52, 0.53, 0.54, 0.55, 0.56, 0.57, 0.58])
        .matchMainHand("#forge:tools/butchery_knives")
        .killedByPlayer()
        .addLoot("minecraft:skeleton_head")
    event.addEntityLootModifier("minecraft:enderman")
        .randomChanceWithEnchantment("minecraft:looting", [0.5, 0.51, 0.52, 0.53, 0.54, 0.55, 0.56, 0.57, 0.58])
        .matchMainHand("#forge:tools/butchery_knives")
        .killedByPlayer()
        .addLoot("enderio:enderman_head")
    event.addEntityLootModifier("minecraft:creeper")
        .randomChanceWithEnchantment("minecraft:looting", [0.5, 0.51, 0.52, 0.53, 0.54, 0.55, 0.56, 0.57, 0.58])
        .matchMainHand("#forge:tools/butchery_knives")
        .killedByPlayer()
        .addLoot("minecraft:creeper_head")
    event.addEntityLootModifier("minecraft:wither_skeleton")
        .randomChanceWithEnchantment("minecraft:looting", [0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6])
        .matchMainHand("#forge:tools/butchery_knives")
        .killedByPlayer()
        .addLoot("minecraft:wither_skeleton_skull")
    let animal = ["minecraft:pig", "minecraft:cow", "minecraft:horse", "minecraft:sheep"]
    animal.forEach(animal => {
        event.addEntityLootModifier(animal)
            .randomChanceWithEnchantment("minecraft:looting", [0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6])
            .matchMainHand("#forge:tools/butchery_knives")
            .killedByPlayer()
            .addWeightedLoot([1,3],"kubejs:tallow")
    })
})

ServerEvents.entityLootTables(event => {
    event.addEntity("ad_astra:glacian_ram", l => {
        l.addPool(p => {
            p.addItem("cold_sweat:goat_fur").weight(1)
            p.addItem("ad_astra:ice_shard").weight(9)
        })
    })
    event.addEntity("ad_astra:mogler", l => {
        l.addPool(p => {
            p.addItem("gtceu:pyrotheum_dust").weight(10).randomChanceWithLooting(0.15, 0.05)
            p.addItem("cold_sweat:hoglin_hide").weight(3)
            p.addItem("nethersdelight:hoglin_loin").weight(6).count(2)
        })
    })
    // let animal = ["minecraft:pig","minecraft:cow","minecraft:horse"]
    // event.addEntity(animal, l =>{
    //     l.addPool(p =>{
    //         p.addItem("kubejs:tallow").count(2).randomChance(0.5)
    //         .killedByPlayer()
    //     })
    // })
})
