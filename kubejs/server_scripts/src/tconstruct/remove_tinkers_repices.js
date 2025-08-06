ServerEvents.recipes(event => {
    remove_recipes_id(event, [
        //删除TiC青铜配方
        //"tconstruct:tools/materials/melting/bronze",
        //"tconstruct:smeltery/alloys/molten_bronze",
        ///tconstruct:smeltery\/melting\/metal\/bronze\/(.*)/,
        //删除TiC黄铜配方
        //"tconstruct:tools/materials/melting/plated_slimewood",
        //"tconstruct:smeltery/alloys/molten_brass",
        ///tconstruct:smeltery\/melting\/metal\/brass\/(.*)/,
        //删除齿轮,杆，板铸模配方
        /tconstruct:smeltery\/casts\/(.*)\/gear/,
        /tconstruct:smeltery\/casts\/(.*)\/rod/,
        /tconstruct:smeltery\/casts\/(.*)\/plate/,
        //删除TiC安山合金配方
        /tconstruct:compat\/create\/andesite_alloy_(.*)/,
        //删除TiC熔融粘土配方
        "tconstruct:smeltery/casting/clay/block",
        /tconstruct:smeltery\/melting\/clay\/(.*)/,
        /tconstruct:smeltery\/casting\/clay\/brick_(.*)_cast/,
        //移除熔铸炉钢配方
        "tconstruct:smeltery/melting/metal/iron/chain_boots",
        "tconstruct:smeltery/melting/metal/iron/chain_chestplate",
        "tconstruct:smeltery/melting/metal/iron/chain_helmet",
        "tconstruct:smeltery/melting/metal/iron/chain_leggings",
        "tconstruct:smeltery/melting/metal/iron/ore_singular",
        "tconstruct:smeltery/melting/metal/iron/raw",
        "tconstruct:smeltery/melting/metal/iron/raw_block"

    ])
})