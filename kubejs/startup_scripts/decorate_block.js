StartupEvents.registry("block",event=>{
    event.create("machine_casing_bronze_plated_bricks_slab","slab")
    event.create("machine_casing_bronze_plated_bricks_wall","wall")
    event.create("machine_casing_bronze_plated_bricks_stairs","stairs")
    event.create("machine_casing_bronze_plated_bricks_fence","fence")//青铜
    event.create("machine_casing_solid_steel_slab","slab")
    event.create("machine_casing_solid_steel_wall","wall")
    event.create("machine_casing_solid_steel_stairs","stairs")
    event.create("machine_casing_solid_steel_fence","fence")//钢
    event.create("machine_casing_frost_proof_slab","slab")
    event.create("machine_casing_frost_proof_wall","wall")
    event.create("machine_casing_frost_proof_stairs","stairs")
    event.create("machine_casing_frost_proof_fence","fence")//铝
    event.create("machine_casing_clean_stainless_steel_slab","slab")
    event.create("machine_casing_clean_stainless_steel_wall","wall")
    event.create("machine_casing_clean_stainless_steel_stairs","stairs")
    event.create("machine_casing_clean_stainless_steel_fence","fence")//不锈钢
    event.create("machine_casing_stable_titanium_slab","slab")
    event.create("machine_casing_stable_titanium_wall","wall")
    event.create("machine_casing_stable_titanium_stairs","stairs")
    event.create("machine_casing_stable_titanium_fence","fence")//钛
    event.create("machine_casing_robust_tungstensteel_slab","slab")
    event.create("machine_casing_robust_tungstensteel_wall","wall")
    event.create("machine_casing_robust_tungstensteel_stairs","stairs")
    event.create("machine_casing_robust_tungstensteel_fence","fence")//钨钢
    event.create("machine_casing_palladium_substation_slab","slab")
    event.create("machine_casing_palladium_substation_wall","wall")
    event.create("machine_casing_palladium_substation_stairs","stairs")
    event.create("machine_casing_palladium_substation_fence","fence")//杜老钯
    event.create("machine_casing_inert_ptfe_slab","slab")
    event.create("machine_casing_inert_ptfe_wall","wall")
    event.create("machine_casing_inert_ptfe_stairs","stairs")
    event.create("machine_casing_inert_ptfe_fence","fence")//四氟乙烯
    event.create("machine_casing_heatproof_slab","slab")
    event.create("machine_casing_heatproof_wall","wall")
    event.create("machine_casing_heatproof_stairs","stairs")
    event.create("machine_casing_heatproof_fence","fence")//殷钢
    event.create("machine_casing_sturdy_hsse_green_slab","slab")
    event.create("machine_casing_sturdy_hsse_green_wall","wall")
    event.create("machine_casing_sturdy_hsse_green_stairs","stairs")
    event.create("machine_casing_sturdy_hsse_green_fence","fence")//我也不知道是啥   
})

StartupEvents.registry("item", event => {
    event.create("snow_city_sword", "pickaxe")
        .speedBaseline(17.0)
        .speed(20.0)
        .maxDamage(114514)
        .attackDamageBaseline(5.0)
        .level(4)
        .tier("incorrect_for_netherite_tool")
        .displayName("雪城的大保健")
        .texture("snow_city_sword.png")
        .rarity("rare")
        

})