import { system, world } from '@minecraft/server';

const safe_blocks = ["minecraft:slime",
					"minecraft:piston",
					"minecraft:redstone_wire",
					"minecraft:redstone_block",
					"minecraft:redstone_torch",
					"minecraft:honey_block",
					"minecraft:lever",
					"minecraft:unpowered_comparator",
					"minecraft:powered_comparator",
					"minecraft:unpowered_repeater",
					"minecraft:powered_repeater",
					"minecraft:hopper",
					"minecraft:sticky_piston",
					"minecraft:crafter",
					"minecraft:dropper",
					"minecraft:dispenser",
					"minecraft:target",
					"minecraft:barrel",
					"minecraft:chest",
					"minecraft:trapped_chest",
					"minecraft:lit_redstone_lamp",
					"minecraft:redstone_lamp",
					"minecraft:tnt",
					"minecraft:copper_bulb",
					"minecraft:exposed_copper_bulb",
					"minecraft:weathered_copper_bulb",
					"minecraft:oxidized_copper_bulbaw",
					"minecraft:waxed_copper_bulb",
					"minecraft:glass",
					"minecraft:glass",
					"minecraft:glass",
					"minecraft:glass",
					"minecraft:glass",
					"minecraft:glass",
					"minecraft:glass",
					"minecraft:glass",
					"minecraft:glass",
					"minecraft:glass",
					"minecraft:glass",
					"minecraft:yellow_wool",
					"minecraft:brown_wool",
					"minecraft:light_gray_wool",
					"minecraft:blue_wool",
					"minecraft:red_wool",
					"minecraft:purple_wool",
					"minecraft:pink_wool",
					"minecraft:light_blue_wool",
					"minecraft:white_wool",
					"minecraft:lime_wool",
					"minecraft:magenta_wool",
					"minecraft:black_wool",
					"minecraft:gray_wool",
					"minecraft:green_wool",
					"minecraft:cyan_wool",
					"minecraft:wool",
					"minecraft:waxed_exposed_copper_bulb",
					"minecraft:waxed_weathered_copper_bulb",
					"minecraft:waxed_oxidized_copper_bulb",
					"minecraft:observer"]
var annoucements = {} 

world.beforeEvents.explosion.subscribe(event=>{
	check_explosion(event);
});

function check_explosion(event){
	let overworld = world.getDimension("overworld");
	let blocks = event.getImpactedBlocks()
	blocks.forEach((block) => {
        if (safe_blocks.includes(block.typeId)){
			event.cancel=true;
			let location = event.source.location.x.toFixed(2)+", "+ event.source.location.y.toFixed(2)+", "+ event.source.location.z.toFixed(2)
			
			annoucements[location]="\u00A74SERVER: \u00A7f Explosion at "+location+ " was cancled!!!"
			system.run(cancleAnnoucement)
		}
		else{
			//if you are testing new blocks being added to the list above. uncomment this so you can see the full names
			//console.warn(block.typeId)
		}
    });
}

function cancleAnnoucement(){
	for (let key in annoucements) {
		world.sendMessage(annoucements[key])
	}
	annoucements={}
}
