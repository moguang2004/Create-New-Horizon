GTCEuStartupEvents.registry("gtceu:recipe_type", event => {
    event.create("inscriber")
        .category("gfs")
        .setEUIO("in")
        .setMaxIOSize(3, 1, 1, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_COMPRESS, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR)
    GTRecipeTypes.register("fake_meteor","ctnh")
        .setMaxIOSize(1, 12, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_COMPRESS, FillDirection.LEFT_TO_RIGHT)
        .addDataInfo(data => {
            return $LocalizationUtils.format('ctnh.meteor.syphon', (data.getInt("syphon")))
        })
        .addDataInfo(data => {
            return $LocalizationUtils.format('ctnh.meteor.radius', (data.getInt("radius")))
        })
})
