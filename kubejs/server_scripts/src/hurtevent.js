import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"

/*EntityEvents.hurt(event =>{
    const {damage,entity,source} = event
    if(entity.isLiving()){
        let base_armor = entity.getAttributeValue('minecraft:generic.armor')
        let toughness = entity.getAttributeValue('minecraft:generic.armor_toughness')
        let armorpierce = entity.getAttributeValue('attributeslib:armor_pierce')
        let armorshred = entity.getAttributeValue('attributeslib:armor_shred')
        let armor = (base_armor-armorpierce*(10/toughness+10))*(1-armorshred*(10/toughness+10))
        let damage1 = damage*(8/(8+armor))+((Math.max(damage*(8/(8+armor)),damage-0.4*armor)-damage*(8/(8+armor)))*(Math.max(damage*(8/(8+armor)),damage-0.4*armor))/((Math.max(damage*(8/(8+armor)),damage-0.4*armor))+10*toughness))
        console.info(damage)
        console.info(armorpierce)
        console.info(damage1)
        entity.hurtArmor(source,damage1)
    }
})*/
// PlayerEvents.loggedIn(event =>{
//     event.server.runCommandSilent('reload')
// })
EntityEvents.hurt(event => {
    if (event.entity.isPlayer()) {
        //console.info(event.source.getType())
        if (event.source.getType() == 'drown' || event.source.getType() == 'oxygen' || event.source.getType() == 'freeze') {
            let enchant = true
            event.entity.armorSlots.forEach((/**@type {$ItemStack}*/armor) => {
                if (armor.getEnchantments().get('kubejs:vacuum_seal') == null) {
                    enchant = false
                }
            })
            if(enchant == true){
                event.cancel()
            }
        }
    }
})