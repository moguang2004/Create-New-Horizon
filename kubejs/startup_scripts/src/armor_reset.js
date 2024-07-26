/*ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingHurtEvent',event =>{
    const {amount,entity,source} = event
    if(entity.isLiving()){
        let damage = amount
        let base_armor = entity.getAttributeValue('minecraft:generic.armor')
        let toughness = entity.getAttributeValue('minecraft:generic.armor_toughness')
        let armorpierce = entity.getAttributeValue('attributeslib:armor_pierce')
        let armorshred = entity.getAttributeValue('attributeslib:armor_shred')
        let armor = (base_armor-armorpierce*(10/toughness+10))*(1-armorshred*(10/toughness+10))
        let damage1 = damage*(8/(8+armor))+((Math.max(damage*(8/(8+armor)),damage-0.4*armor)-damage*(8/(8+armor)))*(Math.max(damage*(8/(8+armor)),damage-0.4*armor))/((Math.max(damage*(8/(8+armor)),damage-0.4*armor))+10*toughness))
        console.info(damage)
        console.info(armorpierce)
        console.info(damage1)
        event.setAmount(damage1)
    }

})*/