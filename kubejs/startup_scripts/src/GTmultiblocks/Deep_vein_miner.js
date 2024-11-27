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
        .recipeModifier((/**@type {$MultiblockControllerMachine}*/ machine,/**@type {$GTRecipe}*/ recipe) => {
            let temperature = machine.getHolder().self().persistentData.getInt('furnace_temperature');

            // 设置默认温度为 300K，确保不会为 null 或小于300
            if (temperature == null || temperature < 300) {
                machine.getHolder().self().persistentData.putInt('furnace_temperature', 300);
                temperature = 300;
            }

            // 初始化 newrecipe
            let newrecipe = recipe.copy();

            // 根据温度区间设置时长
            if (temperature >= 20000) {
                newrecipe.duration = 100;  // 温度达到 20000K 时，时长为 100
            } else if (temperature >= 15000) {
                newrecipe.duration = 300;  // 温度达到 15000K 时，时长为 300
            } else if (temperature >= 10000) {
                newrecipe.duration = 600;  // 温度达到 10000K 时，时长为 600
            } else if (temperature >= 5000) {
                newrecipe.duration = 1200;  // 温度达到 5000K 时，时长为 1200
            } else {
                newrecipe.duration = recipe.duration; // 如果温度低于 5000K，保持原配方时长
            }

            // 返回修改后的配方
            return newrecipe;
        })
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
            const fluidAmount = 1000; // 每次运行需要消耗的流体量

            // 获取当前温度
            let temperature = machine.getHolder().self().persistentData.getInt('furnace_temperature');
            if (temperature === null || temperature < 300) {
                temperature = 300; // 初始化温度为 300K
            }

            // 检查是否处于强制降温模式
            let isCoolingDown = machine.getHolder().self().persistentData.getBoolean('is_cooling_down');
            if (isCoolingDown) {
                // 只允许通过极寒之凌冰降温
                let cryotheumRecipe = $GTRecipeBuilder.ofRaw()["inputFluids(com.lowdragmc.lowdraglib.side.fluid.FluidStack)"]("gtceu:cryotheum " + fluidAmount).buildRawRecipe();
                if (cryotheumRecipe.matchRecipe(machine).isSuccess()) {
                    cryotheumRecipe.handleRecipeIO($IO.IN, machine, machine.recipeLogic.getChanceCaches());
                    temperature = Math.max(300, temperature - 100); // 每消耗 1000mB 极寒之凌冰降温 100K
                    machine.getHolder().self().persistentData.putInt('furnace_temperature', temperature);

                    // 如果温度已经降到 300K，退出强制降温模式
                    if (temperature <= 300) {
                        machine.getHolder().self().persistentData.putBoolean('is_cooling_down', false); // 停止降温
                        return true; // 恢复配方运行
                    }

                    // 如果温度未达到 300K，继续降温
                    machine.getRecipeLogic().interruptRecipe();
                    return true; // 保持降温状态
                } else {
                    // 如果极寒之凌冰不足，停止机器运行
                    machine.getRecipeLogic().setProgress(0);
                    machine.getRecipeLogic().interruptRecipe();
                    return false; // 暂停运行
                }
            }

            // 正常配方运行逻辑（不在强制降温模式时）
            let pyrotheumRecipe = $GTRecipeBuilder.ofRaw()["inputFluids(com.lowdragmc.lowdraglib.side.fluid.FluidStack)"]("gtceu:pyrotheum " + fluidAmount).buildRawRecipe();
            let cryotheumRecipe = $GTRecipeBuilder.ofRaw()["inputFluids(com.lowdragmc.lowdraglib.side.fluid.FluidStack)"]("gtceu:cryotheum " + fluidAmount).buildRawRecipe();

            // 只有烈焰之赤炎才能启动机器
            if (pyrotheumRecipe.matchRecipe(machine).isSuccess()) {
                pyrotheumRecipe.handleRecipeIO($IO.IN, machine, machine.recipeLogic.getChanceCaches());
                temperature = Math.min(25000, temperature + 100); // 每消耗烈焰之赤炎增加 100K
                machine.getHolder().self().persistentData.putInt('furnace_temperature', temperature);
                return true; // 成功消耗烈焰之赤炎，机器继续运行
            }

            // 极寒之凌冰只能在温度不为300K时运行
            if (cryotheumRecipe.matchRecipe(machine).isSuccess() && temperature > 300) {
                cryotheumRecipe.handleRecipeIO($IO.IN, machine, machine.recipeLogic.getChanceCaches());
                temperature = Math.max(300, temperature - 70); // 每消耗极寒之凌冰降低 70K
                machine.getHolder().self().persistentData.putInt('furnace_temperature', temperature);
                return true; // 成功消耗极寒之凌冰
            }

            // 如果没有足够的流体，停止机器运行
            machine.getRecipeLogic().setProgress(0);
            return false;
        })

        .beforeWorking((/** @type {$WorkableElectricMultiblockMachine} */ machine, recipe) => {
            const fluidAmount = 500; // 每次消耗的流体量

            // 获取当前温度
            let temperature = machine.getHolder().self().persistentData.getInt('furnace_temperature');
            if (temperature === null || temperature < 300) {
                temperature = 300; // 初始化温度为 300K
            }

            // 强制降温模式逻辑
            let isCoolingDown = machine.getHolder().self().persistentData.getBoolean('is_cooling_down');
            if (temperature >= 25000 || isCoolingDown) {
                machine.getHolder().self().persistentData.putBoolean('is_cooling_down', true); // 开启强制降温模式

                // 构建极寒之凌冰配方
                let cryotheumRecipe = $GTRecipeBuilder.ofRaw()["inputFluids(com.lowdragmc.lowdraglib.side.fluid.FluidStack)"]("gtceu:cryotheum " + fluidAmount).buildRawRecipe();

                // 只允许通过极寒之凌冰降温
                if (cryotheumRecipe.matchRecipe(machine).isSuccess()) {
                    cryotheumRecipe.handleRecipeIO($IO.IN, machine, machine.recipeLogic.getChanceCaches());
                    temperature = Math.max(300, temperature - 100); // 每消耗 500mB 极寒之凌冰降温 100K
                    machine.getHolder().self().persistentData.putInt('furnace_temperature', temperature);

                    // 如果温度降到 300K，退出强制降温模式
                    if (temperature <= 300) {
                        machine.getHolder().self().persistentData.putBoolean('is_cooling_down', false);
                        return true; // 恢复配方
                    }
                    return false; // 暂停运行配方
                }

                // 如果极寒之凌冰不足，停止机器运行
                machine.getRecipeLogic().setProgress(0);
                machine.getRecipeLogic().interruptRecipe();
                return false; // 暂停运行
            }

            // 烈焰之赤炎逻辑仅在非强制降温模式时允许
            if (recipe === 'pyrotheum' && isCoolingDown) {
                return false; // 禁止烈焰之赤炎在降温时运行
            }

            return true; // 正常运行其他配方
        })
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_robust_tungstensteel', 'gtceu:block/multiblock/large_chemical_reactor', false);


});