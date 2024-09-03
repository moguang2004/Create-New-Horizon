// import { $WorkableElectricMultiblockMachine } from "packages/com/gregtechceu/gtceu/api/machine/multiblock/$WorkableElectricMultiblockMachine"
// import { $TempModifier } from "packages/com/momosoftworks/coldsweat/api/temperature/modifier/$TempModifier"
// import { $Placement$Duplicates } from "packages/com/momosoftworks/coldsweat/api/util/$Placement$Duplicates"
// import { $Temperature } from "packages/com/momosoftworks/coldsweat/api/util/$Temperature"
// import { $Temperature$Trait } from "packages/com/momosoftworks/coldsweat/api/util/$Temperature$Trait"
// import { $Entity } from "packages/net/minecraft/world/entity/$Entity"

// GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
//     event.create('underfloor_heating')
//         .category('ctnh')
//         .setMaxIOSize(2, 1, 1, 1)
//         .setEUIO('in')
//         .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
//         .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_STEAM, FillDirection.LEFT_TO_RIGHT)
//         .setSound(GTSoundEntries.BOILER)
// })
// GTCEuStartupEvents.registry('gtceu:machine', event => {
//     event.create('underfloor_heating_system', 'multiblock')
//         .rotationState(RotationState.NON_Y_AXIS)
//         .recipeType('underfloor_heating')
//         //.appearanceBlock(GTBlocks.get('kubejs:mana_steel_casing'))
//         .pattern(definition => FactoryBlockPattern.start()
//             .aisle("AAAAAAAAAAAAAAAA") 
//             .aisle("AAAAAAAABAAAAAAA") 
//             .aisle("AAAAAAAABAAAAAAA") 
//             .aisle("AAAAAAAABAAAAAAA") 
//             .aisle("AAAAAAAABAAAAAAA") 
//             .aisle("AAAAAAAABAAAAAAA") 
//             .aisle("AAAAAAAABAAAAAAA") 
//             .aisle("AAAAAAAABAAAAAAA") 
//             .aisle("AAAAAAAABAAAAAAA") 
//             .aisle("AAAAAAAABAAAAAAA") 
//             .aisle("AAAAAAAABAAAAAAA") 
//             .aisle("AAAAAAAABAAAAAAA") 
//             .aisle("AAAAAAAABAAAAAAA") 
//             .aisle("AAAAAAAABAAAAAAA") 
//             .aisle("AAAAAAAABAAAAAAA") 
//             .aisle("AAAAAAAA@AAAAAAA") 
//             .where("A", Predicates.blocks("create:copper_shingles")
//             .or(Predicates.autoAbilities(definition.getRecipeTypes())))
//             .where("B", Predicates.blocks("gtceu:bronze_pipe_casing"))
//             .where("@", Predicates.controller(Predicates.blocks(definition.get())))
//             .build()
//         )
//         .onWorking((/**@type {$WorkableElectricMultiblockMachine}*/machine) =>{
//             let pos = machine.self().getPos()
//             let level = machine.level
//             let facing = machine.frontFacing
//             let aabb
//             if(facing == Direction.NORTH){
//                 aabb = AABB.of(pos.x - 23,pos.y,pos.z - 16,pos.x + 24, pos.y + 10, pos.z + 31)
//             }
//             else if(facing == Direction.SOUTH){
//                 aabb = AABB.of(pos.x - 24, pos.y, pos.z - 31, pos.x + 23, pos.y + 10, pos.z + 16)
//             }
//             else if(facing == Direction.EAST){
//                 aabb = AABB.of(pos.x - 31, pos.y, pos.z - 23, pos.x + 16, pos.y + 10, pos.z + 24)
//             }
//             else{
//                 aabb = AABB.of(pos.x - 16, pos.y, pos.z - 24, pos.x + 31, pos.y + 10, pos.z + 23)
//             }
//             let TemperatureModifier = new $TempModifier()
//             level.getEntitiesWithin(aabb).forEach((/**@type {$Entity}*/entity) =>{
//                 if(entity.player){
//                     $Temperature.addModifiers(entity,TemperatureModifier,$Temperature$Trait.WORLD,$Placement$Duplicates.ALLOW)
//                 }
//             })
//             return true
//         }
//         )
//         .workableCasingRenderer('create:block/copper/copper_shingles', 'gtceu:block/multiblock/multiblock_tank', false)
// })
