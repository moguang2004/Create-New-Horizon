const { $MetaMachine } = require("packages/com/gregtechceu/gtceu/api/machine/$MetaMachine")
const { $IMultiPart } = require("packages/com/gregtechceu/gtceu/api/machine/feature/multiblock/$IMultiPart")
const { $MultiblockControllerMachine } = require("packages/com/gregtechceu/gtceu/api/machine/multiblock/$MultiblockControllerMachine")
const { $WorkableElectricMultiblockMachine } = require("packages/com/gregtechceu/gtceu/api/machine/multiblock/$WorkableElectricMultiblockMachine")
const { $IRecipeHandlerTrait } = require("packages/com/gregtechceu/gtceu/api/machine/trait/$IRecipeHandlerTrait")
const { $GTRecipe } = require("packages/com/gregtechceu/gtceu/api/recipe/$GTRecipe")
const { $GTRecipeType } = require("packages/com/gregtechceu/gtceu/api/recipe/$GTRecipeType")
const { $Content } = require("packages/com/gregtechceu/gtceu/api/recipe/content/$Content")
const { $GameProfile } = require("packages/com/mojang/authlib/$GameProfile")
const { $RegistryInfo } = require("packages/dev/latvian/mods/kubejs/registry/$RegistryInfo")
const { $List } = require("packages/java/util/$List")
const { $Map } = require("packages/java/util/$Map")
const { $UUID } = require("packages/java/util/$UUID")
const { $Holder } = require("packages/net/minecraft/core/$Holder")
const { $StringTag } = require("packages/net/minecraft/nbt/$StringTag")
const { $DamageSource } = require("packages/net/minecraft/world/damagesource/$DamageSource")
const { $DamageType } = require("packages/net/minecraft/world/damagesource/$DamageType")
const { $Entity } = require("packages/net/minecraft/world/entity/$Entity")
const { $LivingEntity } = require("packages/net/minecraft/world/entity/$LivingEntity")
const { $ItemEntity } = require("packages/net/minecraft/world/entity/item/$ItemEntity")
const { $Monster } = require("packages/net/minecraft/world/entity/monster/$Monster")
const { $ItemStack } = require("packages/net/minecraft/world/item/$ItemStack")
const { $LootParams } = require("packages/net/minecraft/world/level/storage/loot/$LootParams")
const { $LootParams$Builder } = require("packages/net/minecraft/world/level/storage/loot/$LootParams$Builder")
const { $LootContextParam } = require("packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParam")
const { $LootContextParamSet } = require("packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParamSet")
const { $LootContextParamSet$Builder } = require("packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParamSet$Builder")
const { $FakePlayer } = require("packages/net/minecraftforge/common/util/$FakePlayer")


GTCEuStartupEvents.registry('gtceu:recipe_type',event =>{
    event.create('slaughter_house')
        .setEUIO('in')
        .setMaxIOSize(4, 4, 2, 2)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)
})
GTCEuStartupEvents.registry('gtceu:machine',event =>{
    const SizedIngredient = Java.loadClass('com.gregtechceu.gtceu.api.recipe.ingredient.SizedIngredient')
    const $Registries = Java.loadClass('net.minecraft.core.registries.Registries')
    const DamageTypes = Java.loadClass('net.minecraft.world.damagesource.DamageTypes')
    const Entity = Java.loadClass('net.minecraft.world.entity.Entity')
    const ItemRecipeCapability = Java.loadClass('com.gregtechceu.gtceu.api.capability.recipe.ItemRecipeCapability')
    const ComponentPanelWidget = Java.loadClass('com.lowdragmc.lowdraglib.gui.widget.ComponentPanelWidget')
    const LootContextParams = Java.loadClass('net.minecraft.world.level.storage.loot.parameters.LootContextParams')
    const IO = Java.loadClass('com.gregtechceu.gtceu.api.capability.recipe.IO')
            let uuid1 = $UUID.randomUUID()
            let uuid2 = $UUID.randomUUID()
    event.create('slaughter_house','multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('slaughter_house')
        .recipeModifier((machine,recipe) =>{
            let newrecipe = recipe.copy()
            newrecipe.duration = 20
            return newrecipe
        })
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("ABBBA", "ABBBA", "CCCCC", "CCCCC", "CCCCC", "CCCCC", "ABBBA") 
            .aisle("BAAAB", "BDDDB", "CDDDC", "CDDDC", "CDDDC", "CDDDC", "BAAAB") 
            .aisle("BAAAB", "BD#DB", "CD#DC", "CD#DC", "CD#DC", "CD#DC", "BAEAB") 
            .aisle("BAAAB", "BDDDB", "CDDDC", "CDDDC", "CDDDC", "CDDDC", "BAAAB") 
            .aisle("AB@BA", "ABBBA", "CCCCC", "CCCCC", "CCCCC", "CCCCC", "ABBBA") 
            .where("A", Predicates.blocks("gtceu:solid_machine_casing"))
            .where("B", Predicates.blocks("gtceu:solid_machine_casing").setMinGlobalLimited(15)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE)).setMinGlobalLimited(1)
        )
            .where("#", Predicates.any())   
            .where("C", Predicates.blocks("gtceu:tempered_glass"))
            .where("D", Predicates.blocks("enderio:dark_steel_bars"))
            .where("E", Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .onWorking((/**@type {$WorkableElectricMultiblockMachine_}*/ machine) =>{
            if(machine.getRecipeLogic().getProgress() == 10){
            let key = machine.getHolder().self().persistentData.getAllKeys()
            let /** */moblist = machine.getHolder().self().persistentData.get(key.toArray()[0])
            // moblist.forEach(mob =>{
            //     console.info(mob)
            // })

            let position = machine.pos
            let level = machine.level
            let facing = machine.frontFacing
            let blockpos = [[Direction.WEST,position.offset(2,1,0)],
                                    [Direction.EAST,position.offset(-2,1,0)],
                                    [Direction.NORTH,position.offset(0,1,2)],
                                    [Direction.SOUTH,position.offset(0,1,-2)]]
            let itempos = position
            blockpos.forEach(pos =>{
                if(facing.equals(pos[0])){
                    itempos = pos[1]
                    return
                }
            })
            
        //     let isSpawn = machine.getHolder().self().persistentData.getBoolean("isSpawn")
        //     if(isSpawn == null){
        //         isSpawn = false
        //     }
        //     let damagetype = level.registryAccess().registryOrThrow($Registries.DAMAGE_TYPE).getHolderOrThrow(DamageTypes.PLAYER_ATTACK)//new $Holder.direct(new $DamageType("slaughter",0))
        //     //实体模式
        // if(isSpawn){
        //     for (let oc = 0; oc <= machine.getTier() * 4; oc++) {
        //         let index = Math.random() * moblist.length;
        //         level.runCommandSilent("execute in " + level.getDimension().toString() + " run summon " + moblist[Math.floor(index)] + " " + itempos.getX() + " " +(itempos.getY() + 1) + " " + itempos.getZ());
        //     }
        //     level.getEntitiesWithin(AABB.ofBlocks(itempos.offset(-2,-1,-2),itempos.offset(2,3,2))).forEach(entity =>{
        //         if(!entity.isPlayer()){
        //             if(entity instanceof $LivingEntity){
        //                 if(entity.isAlive()){
        //                         let damagesource = new $DamageSource(damagetype,new $FakePlayer(level,new $GameProfile(uuid1,"slaughter")),new $FakePlayer(level,new $GameProfile(uuid2,"slaughter2")))
        //                         //entity.hurtArmor(damagesource,1000)
        //                         entity.setLastHurtByPlayer(new $FakePlayer(level,new $GameProfile(uuid1,"slaughter")))
        //                         console.info(entity.lastDamageSource)
        //                         entity.die(damagesource)
        //                         console.info(entity.lastDamageSource)
        //                         //entity.getDamageAfterArmorAbsorb(damagesource,1000)
        //                 }
        //             }
        //             else if(entity instanceof $ItemEntity){
        //                 let item = entity.getItem()
        //                 let count = item.count
        //                 entity.kill()
        //                 /*if (machine.output(true, getContentBuilder().items(SizedIngredient.create(item)).build()).isSuccess()) {
        //                     machine.output(false,getContentBuilder().items(SizedIngredient.create(item)).build());
        //                 }*/
        //                 let contents = new $Map.of(ItemRecipeCapability.CAP,new $List.of(new $Content(SizedIngredient.create(item.asIngredient(),count),1,0,null,null)))
        //                 let tmp = new $GTRecipe(new $GTRecipeType(new ResourceLocation("gt_machine_io"), "gt"),
        //                 new ResourceLocation("___recipe_test_ids__"), null, contents, null,
        //                 null, null, $List.of(), null, 0, false)
        //                 if(tmp.matchRecipeContents(IO.OUT, machine, contents).isSuccess()){
        //                     tmp.handleRecipe(IO.OUT, machine, contents)
        //                 }
        //             }
        //         }
        //         entity.kill()
        //     })
        // }
        // else{
            //战利品模式
            let lootparams = new $LootParams$Builder(level).withParameter(LootContextParams.LAST_DAMAGE_PLAYER,new $FakePlayer(level,new $GameProfile(uuid1,"slaughter"))).create(new $LootContextParamSet$Builder().build())
            for (let oc = 0; oc <= machine.getTier() * 4; oc++) {
                let index = Math.random() * moblist.length;
                let /**@type {String}*/mob = moblist[Math.floor(index)]
                //console.info(mob.split(':')[0]+ ":entities/" + mob.split(':')[1])
                let loottable = level.getServer()
                                .getLootData()
                                .getLootTable(new ResourceLocation(mob.split(':')[0]+ ":entities/" + mob.split(':')[1]))
                                .getRandomItems(lootparams)
                loottable.forEach(itemStack => {
                    let contents = new $Map.of(ItemRecipeCapability.CAP,new $List.of(new $Content(SizedIngredient.create(itemStack.asIngredient(),itemStack.count),1,0,null,null)))
                        let tmp = new $GTRecipe(new $GTRecipeType(new ResourceLocation("gt_machine_io_1"), "gt"),
                        new ResourceLocation("___recipe_test_ids1__"), null, contents, null,
                        null, null, $List.of(), null, 0, false)
                        if(tmp.matchRecipeContents(IO.OUT, machine, contents).isSuccess()){
                            tmp.handleRecipe(IO.OUT, machine, contents)
                        }
                });
            }
        }
        // }
            return true
        })
        .beforeWorking((/**@type {$MetaMachine}*/machine,recipe)=>{
            let find = false
            let moblist = []
            machine.getParts().forEach((/** @type {$IMultiPart} */part) =>{
                part.getRecipeHandlers().forEach((/** @type {$IRecipeHandlerTrait} */trait) =>{
                    if(trait.getHandlerIO() == IO.IN){
                        trait.getContents().forEach((contents )=>{
                            if(contents instanceof $ItemStack){
                                if(contents == 'enderio:powered_spawner'){
                                    //console.info(contents.nbt.get('BlockEntityTag').get('EntityStorage').get('Entity').get('id').toString())
                                    moblist.push(contents.nbt.get('BlockEntityTag').get('EntityStorage').get('Entity').get('id'))
                                    find = true
                                    
                                }
                            }
                        })
                    }
                })
            })
            if(find == false){
                machine.getRecipeLogic().interruptRecipe()
                return false
            }
            machine.getHolder().self().persistentData.put("moblist",moblist)
            return true
        })

        // .additionalDisplay((/**@type {$WorkableElectricMultiblockMachine}*/machine,l) => {
        //     if (machine.isFormed()) {
        //         let isSpawn = machine.getHolder().self().persistentData.getBoolean("isSpawn")
        //         if(isSpawn == null){
        //             isSpawn = false
        //         }
        //         machine.handleDisplayClick = ((componentData,ClickData) =>{
        //             if(!ClickData.isRemote()){
        //                 if (componentData.equals("spawn_switch")) {
        //                     isSpawn = !isSpawn
        //                     machine.getHolder().self().persistentData.putBoolean('isSpawn',isSpawn)
        //                 }
        //             }
        //         })
        //         l.add(Component.literal("实体生成：")
        //         .append(ComponentPanelWidget.withButton(Component.literal("[")
        //                 .append(isSpawn ?
        //                         Component.literal("关闭") :
        //                         Component.literal("打开"))
        //                 .append(Component.literal("]")), "spawn_switch")))
        //     }
        // })
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_solid_steel', 'gtceu:block/multiblock/implosion_compressor', false)
})


