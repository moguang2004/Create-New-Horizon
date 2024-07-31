GTCEuStartupEvents.registry('gtceu:machine',event =>{
    event.create('blaze_blast_furnace','multiblock',(holder) => new $CoilWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('electric_blast_furnace')
        .recipeModifier((machine,recipe) =>{
            let newrecipe = GTRecipeModifiers.ebfOverclock(machine,recipe)
            let parallel = 1
            if(newrecipe.duration < 1){
                parallel = 1/newrecipe.duration
            }
            return GTRecipeModifiers.accurateParallel(machine,newrecipe,parallel,false).getFirst()
        })
        //.appearanceBlock('kubejs:blaze_blast_frunace_casing')
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('GGG', 'MMM', 'MMM', 'GGG')
            .aisle('GGG', 'M M', 'M M', 'GBG')
            .aisle('GKG', 'MMM', 'MMM', 'GGG')
            .where('K',Predicates.controller(Predicates.blocks(definition.get())))
            .where('M',Predicates.heatingCoils())
            .where('B',Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1))
            .where('G',Predicates.blocks('kubejs:blaze_blast_furnace_casing').setMinGlobalLimited(4)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE)).setMinGlobalLimited(1)
                )
            .where(' ',Predicates.air())
            .build()
        )
        .additionalDisplay((machine,l) => {
            /*const coilmachine = machine.getParts().find(part => part instanceof $CoilWorkableElectricMultiblockMachine)
            let temperature = coilmachine.getCoilType().getCoilTemperature() + 100 * Math.max(0, coilmachine.getTier() - GTValues.MV)
            console.info(temperature)
            l.add(l.size(),Text.translate('kubejs.coilmachine_temperature',temperature))*/
            if (machine.isFormed()) {
                l.add(Component.translatable("gtceu.multiblock.blast_furnace.max_temperature", Text.of(machine.getCoilType().getCoilTemperature() + "K").red()))
            }
        })
        .workableCasingRenderer('kubejs:block/blaze_blast_furnace_casing', 'gtceu:block/multiblock/implosion_compressor', false)
})