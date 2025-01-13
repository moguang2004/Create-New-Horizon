import { $EventHandlerImplCommon$LevelEventAttachment } from "packages/dev/architectury/event/forge/$EventHandlerImplCommon$LevelEventAttachment"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"

ItemEvents.tooltip(tooltip => {

    tooltip.addAdvanced('kubejs:temperature_keeping_device',
        /**
         * 
         * @param {import("packages/net/minecraft/world/item/$ItemStack").$ItemStack$Type} item
         * @param {Boolean} advanced
         * @param {import("packages/dev/ftb/mods/ftblibrary/util/$TooltipList").$TooltipList$Type} text
         */
        (item, advanced, text) => {
            let energy = item.getCapability(ForgeCapabilities.ENERGY).orElse(null)
            let { energyStored, maxEnergyStored } = energy
            var { newNumber: energyStored_, unitName: unit1 } = unitChanger(energyStored)
            var { newNumber: maxEnergyStored_, unitName: unit2 } = unitChanger(maxEnergyStored)
            text.add(1, Text.translate('item.ctnh.durabilityofenergy', energyStored_.toFixed(2).toString() + unit1, maxEnergyStored_.toFixed(2).toString() + unit2).green())
            /*for(let index = 1; index < text.length; index++){
                let component = text.get(index)
                if(component.getString() == 'showenergy'){
                    var { newNumber: energyStored_, unitName: unit1 } = unitChanger(energyStored)
                    var { newNumber: maxEnergyStored_, unitName: unit2 } = unitChanger(maxEnergyStored)
                    text.set(index, component.translatable('item.ctnh.durabilityofenergy',energyStored_.toFixed(2).toString() + unit1, maxEnergyStored_.toFixed(2).toString() + unit2).green())
                    //text.set(index, component.translatable('item.ctnh.durabilityofenergy',maxDamage-damageValue, maxDamage).green())
                }
                
            }*/
        })
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
    event.addAdvanced('gtceu:mana_seperator', (item, advanced, text) => {
        text.add(1, Text.translate('mana_machine').gray())
    })
    event.addAdvanced('ctnhcore:photovoltaic_power_station_energetic', (item, advanced, text) => {
        text.add(1, Text.translate('photovoltaic_power_station_energetic').gray())
        text.add(2, Text.translate('photovoltaic_power_station_energetic_basic'))
        text.add(3, Text.translate('photovoltaic_power_station_info'))
    })
    event.addAdvanced('ctnhcore:photovoltaic_power_station_pulsating', (item, advanced, text) => {
        text.add(1, Text.translate('photovoltaic_power_station_pulsating').gray())
        text.add(2, Text.translate('photovoltaic_power_station_pulsating_basic'))
        text.add(3, Text.translate('photovoltaic_power_station_info'))
    })
    event.addAdvanced('ctnhcore:photovoltaic_power_station_vibrant', (item, advanced, text) => {
        text.add(1, Text.translate('photovoltaic_power_station_vibrant').gray())
        text.add(2, Text.translate('photovoltaic_power_station_vibrant_basic'))
        text.add(3, Text.translate('photovoltaic_power_station_info'))
    })
    event.addAdvanced('gtceu:nuclear_reactor', (item, advanced, text) => {
        text.add(1, Text.translate('nuclear_reactor').gray())
        text.add(2, Text.translate('ctnh.nuclear_reactor.basic'))
        text.add(3, Text.translate('ctnh.nuclear_reactor.coolant'))
        text.add(4, Text.translate('ctnh.nuclear_reactor.overclock'))
        text.add(5, Text.translate('ctnh.nuclear_reactor.safe'))
    })
    event.addAdvanced('ctnhcore:underfloor_heating_system', (item, advanced, text) => {
        text.add(1, Text.translate('underfloor_heating_system').gray())
        text.add(2, Text.translate('ctnh.underfloor_heating_system.temperature'))
        text.add(3, Text.translate('ctnh.underfloor_heating_system.mechanism'))
        text.add(4, Text.translate('ctnh.underfloor_heating_system.rate'))
    })
    event.addAdvanced('ctnhcore:wind_power_array', (item, advanced, text) => {
        text.add(1, Text.translate('wind_power_array').gray())
        text.add(2, Text.translate('ctnh.wind_power_array.basic'))
        text.add(3, Text.translate('ctnh.wind_power_array.mechanism'))
        text.add(4, Text.translate('ctnh.wind_power_array.altitude'))
    })
    event.addAdvanced('ctnhcore:advanced_wind_power_array', (item, advanced, text) => {
        text.add(1, Text.translate('wind_power_array').gray())
        text.add(2, Text.translate('ctnh.advanced_wind_power_array.basic'))
        text.add(3, Text.translate('ctnh.wind_power_array.mechanism'))
        text.add(4, Text.translate('ctnh.wind_power_array.altitude'))
    })
    event.addAdvanced('ctnhcore:super_wind_power_array', (item, advanced, text) => {
        text.add(1, Text.translate('wind_power_array').gray())
        text.add(2, Text.translate('ctnh.super_wind_power_array.basic'))
        text.add(3, Text.translate('ctnh.wind_power_array.mechanism'))
        text.add(4, Text.translate('ctnh.wind_power_array.altitude'))
    })
    event.addAdvanced("ctnhcore:ion_exchanger", (item, advanced, text) => {
        text.add(1, Text.translate('ion_exchanger').gray())
    })
    event.addAdvanced("ctnhcore:condensing_discrete", (item, advanced, text) => {
        text.add(1, Text.translate('condensing_discrete').gray())
    })
    event.addAdvanced("gtceu:greenhouse", (item, advanced, text) => {
        text.add(1, Text.translate('greenhouse').gray())
    })
    event.addAdvanced('gtceu:super_centrifuge', (item, advanced, text) => {
        text.add(1, Text.translate('super_centrifuge').gray())
    })
    event.addAdvanced('gtceu:ultrasonic_apparatus', (item, advanced, text) => {
        text.add(1, Text.translate('ultrasonic_apparatus').gray())
    })
    event.addAdvanced('gtceu:wood_particle_collider', (item, advanced, text) => {
        text.add(1, Text.translate('wood_particle_collider').gray())
        text.add(2, Text.translate('ctnh.wood_particle_collider.tooltip.0'))
        text.add(3, Text.translate('ctnh.wood_particle_collider.tooltip.1'))
        text.add(4, Text.translate('ctnh.wood_particle_collider.tooltip.2'))
    })
    event.addAdvanced('gtceu:large_steel_furnaces', (item, advanced, text) => {
        text.add(1, Text.translate('large_steel_furnaces').gray())
        text.add(2, Text.translate('ctnh.large_steel_furnaces.tooltip.0'))
        text.add(3, Text.translate('ctnh.large_steel_furnaces.tooltip.1'))
        text.add(4, Text.translate('ctnh.large_steel_furnaces.tooltip.2'))
    })
    event.addAdvanced('gtceu:large_steel_alloy_furnace', (item, advanced, text) => {
        text.add(1, Text.translate('large_steel_alloy_furnace').gray())
        text.add(2, Text.translate('ctnh.large_steel_furnaces.tooltip.0'))
        text.add(3, Text.translate('ctnh.large_steel_furnaces.tooltip.1'))
        text.add(4, Text.translate('ctnh.large_steel_furnaces.tooltip.2'))
    })
    event.addAdvanced('gtceu:advanced_blast_furnace', (item, advanced, text) => {
        text.add(1, Text.translate('advanced_blast_furnace').gray())
        text.add(2, Text.translate('ctnh.advanced_blast_furnace.tooltip.0'))
        text.add(3, Text.translate('ctnh.advanced_blast_furnace.tooltip.1'))
        text.add(4, Text.translate('ctnh.advanced_blast_furnace.tooltip.2'))
        text.add(5, Text.translate('ctnh.advanced_blast_furnace.tooltip.3'))
    })
    event.addAdvanced('kubejs:scp_500', (item, advanced, text) => {
        text.add(1, Text.translate('kubejs.scp_500.0'))
        text.add(2, Text.translate('kubejs.scp_500.1'))
    })
    event.add('kubejs:broken_temperature_keeping_device', Text.translate('ctnh.broken_temperature_keeping_device'))
    event.add('enderio:basic_energy_conduit', Text.translate('ctnh.basic_energy_conduit'))
    event.add('enderio:enhanced_energy_conduit', Text.translate('ctnh.enhanced_energy_conduit'))
    event.add('enderio:vibrant_energy_conduit', Text.translate('ctnh.vibrant_energy_conduit'))
    event.add('enderio:ender_energy_conduit', Text.translate('ctnh.ender_energy_conduit'))
    event.add('enderio:melodic_energy_conduit', Text.translate('ctnh.melodic_energy_conduit'))
    event.add('enderio:stellar_energy_conduit', Text.translate('ctnh.stellar_energy_conduit'))
    event.add('kubejs:circuit_resonatic_ulv', Text.translate('ctnh.circuit_resonatic_ulv'))
    event.add('kubejs:circuit_resonatic_lv', Text.translate('ctnh.circuit_resonatic_lv'))
    event.add('kubejs:circuit_resonatic_mv', Text.translate('ctnh.circuit_resonatic_mv'))
    event.add('kubejs:circuit_resonatic_hv', Text.translate('ctnh.circuit_resonatic_hv'))
    event.add('kubejs:circuit_resonatic_ev', Text.translate('ctnh.circuit_resonatic_ev'))
    event.add('kubejs:circuit_resonatic_iv', Text.translate('ctnh.circuit_resonatic_iv'))
    event.add('kubejs:circuit_resonatic_luv', Text.translate('ctnh.circuit_resonatic_luv'))
    event.add('kubejs:circuit_resonatic_zpm', Text.translate('ctnh.circuit_resonatic_zpm'))
    event.add('kubejs:circuit_resonatic_uv', Text.translate('ctnh.circuit_resonatic_uv'))
    event.add('kubejs:circuit_resonatic_uhv', Text.translate('ctnh.circuit_resonatic_uhv'))
    event.add('kubejs:circuit_resonatic_uev', Text.translate('ctnh.circuit_resonatic_uev'))
    event.add('kubejs:circuit_resonatic_uiv', Text.translate('ctnh.circuit_resonatic_uiv'))
    event.add('kubejs:mana_electronic_circuit', Text.translate('ctnh.circuit_mana_hv').red())
    event.add('kubejs:mana_integrated_circuit', Text.translate('ctnh.circuit_mana_ev'))
    event.add('kubejs:echo_processor', Text.translate('ctnh.circuit_echo_zpm').darkAqua())
    event.add('kubejs:echo_processor_assembly', Text.translate('ctnh.circuit_echo_uv').darkAqua())
    event.add('kubejs:echo_processor_computer', Text.translate('ctnh.circuit_echo_uhv').darkAqua())
    event.add('kubejs:echo_processor_mainframe', Text.translate('ctnh.circuit_echo_uev').darkAqua())
    event.add('kubejs:uhv_voltage_coil', Text.translate('ctnh.uhv_voltage_coil').white())

    //Snow_city's cautions:
    event.add('gtceu:ender_fluid_link_cover', '§4暂未实装')
    event.add(['gtceu:item_tag_filter', 'gtceu:fluid_tag_filter'], Text.red("非语句 [!] 不可用"))
    event.add('gtceu:nightvision_goggles', '§7用Gregtech的 [Armor Mode Switch] 键开启.')
    event.add(['gtceu:lp_steam_macerator', 'gtceu:hp_steam_macerator', 'gtceu:steam_grinder', 'gtceu:lv_macerator', 'gtceu:mv_macerator'], '§4研磨副产物只能通过HV及以上的电压获得！')
})
