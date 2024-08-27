const { $WorkableElectricMultiblockMachine } = require("packages/com/gregtechceu/gtceu/api/machine/multiblock/$WorkableElectricMultiblockMachine")
const { $GTRecipe } = require("packages/com/gregtechceu/gtceu/api/recipe/$GTRecipe")
const { $FormattingUtil } = require("packages/com/gregtechceu/gtceu/utils/$FormattingUtil")

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('water_power')
        .category('ctnh')
        .setMaxIOSize(0, 0, 1, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
    const EURecipeCapability = Java.loadClass('com.gregtechceu.gtceu.api.capability.recipe.EURecipeCapability')
    const $GTUtil = Java.loadClass('com.gregtechceu.gtceu.utils.GTUtil')
    event.create('water_power_station', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('water_power')
        .recipeModifier((machine, /**@type {$GTRecipe}*/recipe) => {
            let random = Math.random() * 0.4 + 0.6
            let water = machine.getHolder().self().persistentData.getInt('water')
            if (water == null) {
                water = 0
            }
            let newrecipe = recipe.copy()
            newrecipe.tickOutputs.put(EURecipeCapability.CAP, newrecipe.copyContents(newrecipe.tickOutputs, ContentModifier.of(water * random / 100, 0)).get(EURecipeCapability.CAP))
            machine.getHolder().self().persistentData.putFloat('energy', water * random * 32 / 100)
            return newrecipe
        })
        //.appearanceBlock(GTBlocks.get('kubejs:manasteel_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("#BCB#", "#BCB#", "BBBBB", "#BBB#")
            .aisle("#B#B#", "#BDB#", "BEFEB", "#BGB#").setRepeatable(1, 15)
            .aisle("#C#C#", "#CDC#", "BEFEB", "#BCB#")
            .aisle("#CCC#", "#CCC#", "BBHBB", "#B@B#")
            .where("B", Predicates.blocks("gtceu:manasteel_frame"))
            .where("C", Predicates.blocks("kubejs:manasteel_casing"))
            .where("#", Predicates.any())
            .where("D", Predicates.heatingCoils())
            .where("E", Predicates.blocks("gtceu:steel_pipe_casing"))
            .where("F", Predicates.blocks("gtceu:steel_gearbox"))
            .where('G', Predicates.abilities(PartAbility.OUTPUT_ENERGY))
            .where('H', Predicates.abilities(PartAbility.IMPORT_FLUIDS))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .onWorking((/**@type {$WorkableElectricMultiblockMachine} */machine) => {
            let level = machine.level
            let length = machine.getParts().size() + 2
            let pos = machine.getPos()
            let water = 0
            for (let xoffset = -length + 1; xoffset < length; xoffset++) {
                for (let zoffset = -length + 1; zoffset < length; zoffset++) {
                    for (let yoffset = 0; yoffset > -4; yoffset--) {
                        if (Math.sqrt(Math.pow(xoffset, 2) + Math.pow(zoffset, 2)) <= length) {
                            if (level.getBlockState(pos.offset(xoffset, yoffset, zoffset)) == Blocks.WATER.defaultBlockState()) {
                                water++
                            }
                        }
                    }
                }
            }
            machine.getHolder().self().persistentData.putInt('water', water)
            return true
        })
        .additionalDisplay((machine, l) => {
            if (machine.isFormed()) {
                let water = machine.getHolder().self().persistentData.getInt('water')
                let outputEnergy = machine.getHolder().self().persistentData.getFloat('energy')
                let voltageName = GTValues.VNF[$GTUtil.getTierByVoltage(outputEnergy)]
                l.add(l.size(), Text.translate("multiblock.ctnh.water_power_station1", water.toFixed()))
                l.add(l.size(), Text.translate("multiblock.ctnh.water_power_station2", $FormattingUtil.formatNumbers(outputEnergy), voltageName))
            }
        })
        .workableCasingRenderer('kubejs:block/manasteel_casing', 'gtceu:block/multiblock/generator/large_steam_turbine', false)
})

//本多方块的创意来源于GTQT整合包，对其中的部分内容做了修改