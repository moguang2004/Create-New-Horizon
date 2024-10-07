ForgeModEvents.onEvent("net.minecraftforge.fml.event.lifecycle.FMLLoadCompleteEvent", event => {
    $BloodMagicAPI.INSTANCE.registerAltarComponent(Block.getBlock("cataclysm:void_stone").defaultBlockState(), "CRYSTAL")
})