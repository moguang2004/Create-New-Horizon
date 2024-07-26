# NetworkEvents.dataReceived

## Basic info

- Valid script types: [SERVER, CLIENT]

- Has result? ✔

- Event class: [NetworkEventJS](https://github.com/KubeJS-Mods/KubeJS/tree/2001/common/src/main/java/dev/latvian/mods/kubejs/net/NetworkEventJS.java)

```
Invoked when a network packet is received.

Note that the behaviour of this event is depending on the **script type**.

In `server_scripts`, this event is invoked on the server side when a packet is received from a client.

In `client_scripts`, this event is invoked on the client side when a packet is received from the server.
```

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getChannel |  |  | String | ✘ |
| getEntity |  |  | LivingEntity | ✘ |
| getData |  |  | CompoundTag | ✘ |
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

- `String getChannel()`
```
The channel of the packet.
```

- `LivingEntity getEntity()`
```
The player that sent the packet. Always `Minecraft.player` in `client_scripts`.
```

- `CompoundTag getData()`
```
The data of the packet.
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
NetworkEvents.dataReceived(extra_id, (event) => {
	// This space (un)intentionally left blank
});
```

