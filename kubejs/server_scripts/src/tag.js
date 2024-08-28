ServerEvents.tags('item',event =>{
    Ingredient.of("#forge:exquisite_gems").itemIds.forEach((id) =>{
        event.add('alexscaves:deep_one_barters',id)
    })
})
