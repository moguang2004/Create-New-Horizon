ServerEvents.recipes(event => {
    event.replaceInput({id:'sophisticatedbackpacks:netherite_backpack'},'#forge:ingots/netherite','gtceu:netherite_ingot')
    event.recipes.minecraft.smithing_transform('expandedstorage:obsidian_to_netherite_conversion_kit', '#forge:obsidian', 'gtceu:netherite_ingot')
})