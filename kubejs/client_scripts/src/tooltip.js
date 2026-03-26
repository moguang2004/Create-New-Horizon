ItemEvents.tooltip(tooltip => {

    // tooltip.addAdvanced('kubejs:temperature_keeping_device',
    //     (item, advanced, text) => {
    //         let energy = item.getCapability(ForgeCapabilities.ENERGY).orElse(null)
    //         let { energyStored, maxEnergyStored } = energy
    //         var { newNumber: energyStored_, unitName: unit1 } = unitChanger(energyStored)
    //         var { newNumber: maxEnergyStored_, unitName: unit2 } = unitChanger(maxEnergyStored)
    //         text.add(1, Text.translate('item.ctnh.durabilityofenergy', energyStored_.toFixed(2).toString() + unit1, maxEnergyStored_.toFixed(2).toString() + unit2).green())
    //         /*for(let index = 1; index < text.length; index++){
    //             let component = text.get(index)
    //             if(component.getString() == 'showenergy'){
    //                 var { newNumber: energyStored_, unitName: unit1 } = unitChanger(energyStored)
    //                 var { newNumber: maxEnergyStored_, unitName: unit2 } = unitChanger(maxEnergyStored)
    //                 text.set(index, component.translatable('item.ctnh.durabilityofenergy',energyStored_.toFixed(2).toString() + unit1, maxEnergyStored_.toFixed(2).toString() + unit2).green())
    //                 //text.set(index, component.translatable('item.ctnh.durabilityofenergy',maxDamage-damageValue, maxDamage).green())
    //             }
                
    //         }*/
    //     })
})

function unitChanger(number) {
    var unit = ""
    var newNumber = number

    for (let index = 0; index <= 2; index++) {
        newNumber = newNumber / 1000
        if (newNumber <= 1) {
            switch (index) {
                default: unit = ""
                    break;
                case 1: unit = "k"
                    break;
                case 2: unit = "M"
                    break;
            }
            break
        }
    }
    newNumber = Math.floor(newNumber * 100000) / 100
    return { newNumber: newNumber, unitName: unit }
}

ItemEvents.tooltip(event => {
    event.addAdvanced('kubejs:scp_500', (item, advanced, text) => {
        text.add(1, Text.translate('kubejs.scp_500.0'))
        text.add(2, Text.translate('kubejs.scp_500.1'))
    })
    event.addAdvanced('kubejs:scp_500_base', (item, advanced, text) => {
        text.add(1, Text.translate('kubejs.scp_500_base.0'))
    })
    event.add('kubejs:echo_processor', Text.translate('ctnh.circuit_echo_zpm').darkAqua())
    event.add('kubejs:echo_processor_assembly', Text.translate('ctnh.circuit_echo_uv').darkAqua())
    event.add('kubejs:echo_processor_computer', Text.translate('ctnh.circuit_echo_uhv').darkAqua())
    event.add('kubejs:echo_processor_mainframe', Text.translate('ctnh.circuit_echo_uev').darkAqua())

    event.add('gtceu:nan_certificate',Text.yellow('1.2.1版本毕业证明'))

    event.add('hostilenetworks:deep_learner',Text.translate('ctnh.hostilenetworks.deep_learner').yellow())
    event.add('hostilenetworks:sim_chamber',Text.translate('ctnh.hostilenetworks.sim_chamber').yellow())


    event.add('gtceu:nightvision_goggles', '§7用Gregtech的 [Armor Mode Switch] 键开启.')
    event.add(['gtceu:lp_steam_macerator', 'gtceu:hp_steam_macerator', 'gtceu:steam_grinder', 'gtceu:lv_macerator', 'gtceu:mv_macerator', 'ctpp:smashing_factory'], '§4研磨副产物只能通过HV及以上的电压获得！')
    event.addAdvanced('tconstruct:crafting_station', (item, advanced,text) => {
        text.add(1, '§4在服务器内，请不要将工作站连接到任何带有堆叠升级的容器中.')
        text.add(2, '§4此举动不会吞物品，但会导致工作站无法识别到大多出堆叠大于64的物品.')
    })

    event.add('enderio:conduit_probe', '§7下蹲滚轮或通过按键绑定切换模式，仅复制粘贴模式可用')
})
