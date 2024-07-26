# ItemEvents.armorTierRegistry

## Basic info

- Valid script types: [STARTUP]

- Has result? ✘

- Event class: [ItemArmorTierRegistryEventJS](https://github.com/KubeJS-Mods/KubeJS/tree/2001/common/src/main/java/dev/latvian/mods/kubejs/item/custom/ItemArmorTierRegistryEventJS.java)

```
Invoked when the game is starting up and the armor tier registry is being built.
```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| add | String, String, Consumer<MutableArmorTier> |  | void | ✘ |
| add | String, Consumer<MutableArmorTier> |  | void | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |


### Documented members:

- `void add(String var0, String var1, Consumer<MutableArmorTier> var2)`

  Parameters:
  - var0: String
  - var1: String
  - var2: Consumer<MutableArmorTier>

```
Adds a new armor tier with a parent tier specified by string.
```

- `void add(String var0, Consumer<MutableArmorTier> var1)`

  Parameters:
  - var0: String
  - var1: Consumer<MutableArmorTier>

```
Adds a new armor tier.
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
ItemEvents.armorTierRegistry((event) => {
	// This space (un)intentionally left blank
});
```

