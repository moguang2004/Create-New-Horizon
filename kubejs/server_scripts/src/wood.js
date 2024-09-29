ServerEvents.recipes(event => {
    Ingredient.of("#minecraft:logs").getItemIds().forEach(e => {
        let pos = e.indexOf(":")
        let result = e.substring(0, pos + 1) + "stripped_" + e.substring(pos + 1)
        let pos2 = e.lastIndexOf("_")
        if (pos2 != -1 && !e.includes("stripped") && !e.includes("ars_nouveau") && !e.includes("botania") && !e.includes("ironwood") && !e.includes("golden_oak") && !e.includes("magic_vine") && !e.includes("avocado") && !e.includes("fig")&& !e.includes("wolfberry")) {
            let result2 = e.substring(0, pos + 1) + e.substring(pos + 1, pos2 + 1) + "planks"
            event.shaped(
                Item.of(result2, 4), [
                "B",
                "A"
            ], {
                A: e,
                B: "#forge:tools/saws"
            })
            event.shapeless("2x " + result2, e)
            event.remove({ id: result2 })
            event.custom({
                "type": "farmersdelight:cutting",
                "ingredients": [
                    {
                        "item": e
                    }
                ],
                "result": [
                    {
                        "item": result
                    },
                    {
                        "item": "farmersdelight:tree_bark"
                    }
                ],
                "tool": {
                    "type": "farmersdelight:tool_action",
                    "action": "pickaxe_dig"
                }
            })
        }
    })
    event.shaped(
        Item.of("ars_nouveau:archwood_planks", 4), [
        "B",
        "A"
    ], {
        A: "ars_nouveau:red_archwood_wood",
        B: "#forge:tools/saws"
    })
    event.shaped(
        Item.of("ars_nouveau:archwood_planks", 4), [
        "B",
        "A"
    ], {
        A: "ars_nouveau:red_archwood_log",
        B: "#forge:tools/saws"
    })
    event.shapeless("2x ars_nouveau:archwood_planks", "#forge:logs/archwood").id("ars_nouveau:archwood_planks")
    event.shaped(
        Item.of("ars_nouveau:archwood_planks", 4), [
        "B",
        "A"
    ], {
        A: "ars_nouveau:blue_archwood_wood",
        B: "#forge:tools/saws"
    })
    event.shaped(
        Item.of("ars_nouveau:archwood_planks", 4), [
        "B",
        "A"
    ], {
        A: "ars_nouveau:blue_archwood_log",
        B: "#forge:tools/saws"
    })
    event.shaped(
        Item.of("ars_nouveau:archwood_planks", 4), [
        "B",
        "A"
    ], {
        A: "ars_nouveau:purple_archwood_wood",
        B: "#forge:tools/saws"
    })
    event.shaped(
        Item.of("ars_nouveau:archwood_planks", 4), [
        "B",
        "A"
    ], {
        A: "ars_nouveau:purple_archwood_log",
        B: "#forge:tools/saws"
    })
    event.shaped(
        Item.of("ars_nouveau:archwood_planks", 4), [
        "B",
        "A"
    ], {
        A: "ars_nouveau:green_archwood_wood",
        B: "#forge:tools/saws"
    })
    event.shaped(
        Item.of("ars_nouveau:archwood_planks", 4), [
        "B",
        "A"
    ], {
        A: "ars_nouveau:green_archwood_log",
        B: "#forge:tools/saws"
    })

    event.shaped(
        Item.of("aether:skyroot_planks", 4), [
        "B",
        "A"
    ], {
        A: "aether:golden_oak_wood",
        B: "#forge:tools/saws"
    })
    event.shaped(
        Item.of("aether:skyroot_planks", 4), [
        "B",
        "A"
    ], {
        A: "aether:golden_oak_log",
        B: "#forge:tools/saws"
    })
    event.shapeless("2x aether:skyroot_planks", "aether:golden_oak_log")
    event.shapeless("2x aether:skyroot_planks", "aether:golden_oak_wood")
    event.remove({ id: "aether:skyroot_planks" })
    event.remove({ id: "twilightforest:wood/sorting_planks" })
    event.remove({ id: "twilightforest:wood/mangrove_planks" })
    event.remove({ id: "twilightforest:wood/dark_planks" })
    event.remove({ id: "twilightforest:wood/time_planks" })
    event.remove({ id: "twilightforest:wood/transformation_planks" })
    event.remove({ id: "twilightforest:wood/mining_planks" })
    // event.forEachRecipe({type:"minecraft:shapeless",output:"#minecraft:planks"}, (/**@type {$RecipeJS}*/recipe) =>{
    //   //let {originalRecipeIngredients,originalRecipeResults} = recipe
    //   let ingredient = recipe.originalRecipeIngredients
    //   let result = recipe.originalRecipeResult
    //   event.shaped(
    //     Item.of(result, 4), [
    //     " B ",
    //     " A "
    //   ], {
    //     A: ingredient,
    //     B: "#forge:tools/saws"
    // })
    // })
})
