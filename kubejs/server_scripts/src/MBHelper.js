/*

Multiblock Helper 1.3!

This is for GTCEu multiblocks. It's a HELPER, not an entire maker.

How to use: 
1. Be in creative, get a stone axe in your hand
2. Break the bottom corner of the multiblock, the front of the multiblock MUST be facing SOUTH
3. Offhand the axe, and break the top corner of the multiblock (More on corners below)
4. type '/kubejs custom_command getBlocks'
5. Go to your server.log or latest.log to get your multiblock pattern

Video of usage: https://www.youtube.com/watch?v=MAiHJWnj6ZM

If you use a OAK LOG it will be marked as the @ symbol for easily locating your controller

Somewhat of a diagram for corners V
	  N

	1####
  W ##### E
	##C#2

	  S

1 - bottom corner
2 - top corner
C - Controller (Marked by oak log for ease of locating and replacing in pattern)

DO NOT GO NEGATIVE. I couldn't be bothered.
You HAVE to go from the bottom, north west corner, to the top, south east corner.
Have fun!

Made by: 3x1t_5tyl3 aka. Andromeda
Stay cute. <3

*/

function sendMsg(event, data) {
	event.player.sendSystemMessage(data);
}
// Mainhand for pos1
BlockEvents.broken((event) => {
	if (event.player.mainHandItem.id === "kubejs:multiblock_helper") {
		pos1 = { x: event.block.x, y: event.block.y, z: event.block.z };

		event.player.sendSystemMessage(
			Component.literal("Corner1: ").append(
				Component.red(`x: ${pos1.x}, `).append(Component.green(`y: ${pos1.y}, `).append(Component.blue(`z: ${pos1.z}`)))
			)
		);
		event.cancel(true);
	}
});

// Offhand for pos2
BlockEvents.broken((event) => {
	if (event.player.offHandItem.id === "kubejs:multiblock_helper") {
		pos2 = { x: event.block.x, y: event.block.y, z: event.block.z };

		event.player.sendSystemMessage(
			Component.literal("Corner2: ").append(
				Component.red(`x: ${pos2.x}, `).append(Component.green(`y: ${pos2.y}, `).append(Component.blue(`z: ${pos2.z}`)))
			)
		);
		event.cancel(true);
	}
});

var pos1;
var pos2;

ServerEvents.customCommand("getBlocks", (event) => {
	if (event.player.isCreative()) {
		let blockid;
		let blockArray = [];
		let legend = {};
		let symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#@"; // Array of symbols

		// Index for accessing symbols array
		let symbolIndex = 0;

		// this errors. I don't care. It works.
		var depth = pos2.z + 1;
		var height = pos2.y + 1;
		var width = pos2.x + 1;

		for (let z = pos1.z; z < depth; z++) {
			for (let y = pos1.y; y < height; y++) {
				for (let x = pos1.x; x < width; x++) {
					blockid = event.level.getBlock(x, y, z).id;

					if (!(blockid in legend)) {
						if (blockid === "minecraft:air") {
							legend[blockid] = symbols[26];
						}
						else if (blockid === "minecraft:oak_log") {
							legend[blockid] = symbols[27];
						}
						else {
							legend[blockid] = symbols[symbolIndex];
							symbolIndex = (symbolIndex + 1) % symbols.length;
						}
					}

					blockArray.push({ x: x, y: y, z: z, symbol: legend[blockid] });
				}
			}
		}

		// Create slices
		let slices = [];
		for (let z = pos1.z; z < depth; z++) {
			let slice = '';
			for (let y = pos1.y; y < height; y++) {
				let row = '';
				for (let x = pos1.x; x < width; x++) {
					let block = blockArray.find((b) => b.x === x && b.y === y && b.z === z);
					row += block ? block.symbol : "?";
				}
				// On the last row, do not add a comma
				if (y == height - 1) {
					slice += ('\"' + row + '\"');
				} else {
					slice += ('\"' + row + '\", ');
				}
			}
			slices.push(slice);
		}

		let finalString = '\n.pattern(definition => FactoryBlockPattern.start()\n';

		for (let i = 0; i < slices.length; i++) {
			let slice = '	.aisle(' + slices[i] + ') \n';
			finalString += slice;
		}
		for (let key in legend) {
			let pred = '';
			switch (legend[key]) {
				case "@":
					pred = '	.where("@", Predicates.controller(Predicates.blocks(definition.get())))\n';
					break;
				case "#":
					pred = '	.where("#", Predicates.any())\n';
					break;
				default:
					pred = '	.where(\"' + legend[key] + '\", Predicates.blocks(\"' + key + '\"))\n';
					break;
			}
			finalString += pred;
		}
		console.log(finalString)

		// let jsonContent = {};

		// let filename = `kubejs/multiblock-pattern-${Utils.getSystemTime()}.txt`;
		// JsonIO.write(filename, jsonContent);
		// sendMsg(event, `Successfully written file: ${filename}`);
	}
});