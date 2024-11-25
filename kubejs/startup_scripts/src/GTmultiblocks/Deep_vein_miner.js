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
                // 获取持久数据中的温度和并行计数
                let temperature = machine.getHolder().self().persistentData.getInt('furnace_temperature');
                let parallel = machine.getHolder().self().persistentData.getInt('parallel_count');

                // 默认温度为300K，如果为null或小于300，则设为300
                if (temperature == null || temperature < 300) {
                    temperature = 301;
                }

                // 获取流体数据，类似于之前的代码
                let pyrotheumAmount = 0;
                let cryotheumAmount = 0;

                // 遍历机器的所有部件
                machine.getParts().forEach(part => {
                    if (!part || !part.getRecipeHandlers) return;

                    // 遍历每个部件的配方处理器
                    part.getRecipeHandlers().forEach(handler => {
                        if (handler.getHandlerIO() === $IO.IN) { // 检查输入流体
                            handler.getContents().forEach(content => {
                                if (content instanceof $FluidStack) {
                                    const fluid = content.getFluid();
                                    // 累加流体数量
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

                // 显示温度和流体数据到 GUI
                l.add(Component.translatable("void_miner.max_temperature", Text.of(temperature + "K").red())); // 温度显示
                l.add(l.size(), Text.translate('ctnh.industrial_primitive_blast_furnace.parallel_count', parallel)); // 并行计数显示
                l.add(l.size(), Text.translate("void_miner.pyrotheum", pyrotheumAmount + " mB")); // pyrotheum 流体显示
                l.add(l.size(), Text.translate("void_miner.cryotheum", cryotheumAmount + " mB")); // cryotheum 流体显示

            } catch (error) {
                console.error("Error in additionalDisplay:", error); // 捕获并打印错误
            }
        })
        .onWorking((machine) => {
            try {
                // 检查并设置默认温度为 301K（如果没有设置过）
                const persistentData = machine.getHolder().self().persistentData;
                if (!persistentData.containsKey('furnace_temperature')) {
                    persistentData.putInt('furnace_temperature', 301); // 默认温度
                }
                if (!persistentData.containsKey('parallel_count')) {
                    persistentData.putInt('parallel_count', 1); // 默认并行度
                }

                // 获取当前的温度和并行度
                let temperature = persistentData.getInt('furnace_temperature');
                let parallel = persistentData.getInt('parallel_count') || 1; // 防止为 0
                let fluidAmount = 1000; // 每次运行消耗 1000mB 流体

                // 初始化流体计量
                let pyrotheumAmount = 0;
                let cryotheumAmount = 0;

                // 获取流体输入
                const parts = machine.getParts();
                if (parts) {
                    parts.forEach(part => {
                        const handlers = part.getRecipeHandlers();
                        if (handlers) {
                            handlers.forEach(handler => {
                                if (handler.getHandlerIO() === $IO.IN) {
                                    const contents = handler.getContents();
                                    if (contents) {
                                        contents.forEach(content => {
                                            if (content instanceof $FluidStack) {
                                                const fluid = content.getFluid();
                                                if (fluid && fluid.isSame(Fluid.of('gtceu:pyrotheum').getFluid())) {
                                                    pyrotheumAmount += content.getAmount();
                                                } else if (fluid && fluid.isSame(Fluid.of('gtceu:cryotheum').getFluid())) {
                                                    cryotheumAmount += content.getAmount();
                                                }
                                            }
                                        });
                                    }
                                }
                            });
                        }
                    });
                }

                // 尝试消耗流体并调整温度
                if (pyrotheumAmount >= fluidAmount) {
                    // 提高温度
                    temperature = Math.min(temperature + Math.floor(fluidAmount / 100), 25000); // 最大温度限制为 25000K
                    pyrotheumAmount -= fluidAmount; // 消耗 pyrotheum
                } else if (cryotheumAmount >= fluidAmount) {
                    // 降低温度
                    temperature = Math.max(temperature - Math.floor(fluidAmount / 100), 0); // 最低温度限制为 0K
                    cryotheumAmount -= fluidAmount; // 消耗 cryotheum
                } else {
                    console.warn("Not enough fluid to operate machine!");
                    return false; // 没有足够的流体，不让机器运行
                }

                // 存储更新后的温度和并行数
                persistentData.putInt('furnace_temperature', temperature);
                persistentData.putInt('parallel_count', 1); // 并行度固定为 1

                // 输出日志
                console.log(`Machine running. Temperature: ${temperature}K, Pyrotheum: ${pyrotheumAmount}mB, Cryotheum: ${cryotheumAmount}mB`);

                // 返回 true 表示机器继续运行
                return true;
            } catch (error) {
                console.error("Error during .onWorking execution:", error);
                return false; // 发生错误时安全地停止运行
            }
        })
        .beforeWorking((machine, recipe) => {
            try {
                // 检查并设置默认温度为 301K（如果没有设置过）
                const persistentData = machine.getHolder().self().persistentData;
                if (!persistentData.containsKey('furnace_temperature')) {
                    persistentData.putInt('furnace_temperature', 301); // 默认温度
                }
                if (!persistentData.containsKey('parallel_count')) {
                    persistentData.putInt('parallel_count', 1); // 默认并行度
                }

                // 获取当前的温度和并行度
                let temperature = persistentData.getInt('furnace_temperature');
                let parallel = persistentData.getInt('parallel_count') || 1; // 防止为 0
                let fluidAmount = 1000; // 每次运行消耗 1000mB 流体

                // 确保温度达到最低值才能开始工作
                if (temperature < 300) {
                    console.warn("Machine temperature too low to start work!");
                    return false; // 如果温度不足，不允许工作
                }

                // 确保并行度大于 0
                if (parallel < 1) {
                    console.warn("Parallel count too low to start work!");
                    return false; // 如果并行度太低，不允许工作
                }

                // 假设流体充足，这里不做额外检查（在 .onWorking() 中已检查）
                return true; // 返回 true 表示可以开始工作
            } catch (error) {
                console.error("Error during .beforeWorking execution:", error);
                return false; // 发生错误时阻止机器工作
            }
        })
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_robust_tungstensteel', 'gtceu:block/multiblock/large_chemical_reactor', false);


});