ServerEvents.recipes(event => {
    let ctnh = event.recipes.gtceu
    let bender = "gtceu:bender/"
    let extruder = "gtceu:extruder/"
    let hammer = "gtceu:forge_hammer/"
    let cutter = "gtceu:cutter/"
    let ct_bender = "mechanical_pro"
    let fluid_solidifier = "gtceu:fluid_solidifier/"
    let lathe = "gtceu:lathe/"
    let wiremill = "gtceu:wirewill/"
    adjust_all("special_composite_steel_m77", 2, 32678)
    adjust_all('neutronium', 2, 32678)
    adjust_all('bedrock_neutronium', 2, GTValues.VA[GTValues.ZPM])
    adjust_all('adamantite', 16, GTValues.VA[GTValues.IV])
    adjust_all('aether', 1, GTValues.VA[GTValues.UV])
    adjust_all('radiation_sight_alloy_x', 4, GTValues.VA[GTValues.ZPM])
    adjust_all("radiation_sight_alloy_inf", 0.5, GTValues.VA[GTValues.UHV])
    adjust_all('quantum_alloy', 2, GTValues.VA[GTValues.ZPM])
    adjust_all('ultra_mana', 16, GTValues.VA[GTValues.IV])
    adjust_all('abyssalalloy', 2, GTValues.VA[GTValues.LuV])

    function adjust_all(name, mutiple, eut) {
        //调整全部
        adjust_plate(name, mutiple, eut)
        adjust_extractor(name, mutiple, eut)
        adjust_rod(name, mutiple, eut)
        adjust_wiremill(name, mutiple, eut)
    }

    function adjust_plate(name, mutiple, eut) {
        //调整所有板 双重板 重板配方 不管磁力了谁爱管谁管
        if (!GTMaterials.get(name).hasFlags(GTMaterialFlags.GENERATE_PLATE))
            return
        bender = "gtceu:bender/"
        extruder = "gtceu:extruder/"
        let l_id = "bend_" + name + "_to_plate"
        let ider = "gtceu:bender/bend_" + name + "_to_plate"
        let ingot = "gtceu:" + name + "_ingot"
        let plate = "gtceu:" + name + "_plate"
        let block = "gtceu:" + name + "_block"
        let doubleplate = "gtceu:double_" + name + "_plate"
        let denseplate = "gtceu:dense_" + name + "_plate"
        let foil = "gtceu:" + name + "_foil"
        ider = bender + l_id
        event.remove(ider)
        ctnh.bender(l_id)
            .itemInputs(ingot)
            .circuit(1)
            .itemOutputs("1x " + plate)
            .duration(40 * mutiple)
            .EUt(eut)
        ider = "gtceu:mechanical_pressor_recipes/mechanical_pressor_recipes/" + l_id
        event.remove(ider)

        l_id = "bend_" + name + "_ingot_to_double_plate"
        ider = bender + l_id
        ctnh.bender(l_id)
            .itemInputs("2x " + ingot)
            .circuit(2)
            .itemOutputs("1x " + doubleplate)
            .duration(20 * 5.6 * mutiple)
            .EUt(eut)

        l_id = "bend_" + name + "_plate_to_double_plate"
        ider = bender + l_id
        ctnh.bender(l_id)
            .itemInputs("2x " + plate)
            .circuit(2)
            .itemOutputs("1x " + doubleplate)
            .duration(20 * 5.6 * mutiple)
            .EUt(eut)
        if (GTMaterials.get(name).hasFlags(GTMaterialFlags.GENERATE_DENSE)) {

            l_id = "bend_" + name + "_to_dense_plate"
            ider = bender + l_id
            ctnh.bender(l_id)
                .itemInputs("9x " + ingot)
                .circuit(9)
                .itemOutputs("1x " + denseplate)
                .duration(20 * 12.8 * mutiple)
                .EUt(eut)

            l_id = "bend_" + name + "_plate_to_dense_plate"
            ider = bender + l_id
            ctnh.bender(l_id)
                .itemInputs("9x " + plate)
                .circuit(9)
                .itemOutputs("1x " + denseplate)
                .duration(20 * 12.8 * mutiple)
                .EUt(eut)
        }

        l_id = "bend_" + name + "_ingot_to_foil"
        ider = bender + l_id
        ctnh.bender(l_id)
            .itemInputs("1x " + plate)
            .circuit(10)
            .itemOutputs("4x " + foil)
            .duration(20 * 2 * mutiple)
            .EUt(eut)
        ider = "gtceu:mechanical_pressor_recipes/mechanical_pressor_recipes/" + l_id
        event.remove(ider)

        l_id = "extrude_" + name + "_to_plate"
        ider = extruder + l_id
        event.remove(ider)
        ctnh.extruder(l_id)
            .itemInputs(ingot)
            .notConsumable('gtceu:plate_extruder_mold')
            .itemOutputs("1x " + plate)
            .duration(40 * mutiple)
            .EUt(eut)

        l_id = "hammer_" + name + "_to_plate"
        ider = hammer + l_id
        event.remove(ider)
        ctnh.forge_hammer(l_id)
            .itemInputs("3x " + ingot)
            .itemOutputs("2x " + plate)
            .duration(80 * mutiple)
            .EUt(eut)



        l_id = "solidify_" + name + "_to_plate"
        ider = fluid_solidifier + l_id
        event.remove(ider)
        ctnh.fluid_solidifier(l_id)
            .inputFluids("gtceu:" + name + " 144")
            .notConsumable('gtceu:plate_casting_mold')
            .itemOutputs("1x " + plate)
            .duration(40 * mutiple)
            .EUt(eut)

        let cut = "cut_" + name + "_block_to_plate"
        ider = cutter + cut
        event.remove(ider)
            //切割机配方，液体消耗固定为90*n，时间初始为18s，收到双倍mutiple倍乘eut消耗翻4倍
        ctnh.cutter(cut)
            .itemInputs(block)
            .inputFluids("gtceu:lubricant 90")
            .itemOutputs("9x " + plate)
            .duration(40 * 9 * mutiple * mutiple)
            .EUt(eut * 4)

        let cut_1 = cut + "_distilled_water"
        ider = cutter + cut_1
        event.remove(ider)
        ctnh.cutter(cut_1)
            .itemInputs(block)
            .inputFluids("gtceu:distilled_water 270")
            .itemOutputs("9x " + plate)
            .duration(40 * 9 * mutiple * mutiple * 2)
            .EUt(eut * 4)

        let cut_2 = cut + "_water"
        ider = cutter + cut_2
        event.remove(ider)
        ctnh.cutter(cut_2)
            .itemInputs(block)
            .inputFluids("gtceu:water 360")
            .itemOutputs("9x " + plate)
            .duration(40 * 9 * mutiple * mutiple * 4)
            .EUt(eut * 4)
    }

    function adjust_extractor(name, mutiple, eut) {
        //提取，只提取锭
        let ingot = "gtceu:" + name + "_ingot"
        let extractor = "gtceu" + name + "_extractor/"
        let extract = "extract" + name + "ingot"
        event.remove(extract + extractor)
        ctnh.extractor(extract)
            .itemInputs(ingot)
            .outputFluids("gtceu:" + name + " 144")
            .duration(20 * 2.8 * mutiple)
            .EUt(eut)
    }

    function adjust_rod(name, mutiple, eut) {
        //调整杆 长杆配方 用压膜机收到双倍时间惩罚
        if (!GTMaterials.get(name).hasFlags(GTMaterialFlags.GENERATE_ROD))
            return
        let ingot = "gtceu:" + name + "_ingot"
        let rod = "gtceu:" + name + "_rod"
        let long_rod = "gtceu:long_" + name + "_rod"
        let l_id = "lathe_" + name + "_to_rod"
        event.remove(lathe + l_id)
        ctnh.lathe(l_id)
            .itemInputs(ingot)
            .itemOutputs("2x " + rod)
            .duration(20 * 5.6 * mutiple)
            .EUt(eut)
        let ider = "gtceu:mechanical_lathe_recipes/mechanical_lathe_recipes/" + l_id
        event.remove(ider)
        l_id = "extrude_" + name + "_to_rod"
        event.remove(extruder + l_id)
        ctnh.extruder(l_id)
            .itemInputs(ingot)
            .notConsumable('gtceu:rod_extruder_mold')
            .itemOutputs("2x " + rod)
            .duration(20 * 5.6 * mutiple * 2)
            .EUt(eut)


        l_id = "extrude_" + name + "_ingot_to_long_rod"
        event.remove(extruder + l_id)
        ctnh.extruder(l_id)
            .itemInputs(ingot)
            .notConsumable('gtceu:long_rod_extruder_mold')
            .itemOutputs("1x " + long_rod)
            .duration(20 * 5.6 * mutiple * 2)
            .EUt(eut)

        ider = "gtceu:mechanical_lathe_recipes/mechanical_lathe_recipes/" + l_id
        event.remove(ider)


        l_id = "hammer_" + name + "_rod_to_long_rod"
        event.remove(hammer + l_id)
        ctnh.forge_hammer(l_id)
            .itemInputs("2x " + rod)
            .itemOutputs(long_rod)
            .duration(20 * 5.6 * mutiple)
            .EUt(eut)

    }

    function adjust_wiremill(name, mutiple, eut) {
        //修改导线，细导线配方，2xn的导线比做n的导线的时间倍率是1.9而不是2.0，理论做16x的最快
        let single_wire = "gtceu:" + name + "_single_wire"
        let double_wire = "gtceu:" + name + "_double_wire"
        let quadruple_wire = "gtceu:" + name + "_quadruple_wire"
        let octal_wire = "gtceu:" + name + "_octal_wire"
        let hex_wire = "gtceu:" + name + "_hex_wire"
        let mill_wire = "gtceu:" + "fine_" + name + "_wire"
        let ingot = "gtceu:" + name + "_ingot"
        if (GTMaterials.get(name).getProperty(PropertyKey.WIRE) == null)
            return
        if (!GTMaterials.get(name).hasFlags(GTMaterialFlags.GENERATE_FINE_WIRE))
            return
        let l_id = "mill_" + name + "_wire"
        event.remove(extruder + l_id)
        event.remove(wiremill + l_id)
        ctnh.wiremill(l_id)
            .itemInputs("1x " + ingot)
            .circuit(1)
            .itemOutputs("2x " + single_wire)
            .duration(2.8 * 20 * mutiple)
            .EUt((eut))
        event.remove(wiremill + l_id + "_2")
        ctnh.wiremill(l_id + "_2")
            .itemInputs("1x " + ingot)
            .circuit(2)
            .itemOutputs("2x " + double_wire)
            .duration(2.8 * 20 * mutiple * 1.9)
            .EUt((eut))
        event.remove(wiremill + l_id + "_4")
        ctnh.wiremill(l_id + "_4")
            .itemInputs("2x " + ingot)
            .circuit(4)
            .itemOutputs("1x " + quadruple_wire)
            .duration(2.8 * 20 * mutiple * 1.9 * 1.9)
            .EUt((eut))
        event.remove(wiremill + l_id + "_8")
        ctnh.wiremill(l_id + "_8")
            .itemInputs("4x " + ingot)
            .circuit(8)
            .itemOutputs("1x " + octal_wire)
            .duration(2.8 * 20 * mutiple * 1.9 * 1.9 * 1.9)
            .EUt((eut))
        event.remove(wiremill + l_id + "_16")
        ctnh.wiremill(l_id + "_16")
            .itemInputs("8x " + ingot)
            .circuit(8)
            .itemOutputs("1x " + hex_wire)
            .duration(2.8 * 20 * mutiple * 1.9 * 1.9 * 1.9 * 1.9)
            .EUt((eut))
        l_id = "mill_" + name + "_wire_fine"
        event.remove(wiremill + l_id)
        ctnh.wiremill(l_id)
            .itemInputs("1x " + ingot)
            .circuit(3)
            .itemOutputs("8x " + mill_wire)
            .duration(5.6 * 20 * mutiple)
            .EUt((eut))

    }




})