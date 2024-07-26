# ServerEvents.tags

## Basic info

- Valid script types: [SERVER]

- Has result? ✘

- Event class: [TagEventJS](https://github.com/KubeJS-Mods/KubeJS/tree/2001/common/src/main/java/dev/latvian/mods/kubejs/server/tag/TagEventJS.java)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |
| TAG_EVENT_HANDLER | EventExceptionHandler | ✔ |
| SOURCE | String | ✔ |
| registry | RegistryInfo | ✘ |
| vanillaRegistry | Registry<?> | ✘ |
| tags | Map<ResourceLocation, TagWrapper> | ✘ |
| totalAdded | int | ✘ |
| totalRemoved | int | ✘ |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| add | ResourceLocation, Object[] |  | TagWrapper | ✘ |
| remove | ResourceLocation, Object[] |  | TagWrapper | ✘ |
| get | ResourceLocation |  | TagWrapper | ✘ |
| getType |  |  | ResourceLocation | ✘ |
| removeAll | ResourceLocation |  | TagWrapper | ✘ |
| getElementIds |  |  | Set<ResourceLocation> | ✘ |
| removeAllTagsFrom | Object[] |  | void | ✘ |
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
ServerEvents.tags(extra_id, (event) => {
	// This space (un)intentionally left blank
});
```

