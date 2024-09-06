ServerEvents.recipes(event => {
    event.remove({ output: 'gtceu:fermented_biomass' })
    //event.recipes.gtceu.fermenting('yeast')
    let yeast = [
        {
            name: 'normal',
            raw_material: 'minecraft:brown_mushroom',
            temperature: 1000,
            eu: 96,
            duration: 100,
            output: [Fluid.of('gtceu:ethanol', 500), Fluid.of('gtceu:acetic_acid', 250), Fluid.of('gtceu:methane', 250)]
        },
        {
            name: 'crimson',
            raw_material: 'minecraft:crimson_fungus',
            temperature: 1800,
            eu: 480,
            duration: 200,
            output: [Fluid.of('gtceu:ethane', 250), Fluid.of('gtceu:benzene', 500), Fluid.of('gtceu:butane', 250)]
        },
        {
            name: 'wraped',
            raw_material: 'minecraft:wraped_fungus',
            temperature: 1500,
            eu: 480,
            duration: 200,
            output: [Fluid.of('gtceu:ethane', 250), Fluid.of('gtceu:acetone', 500), Fluid.of('gtceu:butane', 250)]
        },
        {
            name: 'end',
            raw_material: 'betterend:globulagus',
            temperature: 2200,
            eu: 480,
            duration: 200,
            output: [Fluid.of('gtceu:ethylene', 500), Fluid.of('gtceu:phenol', 100), Fluid.of('gtceu:ethanol', 150), Fluid.of('gtceu:propene', 250)]
        },
        {
            name: 'fluorescence',
            raw_material: 'twilightforest:mushgloom',
            temperature: 2500,
            eu: 480,
            duration: 100,
            output: [Fluid.of('gtceu:butadiene', 500), Fluid.of('gtceu:amino_acid', 250), Fluid.of('gtceu:chlorobenzene', 150), Fluid.of('gtceu:chloromethane', 100)]
        },
        {
            name: 'light',
            raw_material: 'deep_aether:lightcap_mushrooms',
            temperature: 3000,
            eu: 1920,
            duration: 200,
            output: [Fluid.of('gtceu:bisphenol_a', 100), Fluid.of('gtceu:octane', 250), Fluid.of('gtceu:phenol', 250), Fluid.of('gtceu:amino_acid', 400)]
        }]
    let nutritions = ['minecraft:sugar', '3x gtceu:lignin_dust']
    yeast.forEach(y => {
        nutritions.forEach(nutrition => {
            if (y.name == 'fluorescence' || y.name == 'light') {
                event.recipes.gtceu.fermenting(y.name + '_yeast0' + nutrition.path)
                    .EUt(y.eu)
                    .inputFluids(Fluid.of('gtceu:' + y.name + '_yeast_seed_liquid', 500))
                    .outputFluids(Fluid.of('gtceu:' + y.name + '_yeast_liquid', 500))
                    .itemInputs(nutrition)
                    .itemInputs('gtceu:small_salt_dust')
                    .itemInputs('gtceu:small_ammonium_chloride_dust')
                    .blastFurnaceTemp(y.temperature)
                    .duration(y.duration)
            }
            else {
                event.recipes.gtceu.fermenting(y.name + '_yeast0' + nutrition.path)
                    .EUt(y.eu)
                    .inputFluids(Fluid.of('gtceu:' + y.name + '_yeast_seed_liquid', 500))
                    .outputFluids(Fluid.of('gtceu:' + y.name + '_yeast_liquid', 500))
                    .itemInputs(nutrition)
                    .itemInputs('gtceu:small_salt_dust')
                    .blastFurnaceTemp(y.temperature)
                    .duration(y.duration)
            }
        })
        event.recipes.gtceu.mixer(y.name + '_yeast1')
            .EUt(30)
            .itemInputs('gtceu:' + y.name + '_yeast_dust')
            .inputFluids(Fluid.of('minecraft:water', 1000))
            .outputFluids(Fluid.of('gtceu:' + y.name + '_yeast_seed_liquid', 1000))
            .duration(40)
        event.recipes.gtceu.mixer(y.name + '_yeast2')
            .EUt(30)
            .inputFluids(Fluid.of('gtceu:' + y.name + '_yeast_liquid', 1000))
            .notConsumable('gtceu:lyase_dust')
            .outputFluids(Fluid.of('gtceu:' + y.name + '_yeast_extract_liquid', 1000))
            .duration(40)
        event.recipes.gtceu.centrifuge(y.name + '_yeast3')
            .EUt(30)
            .inputFluids(Fluid.of('gtceu:' + y.name + '_yeast_liquid', 500))
            .outputFluids(Fluid.of('gtceu:waste_nutrition_liquid', 500))
            .itemOutputs('2x gtceu:' + y.name + '_yeast_dust')
            .duration(40)
        event.recipes.gtceu.mixer(y.name + '_yeast4')
            .EUt(30)
            .inputFluids(Fluid.of('gtceu:' + y.name + '_yeast_liquid', 500))
            .inputFluids(Fluid.of('minecraft:water', 1500))
            .outputFluids(Fluid.of('gtceu:' + y.name + '_yeast_seed_liquid', 2000))
            .duration(40)
        event.recipes.gtceu.centrifuge(y.name + '_yeast5')
            .EUt(120)
            .inputFluids(Fluid.of('gtceu:' + y.name + '_yeast_extract_liquid', 1000))
            .outputFluids(y.output)
            .duration(100)
        event.recipes.gtceu.macerator(y.name + '_yeast6')
            .EUt(120)
            .itemInputs(y.raw_material)
            .itemOutputs('2x gtceu:' + y.name + '_yeast_dust')
            .duration(40)
    })
    event.recipes.gtceu.macerator('normal_yeast_from_red_mushroom')
        .EUt(120)
        .itemInputs('minecraft:red_mushroom')
        .itemOutputs('2x gtceu:normal_yeast_dust')
        .duration(40)
    event.recipes.gtceu.macerator('end_yeast_from_amaranita_mushroom')
        .EUt(120)
        .itemInputs('betterend:small_amaranita_mushroom')
        .itemOutputs('2x gtceu:end_yeast_dust')
        .duration(40)
    event.recipes.gtceu.macerator('end_yeast_from_mossy_glowshroom')
        .EUt(120)
        .itemInputs('betterend:mossy_glowshroom_cap')
        .itemOutputs('4x gtceu:end_yeast_dust')
        .duration(80)
    Ingredient.of('#forge:foods').getItemTypes().forEach(food => {
        if(food.toString() != 'pumpkin_pie'){
        let nutrition = food.getFoodProperties().getNutrition()
        let saturation = food.getFoodProperties().getSaturationModifier()
        //console.info(food.toString())
        //console.info(food.getFoodProperties().getNutrition())
        event.recipes.gtceu.digesting(food.toString() + '_digestion')
            .EUt(30)
            .itemInputs(food.asIngredient().getItemIds())
            .inputFluids(Fluid.of('minecraft:water', 100 * Math.floor(nutrition + saturation / 2)))
            .outputFluids(Fluid.of('gtceu:biomass', 100 * Math.floor(nutrition + saturation / 2)))
            .circuit(0)
            .duration(100)
        event.recipes.gtceu.digesting(food.toString() + '_digestion2')
            .EUt(120)
            .itemInputs(food.asIngredient().getItemIds())
            .chancedOutput('gtceu:escherichia_coli_dust', 500 * Math.floor(nutrition + saturation / 2), 500)
            .inputFluids(Fluid.of('minecraft:water', 75 * Math.floor(nutrition + saturation / 2)))
            .outputFluids(Fluid.of('gtceu:fermented_biomass', 75 * Math.floor(nutrition + saturation / 2)))
            .circuit(1)
            .duration(100)
        }
    })
    event.recipes.gtceu.digesting('bio_chaff_digestion')
        .EUt(30)
        .itemInputs('gtceu:bio_chaff')
        .inputFluids(Fluid.of('minecraft:water', 1000))
        .outputFluids(Fluid.of('gtceu:biomass', 1000))
        .circuit(0)
        .duration(200)
    event.recipes.gtceu.digesting('bio_chaff_digestion2')
        .EUt(120)
        .itemInputs('gtceu:bio_chaff')
        .itemOutputs('gtceu:fertilizer')
        .inputFluids(Fluid.of('minecraft:water', 800))
        .outputFluids(Fluid.of('gtceu:fermented_biomass', 800))
        .circuit(1)
        .duration(200)
    event.remove({ id: 'gtceu:pyrolyse_oven/bio_chaff_to_fermented_biomass' })
    event.remove({ id: 'gtceu:pyrolyse_oven/bio_chaff_to_biomass' })
    event.remove({ id: 'gtceu:fermenter/fermented_biomass' })
    event.recipes.gtceu.fermenting('fermented')
        .EUt(96)
        .inputFluids(Fluid.of('gtceu:biomass', 1000))
        .outputFluids(Fluid.of('gtceu:fermented_biomass', 1500))
        .itemInputs('2x gtceu:normal_yeast_dust')
        .duration(200)
        .blastFurnaceTemp(1500)
    event.recipes.gtceu.macerator('lyase')
        .EUt(30)
        .itemInputs('minecraft:shroomlight')
        .itemOutputs('4x gtceu:lignin_dust')
        .chancedOutput('gtceu:tiny_lyase_dust', 1000, 500)
        .duration(200)
    event.recipes.gtceu.macerator('lignin')
        .EUt(30)
        .itemInputs('farmersdelight:tree_bark')
        .itemOutputs('2x gtceu:wood_dust')
        .chancedOutput('2x gtceu:lignin_dust', 7500, 500)
        .chancedOutput('gtceu:lignin_dust', 5000, 0)
        .chancedOutput('gtceu:lignin_dust', 1000, 1000)
        .duration(40)
    event.recipes.gtceu.centrifuge('lignin2')
        .EUt(30)
        .itemInputs('gtceu:wood_dust')
        .itemOutputs('gtceu:cellulose_dust')
        .chancedOutput('gtceu:lignin_dust', 5000, 250)
        .duration(40)
})
let meat = ['nethersdelight:hoglin_loin', 'twilightforest:raw_meef', 'twilightforest:raw_venison', 'alexscaves:dinosaur_chop', 'twilightdelight:raw_insect']