//应力仓
Ponder.registry(event=>{
    event.create([
        "ctpp:lv_kinetic_input_box", 
        "ctpp:mv_kinetic_input_box", 
        "ctpp:hv_kinetic_input_box", 
        "ctpp:ev_kinetic_input_box", 
        "ctpp:iv_kinetic_input_box", 
        "ctpp:luv_kinetic_input_box", 
        "ctpp:zpm_kinetic_input_box",
        "ctpp:lv_kinetic_output_box", 
        "ctpp:mv_kinetic_output_box", 
        "ctpp:hv_kinetic_output_box", 
        "ctpp:ev_kinetic_output_box", 
        "ctpp:iv_kinetic_output_box", 
        "ctpp:luv_kinetic_output_box", 
        "ctpp:zpm_kinetic_output_box"
        ])
        .scene("block_ponder",
        "kinetic input/output hatch",
        "kubejs:kinetic_input",
        (scene,util)=>{
            scene.showBasePlate();
            //scene.showStructure()
            scene.world.showSection([0, 1, 0, 6, 1, 6], Direction.DOWN)

            scene.idle(80)

            scene.overlay.showOutline("red", {}, [1, 1, 3, 5, 1, 3], 60)
            scene.text(60,"This is kinetic hatch,they have different levels.",[1, 2, 3]).attachKeyFrame()

            scene.idle(80)

            scene.overlay.showOutline("red", {}, [5, 1, 3], 60)
            scene.text(60,"The lowest level of kinetic hatch you may use is the LV kinetic hatch,it have 32768su input/output at 256RPM speed.",[5, 2, 3]).attachKeyFrame()

            scene.idle(80)

            scene.text(120,"Similar to gregtech's boost mechanism,the required stress * 4 is required for each level of the kinetic hatch",[1, 2, 3]).attachKeyFrame()
            scene.overlay.showOutline("red", {}, [4, 1, 3], 20)
            scene.text(20,"131072su",[4, 2.5, 3]).attachKeyFrame()
            scene.idle(30)
            scene.overlay.showOutline("red", {}, [3, 1, 3], 20)
            scene.text(20,"524288su",[3, 2.5, 3]).attachKeyFrame()
            scene.idle(30)
            scene.overlay.showOutline("red", {}, [2, 1, 3], 20)
            scene.text(20,"2097152su",[2, 2.5, 3]).attachKeyFrame()
            scene.idle(30)
            scene.overlay.showOutline("red", {}, [1, 1, 3], 20)
            scene.text(20,"8388608su",[1, 2.5, 3]).attachKeyFrame()
        })
})
//风车控制中心
Ponder.registry(event=>{
    var kinetic_output = "ctpp:lv_kinetic_output_box"
    event.create('ctpp:windmill_control_center')
        .scene("windmill_control_center_building",
        "How to build a gregtech multiblock",
        "kubejs:windmill_control_center",
        (scene,util)=>{
            scene.showBasePlate();
            //scene.showStructure()
            
            var windmill1= util.select.fromTo(2, 6, 2, 2, 14, 2)
            var windmill2= util.select.fromTo(2, 6, 4, 2, 14, 4)
            var windmill3= util.select.fromTo(4, 6, 2, 4, 14, 2)
            var windmill4= util.select.fromTo(4, 6, 4, 4, 14, 4)

            scene.idle(10)

            scene.world.showSection([3, 2, 2],"down")
            scene.text(60,"First, you need a windmill control center main block",[2.5, 3.5, 1]).attachKeyFrame()

            scene.idle(60)

            scene.showControls(40,[2.5, 3.5, 1],"left")
                .rightClick()
                .withItem('gtceu:terminal')
                .whileSneaking()
            scene.idle(40)
            scene.world.showSection([1, 1, 1, 5, 4, 5],"down")
            scene.text(40,'One click placement using the terminal.').attachKeyFrame()
            
            scene.idle(60)
            
            scene.world.setBlock([3, 3, 2], "gtceu:lv_input_hatch", true)
            scene.text(60,'Place the input hatch to ensure that lubricating oil can be input').attachKeyFrame()
            scene.idle(20)
            scene.showControls(40,[2.5, 4.5, 1],"left")
                .rightClick()
                .withItem('gtceu:lubricant_bucket')
            
            scene.idle(80)

            scene.world.setBlock([2, 3, 2], kinetic_output, true)
            scene.world.setBlock([4, 3, 2], kinetic_output, true)
            scene.world.setBlock([2, 2, 2], kinetic_output, true)
            scene.world.setBlock([4, 2, 2], kinetic_output, true)
            scene.text(60,'Place sufficient kinetic output hatch to ensure that stress can be output.').attachKeyFrame()

            scene.idle(80)

            scene.world.showSection([2, 5, 2, 4, 5, 4],"down")
            scene.text(60,'Place windmill bearings within the 16 grid radius of the main block, and the more they are placed, the more stress they will output. A maximum of 16 windmill bearings can be included.').attachKeyFrame()

            scene.idle(80)

            scene.text(60,'Connect 128 sails or wool to each windmill bearing to maximize the stress of each windmill bearing.').attachKeyFrame()
            const WINDMILL1 = scene.world.showIndependentSection(windmill1,Direction.down)
            const WINDMILL2 = scene.world.showIndependentSection(windmill2,Direction.down)
            const WINDMILL3 = scene.world.showIndependentSection(windmill3,Direction.down)
            const WINDMILL4 = scene.world.showIndependentSection(windmill4,Direction.down)

            scene.idle(80)

            scene.text(60,'Activate the windmill bearings.').attachKeyFrame()
            scene.showControls(40,[2, 5.5, 2],"left")
                .rightClick()
            scene.world.rotateSection(WINDMILL1, 0, 360, 0, 400)
            scene.world.rotateSection(WINDMILL2, 0, 360, 0, 400)
            scene.world.rotateSection(WINDMILL3, 0, 360, 0, 400)
            scene.world.rotateSection(WINDMILL4, 0, 360, 0, 400)

            scene.idle(80)

            scene.text(60,'With sufficient stress output compartment, you can now enjoy the power of the windmill.').attachKeyFrame()
            //scene.particles.simple(50,'minecraft:composter',[8,3,8]).density(20)
            //let blockpos = []
        })
})
//碳刷
Ponder.registry(event=>{
    event.create([
        'create_new_age:carbon_brushes',
        'create_new_age:generator_coil'
        ])
    .scene("carbon_brushes",
        "Magneto generated electricity",
        "kubejs:carbon_brushes",
        (scene,util)=>{
            var magnet1= util.select.fromTo(4, 5, 1, 2, 5, 8)
            var magnet2= util.select.fromTo(4, 1, 1, 2, 1, 8)
            var magnet3= util.select.fromTo(1, 4, 1, 1, 2, 8)
            var magnet4= util.select.fromTo(5, 2, 1, 5, 4, 8)

            scene.idle(10)
            scene.world.showSection([0, 0, 0, 6, 0, 8],"north")

            scene.idle(10)

            scene.world.showSection([3, 3, 0],"north")
            scene.world.modifyBlockEntityNBT([3, 3, 0, 3, 3, 9], nbt => { nbt.Speed = 16 });
            scene.world.replaceBlocks(magnet1, 'create_new_age:magnetite_block', false)
            scene.world.replaceBlocks(magnet2, 'create_new_age:magnetite_block', false)
            scene.world.replaceBlocks(magnet3, 'create_new_age:magnetite_block', false)
            scene.world.replaceBlocks(magnet4, 'create_new_age:magnetite_block', false)
            scene.text(60,"This is carbon brushes.It can convert kinetic energy into electrical energy.",[3.5, 3.5, 0]).attachKeyFrame()

            scene.idle(70)

            scene.world.showSection([3, 3, 1, 3, 3.5, 1],"north")
            scene.idle(10)
            scene.text(60,"To provide sufficient kinetic energy, you need generator coils.",[2.5, 3.5, 1]).attachKeyFrame()

            scene.idle(70)

            scene.world.showSection([3, 5, 1],"north")
            scene.idle(10)
            scene.text(60,"Just having a generator coil is not enough to generate energy, you also need to install magnets around the coil.",[3, 5.5, 2]).attachKeyFrame()

            scene.idle(70)

            scene.world.showSection([3, 4, 0],"down")
            scene.world.showSection([2, 3, 0],"east")
            scene.idle(10)
            scene.text(60,"Place containers or cables to export energy",[3, 3.5, 1]).attachKeyFrame()

            scene.idle(70)

            scene.text(60,"A generator coil can be accelerated by up to 12 magnets",[2, 5.5, 1]).attachKeyFrame()
            scene.idle(10)
            scene.world.showSection([1, 5, 1, 5, 1, 1],"north")

            scene.idle(70)

            scene.text(60,"One carbon brush can receive the kinetic energy of 8 generator coils").attachKeyFrame()
            scene.idle(10)
            scene.world.showSection([1, 5, 2, 5, 1, 9],"north")

            scene.idle(70)

            scene.text(60,"As the number of magnets increases, the stress consumption of the coil will also increase",[2, 5.5, 1]).attachKeyFrame()

            scene.idle(60)

            scene.text(60,"the rotational speed is also a major contributor to the increase in stress consumption",[3.5, 3.5, 0]).attachKeyFrame()
            scene.idle(10)
            scene.world.modifyBlockEntityNBT([3, 3, 0, 3, 3, 8], nbt => { nbt.Speed = 256 })

            scene.idle(70)

            scene.text(100,"Similarly, The grade of the magnet will also increase stress consumption.").attachKeyFrame()
            scene.idle(20)
            scene.world.replaceBlocks(magnet1, 'create_new_age:redstone_magnet', true)
            scene.world.replaceBlocks(magnet2, 'create_new_age:redstone_magnet', true)
            scene.world.replaceBlocks(magnet3, 'create_new_age:redstone_magnet', true)
            scene.world.replaceBlocks(magnet4, 'create_new_age:redstone_magnet', true)
            scene.idle(20)
            scene.world.replaceBlocks(magnet1, 'create_new_age:layered_magnet', true)
            scene.world.replaceBlocks(magnet2, 'create_new_age:layered_magnet', true)
            scene.world.replaceBlocks(magnet3, 'create_new_age:layered_magnet', true)
            scene.world.replaceBlocks(magnet4, 'create_new_age:layered_magnet', true)
            scene.idle(20)
            scene.world.replaceBlocks(magnet1, 'create_new_age:fluxuated_magnetite', true)
            scene.world.replaceBlocks(magnet2, 'create_new_age:fluxuated_magnetite', true)
            scene.world.replaceBlocks(magnet3, 'create_new_age:fluxuated_magnetite', true)
            scene.world.replaceBlocks(magnet4, 'create_new_age:fluxuated_magnetite', true)
            scene.idle(20)
            scene.world.replaceBlocks(magnet1, 'create_new_age:netherite_magnet', true)
            scene.world.replaceBlocks(magnet2, 'create_new_age:netherite_magnet', true)
            scene.world.replaceBlocks(magnet3, 'create_new_age:netherite_magnet', true)
            scene.world.replaceBlocks(magnet4, 'create_new_age:netherite_magnet', true)

        })
})