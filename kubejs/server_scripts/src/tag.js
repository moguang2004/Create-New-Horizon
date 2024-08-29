ServerEvents.tags('item',event =>{
    Ingredient.of("#forge:exquisite_gems").itemIds.forEach((id) =>{
        event.add('alexscaves:deep_one_barters',id)
    })
})
ServerEvents.tags('fluid',event =>{
    event.add('createdieselgenerators:pumpjack_output','gtceu:oil_medium')
    event.remove('createdieselgenerators:pumpjack_output','createdieselgenerators:crude_oil')
})
