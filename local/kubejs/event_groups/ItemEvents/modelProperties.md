# ItemEvents.modelProperties

## Basic info

- Valid script types: [STARTUP]

- Has result? ✘

- Event class: [ItemModelPropertiesEventJS](https://github.com/KubeJS-Mods/KubeJS/tree/2001/common/src/main/java/dev/latvian/mods/kubejs/item/ItemModelPropertiesEventJS.java)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| register | Ingredient, String, ClampedItemPropertyFunction |  | void | ✘ |
| registerAll | String, ClampedItemPropertyFunction |  | void | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |


### Documented members:

- `void register(Ingredient var0, String var1, ClampedItemPropertyFunction var2)`

  Parameters:
  - var0: Ingredient
  - var1: String
  - var2: ClampedItemPropertyFunction

```
Register a model property for an item. Model properties are used to change the appearance of an item in the world.

More about model properties: https://minecraft.fandom.com/wiki/Model#Item_predicates
```

- `void registerAll(String var0, ClampedItemPropertyFunction var1)`

  Parameters:
  - var0: String
  - var1: ClampedItemPropertyFunction

```
Register a model property for all items.
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
ItemEvents.modelProperties((event) => {
	// This space (un)intentionally left blank
});
```

