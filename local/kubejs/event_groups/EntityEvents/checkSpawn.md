# EntityEvents.checkSpawn

## Basic info

- Valid script types: [SERVER, CLIENT]

- Has result? ✔

- Event class: [CheckLivingEntitySpawnEventJS](https://github.com/KubeJS-Mods/KubeJS/tree/2001/common/src/main/java/dev/latvian/mods/kubejs/entity/CheckLivingEntitySpawnEventJS.java)

```
Invoked before an entity is spawned into the world.

Only entities from a `BaseSpawner` or world generation will trigger this event.
```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |
| x | double | ✘ |
| y | double | ✘ |
| z | double | ✘ |
| type | MobSpawnType | ✘ |
| spawner | BaseSpawner | ✘ |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getType |  |  | MobSpawnType | ✘ |
| getLevel |  |  | Level | ✘ |
| getBlock |  |  | BlockContainerJS | ✘ |
| getEntity |  |  | LivingEntity | ✘ |
| getSpawner |  |  | BaseSpawner | ✘ |
| getPlayer |  |  | Player | ✘ |
| getServer |  |  | MinecraftServer | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |


### Documented members:

- `MobSpawnType getType()`
```
The type of spawn.
```

- `Level getLevel()`
```
The level the entity is being spawned into.
```

- `BlockContainerJS getBlock()`
```
The block the entity is being spawned on.
```

- `LivingEntity getEntity()`
```
The entity being spawned.
```

- `BaseSpawner getSpawner()`
```
The spawner that spawned the entity. Can be null if the entity was spawned by worldgen.
```

- `Object exit(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object exit()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object success(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object success()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object cancel(Object var0)`

  Parameters:
  - var0: Object

```
Cancels the event with the given exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object cancel()`
```
Cancels the event with default exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```



### Example script:

```js
EntityEvents.checkSpawn(/* extra_id (optional), */ (event) => {
	// This space (un)intentionally left blank
});
```

