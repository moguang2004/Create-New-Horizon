# ClientEvents.lang

## Basic info

- Valid script types: [CLIENT]

- Has result? ✘

- Event class: [LangEventJS](https://github.com/KubeJS-Mods/KubeJS/tree/2001/common/src/main/java/dev/latvian/mods/kubejs/client/LangEventJS.java)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |
| PATTERN | Pattern | ✔ |
| lang | String | ✘ |
| map | Map<Key, String> | ✘ |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| add | String, String, String |  | void | ✘ |
| add | String, String |  | void | ✘ |
| addAll | Map<String, String> |  | void | ✘ |
| addAll | String, Map<String, String> |  | void | ✘ |
| renameItem | ItemStack, String |  | void | ✘ |
| renameBlock | Block, String |  | void | ✘ |
| renameEntity | ResourceLocation, String |  | void | ✘ |
| renameBiome | ResourceLocation, String |  | void | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |


### Documented members:

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
ClientEvents.lang(extra_id, (event) => {
	// This space (un)intentionally left blank
});
```

