//注意！你需要有powerfuljs才能使用此脚本
//注意! 能量文本不会被正确显示因为你的本地化没有对应的汉化值！
const TranslatableContents_ = Java.loadClass("net.minecraft.network.chat.contents.TranslatableContents")
global.listeners = []
ForgeEvents.onEvent("net.minecraftforge.event.entity.player.ItemTooltipEvent", event => {
    var { itemStack, entity, toolTip, flags } = event
    global.listeners.forEach(/**@type addItemTooltipEventlistenerCallback */ listener => {
        listener(itemStack, entity, toolTip, flags)
    })
})
/**
 * @callback addItemTooltipEventlistenerCallback
 * @param {Internal.ItemStack} itemStack
 * @param {Internal.Player} entity
 * @param {Internal.List<net.minecraft.network.chat.Component>} toolTip
 * @param {Internal.TooltipFlag} flags
 * @return {void}
*/
function addItemTooltipEventlistener(/**@type addItemTooltipEventlistenerCallback */callback) {
    global.listeners.push(callback)
}
addItemTooltipEventlistener((itemStack, entity, toolTip, flags) => {
    if (itemStack.getCapability(ForgeCapabilities.ENERGY).isPresent()) {
        var capability = itemStack.getCapability(ForgeCapabilities.ENERGY).orElse(null)
        var { energyStored, maxEnergyStored } = capability
        for (let index = 0; index < toolTip.length; index++) {
            var Component = toolTip.get(index);
            if (Component.getString() == "IndexOfShowEnergy") {
                var { newNumber: energyStored_, unitName: unit1 } = unitChanger(energyStored)
                var { newNumber: maxEnergyStored_, unitName: unit2 } = unitChanger(maxEnergyStored)
                toolTip.set(index, Component.translatable("item.ctnh.durabilityofenergy", energyStored_.toFixed(2).toString() + unit1, maxEnergyStored_.toFixed(2).toString() + unit2).green())
            }
            // if (Component.contents instanceof TranslatableContents_) {
            //     var key = Component.contents.getKey()
            //     if (key == "item.durability") {
            //         toolTip.set(index, Component.translatable("item.eou.durabilityofenergy", energyStored, maxEnergyStored).green())
            //     }
            // }
        }
    }
})
//单位转换器
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
                case 2: unit = "m"
                    break;
            }
            break
        }
    }
    return { newNumber: newNumber * 1000, unitName: unit }
}

//以下为物品注册
StartupEvents.registry('item', event => {
    event.create("eou:test_energe")
        .attachCapability(energyItemCapabilityBuilder(10000000, -1, 2000))//最大接受能量为-1则无限制 为0则不能输入能量
        .tooltip("IndexOfShowEnergy")//手动设置能量应该显示的位置

})
/**
 * @param {Number} maxEnergyStored_ 最大能量
 * @param {Number }maxReceiveEnergy_ 最大接受能量/t
 * @param {Number }maxExtractEnergy_ 最大输出能量/t

 * */

//以下为封装好了的能力附加器
function energyItemCapabilityBuilder(maxEnergyStored_, maxReceiveEnergy_, maxExtractEnergy_) {
    var capabilityBuilder = CapabilityBuilder.ENERGY.customItemStack()
    capabilityBuilder
        .getEnergyStored(/**@type {Internal.ItemStack}*/itemStack => {
            if (itemStack.getOrCreateTag().contains("energyStored")) {
                return itemStack.nbt.getInt("energyStored")
            } else {
                itemStack.getOrCreateTag().putInt("energyStored", 0)
                return 0
            }
        })
        .getMaxEnergyStored((/**@type {Internal.ItemStack}*/itemStack) => {
            var maxEnergyStored = maxEnergyStored_
            var { energyStored } = itemStack.getCapability(ForgeCapabilities.ENERGY).orElse(null)
            if (energyStored > maxEnergyStored) {
                itemStack.nbt.putInt("energyStored", maxEnergyStored)
            }

            if (itemStack.nbt.contains("maxEnergyStored")) {
                return itemStack.nbt.getInt("maxEnergyStored")
            } else {
                itemStack.nbt.putInt("maxEnergyStored", maxEnergyStored)
                return maxEnergyStored
            }
        })
        .canReceive((itemStack) => { return maxReceiveEnergy_ == -1 ? true : maxReceiveEnergy_ > 0 })
        .receiveEnergy((/**@type {Internal.ItemStack}*/itemStack, energy, sim) => {
            var { energyStored, maxEnergyStored } = itemStack.getCapability(ForgeCapabilities.ENERGY).orElse(null)
            var receiveEnergy = maxReceiveEnergy_ == -1 ? Math.min(energy, maxEnergyStored - energyStored) : Math.min(energy, maxEnergyStored - energyStored, maxReceiveEnergy_)
            if (!sim) {
                itemStack.nbt.putInt("energyStored", energyStored + receiveEnergy)
            }
            return receiveEnergy
        })
        .canExtract((itemStack) => { return itemStack.getCapability(ForgeCapabilities.ENERGY).orElse(null).energyStored > 0 })
        .extractEnergy((/**@type {Internal.ItemStack}*/itemStack, extractEnergy_, sim) => {
            var { energyStored } = itemStack.getCapability(ForgeCapabilities.ENERGY).orElse(null)
            var extractEnergy = Math.min(maxExtractEnergy_, energyStored, extractEnergy_)
            if (!sim) {
                itemStack.nbt.putInt("energyStored", Math.max(energyStored - extractEnergy, 0))
            }
            return extractEnergy
        })

    return capabilityBuilder
}
