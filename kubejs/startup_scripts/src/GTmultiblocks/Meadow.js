GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    GTRecipeTypes.register('meadow','multiblock')
        .setMaxIOSize(3, 3, 3, 3)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
        .addDataInfo(data => {
            return $LocalizationUtils.format('ctnh.stress_input', (data.getFloat('input_stress')).toFixed(1))
        })
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('meadow', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('meadow')
        .recipeModifier((machine,/**@type {Internal.GTRecipe}*/recipe) =>{
                let level = machine.level
                let pos = machine.pos
                let facing = machine.frontFacing
                let aabb 
                let cowcount = 0
                let sheepcount = 0
                let chickencount = 0
                switch (facing){
                    case Direction.EAST: aabb = AABB.ofBlocks(pos.offset(0,0,-5),pos.offset(-10,2,5))
                    case Direction.WEST: aabb = AABB.ofBlocks(pos.offset(0,0,-5),pos.offset(10,2,5))
                    case Direction.NORTH: aabb = AABB.ofBlocks(pos.offset(-5,0,0),pos.offset(5,2,10))
                    case Direction.SOUTH: aabb = AABB.ofBlocks(pos.offset(-5,0,0),pos.offset(5,2,-10))
                }
                level.getEntitiesWithin(aabb).forEach((/**@type {$Entity}*/entity) =>{
                    if(entity.getEntityType().toString() == "entity.minecraft.cow"){
                        cowcount ++
                    }
                    else if(entity.getEntityType().toString() == "entity.minecraft.sheep"){
                        sheepcount ++
                    }
                    else if(entity.getEntityType().toString() == "entity.minecraft.chicken"){
                        chickencount ++
                    }
                })
                if(cowcount === 0 && sheepcount === 0 && chickencount === 0){
                    return recipe
                }
                // let itemList = new Internal.ArrayList();
                //     itemList.add(new Internal.Content(Internal.SizedIngredient.create(Item.of('minecraft:leather',cowcount)), 1, 1, 0, null, null));
                //     itemList.add(new Internal.Content(Internal.SizedIngredient.create(Item.of('minecraft:white_wool',sheepcount)), 1, 1, 0, null, null));
                //     itemList.add(new Internal.Content(Internal.SizedIngredient.create(Item.of('minecraft:egg',chickencount)), 1, 1, 0, null, null));
                //     itemList.add(new Internal.Content(Internal.SizedIngredient.create(Item.of('kubejs:animal_excreta',cowcount + sheepcount + chickencount)), 1, 1, 0, null, null));
                //     recipe.outputs.put($ItemRecipeCapability.CAP,itemList)
                //     recipe.outputs.put($FluidRecipeCapability.CAP, Internal.ArrayList.of(new Internal.Content(Internal.FluidIngredient.of(Internal.FluidStack("gtceu:milk", 250 * cowcount)), 1, 1, 0, null, null)));
                let newrecipe = $GTRecipeBuilder.ofRaw()
                ["outputItems(net.minecraft.world.item.ItemStack)"](Item.of('minecraft:leather',cowcount))
                ["outputItems(net.minecraft.world.item.ItemStack)"](Item.of('minecraft:white_wool',sheepcount))
                ["outputItems(net.minecraft.world.item.ItemStack)"](Item.of('minecraft:egg',chickencount))
                ["outputItems(net.minecraft.world.item.ItemStack)"](Item.of('kubejs:animal_excreta',cowcount + sheepcount + chickencount))
                //["outputFluids(com.lowdragmc.lowdraglib.side.fluid.FluidStack)"]("gtceu:milk " + 250 * cowcount)
                    .buildRawRecipe()
                if (newrecipe.matchRecipe(machine).isSuccess()) {
                    return newrecipe
                }
            return recipe
        })
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("BBBBBBBBBBB", "JCCCJCCCCCC", "J###J######", "JJJJJD#####", "EEEEE######", "###########") 
            .aisle("BBBBFFFBBBB", "CEE####GG#C", "#E#####GG##", "J###JD#####", "EEEEE######", "#EEE#######") 
            .aisle("BBBBFFFBBBB", "CE#####GG#C", "###########", "J###JD#####", "EEEEE######", "#EEE#######") 
            .aisle("BBBBFFFBBBB", "C#######G#C", "###########", "J###JD#####", "EEEEE######", "#EEE#######") 
            .aisle("BBBBBFFBBBB", "J###J#####C", "J###J######", "JJJJJD#####", "EEEEE######", "###########") 
            .aisle("BEEBFFFHHHB", "C#########C", "###########", "DDDDDD#####", "###########", "###########") 
            .aisle("BEEBFFFHHHB", "C######II#C", "###########", "###########", "###########", "###########") 
            .aisle("BEEBFFFHHHB", "C#######I#C", "###########", "###########", "###########", "###########") 
            .aisle("BEEBFFFBHHB", "C#########C", "###########", "###########", "###########", "###########") 
            .aisle("BEEBFFFBHHB", "C########IC", "###########", "###########", "###########", "###########") 
            .aisle("BBBBB@BBBBB", "CCCCCCCCCCC", "###########", "###########", "###########", "###########") 
            .where("B", Predicates.blocks("minecraft:dirt")
                        .or(Predicates.blocks("minecraft:grass_block"))
                        .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                        .or(Predicates.abilities(PartAbility.INPUT_KINETIC)))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .where("C", Predicates.blocks("minecraft:oak_fence"))
            .where("#", Predicates.any())
            .where("D", Predicates.blocks("minecraft:oak_stairs"))
            .where("E", Predicates.blocks("minecraft:hay_block"))
            .where("F", Predicates.blocks("minecraft:dirt_path"))
            .where("G", Predicates.blocks("farmersdelight:rich_soil"))
            .where("H", Predicates.blocks("minecraft:water"))
            .where("I", Predicates.blocks("minecraft:lily_pad"))
            .where("J",Predicates.blocks("minecraft:oak_log"))
            .build()
        )
        .workableCasingRenderer('minecraft:block/dirt', 'gtceu:block/multiblock/implosion_compressor', false)
})
