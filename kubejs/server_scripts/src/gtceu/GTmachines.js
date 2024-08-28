ServerEvents.recipes(event => {
    const voltage_to_cable = {
        "lv": "tin",
        "mv": "copper",
        "hv": "gold",
        "ev": "aluminium",
        "iv": "platinum",
        "luv": "niobium_titanium",
        "zpm": "vanadium_gallium",
        "uv": "yttrium_barium_cuprate"
    }
    const voltages = [
        "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv"
    ]

    // Create machine recipes for a specfic voltage
    function create_recipe_voltage(voltage) {
        const volt = voltages[voltage];
        if (voltage >= 1) {
            event.shaped(
                "gtceu:" + volt + "_inscriber",
                ["AXA", "BYC", "DED"],
                {
                    A: "gtceu:" + volt + "_electric_piston",
                    X: "ae2:inscriber",
                    B: "gtceu:" + volt + "_robot_arm",
                    Y: "gtceu:" + volt + "_machine_hull",
                    C: "gtceu:" + volt + "_conveyor_module",
                    D: "#gtceu:circuits/" + volt,
                    E: "gtceu:" + voltage_to_cable[volt] + "_single_cable"
                }
            )
        }
    }

    // Create all
    [0, 1, 2, 3, 4, 5, 6, 7].forEach(create_recipe_voltage)
})
