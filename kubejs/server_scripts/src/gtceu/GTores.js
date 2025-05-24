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
    event.add('gtceu:mars_mystery_fluid', vein =>{
        vein.dimensions('ad_astra:mars')
        vein.fluid(() => Fluid.of('gtceu:mystery_fluid').fluid)
        vein.weight(100)
        vein.minimumYield(120)
        vein.maximumYield(600)
        vein.depletionAmount(2)
        vein.depletionChance(1)
        vein.depletedYield(50)
    })
    event.add('gtceu:mars_mystery_fluid', vein =>{
        vein.dimensions('ad_astra:mars')
        vein.fluid(() => Fluid.of('gtceu:distilled_water').fluid)
        vein.weight(800)
        vein.minimumYield(120)
        vein.maximumYield(600)
        vein.depletionAmount(2)
        vein.depletionChance(1)
        vein.depletedYield(50)
    })
})