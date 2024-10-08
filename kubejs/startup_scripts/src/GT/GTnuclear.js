let nuclear =
    [{ name: 'thorium_233', color: 0x474242 },
    { name: 'protactinium_233', color: 0xa18566 },
    { name: 'uranium_233', color: 0x209620 }, { name: 'uranium_234', color: 0x1d9c1d }, { name: 'uranium_239', color: 0x0d820d },
    { name: 'neptunium_235', color: 0x2b5487 }, { name: 'neptunium_237', color: 0x255085 }, { name: 'neptunium_239', color: 0x1f4b80 },
    { name: 'plutonium_240', color: 0xa11e1e }, { name: 'plutonium_244', color: 0x941818 }, { name: 'plutonium_245', color: 0x9c1515 },
    { name: 'americium_241', color: 0x267d6c }, { name: 'americium_243', color: 0x237d6b }, { name: 'americium_245', color: 0x1e7866 },
    { name: 'curium_245', color: 0x6e4742 }, { name: 'curium_246', color: 0x6b433e }, { name: 'curium_247', color: 0x613c37 }, { name: 'curium_250', color: 0x5c3732 }, { name: 'curium_251', color: 0x4f2d29 },
    { name: 'berkelium_247', color: 0x554c78 }, { name: 'berkelium_249', color: 0x504673 }, { name: 'berkelium_251', color: 0x4a406e },
    { name: 'californium_251', color: 0xa35510 }, { name: 'californium_252', color: 0x9c500d }, { name: 'californium_253', color: 0x8c470a }, { name: 'californium_256', color: 0x824107 }, { name: 'californium_257', color: 0x783c07 },
    { name: 'einsteinium_253', color: 0xb58b01 }, { name: 'einsteinium_255', color: 0xa67f00 }, { name: 'einsteinium_257', color: 0x9c7700 },
    { name: 'fermium_257', color: 0xbb90d9 }, { name: 'fermium_258', color: 0xae84cc }, { name: 'fermium_259', color: 0xa47ac2 }, { name: 'fermium_262', color: 0x9d73ba }, { name: 'fermium_263', color: 0x9067ad },
    { name: 'mendelevium_259', color: 0x1845bf }, { name: 'mendelevium_261', color: 0x153eb0 }, { name: 'mendelevium_263', color: 0x123aa6 }]
let nuclear2 =
    [{ name: 'thorium', color: 0x323528 },
    { name: 'protactinium', color: 0xA78B6D },
    { name: 'uranium', color: 0x1d891d },
    { name: 'neptunium', color: 0x284D7B },
    { name: 'plutonium', color: 0xba2727 },
    { name: 'americium', color: 0x287869 },
    { name: 'curium', color: 0x7B544E },
    { name: 'berkelium', color: 0x645A88 },
    { name: 'californium', color: 0xA85A12 },
    { name: 'einsteinium', color: 0xCE9F00 },
    { name: 'fermium', color: 0xc99fe7 },
    { name: 'mendelevium', color: 0x1D4ACF }]
let nuclear3 =
    [
        { name: 'thorium_232', color: 0x1a8f2a },
        { name: 'uranium_238', color: 0x1d891d },
        { name: 'uranium_235', color: 0x46FA46 },
        { name: 'plutonium_239', color: 0xba2727 },
        { name: 'plutonium_241', color: 0xfa7272 }
    ]
GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create("thorium-233",90, 143, -1, null,  "th-233", true)
    event.create('protactinium-233',91, 142, -1, null,'pa-233',true)
    event.create('uranium-233',92, 141, -1, null,'u-233',true)
    event.create('uranium-234',92, 142, -1, null,'u-234',true)
    event.create('uranium-239',92, 147, -1, null,'u-239',true)
    event.create('neptunium-235',93, 142, -1, null,'np-235',true)
    event.create('neptunium-237',93, 144, -1, null,'np-237',true)
    event.create('neptunium-239',93, 146, -1, null,'np-239',true)
    event.create('plutonium-240',94, 146, -1, null,'pu-240',true)
    event.create('plutonium-244',94, 150, -1, null,'pu-244',true)
    event.create('plutonium-245',94, 151, -1, null,'pu-245',true)
    event.create('americium-241',95, 146, -1, null,'am-241',true)
    event.create('americium-243',95, 148, -1, null,'am-243',true)
    event.create('americium-245',95, 150, -1, null,'am-245',true)
    event.create('curium-245',96, 149, -1, null,'cm-245',true)
    event.create('curium-246',96, 150, -1, null,'cm-246',true)
    event.create('curium-247',96, 151, -1, null,'cm-247',true)
    event.create('curium-250',96, 154, -1, null,'cm-250',true)
    event.create('curium-251',96, 155, -1, null,'cm-251',true)
    event.create('berkelium-247',97, 150, -1, null,'bk-247',true)
    event.create('berkelium-249',97, 152, -1, null,'bk-249',true)
    event.create('berkelium-251',97, 154, -1, null,'bk-251',true)
    event.create('californium-251',98, 153, -1, null,'cf-251',true)
    event.create('californium-252',98, 154, -1, null,'cf-252',true)
    event.create('californium-253',98, 155, -1, null,'cf-253',true)
    event.create('californium-256',98, 158, -1, null,'cf-256',true)
    event.create('californium-257',98, 159, -1, null,'cf-257',true)
    event.create('einsteinium-253',99, 154, -1, null,'es-253',true)
    event.create('einsteinium-255',99, 156, -1, null,'es-255',true)
    event.create('einsteinium-257',99, 158, -1, null,'es-257',true)
    event.create('fermium-257',100, 157, -1, null,'fm-257',true)
    event.create('fermium-258',100, 158, -1, null,'fm-258',true)
    event.create('fermium-259',100, 159, -1, null,'fm-259',true)
    event.create('fermium-262',100, 162, -1, null,'fm-262',true)
    event.create('fermium-263',100, 163, -1, null,'fm-263',true)
    event.create('mendelevium-259',101, 158, -1, null,'md-259',true)
    event.create('mendelevium-261',101, 160, -1, null,'md-261',true)
    event.create('mendelevium-263',101, 162, -1, null,'md-263',true)
})
GTCEuStartupEvents.registry('gtceu:material', event => {
    function transform(/**@type {String}*/name) {
        let newname = name//.substring(0, 1).toUpperCase() + name.substring(1, name.length)
        return newname.replace('_', '-')
    }
    nuclear.forEach(material => {
        event.create(material.name)
            .ingot()
            .color(material.color)
            .element(transform(material.name))
            .iconSet(GTMaterialIconSet.RADIOACTIVE)
            .radioactiveHazard(1)
        event.create('oxide_' + material.name)
            .dust()
            .color(material.color)
            .components(`${material.name}`,'oxygen')
        event.create('carbide_' + material.name)
            .dust()
            .color(material.color + 20)
        event.create('nitride_' + material.name)
            .dust()
            .color(material.color - 20)
        event.create('fuel_' + material.name)
            .dust()
            .color(material.color + 5)
        event.create('fuel_carbide_' + material.name)
            .dust()
            .iconSet(GTMaterialIconSet.LIGNITE)
            .color(material.color + 20)
        event.create('fuel_triso_' + material.name)
            .dust()
            .iconSet(GTMaterialIconSet.LIGNITE)
            .color(material.color + 20)
        event.create('fuel_oxide_' + material.name)
            .dust()
            .color(material.color)
            .iconSet(GTMaterialIconSet.LIGNITE)
        event.create('fuel_nitride_' + material.name)
            .dust()
            .color(material.color - 20)
            .iconSet(GTMaterialIconSet.LIGNITE)
        event.create('zirconium_alloy_' + material.name)
            .dust()
            .color(material.color + 30)
        event.create('fuel_zirconium_alloy_' + material.name)
            .dust()
            .iconSet(GTMaterialIconSet.LIGNITE)
            .color(material.color + 30)
        event.create('depleted_fuel_triso_' + material.name)
            .dust()
            .color(material.color - 0x040404 + 20)
        event.create('depleted_fuel_oxide_' + material.name)
            .dust()
            .color(material.color - 0x040404)
        event.create('depleted_fuel_nitride_' + material.name)
            .dust()
            .color(material.color - 0x040404 - 10)
        event.create('depleted_fuel_zirconium_alloy_' + material.name)
            .dust()
            .color(material.color - 0x040404 + 30)
        event.create('depleted_fuel_' + material.name)
            .dust()
            .color(material.color - 0x040404 - 30)
        event.create('depleted_fuel_nitrate_solution_' + material.name)
            .liquid()
            .color(material.color - 0x040404 - 10)
        event.create(material.name + '_hexafluoride')
            .liquid()
            .color(material.color)
        event.create(material.name + '_hexafluoride_steam_cracked')
            .liquid()
            .color(material.color + 20)
    })
    nuclear2.forEach(material => {
        event.create(material.name + '_waste')
            .dust()
            .color(material.color)
            .radioactiveHazard(1.5)
        if (material.name != "uranium") {
            event.create(material.name + '_hexafluoride')
                .liquid()
                .color(material.color)
        }
    })
    nuclear3.forEach(material => {
        event.create('oxide_' + material.name)
            .dust()
            .color(material.color)
        event.create('carbide_' + material.name)
            .dust()
            .color(material.color + 20)
        event.create('nitride_' + material.name)
            .dust()
            .color(material.color - 20)
        event.create('fuel_' + material.name)
            .dust()
            .color(material.color + 5)
        event.create('fuel_carbide_' + material.name)
            .dust()
            .iconSet(GTMaterialIconSet.LIGNITE)
            .color(material.color + 20)
        event.create('fuel_triso_' + material.name)
            .dust()
            .iconSet(GTMaterialIconSet.LIGNITE)
            .color(material.color + 20)
        event.create('fuel_oxide_' + material.name)
            .dust()
            .color(material.color)
            .iconSet(GTMaterialIconSet.LIGNITE)
        event.create('fuel_nitride_' + material.name)
            .dust()
            .color(material.color - 20)
            .iconSet(GTMaterialIconSet.LIGNITE)
        event.create('zirconium_alloy_' + material.name)
            .dust()
            .color(material.color + 30)
        event.create('fuel_zirconium_alloy_' + material.name)
            .dust()
            .iconSet(GTMaterialIconSet.LIGNITE)
            .color(material.color + 30)
        event.create('depleted_fuel_triso_' + material.name)
            .dust()
            .color(material.color - 0x040404 + 20)
        event.create('depleted_fuel_oxide_' + material.name)
            .dust()
            .color(material.color - 0x040404)
        event.create('depleted_fuel_nitride_' + material.name)
            .dust()
            .color(material.color - 0x040404 - 10)
        event.create('depleted_fuel_zirconium_alloy_' + material.name)
            .dust()
            .color(material.color - 0x040404 + 30)
        event.create('depleted_fuel_' + material.name)
            .dust()
            .color(material.color - 0x040404 - 30)
        event.create('depleted_fuel_nitrate_solution_' + material.name)
            .liquid()
            .color(material.color - 0x040404 - 10)
    })
    event.create('nuclear_waste')
        .dust()
        .color(0xd4d6d6)
})