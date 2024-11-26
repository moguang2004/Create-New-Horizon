GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('void_miner_processing')
        //.category('void_miner_processing')
        .setEUIO('in')
        .setMaxIOSize(3, 24, 3, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MINER);
});

// Multiblock

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('void_miner', 'multiblock', holder => new $WorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS) // 不允许绕 Y 轴旋转
        .recipeType('void_miner_processing') // 定义配方类型
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CCCCCCC", "XF   FX", "XF   FX", "XXXXXXX", "XF   FX", "XF   FX", "XF   FX", " F   F ", "       ", "       ", "       ", "       ")
            .aisle("CCCCCCC", "F     F", "F     F", "X     X", "F     F", "F     F", "FX   XF", "FX   XF", " FFFFF ", "       ", "       ", "       ")
            .aisle("CCBBBCC", "       ", "   A   ", "X  F  X", "   F   ", "   F   ", "  PGP  ", "  PGP  ", " FVFVF ", "  #F#  ", "  #F#  ", "  ###  ")
            .aisle("CCBBBCC", "   A   ", "  AAA  ", "X FPF X", "  FPF  ", "  FPF  ", "  GGG  ", "  GGG  ", " FFXFF ", "  FXF  ", "  FXF  ", "  #F#  ")
            .aisle("CCBBBCC", "       ", "   A   ", "X  F  X", "   F   ", "   F   ", "  PGP  ", "  PGP  ", " FVFVF ", "  #F#  ", "  #F#  ", "  ###  ")
            .aisle("CCCCCCC", "F     F", "F     F", "X     X", "F     F", "F     F", "FX   XF", "FX   XF", " FFFFF ", "       ", "       ", "       ")
            .aisle("CCCCCCC", "XF   FX", "XF   FX", "XXXYXXX", "XF   FX", "XF   FX", "XF   FX", " F   F ", "       ", "       ", "       ", "       ")
            .where('C', Predicates.blocks('gtceu:dark_concrete'))
            .where('B', Predicates.blocks('gtceu:flint_block'))
            .where('A', Predicates.blocks('gtceu:tungsten_carbide_block'))
            .where('V', Predicates.blocks('gtceu:heat_vent'))
            .where('F', Predicates.frames('tungsten_steel'))
            .where('P', Predicates.blocks('gtceu:tungstensteel_pipe_casing'))
            .where('G', Predicates.blocks('gtceu:tungstensteel_gearbox'))
            .where('X', Predicates.blocks('gtceu:robust_machine_casing').or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('#', Predicates.air())
            .where(' ', Predicates.any())
            .where('Y', Predicates.controller(Predicates.blocks(definition.get())))
            .build()
    )
        .additionalDisplay((/** @type {$MetaMachine} */machine, l) => {
            try {
                // 获取温度和并行计数的持久数据
                let temperature = machine.getHolder().self().persistentData.getInt('furnace_temperature');
                let parallel = machine.getHolder().self().persistentData.getInt('parallel_count');

                // 如果温度为null或小于300，设为默认值
                if (temperature === null || temperature < 300) {
                    temperature = 300;
                }

                // 初始化流体计量
                let pyrotheumAmount = 0;
                let cryotheumAmount = 0;

                // 遍历机器部件以计算流体数量
                machine.getParts().forEach(part => {
                    if (!part || !part.getRecipeHandlers) return;

                    part.getRecipeHandlers().forEach(handler => {
                        if (handler.getHandlerIO() === $IO.IN) { // 检查输入
                            handler.getContents().forEach(content => {
                                if (content instanceof $FluidStack) {
                                    const fluid = content.getFluid();
                                    // 统计流体
                                    if (fluid.isSame(Fluid.of('gtceu:pyrotheum').getFluid())) {
                                        pyrotheumAmount += content.getAmount();
                                    } else if (fluid.isSame(Fluid.of('gtceu:cryotheum').getFluid())) {
                                        cryotheumAmount += content.getAmount();
                                    }
                                }
                            });
                        }
                    });
                });

                // 在 GUI 中显示温度、流体数量
                l.add(Component.translatable("gtceu.multiblock.blast_furnace.max_temperature", Text.of(temperature + "K").red())); // 温度显示
                l.add(l.size(), Text.translate('ctnh.industrial_primitive_blast_furnace.parallel_count', parallel)); // 并行计数显示
                l.add(l.size(), Text.translate("ctnh.blaze_blast_furnace.pyrotheum", `${pyrotheumAmount} mB`)); // 烈焰之赤炎
                l.add(l.size(), Text.translate("ctnh.blaze_blast_furnace.cryotheum", `${cryotheumAmount} mB`)); // 极寒之凌冰

            } catch (error) {
                console.error("Error in additionalDisplay:", error); // 捕获并打印错误
            }
        })
        .onWorking((/** @type {$WorkableElectricMultiblockMachine} */ machine) => {
            // 每隔 100 tick 执行一次
            if (machine.getOffsetTimer() % 100 === 0) {
                const fluidAmount = 500; // 每次运行需要消耗的流体量

                // 获取当前温度
                let temperature = machine.getHolder().self().persistentData.getInt('furnace_temperature');
                if (temperature === null || temperature < 300) {
                    temperature = 300; // 初始化温度为 300K
                }

                // 获取流体配方
                let pyrotheumRecipe = $GTRecipeBuilder.ofRaw()["inputFluids(com.lowdragmc.lowdraglib.side.fluid.FluidStack)"]("gtceu:pyrotheum " + fluidAmount).buildRawRecipe();
                let cryotheumRecipe = $GTRecipeBuilder.ofRaw()["inputFluids(com.lowdragmc.lowdraglib.side.fluid.FluidStack)"]("gtceu:cryotheum " + fluidAmount).buildRawRecipe();

                // 如果温度超过最大值，进入强制降温模式
                if (temperature >= 25000) {
                    if (cryotheumRecipe.matchRecipe(machine).isSuccess()) {
                        cryotheumRecipe.handleRecipeIO($IO.IN, machine, machine.recipeLogic.getChanceCaches());
                        temperature = Math.max(300, temperature - 70); // 每次消耗极寒之凌冰降低 70K
                        machine.getHolder().self().persistentData.putInt('furnace_temperature', temperature);
                        return true; // 机器继续运行进行降温
                    } else {
                        machine.getRecipeLogic().setProgress(0); // 流体不足时停止进程
                        return false; // 暂停运行
                    }
                }

                // 如果温度在正常范围内，检查并消耗流体
                if (pyrotheumRecipe.matchRecipe(machine).isSuccess()) {
                    pyrotheumRecipe.handleRecipeIO($IO.IN, machine, machine.recipeLogic.getChanceCaches());
                    temperature = Math.min(25000, temperature + 100); // 每消耗烈焰之赤炎增加 100K
                    machine.getHolder().self().persistentData.putInt('furnace_temperature', temperature);
                    return true; // 成功消耗烈焰之赤炎，机器继续运行
                } else if (cryotheumRecipe.matchRecipe(machine).isSuccess()) {
                    cryotheumRecipe.handleRecipeIO($IO.IN, machine, machine.recipeLogic.getChanceCaches());
                    temperature = Math.max(300, temperature - 70); // 每消耗极寒之凌冰降低 70K
                    machine.getHolder().self().persistentData.putInt('furnace_temperature', temperature);
                    return true; // 成功消耗极寒之凌冰，机器继续运行
                }

                // 如果没有足够的流体，停止机器运行
                machine.getRecipeLogic().setProgress(0);
                return false;
            }

            return true; // 正常运行
        })
        .beforeWorking((/** @type {$WorkableElectricMultiblockMachine} */ machine, recipe) => {
            const fluidAmount = 1000; // 每次运行需要的流体量

            // 获取当前温度
            let temperature = machine.getHolder().self().persistentData.getInt('furnace_temperature');
            if (temperature === null || temperature < 300) {
                temperature = 300; // 初始化温度为 300K
            }

            // 如果温度超过最大值，强制降温
            if (temperature >= 25000) {
                machine.getRecipeLogic().setProgress(0); // 停止当前配方进度
                return false; // 不运行配方
            }

            let pyrotheumRecipe = $GTRecipeBuilder.ofRaw()["inputFluids(com.lowdragmc.lowdraglib.side.fluid.FluidStack)"]("gtceu:pyrotheum " + fluidAmount).buildRawRecipe();
            let cryotheumRecipe = $GTRecipeBuilder.ofRaw()["inputFluids(com.lowdragmc.lowdraglib.side.fluid.FluidStack)"]("gtceu:cryotheum " + fluidAmount).buildRawRecipe();

            // 检查烈焰之赤炎的配方是否匹配
            if (pyrotheumRecipe.matchRecipe(machine).isSuccess()) {
                // 如果烈焰之赤炎存在，允许匹配极寒之凌冰
                if (cryotheumRecipe.matchRecipe(machine).isSuccess()) {
                    return true; // 烈焰之赤炎和极寒之凌冰条件均满足，允许运行配方
                } else {
                    // 如果烈焰之赤炎存在，但极寒之凌冰不足，依然允许运行
                    return true;
                }
            }

            // 如果没有烈焰之赤炎，禁止运行任何配方
            machine.getRecipeLogic().interruptRecipe(); // 中断当前配方运行
            return false;
        })
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_robust_tungstensteel', 'gtceu:block/multiblock/large_chemical_reactor', false);


});