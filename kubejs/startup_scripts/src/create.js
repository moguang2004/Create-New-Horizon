CapabilityEvents.blockEntity(event => {
	event.attach("create:fluid_tank",
		BotaniaCapabilityBuilder.MANA.blockEntity()
			.receiveMana((be, amount) => {
				let fluid = be.getCapability(ForgeCapabilities.FLUID_HANDLER).orElse(null)
				fluid.fill(Fluid.of('gtceu:mana', 0.02 * amount), 'execute')
			})
			.getCurrentMana(be => {
				let fluid = be.getCapability(ForgeCapabilities.FLUID_HANDLER).orElse(null)
				return fluid.getFluidInTank(0).amount
			})
			.isFull(be => {
				let fluid = be.getCapability(ForgeCapabilities.FLUID_HANDLER).orElse(null)
				return (fluid.getTankCapacity(0) <= fluid.getFluidInTank(0).amount || (fluid.getFluidInTank(0).fluid != Fluid.of('gtceu:mana').fluid && fluid.getFluidInTank(0).amount > 0))
			})
	)

})
