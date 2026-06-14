Platform.getInfo('kubejs').name = 'Create: New Horizon'


ItemEvents.modification(event => {
    event.modify('farmersdelight:rice', item => {
        item.setFoodProperties(food => {
            food.eaten((eat) => {
                return true
            })
        })
    })
    event.modify('ctnhcore:primary_stew', item => {
        item.setFoodProperties(food => {
            food.eaten((eat) => {
                eat.player.addEffect(new Internal.MobEffectInstance('minecraft:regeneration', 600, 1), true)
                return true
            })
        })
    })
    event.modify('ctnhcore:galaxy_meatball', item => {
        item.setFoodProperties(food => {
            food.eaten((eat) => {
                eat.player.addEffect(new Internal.MobEffectInstance('minecraft:regeneration', 600, 1), true)
                return true
            })
        })
    })
    event.modify('ctnhcore:ender_light', item => {
        item.setFoodProperties(food => {
            food.hunger(20)
            food.saturation(0.5)
            food.meat(true)
            food.alwaysEdible(true)
            food.fastToEat(true)
            food.effect('minecraft:haste', 20 * 1800, 0, 1)
            food.effect('legendarysurvivaloverhaul:heat_immunity', 20 * 1800, 0, 1)
            food.effect('legendarysurvivaloverhaul:cold_immunity', 20 * 1800, 0, 1)
        })
    })
})