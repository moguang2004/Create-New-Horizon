GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('fermenting_tank', 'multiblock', (holder) => new $FermentingTankMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType("fermenting")
        .recipeModifier((/**@type {$MultiblockControllerMachine}*/machine,/**@type {$GTRecipe}*/recipe, params, result) => {
            return $FermentingTankMachine.recipeModifier(machine,recipe,params,result)
        })
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('C   C', 'C   C', 'CCCCC', 'H   H', 'H   H', 'H   H', 'DAAAD')
            .aisle('     ', ' GGG ', 'CGGGC', ' MMM ', ' GGG ', ' GGG ', 'AAAAA')
            .aisle('     ', ' GGG ', 'CG GC', ' M M ', ' G G ', ' G G ', 'AABAA')
            .aisle('     ', ' GGG ', 'CGGGC', ' MMM ', ' GGG ', ' GGG ', 'AAAAA')
            .aisle('C   C', 'CAKAC', 'CAAAC', 'H   H', 'H   H', 'H   H', 'DAAAD')
            .where('C', Predicates.blocks('gtceu:steel_frame'))
            .where('H', Predicates.blocks('create:metal_girder'))
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('M', Predicates.heatingCoils())
            .where('D', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()))
            .where('B', Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1))
            .where('A', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()).setMinGlobalLimited(15)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            )
            .where('G', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
            .where(' ', Predicates.air())
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_solid_steel', 'gtceu:block/multiblock/implosion_compressor', false)

        event.create('large_fermenting_tank', 'multiblock', (holder) => new $FermentingTankMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType("fermenting")
        .recipeModifier((/**@type {Internal.WorkableElectricMultiblockMachine}*/machine,/**@type {Internal.GTRecipe}*/recipe, params, result) => {
            let newrecipe =  $FermentingTankMachine.recipeModifier(machine,recipe,params,result)
            return GTRecipeModifiers.accurateParallel(machine,newrecipe,8,false).getFirst()
        })
        .onWorking((/**@type {Internal.WorkableElectricMultiblockMachine} */machine) =>{
            if(machine.getOffsetTimer() % 20 == 0){
                let level = machine.getLevel()
                let pos = machine.getPos()
                let frontfacing = machine.getFrontFacing()
                let pos1
                if(frontfacing == Direction.NORTH){
                    pos1 = pos.offset(13,0,1)
                }
                else if(frontfacing == Direction.SOUTH){
                    pos1 = pos.offset(-13,0,-1)
                }
                else if(frontfacing == Direction.WEST){
                    pos1 = pos.offset(1,0,-13)
                }
                else if(frontfacing == Direction.EAST){
                    pos1 = pos.offset(-1,0,13)
                }
                if(level.getBlock(pos1).id != "gtceu:large_bottle"){
                    return true;
                }
                let machine1 = $MetaMachine.getMachine(level,pos1)
                if (machine1 instanceof $MultiblockTankMachine) {
                    let /**@type {Internal.NotifiableFluidTank}*/ tank = machine1.getTank()
                    if(tank.getFluidInTank(0).getFluid().equals(Fluid.of('minecraft:water').getFluid()) && tank.getFluidInTank(0).amount >= 100){
                        tank.getFluidInTank(0).setAmount(tank.getFluidInTank(0).amount - 100)
                        machine.holder.self().persistentData.putString("extra","water")
                    }
                    else if(tank.getFluidInTank(0).getFluid().equals(Fluid.of('gtceu:sterilized_growth_medium').getFluid()) && tank.getFluidInTank(0).amount >= 100){
                        tank.getFluidInTank(0).setAmount(tank.getFluidInTank(0).amount - 100)
                        machine.holder.self().persistentData.putString("extra","sterilized")
                    }
                    else if(tank.getFluidInTank(0).getFluid().equals(Fluid.of('gtceu:simple_growth_medium').getFluid()) && tank.getFluidInTank(0).amount >= 100){
                        tank.getFluidInTank(0).setAmount(tank.getFluidInTank(0).amount - 100)
                        machine.holder.self().persistentData.putString("extra","simple")
                    }
                    else{
                        machine.holder.self().persistentData.putString("extra","null")
                    }
                }
            }
            return true
        })
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("##########AAAAAAAAAAA", "##########ABBBBBBBBBA", "##########ABBBBBBBBBA", "##########AAAAAAAAAAA", "#####################", "#####################", "#####################", "#####################", "#####################", "#####################", "#####################", "#####################", "#####################", "#####################", "############AAAAAAA##", "############AABBBAA##", "############AABBBAA##", "############AABBBAA##", "############AAAAAAA##") 
            .aisle("##########AAAAAAAAAAA", "##########B#########B", "##########B#########B", "##########AAAAAAAAAAA", "############CCCCCCC##", "#####################", "#####################", "#####################", "#####################", "#####################", "#####################", "#####################", "#####################", "############CCCCCCC##", "###########DABBBBBAD#", "###########DB#####BD#", "###########DB#####BD#", "###########DB#####BD#", "###########DAAAAAAAD#") 
            .aisle("##########AAAAAAAAAAA", "##########B#########B", "##########B#########B", "##########AAAAAAAAAAA", "###########CCDAAADCC#", "#############D###D###", "#############D###D###", "#############D###D###", "#############D###D###", "#############D###D###", "#############D###D###", "#############D###D###", "#############D###D###", "###########CCDAAADCC#", "##########AAABBBBBAAA", "##########ABB#####BBA", "##########ABB#####BBA", "##########ABB#####BBA", "##########AAAAAAAAAAA") 
            .aisle("##########AAAAAAAAAAA", "##########B#########B", "##########B#########B", "##########AAAAAAAAAAA", "###########CDAAAAADC#", "############DBBBBBD##", "############DBBBBBD##", "############DBBBBBD##", "############DFFFFFD##", "############DFFFFFD##", "############DBBBBBD##", "############DBBBBBD##", "############DBBBBBD##", "###########CDAAAAADC#", "##########ABBBBBBBBBA", "AAAAA#####A#########A", "ABBBA#####A#########A", "AAAAA#####A#########A", "##########AAAAAAAAAAA") 
            .aisle("##########AAAAAAAAAAA", "##########B#########B", "##########B#########B", "##########AAAAAAAAAAA", "###########CAAFFFAAC#", "#############B###B###", "#############B###B###", "#############B###B###", "#############F###F###", "#############F###F###", "#############B###B###", "#############B###B###", "#############B###B###", "###########CAAFFFAAC#", "##########ABBBBBBBBBA", "AHHHAAAAAAA#########B", "B###BBBBBBB#########B", "AAAAAAAAAAA#########B", "##########AAAAAAAAAAA") 
            .aisle("##########AAAAAAAAAAA", "##########B#########B", "##########B#########B", "##########AAAAAAAAAAA", "###########CAAFFFAAC#", "#############B#H#B###", "#############B#H#B###", "#############B#H#B###", "#############F#H#F###", "#############F#H#F###", "#############B#H#B###", "#############B#H#B###", "#############B#H#B###", "###########CAAFIFAAC#", "##########ABBBBBBBBBA", "AHHHBBBBBBB#########B", "B###################B", "AAAAABBBBBB#########B", "##########AAAAAAAAAAA") 
            .aisle("##########AAAAAAAAAAA", "##########B#########B", "##########B#########B", "##########AAAAAAAAAAA", "###########CAAFFFAAC#", "#############B###B###", "#############B###B###", "#############B###B###", "#############F###F###", "#############F###F###", "#############B###B###", "#############B###B###", "#############B###B###", "###########CAAFFFAAC#", "##########ABBBBBBBBBA", "AHHHAAAAAAA#########B", "B###BBBBBBB#########B", "AAAAAAAAAAA#########B", "##########AAAAAAAAAAA") 
            .aisle("##########AAAAAAAAAAA", "##########B#########B", "##########B#########B", "##########AAAAAAAAAAA", "###########CDAAAAADC#", "############DBBBBBD##", "############DBBBBBD##", "############DBBBBBD##", "############DFFFFFD##", "############DFFFFFD##", "############DBBBBBD##", "############DBBBBBD##", "############DBBBBBD##", "###########CDAAAAADC#", "##########ABBBBBBBBBA", "AAAAA#####A#########A", "ABBBA#####A#########A", "AAAAA#####A#########A", "##########AAAAAAAAAAA") 
            .aisle("##########AAAAAAAAAAA", "##########B#########B", "##########B#########B", "##########AAAAAAAAAAA", "###########CCDAAADCC#", "#############D###D###", "#############D###D###", "#############D###D###", "#############D###D###", "#############D###D###", "#############D###D###", "#############D###D###", "#############D###D###", "###########CCDAAADCC#", "##########AAABBBBBAAA", "##########ABB#####BBA", "##########ABB#####BBA", "##########ABB#####BBA", "##########AAAAAAAAAAA") 
            .aisle("##########AAAAAAAAAAA", "##########B#########B", "##########B#########B", "##########AAAAAAAAAAA", "############CCCCCCC##", "#####################", "#####################", "#####################", "#####################", "#####################", "#####################", "#####################", "#####################", "############CCCCCCC##", "###########DABBBBBAD#", "###########DB#####BD#", "###########DB#####BD#", "###########DB#####BD#", "###########DAAAAAAAD#") 
            .aisle("##########AJJJJ@JJJJA", "##########AJJJJJJJJJA", "##########AJJJJJJJJJA", "##########AJJJJJJJJJA", "#####################", "#####################", "#####################", "#####################", "#####################", "#####################", "#####################", "#####################", "#####################", "#####################", "############AAAAAAA##", "############AABBBAA##", "############AABBBAA##", "############AABBBAA##", "############AAAAAAA##") 
            .where("#", Predicates.any())
            .where("A", Predicates.blocks("gtceu:solid_machine_casing"))
            .where("B", Predicates.blocks("gtceu:tempered_glass"))
            .where("C", Predicates.blocks("create_connected:copycat_stairs"))
            .where("D", Predicates.blocks("gtceu:invar_frame"))
            .where("F", Predicates.heatingCoils())
            .where("H", Predicates.blocks("gtceu:titanium_pipe_casing"))
            .where("I", Predicates.blocks("gtceu:titanium_gearbox"))
            .where("J", Predicates.blocks("gtceu:solid_machine_casing")
                    .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_solid_steel', 'gtceu:block/multiblock/implosion_compressor', false)

        event.create('large_bottle', 'multiblock', (holder) => new $MultiblockTankMachine(holder,10000*1000,null))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType("dummy")
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("##AAAAA##", "##BBBBB##", "##BBBBB##", "##BBBBB##", "##CCCCC##", "##BBBBB##", "##BBBBB##", "##BBBBB##", "#########", "#########", "#########", "#########", "#########", "#########", "#########") 
            .aisle("#AAAAAAA#", "#B#####B#", "#B#####B#", "#BAAAAAB#", "#C#####C#", "#B#####B#", "#B#####B#", "#B#####B#", "#BBBBBBB#", "###BBB###", "#########", "#########", "#########", "#########", "#########") 
            .aisle("AAAAAAAAA", "B#######B", "B#######B", "BAAAAAAAB", "C#######C", "B#######B", "B#######B", "B#######B", "#B#####B#", "##BBBBB##", "###CCC###", "###BBB###", "###BBB###", "###BBB###", "###AAA###") 
            .aisle("AAAAAAAAA", "B#######B", "B#######B", "BAAAAAAAB", "C#######C", "B#######B", "B#######B", "B#######B", "#B#####B#", "#BB###BB#", "##CDDDC##", "##B###B##", "##B###B##", "##B###B##", "##AEEEA##") 
            .aisle("AAAAAAAAA", "B###E###B", "B###E###B", "BAAAEAAAB", "C###E###C", "B###E###B", "B###E###B", "B###E###B", "#B##E##B#", "#BB#E#BB#", "##CDEDC##", "##B###B##", "##B###B##", "##B###B##", "##AEEEA##") 
            .aisle("AAAAAAAAA", "B#######B", "B#######B", "BAAAAAAAB", "C#######C", "B#######B", "B#######B", "B#######B", "#B#####B#", "#BB###BB#", "##CDDDC##", "##B###B##", "##B###B##", "##B###B##", "##AEEEA##") 
            .aisle("AAAAAAAAA", "B#######B", "B#######B", "BAAAAAAAB", "C#######C", "B#######B", "B#######B", "B#######B", "#B#####B#", "##BBBBB##", "###CCC###", "###BBB###", "###BBB###", "###BBB###", "###AAA###") 
            .aisle("#AAAAAAA#", "#B#####B#", "#B#####B#", "#BAAAAAB#", "#C#####C#", "#B#####B#", "#B#####B#", "#B#####B#", "#BBBBBBB#", "###BBB###", "#########", "#########", "#########", "#########", "#########") 
            .aisle("##AA@AA##", "##BBBBB##", "##BBBBB##", "##BBBBB##", "##CCCCC##", "##BBBBB##", "##BBBBB##", "##BBBBB##", "#########", "#########", "#########", "#########", "#########", "#########", "#########") 
            .where("#", Predicates.any())
            .where("A", Predicates.blocks("gtceu:solid_machine_casing"))
            .where("B", Predicates.blocks("gtceu:tempered_glass"))
            .where("C", Predicates.blocks("gtceu:cupronickel_coil_block"))
            .where("D", Predicates.blocks("gtceu:filter_casing"))
            .where("E", Predicates.blocks("gtceu:titanium_pipe_casing"))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_solid_steel', 'gtceu:block/multiblock/implosion_compressor', false)
})
