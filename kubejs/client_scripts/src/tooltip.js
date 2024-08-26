const { $ItemStack } = require("packages/net/minecraft/world/item/$ItemStack")

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
        text.add(1,Text.translate('mana_machine').gray())
        text.add(2,Text.translate('ctnh.mana_macerator.mana_consume'))
        text.add(3,Text.translate('ctnh.perfect_overclock'))
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
        text.add(3,Text.translate('ctnh.blaze_blast_furnace.parallel').darkGreen())
        text.add(4,Text.translate('gtceu.machine.electric_blast_furnace.tooltip.0'))
        text.add(5,Text.translate('gtceu.machine.electric_blast_furnace.tooltip.1'))
        text.add(6,Text.translate('gtceu.machine.electric_blast_furnace.tooltip.2'))
        //text.add(4,Text.translate('ctnh.perfect_overclock'))
    })
    event.addAdvanced('gtceu:bio_reactor',(item,advanced,text)=>{
        text.add(1,Text.translate('bio_reactor').gray())
        //text.add(2,Text.translate('ctnh.bio_reactor.basic_power'))
        //text.add(3,Text.translate('ctnh.bio_reactor.restriction'))
    })
    event.addAdvanced('gtceu:photovoltaic_power_station_energetic',(item,advanced,text)=>{
        text.add(1,Text.translate('photovoltaic_power_station_energetic').gray())
        text.add(2,Text.translate('photovoltaic_power_station_energetic_basic'))
        text.add(3,Text.translate('photovoltaic_power_station_info'))
    })
    event.addAdvanced('gtceu:photovoltaic_power_station_pulsating',(item,advanced,text)=>{
        text.add(1,Text.translate('photovoltaic_power_station_pulsating').gray())
        text.add(2,Text.translate('photovoltaic_power_station_pulsating_basic'))
        text.add(3,Text.translate('photovoltaic_power_station_info'))
    })
    event.addAdvanced('gtceu:photovoltaic_power_station_vibrant',(item,advanced,text)=>{
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
})