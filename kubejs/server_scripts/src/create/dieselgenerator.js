//priority: -10
ServerEvents.recipes(event => {
  event.shaped(Item.of('createdieselgenerators:engine_piston', 2), [
    "AB ",
    "BC ",
    "  D"
  ], {
    A: "kubejs:steel_mechanism",
    B: "gtceu:iron_plate",
    C: "minecraft:piston",
    D: "gtceu:zinc_ingot"
  }).id('createdieselgenerators:crafting/engine_piston')
  event.shaped(
    Item.of('createdieselgenerators:pumpjack_hole', 1), [
    "ABA",
    "CDC",
    "EFE"
  ], {
    A: 'kubejs:steel_mechanism',
    B: 'create:hose_pulley',
    C: 'create:copper_casing',
    D: 'kubejs:steel_casing',
    E: 'minecraft:chain',
    F: 'create:fluid_pipe'
  }).id('createdieselgenerators:crafting/pumpjack_hole')
  event.shaped(
    Item.of('createdieselgenerators:pumpjack_bearing', 1), [
    "   ",
    "ABA",
    "ACA"
  ], {
    A: 'gtceu:steel_plate',
    B: 'create:mechanical_bearing',
    C: 'kubejs:heavy_machinery_casing'
  }).id('createdieselgenerators:crafting/pumpjack_bearing')
  event.shaped(
    Item.of('createdieselgenerators:basin_lid', 1), [
    "   ",
    "ABA",
    "CDC"
  ], {
    A: 'minecraft:redstone',
    B: 'gtceu:double_steel_plate',
    C: 'gtceu:steel_plate',
    D: 'minecraft:clock'
  }).id('createdieselgenerators:crafting/basin_lid')
  event.replaceInput({ id: 'createdieselgenerators:mechanical_crafting/pumpjack_crank' }, 'gtceu:andesite_alloy_ingot', 'gtceu:andesite_alloy_plate')
  event.replaceInput({ id: 'createdieselgenerators:mechanical_crafting/pumpjack_crank' }, 'gtceu:iron_plate', 'gtceu:steel_plate')
  event.replaceInput({ id: 'createdieselgenerators:mechanical_crafting/pumpjack_crank' }, 'gtceu:zinc_ingot', 'gtceu:zinc_plate')
  event.remove({ id: 'createdieselgenerators:crafting/engine_piston_from_rods' })
  event.recipes.create.item_application('kubejs:steel_casing', ['gtceu:treated_wood_planks', 'gtceu:wrought_iron_plate'])
  event.recipes.create.item_application('kubejs:heavy_machinery_casing', ['kubejs:steel_casing', 'gtceu:steel_plate'])

  event.recipes.create.mixing(Fluid.of('gtceu:emulsified_bitumen_slurry',1000),[Fluid.of('gtceu:bitumen',800),Fluid.of('gtceu:simple_emulgator',200)])
  event.recipes.create.compacting([Fluid.of('gtceu:emulsified_bitumen',1000),'2x gtceu:oil_refined_residues_dust','1x gtceu:salt_dust'],Fluid.of('gtceu:emulsified_bitumen_slurry',1000))
  event.recipes.create.mixing(Fluid.of('gtceu:pure_bitumen',1000),[Fluid.of('gtceu:emulsified_bitumen',800),Fluid.of('gtceu:simple_demulsifier',200)])
  event.recipes.create.mixing(Fluid.of('gtceu:simple_emulgator',1000),['6x gtceu:soda_ash_dust','kubejs:tallow',Fluid.of('minecraft:water',1000)])
  event.recipes.create.mixing(Fluid.of('gtceu:simple_demulsifier',1000),['kubejs:tallow',Fluid.of('gtceu:diluted_sulfuric_acid',1000)])
  event.recipes.create.compacting('gtceu:petroleum_coke_gem',Fluid.of('gtceu:petroleum_coke',144))

  event.replaceOutput({id:'createdieselgenerators:compacting/plant_oil'},Fluid.of('createdieselgenerators:plant_oil'),Fluid.of('gtceu:seed_oil'))
  event.remove({id:'createdieselgenerators:mixing/asphalt_block'})
  event.recipes.create.mixing('4x createdieselgenerators:asphalt_block',['minecraft:sand','minecraft:gravel',Fluid.of('gtceu:pure_bitumen',100)]).heated()
  event.remove({id:'createdieselgenerators:crafting/asphalt_block'})
  event.remove({id:'createdieselgenerators:mixing/biodiesel'})
  event.recipes.create.mixing(Fluid.of('gtceu:raw_bio_diesel',200),[Fluid.of('gtceu:ethanol',100),Fluid.of('gtceu:seed_oil',100)])
  event.custom({
    "type": "createdieselgenerators:basin_fermenting",
    "ingredients": [
      {
        "tag": "forge:fermentable"
      },
      {
        "fluid": "minecraft:water",
        "amount": 200
      },
      {
        "item": "gtceu:small_rich_soil_dust"
      }
    ],
    "processingTime": 200,
    "results": [
      {
        "fluid": "gtceu:ethanol_mixture",
        "amount": 200
      },
      {
        "item": "gtceu:normal_yeast_dust",
        "chance": 0.1
      },
      {
        "item": "gtceu:small_rich_soil_dust",
        "chance": 0.8
      }
    ]
  }).id('createdieselgenerators:basin_fermenting/fermentable')

  event.custom({
    "type": "createdieselgenerators:distillation",
    "ingredients": [
        {
            "fluid": "gtceu:ethanol_mixture",
            "amount": 100
        }
    ],
    "heatRequirement": "heated",
    "processingTime": 200,
    "results": [
        {
            "fluid": "gtceu:fermented_biomass",
            "amount": 30
        },
        {
            "fluid": "gtceu:ethanol",
            "amount": 50
        },
        {
            "fluid": "gtceu:methanol",
            "amount": 20
        }
    ]
  })
  event.custom({
    "type": "createdieselgenerators:distillation",
    "ingredients": [
      {
        "fluid": "alexscaves:acid",
        "amount": 100
      }
    ],
    "heatRequirement": "heated",
    "processingTime": 40,
    "results": [
      {
        "fluid": "gtceu:sulfuric_acid",
        "amount": 10
      },
      {
        "fluid": "gtceu:hydrochloric_acid",
        "amount": 25
      },
      {
        "fluid": "gtceu:nitrogen_dioxide",
        "amount": 15
      }
    ]
  })
  event.recipes.create.crushing(['3x gtceu:rich_soil_dust'],'farmersdelight:rich_soil')
  event.recipes.create.crushing(['3x gtceu:rich_soul_soil_dust'],'mynethersdelight:resurgent_soil')
})
