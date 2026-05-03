ItemEvents.foodEaten('farmersdelight:rice', event =>{
    event.player.give('ctnhcore:crashed_rice')
})

ItemEvents.foodEaten('ctnhcore:double_blaze_cake', event =>{
    event.player.give('create:blaze_cake_base')
})