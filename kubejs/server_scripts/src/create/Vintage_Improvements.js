ServerEvents.tags('item', event => {
    event.add('vintageimprovements:curving_heads', 'gtceu:small_gear_extruder_mold')
    event.add('vintageimprovements:curving_heads', 'gtceu:gear_extruder_mold')
})

ServerEvents.recipes((event) => {
    const { vintageimprovements } = event.recipes

    let ingot = ['iron', 'gold','steel','copper']//不同的弹簧
        for (let i of ingot) {
        vintageimprovements.coiling(`gtceu:${i}_spring`, [`gtceu:long_${i}_rod`])
        vintageimprovements.coiling(`gtceu:small_${i}_spring`, [`gtceu:${i}_rod`])
    }
    let ingot1 = ['iron', 'gold','steel','copper','silver','bronze']//不同的金属箔
        for (let i of ingot1) {
        event.recipes.vintageimprovementsHammering(Item.of('3x gtceu:bronze_foil'),`#forge:plates/${i}`,3)
    }

    vintageimprovements.turning(//车床配方（铁）按杆，螺栓，螺丝排列
        'gtceu:iron_rod','minecraft:iron_ingot')
        .processingTime(20)
    vintageimprovements.turning(
        '2x gtceu:iron_bolt','gtceu:iron_rod')
        .processingTime(40)    
    vintageimprovements.turning(
        'gtceu:iron_screw','gtceu:iron_bolt')
        .processingTime(40)   

    vintageimprovements.turning(//车床配方（金)
        'gtceu:gold_rod','minecraft:gold_ingot')
        .processingTime(200)
    vintageimprovements.turning(
        '2x gtceu:gold_bolt','gtceu:gold_rod')
        .processingTime(40)    
    vintageimprovements.turning(
        'gtceu:gold_screw','gtceu:gold_bolt')
        .processingTime(100)   

    vintageimprovements.turning(//车床配方（红色合金)
        'gtceu:red_alloy_rod','gtceu:red_alloy_ingot')
        .processingTime(100)
    vintageimprovements.turning(
        '2x gtceu:red_alloy_bolt','gtceu:red_alloy_rod')
        .processingTime(40)    
    vintageimprovements.turning(
        'gtceu:red_alloy_screw','gtceu:red_alloy_bolt')
        .processingTime(40)   

    vintageimprovements.turning(//车床配方（青铜)
        'gtceu:bronze_rod','gtceu:bronze_ingot')
        .processingTime(60)
    vintageimprovements.turning(
        '2x gtceu:bronze_bolt','gtceu:bronze_rod')
        .processingTime(40)    
    vintageimprovements.turning(
        'gtceu:bronze_screw','gtceu:bronze_bolt')
        .processingTime(40)
    
    vintageimprovements.turning(//车床配方（锻铁)
        'gtceu:wrought_iron_rod','gtceu:wrought_iron_ingot')
        .processingTime(60)
    vintageimprovements.turning(
        '2x gtceu:wrought_iron_bolt','gtceu:wrought_iron_rod')
        .processingTime(40)    
    vintageimprovements.turning(
        'gtceu:wrought_iron_screw','gtceu:wrought_iron_bolt')
        .processingTime(40)

    vintageimprovements.turning(//车床配方（钢)
        'gtceu:steel_rod','gtceu:steel_ingot')
        .processingTime(100)
    vintageimprovements.turning(
        '2x gtceu:steel_bolt','gtceu:steel_rod')
        .processingTime(40)    
    vintageimprovements.turning(
        'gtceu:steel_screw','steel_bolt')
        .processingTime(40)

    vintageimprovements.turning(//车床配方（黄铜)
        'gtceu:brass_rod','gtceu:brass_ingot')
        .processingTime(60)
    vintageimprovements.turning(
        '2x gtceu:brass_bolt','gtceu:brass_rod')
        .processingTime(40)    
    vintageimprovements.turning(
        'gtceu:brass_screw','brass_bolt')
        .processingTime(40)
    
    vintageimprovements.turning(//车床配方（粗青铜合金)
        'gtceu:potin_rod','gtceu:potin_ingot')
        .processingTime(60)
    vintageimprovements.turning(
        '2x gtceu:potin_bolt','gtceu:potin_rod')
        .processingTime(40)    
    vintageimprovements.turning(
        'gtceu:potin_screw','gtceu:potin_bolt')
        .processingTime(40)


    let ingot2 = ['iron', 'bronze','wrought_iron','steel','brass',]
    for (let i of ingot2) {
        event.recipes.create.sequenced_assembly([//齿轮(前小后大)
            `gtceu:small_${i}_gear`], 
            `gtceu:${i}_plate`, [
            event.recipes.createDeploying(`gtceu:${i}_plate`, [`gtceu:${i}_plate`, `gtceu:${i}_rod`]),
            vintageimprovements.curving(`gtceu:${i}_plate`, `gtceu:${i}_plate`).head('gtceu:small_gear_extruder_mold'),])
            .transitionalItem(`gtceu:${i}_plate`)
            .loops(1)
        event.recipes.create.sequenced_assembly([
            `gtceu:${i}_gear`], 
            `gtceu:${i}_plate`, [
            event.recipes.createDeploying(`gtceu:${i}_plate`, [`gtceu:${i}_plate`, `gtceu:${i}_plate`]),        
            event.recipes.createDeploying(`gtceu:${i}_plate`, [`gtceu:${i}_plate`, `gtceu:${i}_rod`]),
            event.recipes.createDeploying(`gtceu:${i}_plate`, [`gtceu:${i}_plate`, `gtceu:${i}_plate`]),
            event.recipes.createDeploying(`gtceu:${i}_plate`, [`gtceu:${i}_plate`, `gtceu:${i}_rod`]),    
            vintageimprovements.curving(`gtceu:${i}_plate`, `gtceu:${i}_plate`).head('gtceu: gear_extruder_mold'),])
            .transitionalItem(`gtceu:${i}_plate`)
            .loops(1)}

    event.recipes.create.sequenced_assembly([//粗青铜合金大齿轮
            `gtceu:potin_gear`], 
            `gtceu:potin_plate`, [
            event.recipes.createDeploying(`gtceu:potin_plate`, [`gtceu:potin_plate`, `gtceu:potin_plate`]),        
            event.recipes.createDeploying(`gtceu:potin_plate`, [`gtceu:potin_plate`, `gtceu:potin_rod`]),
            event.recipes.createDeploying(`gtceu:potin_plate`, [`gtceu:potin_plate`, `gtceu:potin_plate`]),
            event.recipes.createDeploying(`gtceu:potin_plate`, [`gtceu:potin_plate`, `gtceu:potin_rod`]),    
            vintageimprovements.curving(`gtceu:potin_plate`, `gtceu:potin_plate`).head('gtceu:_gear_extruder_mold'),])
            .transitionalItem(`gtceu:potin_plate`)
            .loops(1)

    event.recipes.create.sequenced_assembly([//铜小齿轮
        'gtceu:small_copper_gear'], 
        'gtceu:copper_plate', [
        event.recipes.createDeploying('gtceu:copper_plate', ['gtceu:copper_plate', 'gtceu:copper_rod']),
        vintageimprovements.curving('gtceu:copper_plate', 'gtceu:copper_plate').head('gtceu:small_gear_extruder_mold'),])
        .transitionalItem('gtceu:copper_plate')
        .loops(1)
    
    
    })