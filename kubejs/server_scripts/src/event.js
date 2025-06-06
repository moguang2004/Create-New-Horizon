ItemEvents.foodEaten('farmersdelight:rice', event =>{
    event.player.give('kubejs:crashed_rice')
})

ItemEvents.foodEaten('kubejs:double_blaze_cake', event =>{
    event.player.give('create:blaze_cake_base')
})