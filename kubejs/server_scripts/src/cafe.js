ServerEvents.recipes(e => {
    e.recipes.create.mixing(Fluid.of('createcafe:strawberry_tea', 500),
                            ['1x farm_and_charm:strawberry',
                            Fluid.of('minecraft:milk', 250), 
                            Fluid.of('createcafe:melted_sugar', 250)]).heated()

    e.recipes.create.mixing(Fluid.of('createcafe:strawberry_syrup', 1000),
                            ['1x farm_and_charm:strawberry',
                            Fluid.of('minecraft:milk', 250), 
                            Fluid.of('createcafe:melted_sugar', 750)]).heated()

    e.recipes.create.mixing(Fluid.of('createcafe:blueberry_tea', 500),
                            ['1x aether:blue_berry',
                            Fluid.of('minecraft:milk', 250), 
                            Fluid.of('createcafe:melted_sugar', 250)]).heated()

    e.recipes.create.mixing(Fluid.of('createcafe:coconut_tea', 500),
                            ['1x ecologics:coconut_slice',
                            Fluid.of('minecraft:milk', 250), 
                            Fluid.of('createcafe:melted_sugar', 250)]).heated()

    e.recipes.create.mixing(Fluid.of('createcafe:coconut_syrup', 1000),
                            ['1x farm_and_charm:strawberry',
                            Fluid.of('minecraft:milk', 250), 
                            Fluid.of('createcafe:melted_sugar', 750)]).heated()
                            
    e.recipes.create.mixing(Fluid.of('createcafe:pomegranate_tea', 500),
                            ['1x ars_nouveau:bombegranate_pod',
                            Fluid.of('minecraft:milk', 250), 
                            Fluid.of('createcafe:melted_sugar', 250)]).heated()

    e.recipes.create.mixing(Fluid.of('createcafe:blood_tea', 500),
                            ['1x gtceu:snow_steel_ingot',
                            Fluid.of('minecraft:milk', 250), 
                            Fluid.of('createcafe:melted_sugar', 250)]).heated()

    e.recipes.create.mixing(Fluid.of('createcafe:cherry_tea', 500),
                            ['1x seeddelight:cherry',
                            Fluid.of('minecraft:milk', 250), 
                            Fluid.of('createcafe:melted_sugar', 250)]).heated()
})