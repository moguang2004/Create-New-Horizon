import { $EventHandlerImplCommon$LevelEventAttachment } from "packages/dev/architectury/event/forge/$EventHandlerImplCommon$LevelEventAttachment"
import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"

ItemEvents.tooltip(tooltip =>{
    
    tooltip.addAdvanced('kubejs:temperature_keeping_device',
    /**
     * 
     * @param {import("packages/net/minecraft/world/item/$ItemStack").$ItemStack$Type} item
     * @param {Boolean} advanced
     * @param {import("packages/dev/ftb/mods/ftblibrary/util/$TooltipList").$TooltipList$Type} text
     */
    (item ,advanced, text) =>{
        let energy = item.getCapability(ForgeCapabilities.ENERGY).orElse(null)
        let {energyStored, maxEnergyStored} = energy
        var { newNumber: energyStored_, unitName: unit1 } = unitChanger(energyStored)
        var { newNumber: maxEnergyStored_, unitName: unit2 } = unitChanger(maxEnergyStored)
        text.add(1,Text.translate('item.ctnh.durabilityofenergy',energyStored_.toFixed(2).toString() + unit1, maxEnergyStored_.toFixed(2).toString() + unit2).green())
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
    newNumber = Math.floor(newNumber*100000)/100
    return { newNumber: newNumber, unitName: unit }
}

ItemEvents.tooltip(event =>{
    event.addAdvanced('gtceu:kinetic_steam_turbine',(item,advanced,text)=>{
        text.add(1,Text.translate('kinetic_output'))
        text.add(2,Text.translate('rotor_holder_upgrade'))
        text.add(3,Text.translate('steam_up_hv_loss').red())
    })
    event.addAdvanced('gtceu:seaweed_farm',(item,advanced,text)=>{
        text.add(1,Text.translate('kinetic_overclock'))
        text.add(2,Text.translate('subtick_overclock').yellow())
    })
    event.addAdvanced('gtceu:seawater_desalting_factory',(item,advanced,text)=>{
        text.add(1,Text.translate('desalting_introduction'))
        text.add(2,Text.translate('gtceu.machine.electric_blast_furnace.tooltip.0'))
        text.add(3,Text.translate('gtceu.machine.electric_blast_furnace.tooltip.1'))
        text.add(4,Text.translate('gtceu.machine.electric_blast_furnace.tooltip.2'))
    })
    let rotor_holder = ['ulv','lv','mv','uhv','uev','uiv','uxv','opv','max']
    rotor_holder.forEach((holder,index) =>{
        event.addAdvanced(`gtceu:${holder}_rotor_holder${index}`,(item,advanced,text)=>{
            text.add(1,Text.translate('gtceu.machine.rotor_holder.tooltip.0'))
            text.add(2,Text.translate('gtceu.machine.rotor_holder.tooltip.1'))
            text.add(3,Text.translate('gtceu.universal.disabled'))
        })
    })
    let energy_output_hatch_4a = ['lv','mv','hv']
    energy_output_hatch_4a.forEach((holder,index) =>{
        event.addAdvanced(`gtceu:${holder}_rotor_holder${index}`,(item,advanced,text)=>{
            text.add(1,Text.translate('gtceu.machine.energy_hatch.output_hi_amp.tooltip'))
        })
    })
    event.addAdvanced('gtceu:fermenting_tank',(item,advanced,text)=>{
        text.add(1,Text.translate('fermenting_introduction').gray())
        if(event.isShift()){
            text.add(2,Text.translate('ctnh.fermenting_tank.bio_growth_mechanism').green())
            text.add(3,Text.translate('ctnh.fermenting_tank.bio_growth_temperature'))
            text.add(4,Text.translate('ctnh.fermenting_tank.bio_growth'))
        }
        else{
            text.add(2,Text.translate('gtceu.machine.electric_blast_furnace.tooltip.0'))
            text.add(3,Text.translate('gtceu.machine.electric_blast_furnace.tooltip.1'))
            text.add(4,Text.translate('gtceu.machine.electric_blast_furnace.tooltip.2'))
            text.add(5,Text.translate('subtick_overclock').yellow())
            text.add(6,Text.translate('shift'))
        }
    })
    event.addAdvanced('gtceu:industrial_primitive_blast_furnace',(item,advanced,text)=>{
        text.add(1,Text.translate('industrial_primitive_blast_furnace_introduction').gray())
        text.add(2,Text.translate('ctnh.industrial_primitive_blast_furnace.temperature'))
        text.add(3,Text.translate('ctnh.industrial_primitive_blast_furnace.parallel').green())
        text.add(4,Text.translate('ctnh.industrial_primitive_blast_furnace.efficiency').green())
    })
    event.addAdvanced('gtceu:digestion_tank',(item,advanced,text)=>{
        text.add(1,Text.translate('digestion_tank_introduction').gray())
        text.add(2,Text.translate('ctnh.digestion_tank.bio_growth_mechanism').green())
        text.add(3,Text.translate('ctnh.digestion_tank.bio_growth_temperature'))
    })
    event.addAdvanced('gtceu:mana_generator_turbine_tier1',(item,advanced,text)=>{
        text.add(1,Text.translate('mana_generator_turbine_tier1').gray())
        text.add(2,Text.translate('ctnh.mana_generator_turbine_tier1.basic_power'))
        text.add(3,Text.translate('ctnh.mana_generator_turbine_tier1.restriction'))
    })
    event.addAdvanced('gtceu:mana_generator_turbine_tier2',(item,advanced,text)=>{
        text.add(1,Text.translate('mana_generator_turbine_tier2').gray())
        text.add(2,Text.translate('ctnh.mana_generator_turbine_tier2.basic_power'))
        text.add(3,Text.translate('ctnh.mana_generator_turbine_tier2.restriction'))
    })
    event.addAdvanced('gtceu:mana_generator_turbine_tier3',(item,advanced,text)=>{
        text.add(1,Text.translate('mana_generator_turbine_tier3').gray())
        text.add(2,Text.translate('ctnh.mana_generator_turbine_tier3.basic_power'))
        text.add(3,Text.translate('ctnh.mana_generator_turbine_tier3.restriction'))
    })
    event.addAdvanced('gtceu:mana_generator_turbine_tier4',(item,advanced,text)=>{
        text.add(1,Text.translate('mana_generator_turbine_tier4').gray())
        text.add(2,Text.translate('ctnh.mana_generator_turbine_tier4.basic_power'))
        text.add(3,Text.translate('ctnh.mana_generator_turbine_tier4.restriction'))
    })
    event.addAdvanced('gtceu:mana_seperator',(item,advanced,text)=>{
        text.add(1,Text.translate('mana_machine').gray())
    })
    event.addAdvanced('gtceu:mana_macerator',(item,advanced,text)=>{
        text.add(1,Text.translate('ctnh.mana_macerator'))
        text.add(2,Text.translate('mana_machine').gray())
        text.add(3,Text.translate('ctnh.basic_mana_machine.mana_consume'))
        text.add(4,Text.translate('ctnh.perfect_overclock'))
    })
    event.addAdvanced('gtceu:mana_bender',(item,advanced,text)=>{
        text.add(1,Text.translate('ctnh.mana_bender'))
        text.add(2,Text.translate('mana_machine').gray())
        text.add(3,Text.translate('ctnh.basic_mana_machine.mana_consume'))
        text.add(4,Text.translate('ctnh.perfect_overclock'))
    })
    event.addAdvanced('gtceu:mana_lathe',(item,advanced,text)=>{
        text.add(1,Text.translate('ctnh.mana_lathe'))
        text.add(2,Text.translate('mana_machine').gray())
        text.add(3,Text.translate('ctnh.basic_mana_machine.mana_consume'))
        text.add(4,Text.translate('ctnh.perfect_overclock'))
    })
    event.addAdvanced('gtceu:mana_wiremill',(item,advanced,text)=>{
        text.add(1,Text.translate('ctnh.mana_wiremill'))
        text.add(2,Text.translate('mana_machine').gray())
        text.add(3,Text.translate('ctnh.basic_mana_machine.mana_consume'))
        text.add(4,Text.translate('ctnh.perfect_overclock'))
    })
    event.addAdvanced('gtceu:mana_assembler',(item,advanced,text)=>{
        text.add(1,Text.translate('ctnh.mana_assembler'))
        text.add(2,Text.translate('mana_machine').gray())
        text.add(3,Text.translate('ctnh.advanced_mana_machine.mana_consume'))
        text.add(4,Text.translate('ctnh.perfect_overclock'))
    })

    event.addAdvanced('gtceu:water_power_station',(item,advanced,text)=>{
        text.add(1,Text.translate('water_power_station').gray())
        text.add(2,Text.translate('ctnh.water_power_station.mechanism'))
        text.add(3,Text.translate('ctnh.water_power_station.random').green())
    })
    event.addAdvanced('gtceu:slaughter_house',(item,advanced,text)=>{
        text.add(1,Text.translate('slaughter_house').gray())
        text.add(2,Text.translate('ctnh.slaughter_house.mechanism'))
        text.add(3,Text.translate('ctnh.slaughter_house.parallel'))
        text.add(4,Text.translate('ctnh.slaughter_house.health'))
    })
    event.addAdvanced('gtceu:blaze_blast_furnace',(item,advanced,text)=>{
        text.add(1,Text.translate('blaze_blast_furnace').gray())
        text.add(2,Text.translate('ctnh.blaze_blast_furnace.consume'))
        text.add(3,Text.translate('ctnh.blaze_blast_furnace.energy'))
        text.add(4,Text.translate('ctnh.blaze_blast_furnace.parallel').darkGreen())
        text.add(5,Text.translate('gtceu.machine.electric_blast_furnace.tooltip.0'))
        text.add(6,Text.translate('gtceu.machine.electric_blast_furnace.tooltip.1'))
        text.add(7,Text.translate('gtceu.machine.electric_blast_furnace.tooltip.2'))
        //text.add(4,Text.translate('ctnh.perfect_overclock'))
    })
    event.addAdvanced('gtceu:bio_reactor',(item,advanced,text)=>{
        text.add(1,Text.translate('bio_reactor').gray())
        //text.add(2,Text.translate('ctnh.bio_reactor.basic_power'))
        //text.add(3,Text.translate('ctnh.bio_reactor.restriction'))
    })
    event.addAdvanced('ctnhcore:photovoltaic_power_station_energetic',(item,advanced,text)=>{
        text.add(1,Text.translate('photovoltaic_power_station_energetic').gray())
        text.add(2,Text.translate('photovoltaic_power_station_energetic_basic'))
        text.add(3,Text.translate('photovoltaic_power_station_info'))
    })
    event.addAdvanced('ctnhcore:photovoltaic_power_station_pulsating',(item,advanced,text)=>{
        text.add(1,Text.translate('photovoltaic_power_station_pulsating').gray())
        text.add(2,Text.translate('photovoltaic_power_station_pulsating_basic'))
        text.add(3,Text.translate('photovoltaic_power_station_info'))
    })
    event.addAdvanced('ctnhcore:photovoltaic_power_station_vibrant',(item,advanced,text)=>{
        text.add(1,Text.translate('photovoltaic_power_station_vibrant').gray())
        text.add(2,Text.translate('photovoltaic_power_station_vibrant_basic'))
        text.add(3,Text.translate('photovoltaic_power_station_info'))
    })
    event.addAdvanced('gtceu:nuclear_reactor',(item,advanced,text)=>{
        text.add(1,Text.translate('nuclear_reactor').gray())
        text.add(2,Text.translate('ctnh.nuclear_reactor.basic'))
        text.add(3,Text.translate('ctnh.nuclear_reactor.coolant'))
        text.add(4,Text.translate('ctnh.nuclear_reactor.overclock'))
        text.add(5,Text.translate('ctnh.nuclear_reactor.safe'))
    })
    event.addAdvanced('gtceu:kinetic_generator',(item,advanced,text)=>{
        text.add(1,Text.translate('kinetic_generator').gray())
        text.add(2,Text.translate('ctnh.kinetic_generator.basic'))
        text.add(3,Text.translate('ctnh.kinetic_generator.extrict'))
        text.add(4,Text.translate('ctnh.kinetic_generator.upgrade'))
        text.add(5,Text.translate('ctnh.kinetic_generator.core'))
    })
    event.addAdvanced('ctnhcore:underfloor_heating_system',(item,advanced,text)=>{
        text.add(1,Text.translate('underfloor_heating_system').gray())
        text.add(2,Text.translate('ctnh.underfloor_heating_system.temperature'))
        text.add(3,Text.translate('ctnh.underfloor_heating_system.mechanism'))
        text.add(4,Text.translate('ctnh.underfloor_heating_system.rate'))
    })
    event.addAdvanced('gtceu:zpm_large_miner',(item,advanced,tooltip) =>{
        tooltip.add(1,Text.translate('gtceu.machine.large_miner.zpm.tooltip'))
        tooltip.add(2,Text.translatable("gtceu.machine.miner.multi.description"))
        tooltip.add(3,Text.translatable("gtceu.machine.miner.multi.modes"))
        tooltip.add(4,Text.translatable("gtceu.machine.miner.multi.production"))
        tooltip.add(5,Text.translatable("gtceu.machine.miner.fluid_usage", 6,GTMaterials.DrillingFluid.getLocalizedName()))
        tooltip.add(6,Text.translatable("gtceu.universal.tooltip.working_area_chunks",18, 18))
        tooltip.add(7,Text.translatable("gtceu.universal.tooltip.energy_tier_range",GTValues.VNF[7], GTValues.VNF[7 + 1]))
    })
    event.addAdvanced('gtceu:windmill_control_center',(item,advanced,text)=>{
        text.add(1,Text.translate('windmill_control_center').gray())
        text.add(2,Text.translate('ctnh.windmill_control_center.mechanism'))
        text.add(3,Text.translate('ctnh.windmill_control_center.output').red())
    })
    event.addAdvanced('ctnhcore:wind_power_array',(item,advanced,text)=>{
        text.add(1,Text.translate('wind_power_array').gray())
        text.add(2,Text.translate('ctnh.wind_power_array.basic'))
        text.add(3,Text.translate('ctnh.wind_power_array.mechanism'))
        text.add(4,Text.translate('ctnh.wind_power_array.altitude'))
    })
    event.addAdvanced('ctnhcore:advanced_wind_power_array',(item,advanced,text)=>{
        text.add(1,Text.translate('wind_power_array').gray())
        text.add(2,Text.translate('ctnh.advanced_wind_power_array.basic'))
        text.add(3,Text.translate('ctnh.wind_power_array.mechanism'))
        text.add(4,Text.translate('ctnh.wind_power_array.altitude'))
    })
    event.addAdvanced('ctnhcore:super_wind_power_array',(item,advanced,text)=>{
        text.add(1,Text.translate('wind_power_array').gray())
        text.add(2,Text.translate('ctnh.super_wind_power_array.basic'))
        text.add(3,Text.translate('ctnh.wind_power_array.mechanism'))
        text.add(4,Text.translate('ctnh.wind_power_array.altitude'))
    })
    event.addAdvanced('gtceu:meadow',(item,advanced,text)=>{
        text.add(1,Text.translate('meadow').gray())
        text.add(2,Text.translate('ctnh.meadow.basic'))
        text.add(3,Text.translate('ctnh.meadow.mechanism'))
    })
    event.addAdvanced('gtceu:boom_of_create',(item,advanced,text)=>{
        text.add(1,Text.translate('boom_of_create').gray())
        text.add(2,Text.translate('ctnh.boom_of_create.basic'))
        text.add(3,Text.translate('ctnh.boom_of_create.coolant'))
        text.add(4,Text.translate('ctnh.boom_of_create.overclock'))
        text.add(5,Text.translate('ctnh.boom_of_create.safe'))
    })
    event.addAdvanced('gtceu:crystallizer', (item, advanced, text) => {
        text.add(1, Text.translate('crystallizer').gray())
        text.add(2, Text.translate('ctnh.crystallizer.basic'))
        text.add(3, Text.translate('ctnh.crystallizer.coolant'))
        text.add(4, Text.translate('ctnh.crystallizer.overclock'))
        text.add(5, Text.translate('ctnh.crystallizer.safe'))
    })
    event.addAdvanced("gtceu:vacuum_sintering_tower", (item, advanced, text) => { 
        text.add(1, Text.translate('vacuum_sintering_tower').gray())
    })
    event.addAdvanced("gtceu:ion_exchanger", (item, advanced, text) => {
        text.add(1, Text.translate('ion_exchanger').gray())
    })
    event.addAdvanced("gtceu:condensate_separator", (item, advanced, text) => {
        text.add(1, Text.translate('condensate_separator').gray())
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
    event.addAdvanced('gtceu:large_fermenting_tank', (item, advanced, text) => {
        text.add(1, Text.translate('large_fermenting_tank').gray())
        if(event.isShift()){
            text.add(2,Text.translate('ctnh.fermenting_tank.bio_growth_mechanism').green())
            text.add(3,Text.translate('ctnh.fermenting_tank.bio_growth_temperature'))
            text.add(4,Text.translate('ctnh.fermenting_tank.bio_growth'))
            text.add(5,Text.translate('ctnh.large_fermenting_tank.bio_growth'))
        }
        else{
            text.add(2,Text.translate('gtceu.machine.electric_blast_furnace.tooltip.0'))
            text.add(3,Text.translate('gtceu.machine.electric_blast_furnace.tooltip.1'))
            text.add(4,Text.translate('gtceu.machine.electric_blast_furnace.tooltip.2'))
            text.add(5,Text.translate('subtick_overclock').yellow())
            text.add(6,Text.translate('shift'))
        }
    })
    event.addAdvanced('gtceu:large_bottle', (item, advanced, text) => {
        text.add(1, Text.translate('large_bottle').gray())
        text.add(2, Text.translate('ctnh.large_bottle.basic'))
        text.add(3, Text.translate('ctnh.large_bottle.consume'))
    })
    event.add('kubejs:broken_temperature_keeping_device',Text.translate('ctnh.broken_temperature_keeping_device'))
    event.add('enderio:basic_energy_conduit',Text.translate('ctnh.basic_energy_conduit'))
    event.add('enderio:enhanced_energy_conduit',Text.translate('ctnh.enhanced_energy_conduit'))
    event.add('enderio:vibrant_energy_conduit',Text.translate('ctnh.vibrant_energy_conduit'))
    event.add('enderio:ender_energy_conduit',Text.translate('ctnh.ender_energy_conduit'))
    event.add('enderio:melodic_energy_conduit',Text.translate('ctnh.melodic_energy_conduit'))
    event.add('enderio:stellar_energy_conduit',Text.translate('ctnh.stellar_energy_conduit'))
    event.add('kubejs:circuit_resonatic_ulv',Text.translate('ctnh.circuit_resonatic_ulv'))
    event.add('kubejs:circuit_resonatic_lv',Text.translate('ctnh.circuit_resonatic_lv'))
    event.add('kubejs:circuit_resonatic_mv',Text.translate('ctnh.circuit_resonatic_mv'))
    event.add('kubejs:circuit_resonatic_hv',Text.translate('ctnh.circuit_resonatic_hv'))
    event.add('kubejs:circuit_resonatic_ev',Text.translate('ctnh.circuit_resonatic_ev'))
    event.add('kubejs:circuit_resonatic_iv',Text.translate('ctnh.circuit_resonatic_iv'))
    event.add('kubejs:circuit_resonatic_luv',Text.translate('ctnh.circuit_resonatic_luv'))
    event.add('kubejs:circuit_resonatic_zpm',Text.translate('ctnh.circuit_resonatic_zpm'))
    event.add('kubejs:circuit_resonatic_uv',Text.translate('ctnh.circuit_resonatic_uv'))
    event.add('kubejs:circuit_resonatic_uhv',Text.translate('ctnh.circuit_resonatic_uhv'))
    event.add('kubejs:circuit_resonatic_uev',Text.translate('ctnh.circuit_resonatic_uev'))
    event.add('kubejs:circuit_resonatic_uiv',Text.translate('ctnh.circuit_resonatic_uiv'))
    event.add('kubejs:mana_electronic_circuit',Text.translate('ctnh.circuit_mana_hv').red())
    event.add('kubejs:mana_integrated_circuit',Text.translate('ctnh.circuit_mana_ev'))
    event.add('kubejs:echo_processor',Text.translate('ctnh.circuit_echo_zpm').darkAqua())
    event.add('kubejs:echo_processor_assembly',Text.translate('ctnh.circuit_echo_uv').darkAqua())
    event.add('kubejs:echo_processor_computer',Text.translate('ctnh.circuit_echo_uhv').darkAqua())
    event.add('kubejs:echo_processor_mainframe',Text.translate('ctnh.circuit_echo_uev').darkAqua())
})