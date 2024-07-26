/*GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('rocket_engine')
        .category('ctnh') //Used in the GTlib / LDlib ui editor
        .setEUIO('out')
        .setMaxIOSize(0, 0, 1, 0) //Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
		.setProgressBar(GuiTextures.TURBINE_OVERLAY, FillDirection.LEFT_TO_RIGHT)
	    .setSound(GTSoundEntries.TURBINE);
    
})

GTCEuStartupEvents.registry('gtceu:machine',event =>{
    event.create('rocket_engine', 'simple', GTValues.EV, GTValues.IV, GTValues.LuV) //(ID, Type, Voltage Teirs)
        .recipeType('rocket_engine',true,true)
        .tankScalingFunction(tier => tier * 3200)
        .workableTieredHullRenderer(GTCEu.id("block/machines/rocket_engine"))
})*/
const rotorholdrmachine = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.part.RotorHolderPartMachine')
const machinerender = Java.loadClass('com.gregtechceu.gtceu.client.renderer.machine.RotorHolderMachineRenderer')
GTCEuStartupEvents.registry('gtceu:machine',event =>{
    event.create(
        "rotor_holder0",
        "custom",
        (holder, tier) => {
            return new rotorholdrmachine(holder, tier);
        },
        GTValues.ULV
    )
    .rotationState(RotationState.ALL)
    .abilities(PartAbility.ROTOR_HOLDER)
    .renderer(() => new machinerender(GTValues.ULV))
    event.create(
            "rotor_holder1",
            "custom",
            (holder, tier) => {
                return new rotorholdrmachine(holder, tier);
            },
            GTValues.LV
        )
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.ROTOR_HOLDER)
        .renderer(() => new machinerender(GTValues.LV))
    event.create(
        "rotor_holder2",
        "custom",
        (holder, tier) => {
            return new rotorholdrmachine(holder, tier);
        },
        GTValues.MV
    )
    .rotationState(RotationState.ALL)
    .abilities(PartAbility.ROTOR_HOLDER)
    .renderer(() => new machinerender(GTValues.MV))
})
