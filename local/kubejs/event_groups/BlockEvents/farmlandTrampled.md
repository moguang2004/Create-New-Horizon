# BlockEvents.farmlandTrampled

## Basic info

- Valid script types: [SERVER, CLIENT]

- Has result? ✔

- Event class: [FarmlandTrampledEventJS](https://github.com/KubeJS-Mods/KubeJS/tree/2001/common/src/main/java/dev/latvian/mods/kubejs/block/FarmlandTrampledEventJS.java)

```
Invoked when an entity attempts to trample farmland.
```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getLevel |  |  | Level | ✘ |
| getBlock |  |  | BlockContainerJS | ✘ |
| getDistance |  |  | float | ✘ |
| getEntity |  |  | Entity | ✘ |
| getPlayer |  |  | Player | ✘ |
| getServer |  |  | MinecraftServer | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |


### Documented members:

- `Level getLevel()`
```
The level that the farmland and the entity are in.
```

- `BlockContainerJS getBlock()`
```
The farmland block.
```

- `float getDistance()`
```
The distance of the entity from the block.
```

- `Entity getEntity()`
```
The entity that is attempting to trample the farmland.
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
BlockEvents.farmlandTrampled(/* extra_id (optional), */ (event) => {
	// This space (un)intentionally left blank
});
```

