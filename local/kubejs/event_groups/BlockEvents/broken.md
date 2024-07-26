# BlockEvents.broken

## Basic info

- Valid script types: [SERVER, CLIENT]

- Has result? ✔

- Event class: [BlockBrokenEventJS](https://github.com/KubeJS-Mods/KubeJS/tree/2001/common/src/main/java/dev/latvian/mods/kubejs/block/BlockBrokenEventJS.java)

```
Invoked when a block is destroyed by a player.
```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getBlock |  |  | BlockContainerJS | ✘ |
| getEntity |  |  | LivingEntity | ✘ |
| getXp |  |  | int | ✘ |
| setXp | int |  | void | ✘ |
| getPlayer |  |  | Player | ✘ |
| hasGameStage | String |  | boolean | ✘ |
| addGameStage | String |  | void | ✘ |
| removeGameStage | String |  | void | ✘ |
| getLevel |  |  | Level | ✘ |
| getServer |  |  | MinecraftServer | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |


### Documented members:

- `BlockContainerJS getBlock()`
```
The block that was broken.
```

- `LivingEntity getEntity()`
```
The player that broke the block.
```

- `int getXp()`
```
The experience dropped by the block. Always `0` on Fabric.
```

- `void setXp(int var0)`

  Parameters:
  - var0: int

```
Sets the experience dropped by the block. Only works on Forge.
```

- `boolean hasGameStage(String var0)`

  Parameters:
  - var0: String

```
Checks if the player has the specified game stage
```

- `void addGameStage(String var0)`

  Parameters:
  - var0: String

```
Adds the specified game stage to the player
```

- `void removeGameStage(String var0)`

  Parameters:
  - var0: String

```
Removes the specified game stage from the player
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
BlockEvents.broken(/* extra_id (optional), */ (event) => {
	// This space (un)intentionally left blank
});
```

