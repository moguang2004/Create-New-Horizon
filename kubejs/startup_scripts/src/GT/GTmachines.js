GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create(
        "rotor_holder0",
        "custom",
        (holder, tier) => {
            return new $RotorHolderMachine(holder, tier);
        },
        GTValues.ULV
    )
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.ROTOR_HOLDER)
        .renderer(() => new $MachineRender(GTValues.ULV))
    event.create(
        "rotor_holder1",
        "custom",
        (holder, tier) => {
            return new $RotorHolderMachine(holder, tier);
        },
        GTValues.LV
    )
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.ROTOR_HOLDER)
        .renderer(() => new $MachineRender(GTValues.LV))
    event.create(
        "rotor_holder2",
        "custom",
        (holder, tier) => {
            return new $RotorHolderMachine(holder, tier);
        },
        GTValues.MV
    )
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.ROTOR_HOLDER)
        .renderer(() => new $MachineRender(GTValues.MV))
    event.create(
        "rotor_holder3",
        "custom",
        (holder, tier) => {
            return new $RotorHolderMachine(holder, tier);
        },
        GTValues.UHV
    )
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.ROTOR_HOLDER)
        .renderer(() => new $MachineRender(GTValues.UHV))
    event.create(
        "rotor_holder4",
        "custom",
        (holder, tier) => {
            return new $RotorHolderMachine(holder, tier);
        },
        GTValues.UEV
    )
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.ROTOR_HOLDER)
        .renderer(() => new $MachineRender(GTValues.UEV))
    event.create(
        "rotor_holder5",
        "custom",
        (holder, tier) => {
            return new $RotorHolderMachine(holder, tier);
        },
        GTValues.UIV
    )
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.ROTOR_HOLDER)
        .renderer(() => new $MachineRender(GTValues.UIV))
    event.create(
        "rotor_holder6",
        "custom",
        (holder, tier) => {
            return new $RotorHolderMachine(holder, tier);
        },
        GTValues.UXV
    )
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.ROTOR_HOLDER)
        .renderer(() => new $MachineRender(GTValues.UXV))
    event.create(
        "rotor_holder7",
        "custom",
        (holder, tier) => {
            return new $RotorHolderMachine(holder, tier);
        },
        GTValues.OpV
    )
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.ROTOR_HOLDER)
        .renderer(() => new $MachineRender(GTValues.OpV))
    event.create(
        "rotor_holder8",
        "custom",
        (holder, tier) => {
            return new $RotorHolderMachine(holder, tier);
        },
        GTValues.MAX
    )
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.ROTOR_HOLDER)
        .renderer(() => new $MachineRender(GTValues.MAX))


    event.create(
        'energy_output_hatch_4a0',
        'custom',
        (holder, tier) => {
            return new $EnergyHatchPartMachine(holder, tier, $IO.OUT, 4)
        },
        GTValues.LV
    )
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.OUTPUT_ENERGY)
        .overlayTieredHullRenderer("energy_hatch.output_4a")
    event.create(
        'energy_output_hatch_4a1',
        'custom',
        (holder, tier) => {
            return new $EnergyHatchPartMachine(holder, tier, $IO.OUT, 4)
        },
        GTValues.MV
    )
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.OUTPUT_ENERGY)
        .overlayTieredHullRenderer("energy_hatch.output_4a")
    event.create(
        'energy_output_hatch_4a2',
        'custom',
        (holder, tier) => {
            return new $EnergyHatchPartMachine(holder, tier, $IO.OUT, 4)
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
