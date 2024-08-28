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

const { $DimensionMarker } = require("packages/com/gregtechceu/gtceu/api/data/$DimensionMarker")

GTCEuStartupEvents.registry('gtceu:machine', event => {
    const IO = Java.loadClass('com.gregtechceu.gtceu.api.capability.recipe.IO')
    const rotorholdermachine = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.part.RotorHolderPartMachine')
    const machinerender = Java.loadClass('com.gregtechceu.gtceu.client.renderer.machine.RotorHolderMachineRenderer')
    const EnergyHatchPartMachine = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.part.EnergyHatchPartMachine')
    const KineticPartMachine = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.part.KineticPartMachine')
    const SplitShaftTieredHullMachineRenderer = Java.loadClass('com.gregtechceu.gtceu.client.renderer.machine.SplitShaftTieredHullMachineRenderer')
    event.create(
        "rotor_holder0",
        "custom",
        (holder, tier) => {
            return new rotorholdermachine(holder, tier);
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
            return new rotorholdermachine(holder, tier);
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
            return new rotorholdermachine(holder, tier);
        },
        GTValues.MV
    )
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.ROTOR_HOLDER)
        .renderer(() => new machinerender(GTValues.MV))
    event.create(
        "rotor_holder3",
        "custom",
        (holder, tier) => {
            return new rotorholdermachine(holder, tier);
        },
        GTValues.UHV
    )
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.ROTOR_HOLDER)
        .renderer(() => new machinerender(GTValues.UHV))
    event.create(
        "rotor_holder4",
        "custom",
        (holder, tier) => {
            return new rotorholdermachine(holder, tier);
        },
        GTValues.UEV
    )
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.ROTOR_HOLDER)
        .renderer(() => new machinerender(GTValues.UEV))
    event.create(
        "rotor_holder5",
        "custom",
        (holder, tier) => {
            return new rotorholdermachine(holder, tier);
        },
        GTValues.UIV
    )
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.ROTOR_HOLDER)
        .renderer(() => new machinerender(GTValues.UIV))
    event.create(
        "rotor_holder6",
        "custom",
        (holder, tier) => {
            return new rotorholdermachine(holder, tier);
        },
        GTValues.UXV
    )
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.ROTOR_HOLDER)
        .renderer(() => new machinerender(GTValues.UXV))
    event.create(
        "rotor_holder7",
        "custom",
        (holder, tier) => {
            return new rotorholdermachine(holder, tier);
        },
        GTValues.OpV
    )
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.ROTOR_HOLDER)
        .renderer(() => new machinerender(GTValues.OpV))
    event.create(
        "rotor_holder8",
        "custom",
        (holder, tier) => {
            return new rotorholdermachine(holder, tier);
        },
        GTValues.MAX
    )
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.ROTOR_HOLDER)
        .renderer(() => new machinerender(GTValues.MAX))


    event.create(
        'energy_output_hatch_4A0',
        'custom',
        (holder, tier) => {
            return new EnergyHatchPartMachine(holder, tier, IO.OUT, 4)
        },
        GTValues.LV
    )
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.OUTPUT_ENERGY)
        .overlayTieredHullRenderer("energy_hatch.output_4a")
    event.create(
        'energy_output_hatch_4A1',
        'custom',
        (holder, tier) => {
            return new EnergyHatchPartMachine(holder, tier, IO.OUT, 4)
        },
        GTValues.MV
    )
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.OUTPUT_ENERGY)
        .overlayTieredHullRenderer("energy_hatch.output_4a")
    event.create(
        'energy_output_hatch_4A2',
        'custom',
        (holder, tier) => {
            return new EnergyHatchPartMachine(holder, tier, IO.OUT, 4)
        },
        GTValues.HV
    )
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.OUTPUT_ENERGY)
        .overlayTieredHullRenderer("energy_hatch.output_4a")
    event.create("inscriber", "simple",
        GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .recipeType("inscriber", true, true)
        .tankScalingFunction(tier => tier * 4800)
        .workableTieredHullRenderer("gtceu:block/machines/inscriber")
})
