import { $WindmillBearingBlockEntity } from "packages/com/simibubi/create/content/contraptions/bearing/$WindmillBearingBlockEntity"

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    const LocalizationUtils = Java.loadClass('com.lowdragmc.lowdraglib.utils.LocalizationUtils')
    GTRecipeTypes.register('windmill_control_center','multiblock')
        .setMaxIOSize(0, 0, 1, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_GAS_COLLECTOR, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.TURBINE)
        .addDataInfo(data => {
            return LocalizationUtils.format('ctnh.stress_output', (data.getFloat('output_stress')).toFixed(1))
        })
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('windmill_control_center', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('windmill_control_center')
        .recipeModifier((machine,recipe) =>{
            let kineticoutput = machine.holder.self().getPersistentData.getFloat("totaloutput")
            let efficiency = machine.holder.self().getPersistentData.getFloat("efficiency")
            let copyRecipe = recipe.copy()
            copyRecipe.outputs.put(StressRecipeCapability.CAP, copyRecipe.copyContents(copyRecipe.outputs, ContentModifier.of(efficiency,kineticoutput)).get(StressRecipeCapability.CAP))
            return copyRecipe
        })
        .appearanceBlock(() => Block.getBlock('create:andesite_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("AAAAAAAA@AAAAAAAAA") 
            .where("A", Predicates.blocks("create:andesite_casing")
                .or(Predicates.abilities(PartAbility.OUTPUT_KINETIC)))
            // .where("#", Predicates.any())
            // .where("B", Predicates.blocks("minecraft:smooth_stone"))
            // .where("C", Predicates.blocks("gtceu:treated_wood_fence"))
            // .where("D", Predicates.blocks("gtceu:treated_wood_planks"))
            // .where("E", Predicates.blocks("minecraft:water"))
            // .where("F", Predicates.blocks("gtceu:treated_wood_stairs"))
            // .where("G", Predicates.blocks("create:andesite_casing"))
            // .where("H", Predicates.blocks("gtceu:treated_wood_frame"))
            // .where("I", Predicates.blocks("minecraft:stone_bricks")
            //         .or(Predicates.abilities(PartAbility.OUTPUT_KINETIC))
            //         .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .onWorking((/**@type {$WorkableMultiblockMachine}*/machine) =>{
            let level = machine.level
            let pos = machine.pos
            if(machine.getOffsetTimer() % 20 == 0) {
                let WindMillAround = [];
                let TotalOutput = 0;
                for (let x = -10; x < 11; x++) {
                    for (let y = -10; y < 11; y++) {
                        for (let z = -10; z < 11; z++) {
                            if (x == 0 && y == 0 && z == 0) {
                            } else {
                                let kineticBlockEntity = level.getBlockEntity(pos.offset(x, y, z))
                                if (kineticBlockEntity != null && kineticBlockEntity instanceof $WindmillBearingBlockEntity ) {
                                    let speed = kineticBlockEntity.getGeneratedSpeed();
                                    if(speed != 0){
                                        WindMillAround.push(speed);
                                        TotalOutput += speed * 512;
                                    }
                                }
                            }
                        }
                    }
                }
                let Efficency = WindMillAround.length;
                machine.holder.self().getPersistentData.putFloat("totaloutput",TotalOutput)
                machine.holder.self().getPersistentData.putFloat("efficiency",Efficency)
            }
            return true;
        })
        .workableCasingRenderer('create:block/andesite_casing', 'gtceu:block/machines/miner', false)
})