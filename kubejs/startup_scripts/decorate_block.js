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
    event.create("snow_city_sword", "sword")
        .speedBaseline(2.0)
        .attackDamageBaseline(17.0)
        .tier(10)
        .maxDamage(114514)
        .displayName('雪城的大保健')
        .rarity('rare')
        .tooltip('雪城的赐福,无敌的扳手！')
})

StartupEvents.registry("item", event => {
    event.create("ender_light")
        .rarity('rare')
        .displayName('老灯的蜜汁小汉堡')
        .tooltip('老灯的馈赠:在用完前做出庇护所吧!')
        .food(add=>{
            add.hunger(20) //设置恢复5个“鸡腿”
            add.saturation(0.5) // 饱和度设置为10*0.5 = 5
            add.meat() // 设置食物属性为肉，可以被狗食用
            add.alwaysEdible() //设置为无需消耗饱食度即可使用
            add.fastToEat() //设置该食物为快速食用类
            add.effect('minecraft:haste',20*1800,0,1)
            add.effect('legendarysurvivaloverhaul:heat_immunity',20*1800,0,1)
            add.effect('legendarysurvivaloverhaul:cold_immunity',20*1800,0,1)

        })
})
