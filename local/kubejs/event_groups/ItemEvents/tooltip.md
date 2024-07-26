# ItemEvents.tooltip

## Basic info

- Valid script types: [CLIENT]

- Has result? ✘

- Event class: [ItemTooltipEventJS](https://github.com/KubeJS-Mods/KubeJS/tree/2001/common/src/main/java/dev/latvian/mods/kubejs/item/ItemTooltipEventJS.java)

```
Invoked when registering handlers for item tooltips.

`text` can be a component or a list of components.
```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| add | Ingredient, Object |  | void | ✘ |
| addAdvanced | Ingredient, StaticTooltipHandlerFromJS |  | void | ✘ |
| isShift |  |  | boolean | ✘ |
| isCtrl |  |  | boolean | ✘ |
| isAlt |  |  | boolean | ✘ |
| addToAll | Object |  | void | ✘ |
| addAdvancedToAll | StaticTooltipHandlerFromJS |  | void | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |


### Documented members:

- `void add(Ingredient var0, Object var1)`

  Parameters:
  - var0: Ingredient
  - var1: Object

```
Adds text to all items matching the ingredient.
```

- `void addAdvanced(Ingredient var0, StaticTooltipHandlerFromJS var1)`

  Parameters:
  - var0: Ingredient
  - var1: StaticTooltipHandlerFromJS

```
Adds a dynamic tooltip handler to all items matching the ingredient.
```

- `boolean isShift()`
```
Is shift key pressed.
```

- `boolean isCtrl()`
```
Is control key pressed.
```

- `boolean isAlt()`
```
Is alt key pressed.
```

- `void addToAll(Object var0)`

  Parameters:
  - var0: Object

```
Adds text to all items.
```

- `void addAdvancedToAll(StaticTooltipHandlerFromJS var0)`

  Parameters:
  - var0: StaticTooltipHandlerFromJS

```
Adds a dynamic tooltip handler to all items.
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
ItemEvents.tooltip((event) => {
	// This space (un)intentionally left blank
});
```

