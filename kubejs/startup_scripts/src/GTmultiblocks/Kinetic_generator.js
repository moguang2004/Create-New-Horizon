GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	event.create("kinetic_generator")
		.category("kinetic_generator")
		.setMaxIOSize(0, 0, 1, 0)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.ARC)

})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create("kinetic_generator", "multiblock", holder => new $CoilWorkableElectricMultiblockMachine(holder))
            .rotationState(RotationState.NON_Y_AXIS)
            .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
            .recipeType("kinetic_generator")
            .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
            .recipeModifier((/**@type {$WorkableElectricMultiblockMachine}*/machine, recipe) => {
                const kinetic = machine.getParts().find(part => part instanceof $IKineticMachine);
                if (!kinetic) {
                    return null;
                }
                let pos = machine.pos
                switch(machine.frontFacing){
                    case Direction.NORTH: pos = pos.offset(0,0,1)
                    case Direction.SOUTH: pos = pos.offset(0,0,-1)
                    case Direction.WEST: pos = pos.offset(1,0,0)
                    case Direction.EAST: pos = pos.offset(-1,0,0)
                }
                let efficiency = 0.9 + 0.1 * machine.getCoilTier()
                if(machine.level.getBlock(pos) == 'gtceu:graphene_block'){
                    efficiency += 0.1
                }
                let energyoutput = Math.abs(kinetic.getKineticHolder().getSpeed()) * kinetic.getKineticDefinition().torque * efficiency / 160
                machine.getHolder().self().persistentData.putFloat('energyoutput', energyoutput)
                machine.getHolder().self().persistentData.putFloat('efficiency', efficiency)
                const modifiedRecipe = recipe.copy();
                $RecipeHelper.setOutputEUt(modifiedRecipe, Math.floor(energyoutput));
                return modifiedRecipe;
            }, true)
            .pattern(definition => FactoryBlockPattern.start()
                .aisle("CCTP", "CCTP", "  TP")
                .aisle("CCTP", "EAGK", "CCTP")
                .aisle("CCTP", "CSTP", "  TP")
                .where("S", Predicates.controller(Predicates.blocks(definition.get())))
                .where("G", Predicates.blocks('gtceu:steel_gearbox'))
                .where("A", Predicates.blocks('gtceu:coke_block')
                            .or(Predicates.blocks('gtceu:graphene_block')))
                .where("C", Predicates.blocks('gtceu:solid_machine_casing')
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                )
                .where("P", Predicates.blocks('gtceu:solid_machine_casing')
                    .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setExactLimit(1))
                )
                .where("K", Predicates.abilities(PartAbility.INPUT_KINETIC).setExactLimit(1))
                .where("E", Predicates.abilities(PartAbility.OUTPUT_ENERGY).setExactLimit(1))
                .where('T', Predicates.heatingCoils())
                .build()
            )
            .additionalDisplay((machine, l) => {
                if (machine.isFormed()) {
                    let outputEnergy = machine.getHolder().self().persistentData.getFloat('energyoutput')
                    let efficiency = machine.getHolder().self().persistentData.getFloat('efficiency')
                    if (outputEnergy == null) {
                        outputEnergy = 0
                    }
                    if (efficiency == null) {
                        efficiency = 0.9 + 0.1 * machine.getCoilTier()
                    }
                    let voltageName = GTValues.VNF[$GTUtil.getTierByVoltage(outputEnergy)]
                    l.add(l.size(), Text.translate("multiblock.ctnh.kinetic_generator", $FormattingUtil.formatNumbers(outputEnergy), voltageName))
                    l.add(l.size(), Text.translate('multiblock.ctnh.kinetic_generator.efficiency', (efficiency*100).toFixed(0)))
                }
            })
            .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_solid_steel","gtceu:block/multiblock/generator/large_steam_turbine", false)
})