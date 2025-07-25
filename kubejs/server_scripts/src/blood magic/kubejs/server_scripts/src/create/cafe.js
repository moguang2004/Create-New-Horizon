ServerEvents.recipes(e => {
    e.recipes.create.mixing(Fluid.of('createcafe:strawberry_tea', 500),
                            ['1x farm_and_charm:strawberry',Fluid.of('minecraft:milk', 250), Fluid.of('createcafe:melted_sugar', 250)]).heated()

    e.recipes.create.mixing(Fluid.of('createcafe:strawberry_syrup', 1000),
                            ['1x farm_and_charm:strawberry',Fluid.of('minecraft:milk', 250), Fluid.of('createcafe:melted_sugar', 750)]).heated()

    e.recipes.create.mixing(Fluid.of('createcafe:blueberry_tea', 500),
                            ['1x aether:blue_berry',Fluid.of('minecraft:milk', 250), Fluid.of('createcafe:melted_sugar', 250)]).heated()

    e.recipes.create.mixing(Fluid.of('createcafe:coconut_tea', 500),
                            ['1x ecologics:coconut_slice',Fluid.of('minecraft:milk', 250), Fluid.of('createcafe:melted_sugar', 250)]).heated()

    e.recipes.create.mixing(Fluid.of('createcafe:coconut_syrup', 1000),
                            ['1x ecologics:coconut_slice',Fluid.of('minecraft:milk', 250), Fluid.of('createcafe:melted_sugar', 750)]).heated()
                            
    e.recipes.create.mixing(Fluid.of('createcafe:pomegranate_tea', 500),
                            ['1x ars_nouveau:bombegranate_pod',Fluid.of('minecraft:milk', 250), Fluid.of('createcafe:melted_sugar', 250)]).heated()

    e.recipes.create.mixing(Fluid.of('createcafe:blood_tea', 500),
                            ['1x gtceu:snow_steel_ingot',Fluid.of('minecraft:milk', 250), Fluid.of('createcafe:melted_sugar', 250)]).heated()

    e.recipes.create.mixing(Fluid.of('createcafe:cherry_tea', 500),
                            ['1x seeddelight:cherry',Fluid.of('minecraft:milk', 250), Fluid.of('createcafe:melted_sugar', 250)]).heated()

    let Ingredients = ['mango','lime','strawberry','peach','plum','jackfruit','apricot','durian','fig','grape','grapefruit','starfruit','mandarin','blood_orange','lychee','blueberry','pineapple','apple','pumpkin','avocado','sweetberry','tamarind','papaya','redlove','mana_berry','kiwi','orange','yucca','aloe','coconut','persimmon','pomegranate','raspberry','pomelo','lemon','watermelon','vanilla','banana','cherry','blackberry','dragonfruit','gooseberry','guava','passionfruit','lavender','citron','barberry','oreo']
    Ingredients.forEach(Ingredient => {
        e.recipes.ars_nouveau.imbuement(`createcafe:${Ingredient}_milk_tea`,"createcafe:mango_milk_tea",500,['minecraft:gold_ingot'])
        e.recipes.ars_nouveau.imbuement(`createcafe:${Ingredient}_milk_tea`,"createcafe:lime_milk_tea",500,['minecraft:emerald'])
        e.recipes.ars_nouveau.imbuement(`createcafe:${Ingredient}_milk_tea`,"createcafe:peach_milk_tea",500,['minecraft:brain_coral'])
        e.recipes.ars_nouveau.imbuement(`createcafe:${Ingredient}_milk_tea`,"createcafe:plum_milk_tea",500,['minecraft:crying_obsidian'])
        e.recipes.ars_nouveau.imbuement(`createcafe:${Ingredient}_milk_tea`,"createcafe:jackfruit_milk_tea",500,['alexscaves:curly_fern'])
        e.recipes.ars_nouveau.imbuement(`createcafe:${Ingredient}_milk_tea`,"createcafe:apricot_milk_tea",500,['botania:yellow_petal'])
        e.recipes.ars_nouveau.imbuement(`createcafe:${Ingredient}_milk_tea`,"createcafe:durian_milk_tea",500,['gtceu:sulfur_dust'])
        e.recipes.ars_nouveau.imbuement(`createcafe:${Ingredient}_milk_tea`,"createcafe:fig_milk_tea",500,['minecraft:obsidian'])
        e.recipes.ars_nouveau.imbuement(`createcafe:${Ingredient}_milk_tea`,"createcafe:grape_milk_tea",500,['minecraft:amethyst_shard'])
        e.recipes.ars_nouveau.imbuement(`createcafe:${Ingredient}_milk_tea`,"createcafe:starfruit_milk_tea",500,['alexscaves:relicheirus_knockable_leaves'])
        e.recipes.ars_nouveau.imbuement(`createcafe:${Ingredient}_milk_tea`,"createcafe:mandarin_milk_tea",500,['ad_astra:cheese'])
        e.recipes.ars_nouveau.imbuement(`createcafe:${Ingredient}_milk_tea`,"createcafe:lychee_milk_tea",500,['minecraft:redstone'])
        e.recipes.ars_nouveau.imbuement(`createcafe:${Ingredient}_milk_tea`,"createcafe:pineapple_milk_tea",500,['minecraft:potato'])
        e.recipes.ars_nouveau.imbuement(`createcafe:${Ingredient}_milk_tea`,"createcafe:tamarind_milk_tea",500,['minecraft:fermented_spider_eye'])
        e.recipes.ars_nouveau.imbuement(`createcafe:${Ingredient}_milk_tea`,"createcafe:papaya_milk_tea",500,['minecraft:vex_armor_trim_smithing_template'])
        e.recipes.ars_nouveau.imbuement(`createcafe:${Ingredient}_milk_tea`,"createcafe:redlove_milk_tea",500,['minecraft:glistering_melon_slice'])
        e.recipes.ars_nouveau.imbuement(`createcafe:${Ingredient}_milk_tea`,"createcafe:kiwi_milk_tea",500,['minecraft:cactus'])
        e.recipes.ars_nouveau.imbuement(`createcafe:${Ingredient}_milk_tea`,"createcafe:orange_milk_tea",500,['minecraft:sponge','ad_astra:cheese'])
        e.recipes.ars_nouveau.imbuement(`createcafe:${Ingredient}_milk_tea`,"createcafe:pomelo_milk_tea",500,['minecraft:sponge'])
        e.recipes.ars_nouveau.imbuement(`createcafe:${Ingredient}_milk_tea`,"createcafe:yucca_milk_tea",500,['alexscaves:rock_candy_lime'])
        e.recipes.ars_nouveau.imbuement(`createcafe:${Ingredient}_milk_tea`,"createcafe:aloe_milk_tea",500,['alexscaves:sweetish_fish_green'])
        e.recipes.ars_nouveau.imbuement(`createcafe:${Ingredient}_milk_tea`,"createcafe:persimmon_milk_tea",500,['farmersdelight:tomato'])
        e.recipes.ars_nouveau.imbuement(`createcafe:${Ingredient}_milk_tea`,"createcafe:pomegranate_milk_tea",500,['culturaldelights:smoked_tomato'])
        e.recipes.ars_nouveau.imbuement(`createcafe:${Ingredient}_milk_tea`,"createcafe:raspberry_milk_tea",500,['farm_and_charm:strawberry'])
        e.recipes.ars_nouveau.imbuement(`createcafe:${Ingredient}_milk_tea`,"createcafe:lemon_milk_tea",500,['minecraft:emerald','minecraft:sponge','ad_astra:cheese'])
        e.recipes.ars_nouveau.imbuement(`createcafe:${Ingredient}_milk_tea`,"createcafe:vanilla_milk_tea",500,['minecraft:bone_meal'])
        e.recipes.ars_nouveau.imbuement(`createcafe:${Ingredient}_milk_tea`,"createcafe:banana_milk_tea",500,['minecraft:end_rod'])
        e.recipes.ars_nouveau.imbuement(`createcafe:${Ingredient}_milk_tea`,"createcafe:blackberry_milk_tea",500,['minecraft:wither_skeleton_skull'])
        e.recipes.ars_nouveau.imbuement(`createcafe:${Ingredient}_milk_tea`,"createcafe:dragonfruit_milk_tea",500,['alexscaves:primal_magma'])
        e.recipes.ars_nouveau.imbuement(`createcafe:${Ingredient}_milk_tea`,"createcafe:gooseberry_milk_tea",500,['minecraft:sweet_berries'])
        e.recipes.ars_nouveau.imbuement(`createcafe:${Ingredient}_milk_tea`,"createcafe:guava_milk_tea",500,['alexscaves:raw_scarlet_neodymium'])
        e.recipes.ars_nouveau.imbuement(`createcafe:${Ingredient}_milk_tea`,"createcafe:lavender_milk_tea",500,['minecraft:chorus_fruit'])
        e.recipes.ars_nouveau.imbuement(`createcafe:${Ingredient}_milk_tea`,"createcafe:passionfruit_milk_tea",500,['alexscaves:amber_curiosity'])
        e.recipes.ars_nouveau.imbuement(`createcafe:${Ingredient}_milk_tea`,"createcafe:citron_milk_tea",500,['ends_delight:shulker_meat'])
        e.recipes.ars_nouveau.imbuement(`createcafe:${Ingredient}_milk_tea`,"createcafe:barberry_milk_tea",500,['twilightforest:carminite_block'])
    })
})  