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
    event.addAdvanced('gtceu:lv_rotor_holder1',(item,advanced,text)=>{
        text.add(1,Text.translate('gtceu.machine.muffler_hatch.tooltip.0'))
        text.add(2,Text.translate('gtceu.machine.muffler_hatch.tooltip.1'))
        text.add(3,Text.translate('gtceu.universal.disabled'))
    })
    event.addAdvanced('gtceu:ulv_rotor_holder0',(item,advanced,text)=>{
        text.add(1,Text.translate('gtceu.machine.muffler_hatch.tooltip.0'))
        text.add(2,Text.translate('gtceu.machine.muffler_hatch.tooltip.1'))
        text.add(3,Text.translate('gtceu.universal.disabled'))
    })
    event.addAdvanced('gtceu:mv_rotor_holder2',(item,advanced,text)=>{
        text.add(1,Text.translate('gtceu.machine.muffler_hatch.tooltip.0'))
        text.add(2,Text.translate('gtceu.machine.muffler_hatch.tooltip.1'))
        text.add(3,Text.translate('gtceu.universal.disabled'))
    })
    event.addAdvanced('gtceu:fermenting_tank',(item,advanced,text)=>{
        text.add(1,Text.translate('fermenting_introduction').darkGray())
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
        text.add(1,Text.translate('industrial_primitive_blast_furnace_introduction').darkGray())
        text.add(2,Text.translate('ctnh.industrial_primitive_blast_furnace.temperature'))
        text.add(3,Text.translate('ctnh.industrial_primitive_blast_furnace.parallel').green())
        text.add(4,Text.translate('ctnh.industrial_primitive_blast_furnace.efficiency').green())
    })
    event.addAdvanced('gtceu:digestion_tank',(item,advanced,text)=>{
        text.add(1,Text.translate('digestion_tank_introduction').darkGray())
        text.add(2,Text.translate('ctnh.digestion_tank.bio_growth_mechanism').green())
        text.add(3,Text.translate('ctnh.digestion_tank.bio_growth_temperature'))
    })
})