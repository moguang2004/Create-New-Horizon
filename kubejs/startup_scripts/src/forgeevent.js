ForgeModEvents.onEvent("net.minecraftforge.fml.event.lifecycle.FMLLoadCompleteEvent", event => {
    const $BloodMagicAPI = Java.loadClass("wayoftime.bloodmagic.impl.BloodMagicAPI")
    $BloodMagicAPI.INSTANCE.registerAltarComponent(Block.getBlock("cataclysm:void_stone").defaultBlockState(), "CRYSTAL")
})