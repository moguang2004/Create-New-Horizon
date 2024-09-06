ServerEvents.recipes(event =>{
    event.remove({mod:'gtmthings',output:/gtmthings:(.*)energy_(.*)_hatch/})
    event.remove({mod:'gtmthings',output:/gtmthings:(.*)laser_(.*)_hatch/})
    event.remove({mod:'gtmthings',output:/gtmthings:(.*)energy_(.*)_cover/})
})