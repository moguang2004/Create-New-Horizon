# BlockEvents.rightClicked

## Basic info

- Valid script types: [SERVER, CLIENT]

- Has result? ✔

- Event class: [BlockRightClickedEventJS](https://github.com/KubeJS-Mods/KubeJS/tree/2001/common/src/main/java/dev/latvian/mods/kubejs/block/BlockRightClickedEventJS.java)

```
Invoked when a player right clicks on a block.
```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getItem |  |  | ItemStack | ✘ |
| getBlock |  |  | BlockContainerJS | ✘ |
| getEntity |  |  | LivingEntity | ✘ |
| getHand |  |  | InteractionHand | ✘ |
| getFacing |  |  | Direction | ✘ |
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

- `ItemStack getItem()`
```
The position of the block that was right clicked.
```

- `BlockContainerJS getBlock()`
```
The block that was right clicked.
```

- `LivingEntity getEntity()`
```
The player that right clicked the block.
```

- `InteractionHand getHand()`
```
The hand that was used to right click the block.
```

- `Direction getFacing()`
```
The face of the block being right clicked.
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
BlockEvents.rightClicked(/* extra_id (optional), */ (event) => {
	// This space (un)intentionally left blank
});
```

