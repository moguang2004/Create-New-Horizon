# ItemEvents.firstLeftClicked

## Basic info

- Valid script types: [SERVER, CLIENT]

- Has result? ✘

- Event class: [ItemClickedEventJS](https://github.com/KubeJS-Mods/KubeJS/tree/2001/common/src/main/java/dev/latvian/mods/kubejs/item/ItemClickedEventJS.java)

```
Invoked when a player right clicks with an item **without targeting anything**.

Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getTarget |  |  | RayTraceResultJS | ✘ |
| getItem |  |  | ItemStack | ✘ |
| getEntity |  |  | LivingEntity | ✘ |
| getHand |  |  | InteractionHand | ✘ |
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

- `RayTraceResultJS getTarget()`
```
The ray trace result of the click.
```

- `ItemStack getItem()`
```
The item that was clicked with.
```

- `LivingEntity getEntity()`
```
The player that clicked with the item.
```

- `InteractionHand getHand()`
```
The hand that the item was clicked with.
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
ItemEvents.firstLeftClicked(/* extra_id (optional), */ (event) => {
	// This space (un)intentionally left blank
});
```

