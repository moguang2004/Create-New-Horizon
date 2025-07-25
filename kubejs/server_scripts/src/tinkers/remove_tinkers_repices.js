ServerEvents.recipes(event => {
    remove_recipes_id(event, [
        //删除TiC青铜配方
        //"fkticfluidvalues:tools/materials/melting/bronze",
        //"fkticfluidvalues:smeltery/alloys/molten_bronze",
        ///fkticfluidvalues:smeltery\/melting\/metal\/bronze\/(.*)/,
        //删除TiC黄铜配方
        //"fkticfluidvalues:tools/materials/melting/plated_slimewood",
        //"fkticfluidvalues:smeltery/alloys/molten_brass",
        ///fkticfluidvalues:smeltery\/melting\/metal\/brass\/(.*)/,
        //删除齿轮,杆，板铸模配方
        /fkticfluidvalues:smeltery\/casts\/(.*)\/gear/,
        /fkticfluidvalues:smeltery\/casts\/(.*)\/rod/,
        /fkticfluidvalues:smeltery\/casts\/(.*)\/plate/,
        //删除TiC安山合金配方
        /fkticfluidvalues:compat\/create\/andesite_alloy_(.*)/,
        //删除TiC熔融粘土配方
        "fkticfluidvalues:smeltery/casting/clay/block",
        /fkticfluidvalues:smeltery\/melting\/clay\/(.*)/,
        /fkticfluidvalues:smeltery\/casting\/clay\/brick_(.*)_cast/
    ])
    event.remove({ mod: "tconstruct"})
})