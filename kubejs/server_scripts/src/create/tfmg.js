/*ServerEvents.recipes(event=>{
    event.replaceInput({},'tfmg:creosote','gtceu:creosote')
    event.replaceOutput({},'tfmg:creosote','gtceu:creosote')
    event.replaceInput({},'tfmg:coal_coke','gtceu:coke_gem')
    event.replaceOutput({},'tfmg:coal_coke','gtceu:coke_gem')
    event.replaceInput({},'tfmg:coke_dust','gtceu:coke_dust')
    event.replaceOutput({},'tfmg:coke_dust','gtceu:coke_dust')
    event.replaceInput({},'tfmg:sulfur_dust','gtceu:sulfur_dust')
    event.replaceOutput({},'tfmg:sulfur_dust','gtceu:sulfur_dust')
    event.replaceInput({},'tfmg:charcoal_dust','gtceu:charcoal_dust')
    event.replaceOutput({},'tfmg:charcoal_dust','gtceu:charcoal_dust')
    event.replaceInput({},'tfmg:cast_iron_ingot','gtceu:wrought_iron_ingot')
    event.replaceOutput({},'tfmg:cast_iron_ingot','gtceu:wrought_iron_ingot')
    event.replaceInput({},'tfmg:aluminum_ingot','gtceu:aluminium_ingot')
    event.replaceOutput({},'tfmg:aluminum_ingot','gtceu:aluminium_ingot')
    event.remove({id:'tfmg:mixing/cast_iron_ingot'})
    event.remove({id:'tfmg:crafting/pipes/cast_iron_pipe_vertical'})
    event.remove({id:'tfmg:crafting/pipes/cast_iron_pipe_horizontal'})
    event.shaped(
        Item.of('tfmg:cast_iron_pipe', 2),[
            " A ",
            " B ",
            " A "
          ],{
          A: 'gtceu:wrought_iron_ingot',
          B: 'gtceu:wrought_iron_plate',
        })
    event.shaped(
        Item.of('tfmg:turbine_blade', 1),[
          " A ",
          " B ",
          " A "
        ],{
          A: 'gtceu:iron_turbine_blade',
          B: 'create:propeller',
        })
    event.replaceOutput({id:'tfmg:distillation/heavy_oil'},'tfmg:sulfur_dust','gtceu:sulfur_dust')
    event.shapeless('2x tfmg:industrial_pipe','tfmg:steel_pipe')
    event.remove({id:'tfmg:stonecutting/industrial_pipe'})
    event.replaceInput({id:'tfmg:item_application/steel_casing'},'tfmg:hardened_planks','gtceu:treated_wood_planks')
    event.replaceInput({id:'tfmg:item_application/steel_casing'},'gtceu:steel_ingot','gtceu:wrought_iron_plate')
    event.replaceInput({id:'tfmg:sequenced_assembly/heavy_plate'},'gtceu:steel_ingot','gtceu:steel_plate')
    event.replaceInput({id:'tfmg:sequenced_assembly/turbine_engine'},'tfmg:screw','gtceu:steel_screw')
    event.remove({output:'tfmg:caution_block'})
    event.replaceInput({id:'tfmg:mechanical_crafting/pumpjack_crank'},'tfmg:rebar','gtceu:steel_rod')
    event.replaceInput({id:'tfmg:crafting/screwdriver'},'tfmg:rebar','gtceu:steel_rod')
    event.replaceInput({},'tfmg:screw','gtceu:steel_screw')
})
ServerEvents.recipes(event =>{
  let transitional = 'tfmg:unfinished_turbine_engine'
  event.recipes.create.sequenced_assembly([
    'tfmg:turbine_engine'
  ], 'tfmg:engine_base', [
    event.recipes.createDeploying(transitional, [transitional, 'gtceu:steel_plate']),
    event.recipes.createDeploying(transitional, [transitional, 'gtceu:steel_plate']),
    event.recipes.createDeploying(transitional, [transitional, 'gtceu:steel_screw']),
    event.recipes.createDeploying(transitional, [transitional, 'tfmg:steel_mechanism']),
    event.recipes.createDeploying(transitional, [transitional, 'tfmg:turbine_blade']),
    event.recipes.createFilling(transitional,[transitional,Fluid.of('gtceu:lubricant',1000)])
  ]).transitionalItem(transitional)
    .loops(1)
})





*/
