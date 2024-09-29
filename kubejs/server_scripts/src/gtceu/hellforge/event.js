EntityEvents.death(event=>{
    try{
        if(event.getSource().getPlayer().getHeldItem("main_hand").id==='bloodmagic:soulsword'){
            if(event.getEntity().isMonster() && event.getEntity().isInFluidType(Fluid.of('bloodmagic:life_essence_fluid').fluid.fluidType)){
                var level=event.getLevel();
                BlockPos.withinManhattan(event.entity.position(),8,8,8).forEach(pos=>{
                    if(level.getBlock(pos).id=='gtceu:hellforge' && level.getBlockEntity(pos)!=null){
                        var will=level.getBlockEntity(pos).persistentData.getInt('will');
                        will+=(event.getEntity().getMaxHealth()/20);
                        level.getBlockEntity(pos).persistentData.putInt('will',will);
                        throw Error();
                    }
                })
            }
        }
    }catch(error){}
})

ItemEvents.dropped(event=>{
    try{
        if(event.getItem().id.indexOf('bloodmagic')!=-1){
            var soul=event.getItem().nbt.getDouble('souls');
            if(soul!=0){
                var level=event.level;
                BlockPos.withinManhattan(event.getItemEntity().position(),3,3,3).forEach(pos=>{
                    if(level.getBlock(pos).id=='gtceu:hellforge' && level.getBlockEntity(pos)!=null){
                        var will=level.getBlockEntity(pos).persistentData.getInt('will');
                        will+=soul;
                        level.getBlockEntity(pos).persistentData.putInt('will',will);
                        event.itemEntity.getItem().nbt.putDouble('souls',0);
                        throw Error();
                    }
                })
            }
        }
    }catch(error){}
})