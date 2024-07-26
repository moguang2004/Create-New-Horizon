ServerEvents.recipes(event=>{
    event.custom({
        "type": "mythicbotany:infuser",
        "fromColor": 255,
        "group": "infuser",
        "ingredients": [
          {
            "item": "gtceu:manasteel_ingot"
          },
          {
            "item": "botania:mana_pearl"
          },
          {
            "tag": "botania:mana_diamond_gems"
          },
          {
            "item": "botania:rune_mana"
          }
        ],
        "mana": 500000,
        "output": {
          "count": 1,
          "item": "gtceu:terrasteel_ingot"
        },
        "toColor": 65280
      }).id('mythicbotany:mythicbotany_infusion/terrasteel_ingot')
    event.custom({
        "type": "mythicbotany:infuser",
        "fromColor": 16711821,
        "group": "infuser",
        "ingredients": [
          {
            "item": "gtceu:elementium_ingot"
          },
          {
            "tag": "botania:dragonstone_gems"
          },
          {
            "item": "botania:pixie_dust"
          },
          {
            "item": "botania:quartz_elven"
          },
          {
            "item": "botania:elf_glass"
          }
        ],
        "mana": 1500000,
        "output": {
          "count": 1,
          "item": "gtceu:alfsteel_ingot"
        },
        "toColor": 16750080
      }).id('mythicbotany:mythicbotany_infusion/alfsteel_ingot')
    event.replaceInput({},'mythicbotany:alfsteel_ingot','gtceu:alfsteel_ingot')
    event.replaceOutput({},'mythicbotany:alfsteel_ingot','gtceu:alfsteel_ingot')
})