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
    })
})