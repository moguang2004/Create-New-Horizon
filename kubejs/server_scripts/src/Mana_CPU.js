ServerEvents.recipes(event => {
    event.recipes.gtceu.laser_engraver('mana_cpu_wafer_silicon')
    .itemInputs("gtceu:silicon_wafer")
    .itemOutputs('kubejs:mana_cpu_wafer')
    .notConsumable("kubejs:mana_lens")
    .duration(900)
    .EUt(120)

    event.recipes.gtceu.laser_engraver('mana_cpu_wafer_neutronium_phosphorus')
    .itemInputs("gtceu:phosphorus_wafer")
    .cleanroom(CleanroomType.CLEANROOM)
    .itemOutputs('4x kubejs:mana_cpu_wafer')
    .notConsumable("kubejs:mana_lens")
    .duration(500)
    .EUt(480)

    event.recipes.gtceu.laser_engraver('mana_cpu_wafer_neutronium_naquadah')
    .itemInputs("gtceu:naquadah_wafer")
    .cleanroom(CleanroomType.CLEANROOM)
    .itemOutputs('8x kubejs:mana_cpu_wafer')
    .notConsumable("kubejs:mana_lens")
    .duration(200)
    .EUt(1920)

    event.recipes.gtceu.laser_engraver('mana_cpu_wafer_neutronium')
    .itemInputs("gtceu:neutronium_wafer")
    .cleanroom(CleanroomType.CLEANROOM)
    .itemOutputs('16x kubejs:mana_cpu_wafer')
    .notConsumable("kubejs:mana_lens")
    .duration(50)
    .EUt(7680)
    //魔力CPU晶圆


    event.recipes.gtceu.laser_engraver('elementium_cpu_wafer_silicon')
    .itemInputs("gtceu:silicon_wafer")
    .cleanroom(CleanroomType.CLEANROOM)
    .itemOutputs('kubejs:elementium_cpu_wafer')
    .notConsumable("kubejs:elementium_lens")
    .duration(900)
    .EUt(480)
    
    event.recipes.gtceu.laser_engraver('elementium_cpu_wafer_neutronium_phosphorus')
    .itemInputs("gtceu:phosphorus_wafer")
    .cleanroom(CleanroomType.CLEANROOM)
    .itemOutputs('4x kubejs:elementium_cpu_wafer')
    .notConsumable("kubejs:elementium_lens")
    .duration(500)
    .EUt(1920)

    event.recipes.gtceu.laser_engraver('elementium_cpu_wafer_neutronium_naquadah')
    .itemInputs("gtceu:naquadah_wafer")
    .cleanroom(CleanroomType.CLEANROOM)
    .itemOutputs('8x kubejs:elementium_cpu_wafer')
    .notConsumable("kubejs:elementium_lens")
    .duration(200)
    .EUt(7680)

    event.recipes.gtceu.laser_engraver('elementium_cpu_wafer_neutronium')
    .itemInputs("gtceu:neutronium_wafer")
    .cleanroom(CleanroomType.CLEANROOM)
    .itemOutputs('16x kubejs:elementium_cpu_wafer')
    .notConsumable("kubejs:elementium_lens")
    .duration(50)
    .EUt(30720)
    //精灵CPU晶圆


    event.recipes.gtceu.cutter('mana_cpu_wafer_cut')            
    .itemInputs("kubejs:mana_cpu_wafer")
    .inputFluids(Fluid.of('gtceu:mana', 4000))
    .itemOutputs("8x kubejs:mana_cpu_chip")
    .duration(900)
    .EUt(512)
    //魔力CPU芯片


    event.recipes.gtceu.cutter('elementium_cpu_wafer_cut')            
    .itemInputs("kubejs:elementium_cpu_wafer")
    .inputFluids(Fluid.of('gtceu:mana', 16000))
    .itemOutputs("8x kubejs:elementium_cpu_chip")
    .duration(900)
    .EUt(2048)
    //精灵CPU芯片


    event.recipes.gtceu.lathe('mana_lens')            
    .itemInputs("gtceu:mana_steel_plate")
    .itemOutputs("kubejs:mana_lens")
    .duration(2400)
    .EUt(512)
    //魔力透镜


    event.recipes.gtceu.lathe('elementium_lens')            
    .itemInputs("gtceu:elementium_plate")
    .itemOutputs("kubejs:elementium_lens")
    .duration(2400)
    .EUt(2048)
    //源质透镜


})