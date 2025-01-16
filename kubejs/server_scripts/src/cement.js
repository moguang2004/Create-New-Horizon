ServerEvents.recipes(event => {
    // 水泥配方
    event.recipes.create.mixing(
        Fluid.of("gtceu:cement", 1000),
        [
            '6x gtceu:calcite_dust',
            'gtceu:clay_dust',
            'gtceu:tiny_iron_dust',
            Fluid.of("minecraft:water", 1000)
        ]
    ).heated()
    
     //水泥桶配方
    event.recipes.shaped(
        Item.of('gtceu:cement_bucket', 1), [
          "DED",
          "CAC",
          "CBC"
        ],
        {
          A:'minecraft:water_bucket',
          B:'gtceu:clay_dust',
          C:'gtceu:calcite_dust',
          D:'gtceu:tiny_iron_dust',
          E:'minecraft:bucket'
        }
    )

    // 压缩黏土配方
    event.remove({'output': 'gtceu:compressed_clay'});
    event.shaped(
        '3x gtceu:compressed_clay',
        [
            'CCC',
            'CMC',
            'CCC'
        ],
        {
            'C': 'minecraft:clay_ball',
            'M': 'gtceu:brick_wooden_form'
        }
    ).keepIngredient('gtceu:brick_wooden_form')

    // 红砖块配方
    event.remove({'output': 'minecraft:bricks'})
    event.shaped(
        'minecraft:bricks',
        [
            'BBB',
            'BCB',
            'BBB'
        ],
        {
            'B': 'minecraft:brick',
            'C': 'gtceu:cement_bucket'
        }
    ).replaceIngredient('gtceu:cement_bucket', 'minecraft:bucket')
    
    event.shaped(
        '2x minecraft:bricks',
        [
            'AC ',
            'BBB',
            'BBB'
        ],
        {   'A': '#forge:tools/spades',
            'B': 'minecraft:brick',
            'C': 'gtceu:cement_bucket'
        }    
    ).replaceIngredient('gtceu:cement_bucket', 'minecraft:bucket')    
    
    // 焦炉砖块配方
    event.remove({'output': 'gtceu:coke_oven_bricks'})
    event.shaped(
        'gtceu:coke_oven_bricks',
        [
            'BBB',
            'BCB',
            'BBB'
        ],
        {
            'B': 'gtceu:coke_oven_brick',
            'C': 'gtceu:cement_bucket'
        }
    ).replaceIngredient('gtceu:cement_bucket', 'minecraft:bucket')
    
    event.shaped(
        '2x gtceu:coke_oven_bricks',
        [
            'AC ',
            'BBB',
            'BBB'
        ],
        {   'A': '#forge:tools/spades',
            'B': 'gtceu:coke_oven_brick',
            'C': 'gtceu:cement_bucket'
        }    
    ).replaceIngredient('gtceu:cement_bucket', 'minecraft:bucket')
    
    // 耐火粘土粉配方
    event.remove({'output': 'gtceu:fireclay_dust', 'input': 'gtceu:clay_dust'});
    event.recipes.create.mixing(
        '8x gtceu:fireclay_dust',
        [
            '5x gtceu:kaolinite_dust',
            '3x gtceu:quartz_sand_dust',
            'gtceu:calcite_dust',
            'gtceu:clay_dust'
        ]
    ).heated()

    // 耐火粘土砖块配方
    event.remove({ output: 'gtceu:firebricks' })
    event.shaped(
        'gtceu:firebricks',
        [
            'BBB',
            'BCB',
            'BBB'
        ],
        {
            'B': 'gtceu:firebrick',
            'C': 'gtceu:cement_bucket'
        }
    ).replaceIngredient('gtceu:cement_bucket', 'minecraft:bucket')
    //我要占用一下你的砖.js了！
    event.recipes.create.mixing(
        Fluid.of("gtceu:aqua_regia", 500),
        [
            Fluid.of("gtceu:hydrochloric_acid", 500),
            Fluid.of("gtceu:nitrogen_dioxide", 250),
            Fluid.of("minecraft:water", 1000)
        ]
    )
})
