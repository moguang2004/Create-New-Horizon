ServerEvents.recipes(event => {
  event.remove({ id: 'apotheosis:spawner/ignore_light' })
  event.remove({ id: 'apotheosis:spawner/ignore_light_inverted' })
  event.custom(
    {
      "type": "apotheosis:spawner_modifier",
      "conditions": [{
        "type": "apotheosis:module",
        "module": "spawner"
      }],
      "mainhand": {
        "item": "torchmaster:feral_flare_lantern"
      },
      "stat_changes": [{
        "id": "ignore_light",
        "value": true
      }]
    }
  )
  event.custom(
    {
      "type": "apotheosis:spawner_modifier",
      "conditions": [{
        "type": "apotheosis:module",
        "module": "spawner"
      }],
      "mainhand": {
        "item": "torchmaster:feral_flare_lantern"
      },
      "offhand": {
        "item": "minecraft:quartz"
      },
      "consumes_offhand": false,
      "stat_changes": [{
        "id": "ignore_light",
        "value": false
      }]
    }
  )

  event.remove({ id: 'apotheosis:spawner/spawn_count' })
  event.remove({ id: 'apotheosis:spawner/spawn_count_inverted' })
  event.custom(
    {
      "type": "apotheosis:spawner_modifier",
      "conditions": [{
        "type": "apotheosis:module",
        "module": "spawner"
      }],
      "mainhand": {
        "item": "gtceu:mv_emitter"
      },
      "stat_changes": [{
        "id": "spawn_count",
        "value": 1,
        "min": -1,
        "max": 16
      }]
    }
  )
  event.custom(
    {
      "type": "apotheosis:spawner_modifier",
      "conditions": [{
        "type": "apotheosis:module",
        "module": "spawner"
      }],
      "mainhand": {
        "item": "gtceu:mv_emitter"
      },
      "offhand": {
        "item": "minecraft:quartz"
      },
      "consumes_offhand": false,
      "stat_changes": [{
        "id": "spawn_count",
        "value": -1,
        "min": 1,
        "max": -1
      }]
    }
  )

  event.remove({ id: 'apotheosis:spawner/max_nearby' })
  event.remove({ id: 'apotheosis:spawner/max_nearby_inverted' })
  event.custom(
    {
      "type": "apotheosis:spawner_modifier",
      "conditions": [{
        "type": "apotheosis:module",
        "module": "spawner"
      }],
      "mainhand": {
        "item": "gtceu:mv_sensor"
      },
      "stat_changes": [{
        "id": "max_nearby_entities",
        "value": 2,
        "min": -1,
        "max": 32
      }]
    }
  )
  event.custom(
    {
      "type": "apotheosis:spawner_modifier",
      "conditions": [{
        "type": "apotheosis:module",
        "module": "spawner"
      }],
      "mainhand": {
        "item": "gtceu:mv_sensor"
      },
      "offhand": {
        "item": "minecraft:quartz"
      },
      "consumes_offhand": false,
      "stat_changes": [{
        "id": "max_nearby_entities",
        "value": -2,
        "min": 1,
        "max": -1
      }]
    }
  )

  event.remove({ id: 'apotheosis:spawner/baby' })
  event.remove({ id: 'apotheosis:spawner/baby_inverted' })
  event.custom(
    {
      "type": "apotheosis:spawner_modifier",
      "conditions": [{
        "type": "apotheosis:module",
        "module": "spawner"
      }],
      "mainhand": {
        "item": "gtceu:nand_chip"
      },
      "stat_changes": [{
        "id": "baby",
        "value": true
      }]
    }
  )
  event.custom(
    {
      "type": "apotheosis:spawner_modifier",
      "conditions": [{
        "type": "apotheosis:module",
        "module": "spawner"
      }],
      "mainhand": {
        "item": "gtceu:nand_chip"
      },
      "offhand": {
        "item": "minecraft:quartz"
      },
      "consumes_offhand": false,
      "stat_changes": [{
        "id": "baby",
        "value": false
      }]
    }
  )

  event.remove({ id: 'apotheosis:spawner/redstone_control' })
  event.remove({ id: 'apotheosis:spawner/redstone_control_inverted' })
  event.custom(
    {
      "type": "apotheosis:spawner_modifier",
      "conditions": [{
        "type": "apotheosis:module",
        "module": "spawner"
      }],
      "mainhand": {
        "item": "gtceu:activity_detector_cover"
      },
      "stat_changes": [{
        "id": "redstone_control",
        "value": true
      }]
    }
  )
  event.custom(
    {
      "type": "apotheosis:spawner_modifier",
      "conditions": [{
        "type": "apotheosis:module",
        "module": "spawner"
      }],
      "mainhand": {
        "item": "gtceu:activity_detector_cover"
      },
      "offhand": {
        "item": "minecraft:quartz"
      },
      "consumes_offhand": false,
      "stat_changes": [{
        "id": "redstone_control",
        "value": false
      }]
    }
  )

  event.remove({ id: 'apotheosis:spawner/no_ai' })
  event.remove({ id: 'apotheosis:spawner/no_ai_inverted' })
  event.custom(
    {
      "type": "apotheosis:spawner_modifier",
      "conditions": [{
        "type": "apotheosis:module",
        "module": "spawner"
      }],
      "mainhand": {
        "item": "gtceu:mv_robot_arm"
      },
      "stat_changes": [{
        "id": "no_ai",
        "value": true
      }]
    }
  )
  event.custom(
    {
      "type": "apotheosis:spawner_modifier",
      "conditions": [{
        "type": "apotheosis:module",
        "module": "spawner"
      }],
      "mainhand": {
        "item": "gtceu:mv_robot_arm"
      },
      "offhand": {
        "item": "minecraft:quartz"
      },
      "consumes_offhand": false,
      "stat_changes": [{
        "id": "no_ai",
        "value": false
      }]
    }
  )

  event.remove({ id: 'apotheosis:spawner/min_delay' })
  event.remove({ id: 'apotheosis:spawner/min_delay_inverted' })
  event.custom(
    {
      "type": "apotheosis:spawner_modifier",
      "conditions": [{
        "type": "apotheosis:module",
        "module": "spawner"
      }],
      "mainhand": {
        "tag": "gtceu:circuits/lv"
      },
      "stat_changes": [{
        "id": "min_delay",
        "value": -10,
        "min": 20,
        "max": -1
      }]
    }
  )
  event.custom(
    {
      "type": "apotheosis:spawner_modifier",
      "conditions": [{
        "type": "apotheosis:module",
        "module": "spawner"
      }],
      "mainhand": {
        "tag": "gtceu:circuits/lv"
      },
      "offhand": {
        "item": "minecraft:quartz"
      },
      "consumes_offhand": false,
      "stat_changes": [{
        "id": "min_delay",
        "value": 10,
        "min": -1,
        "max": -1
      }]
    }
  )

  event.remove({ id: 'apotheosis:spawner/max_delay' })
  event.remove({ id: 'apotheosis:spawner/max_delay_inverted' })
  event.custom(
    {
      "type": "apotheosis:spawner_modifier",
      "conditions": [{
        "type": "apotheosis:module",
        "module": "spawner"
      }],
      "mainhand": {
        "tag": "gtceu:circuits/mv"
      },
      "stat_changes": [{
        "id": "max_delay",
        "value": -10,
        "min": 20,
        "max": -1
      }]
    }
  )
  event.custom(
    {
      "type": "apotheosis:spawner_modifier",
      "conditions": [{
        "type": "apotheosis:module",
        "module": "spawner"
      }],
      "mainhand": {
        "tag": "gtceu:circuits/mv"
      },
      "offhand": {
        "item": "minecraft:quartz"
      },
      "consumes_offhand": false,
      "stat_changes": [{
        "id": "max_delay",
        "value": 10,
        "min": -1,
        "max": -1
      }]
    }
  )

  event.remove({ id: 'apotheosis:spawner/ignore_conditions' })
  event.remove({ id: 'apotheosis:spawner/ignore_conditions_inverted' })
  event.custom(
    {
      "type": "apotheosis:spawner_modifier",
      "conditions": [{
        "type": "apotheosis:module",
        "module": "spawner"
      }],
      "mainhand": {
        "tag": "gtceu:circuits/iv"
      },
      "stat_changes": [{
        "id": "ignore_conditions",
        "value": true
      }]
    }
  )
  event.custom(
    {
      "type": "apotheosis:spawner_modifier",
      "conditions": [{
        "type": "apotheosis:module",
        "module": "spawner"
      }],
      "mainhand": {
        "tag": "gtceu:circuits/iv"
      },
      "offhand": {
        "item": "minecraft:quartz"
      },
      "consumes_offhand": false,
      "stat_changes": [{
        "id": "ignore_conditions",
        "value": false
      }]
    }
  )

  event.remove({ id: 'apotheosis:spawner/player_range' })
  event.remove({ id: 'apotheosis:spawner/player_range_inverted' })
  event.custom(
    {
      "type": "apotheosis:spawner_modifier",
      "conditions": [{
        "type": "apotheosis:module",
        "module": "spawner"
      }],
      "mainhand": {
        "item": "gtceu:quantum_eye"
      },
      "stat_changes": [{
        "id": "req_player_range",
        "value": 2,
        "min": -1,
        "max": 48
      }]
    }
  )
  event.custom(
    {
      "type": "apotheosis:spawner_modifier",
      "conditions": [{
        "type": "apotheosis:module",
        "module": "spawner"
      }],
      "mainhand": {
        "item": "gtceu:quantum_eye"
      },
      "offhand": {
        "item": "minecraft:quartz"
      },
      "consumes_offhand": false,
      "stat_changes": [{
        "id": "req_player_range",
        "value": -2,
        "min": 1,
        "max": -1
      }]
    }
  )

  event.remove({ id: 'apotheosis:spawner/ignore_players' })
  event.remove({ id: 'apotheosis:spawner/ignore_players_inverted' })
  event.custom(
    {
      "type": "apotheosis:spawner_modifier",
      "conditions": [{
        "type": "apotheosis:module",
        "module": "spawner"
      }],
      "mainhand": {
        "item": "gtceu:quantum_star"
      },
      "stat_changes": [{
        "id": "ignore_players",
        "value": true
      }]
    }
  )
  event.custom(
    {
      "type": "apotheosis:spawner_modifier",
      "conditions": [{
        "type": "apotheosis:module",
        "module": "spawner"
      }],
      "mainhand": {
        "item": "gtceu:quantum_star"
      },
      "offhand": {
        "item": "minecraft:quartz"
      },
      "consumes_offhand": false,
      "stat_changes": [{
        "id": "ignore_players",
        "value": false
      }]
    }
  )

  event.remove({ id: 'apotheosis:spawner/spawn_range' })
  event.remove({ id: 'apotheosis:spawner/spawn_range_inverted' })
  event.custom(
    {
      "type": "apotheosis:spawner_modifier",
      "conditions": [{
        "type": "apotheosis:module",
        "module": "spawner"
      }],
      "mainhand": {
        "item": "gtceu:lv_field_generator"
      },
      "stat_changes": [{
        "id": "spawn_range",
        "value": 1,
        "min": -1,
        "max": 32
      }]
    }
  )
  event.custom(
    {
      "type": "apotheosis:spawner_modifier",
      "conditions": [{
        "type": "apotheosis:module",
        "module": "spawner"
      }],
      "mainhand": {
        "item": "gtceu:lv_field_generator"
      },
      "offhand": {
        "item": "minecraft:quartz"
      },
      "consumes_offhand": false,
      "stat_changes": [{
        "id": "spawn_range",
        "value": -1,
        "min": 1,
        "max": -1
      }]
    }
  )

  // fin //

})
