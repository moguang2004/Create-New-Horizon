GTCEuServerEvents.oreVeins(event => {
    event.modify("gtceu:magnetite_vein_ow", vein => {
        /*vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Silver).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Gold).size(1, 1))
                .layer(l => l.weight(1).block(Block.getBlock('minecraft:oak_log')).size(1, 1))
                .layer(l => l.weight(1).state(Block.getBlock('minecraft:oak_planks').defaultBlockState()).size(1, 1))
            )
        )*/
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Magnetite, 3) // 
            .rareBlock(GTMaterials.VanadiumMagnetite,2)
            .rareBlock(GTMaterials.get('precious_alloy'), 1) // 
            .rareBlockChance(0.25)
            .veininessThreshold(0.1)
            .maxRichnessThreshold(0.3)
            .minRichness(0.3)
            .maxRichness(0.5)
            .edgeRoundoffBegin(10) // 
            .maxEdgeRoundoff(0.2) // 
        )
    })
    event.modify("gtceu:magnetite_vein_end",vein =>{
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Magnetite, 3) // 
            .rareBlock(GTMaterials.VanadiumMagnetite,2)
            .rareBlock(GTMaterials.get('precious_alloy'), 1) // 
            .rareBlockChance(0.25)
            .veininessThreshold(0.1)
            .maxRichnessThreshold(0.3)
            .minRichness(0.3)
            .maxRichness(0.5)
            .edgeRoundoffBegin(10) // 
            .maxEdgeRoundoff(0.2) // 
        )
    })
    event.modify("gtceu:banded_iron_vein",vein =>{
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Goethite, 3) // 
            .rareBlock(GTMaterials.YellowLimonite,2)
            .rareBlock(GTMaterials.Hematite,2)
            .rareBlock(GTMaterials.get('precious_alloy'), 1) // 
            .rareBlockChance(0.25)
            .veininessThreshold(0.1)
            .maxRichnessThreshold(0.3)
            .minRichness(0.3)
            .maxRichness(0.5)
            .edgeRoundoffBegin(10) // 
            .maxEdgeRoundoff(0.2) // 
        )
    })
    event.modify('gtnn:gold_vein_tf',vein =>{
        vein.veinedVeinGenerator(generator => generator
        .oreBlock(GTMaterials.Magnetite, 3) // 
        .rareBlock(GTMaterials.VanadiumMagnetite,2)
        .rareBlock(GTMaterials.get('precious_alloy'), 1) // 
        .rareBlockChance(0.25)
        .veininessThreshold(0.1)
        .maxRichnessThreshold(0.3)
        .minRichness(0.3)
        .maxRichness(0.5)
        .edgeRoundoffBegin(10) // 
        .maxEdgeRoundoff(0.2)
        )
    })
    event.modify('gtceu:nether_quartz_vein',vein =>{
        vein.dimensions('minecraft:overworld')
    })
    event.modify('gtceu:nickel_vein',vein =>{
        vein.dimensions('minecraft:the_nether')
    })
    event.remove('gtceu:manganese_vein_ow')
    /*event.modify('gtceu:manganese_vein',vein=>{
        vein.veinedVeinGenerator(generator => generator.rareBlock(GTMaterials.Spessartine,2))
    })*/
    event.modify('gtceu:mica_vein',vein=>{
        vein.dimensions('minecraft:the_nether')
        vein.heightRangeUniform(0,25)
    })
    event.remove('gtceu:galena_vein')
    event.add('ctnh:chromite_vein',vein =>{
        vein.weight(100)
        vein.clusterSize(40)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)
        vein.layer('all_layer')
        vein.dimensions('minecraft:the_end')
        vein.heightRangeUniform(0, 40)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Chromite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.YellowLimonite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Magnetite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Lead).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Chromite)
            .placement("above")
            .density(0.4)
            .radius(5)
        )
    })
    event.add('ctnh:cryolite_vein',vein =>{
        vein.weight(120)
        vein.clusterSize(40)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)
        vein.layer('twilightforest_layer')
        vein.dimensions('twilightforest:twilight_forest')
        vein.heightRangeUniform(0, 40)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('cryolite')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Silver).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Mica).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Lead).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('cryolite'))
            .placement("above")
            .density(0.4)
            .radius(5)
        )
    })
    event.add('ctnh:cryolite_vein_aether',vein =>{
        vein.weight(100)
        vein.clusterSize(40)
        vein.density(0.45)
        vein.discardChanceOnAirExposure(0)
        vein.layer('all_layer')
        vein.dimensions('aether:the_aether')
        vein.heightRangeUniform(30, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('cryolite')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Silver).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Mica).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Lead).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('cryolite'))
            .placement("above")
            .density(0.4)
            .radius(5)
        )
    })
    event.add('ctnh:combustible_ice_vein_aether',vein =>{
        vein.weight(120)
        vein.clusterSize(40)
        vein.density(0.3)
        vein.discardChanceOnAirExposure(0)
        vein.layer('all_layer')
        vein.dimensions('aether:the_aether')
        vein.heightRangeUniform(30, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('combustible_ice')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Coal).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Opal).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.get('combustible_ice')).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('combustible_ice'))
            .placement("above")
            .density(0.2)
            .radius(5)
        )
    })
    event.add('ctnh:bauxite_vein_aether',vein =>{
        vein.weight(120)
        vein.clusterSize(40)
        vein.density(0.3)
        vein.discardChanceOnAirExposure(0)
        vein.layer('all_layer')
        vein.dimensions('aether:the_aether')
        vein.heightRangeUniform(30, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Bauxite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Ilmenite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Aluminium).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Bauxite)
            .placement("above")
            .density(0.4)
            .radius(5)
        )
    })
    event.add('ctnh:scheelite_vein_aether',vein =>{
        vein.weight(80)
        vein.clusterSize(40)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)
        vein.layer('all_layer')
        vein.dimensions('aether:the_aether')
        vein.heightRangeUniform(20, 40)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Scheelite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Tungstate).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Lithium).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Scheelite)
            .placement("above")
            .density(0.4)
            .radius(5)
        )
    })
    event.modify('gtceu:sheldonite_vein',vein =>{
        vein.dimensions('ad_astra:moon')
        vein.weight(80)
    })
    event.modify('gtceu:naquadah_vein',vein =>{
        vein.dimensions(['ad_astra:mercury','ad_extendra:jupiter'])
    })
    event.modify('gtceu:monazite_vein',vein =>{
        vein.dimensions('ad_astra:jupiter')
    })
    event.modify('gtceu:mica_vein',vein =>{
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Kyanite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Mica).size(1, 1))
                .layer(l => l.weight(2).mat(GTMaterials.Aluminium).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Pollucite).size(1, 1))
            )
        )
    })
})
GTCEuServerEvents.fluidVeins(event => {

    event.add('gtceu:fluorine_vein', vein => {
        vein.dimensions('aether:the_aether')
        vein.fluid(() => Fluid.of('gtceu:fluorine').fluid)
        vein.weight(150)
        vein.minimumYield(120)
        vein.maximumYield(600)
        vein.depletionAmount(2)
        vein.depletionChance(1)
        vein.depletedYield(50)
    });
    event.add('gtceu:oxygen_vein', vein => {
        vein.dimensions('aether:the_aether')
        vein.fluid(() => Fluid.of('gtceu:oxygen').fluid)
        vein.weight(200)
        vein.minimumYield(120)
        vein.maximumYield(720)
        vein.depletionAmount(2)
        vein.depletionChance(1)
        vein.depletedYield(50)
    });
    event.add('gtceu:nitrogen_vein', vein => {
        vein.dimensions('aether:the_aether')
        vein.fluid(() => Fluid.of('gtceu:nitrogen').fluid)
        vein.weight(800)
        vein.minimumYield(120)
        vein.maximumYield(900)
        vein.depletionAmount(2)
        vein.depletionChance(1)
        vein.depletedYield(50)
    });
    event.add('gtceu:hydrogen_vein', vein => {
        vein.dimensions('aether:the_aether')
        vein.fluid(() => Fluid.of('gtceu:hydrogen').fluid)
        vein.weight(100)
        vein.minimumYield(120)
        vein.maximumYield(600)
        vein.depletionAmount(2)
        vein.depletionChance(1)
        vein.depletedYield(50)
    });
})