// import { $IRecipeLayoutBuilder } from "packages/mezz/jei/api/gui/builder/$IRecipeLayoutBuilder";

// JEIAddedEvents.registerCategories((event) => {
//     // Register a new CustomCategory with the id "kubejsadditions:painful_blocks".
//     event.custom("kubejsadditions:meteor", (category) => {
//         // Set the title of the category to "Painful Blocks".
//         category.title("Meteor")
//                 // Set the background of the category to a blank 100x50 drawable canvas.
//                 .background(guiHelper.createBlankDrawable(100, 50))
//                 // Set the icon of the category to a cactus item.
//                 .icon(guiHelper.createDrawableItemStack(Item.of('ae2:sky_stone_block')))
//                 // Set the callback function that will verify if a recipe is a valid recipe for this category.
//                 .isRecipeHandled((recipe) => {
//                     return global["verifyRecipe"](category.jeiHelpers, recipe);
//                 })
//                 // Set the callback function that will allow JEI to index this recipe and determine
//                 // what the inputs and outputs of each recipe are.
//                 .handleLookup((builder, recipe, focuses) => {
//                     global["handleLookup"](category.jeiHelpers, builder, recipe, focuses);
//                 })
//                 // Set the callback function for rendering additional detials to the screen.
//                 .setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
//                     global["renderPainfulBlocks"](category.jeiHelpers, recipe, recipeSlotsView, guiGraphics, mouseX, mouseY);
//                 })
//     });
// });

// global["verifyRecipe"] = (jeiHelpers,recipe) =>{
//     return true
// }

// global["handleLookup"] = (jeiHelpers, /**@type {$IRecipeLayoutBuilder}*/builder, recipe, focuses) =>{
//     builder.addSlot("input",35,20).addItemStack(Item.of(recipe.data.name)).setSlotName("input")
//     builder.addInvisibleIngredients("output").addItemStack(Item.of(recipe.data.name))
// }

// global["renderPainfulBlocks"] = (jeiHelpers, recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) =>{

// }

// JEIAddedEvents.registerRecipes((event) => {
//     event.custom('kubejsadditions:meteor')
//     .add({name: 'gtceu:hv_emitter'})
//     .add({name:'minecraft:iron_block'})
// })