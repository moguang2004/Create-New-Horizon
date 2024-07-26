# BlockEvents.detectorUnpowered

## Basic info

- Valid script types: [SERVER, CLIENT]

- Has result? ✘

- Event class: [DetectorBlockEventJS](https://github.com/KubeJS-Mods/KubeJS/tree/2001/common/src/main/java/dev/latvian/mods/kubejs/block/DetectorBlockEventJS.java)

```
Invoked when a detector block registered in KubeJS receives a block update.

`Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
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
| isPowered |  |  | boolean | ✘ |
| getDetectorId |  |  | String | ✘ |
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
The level where the detector block is located.
```

- `BlockContainerJS getBlock()`
```
The detector block.
```

- `boolean isPowered()`
```
If the detector block is powered.
```

- `String getDetectorId()`
```
The id of the detector block when it was registered.
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
BlockEvents.detectorUnpowered(/* extra_id (optional), */ (event) => {
	// This space (un)intentionally left blank
});
```

