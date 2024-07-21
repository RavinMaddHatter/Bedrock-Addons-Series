import { system, world } from '@minecraft/server';// importing from minecraft
//Global variables
var previousExecutionTime = Date.now()// This is where we keep the previous time between cycles.

world.afterEvents.itemUse.subscribe(event=>{// this triggers each time any item is used
	afterItemUsed(event)// calling a function just to keep things a little easier for me to read. all of the function code could go here if you wanted
});

function afterItemUsed(event){//gets called eveyr time we use and item 
	const itemName = event.itemStack.typeId.replace("minecraft:", "");// conver the item name to a constnat so we can make the code look nicer
	if(itemName == "stick") {//only checking sticks
		const itemTag = event.itemStack.nameTag;// getting the name of the item
		if(itemTag == "mspt"){// checking for only sticks named mspt
			previousExecutionTime = Date.now()// set the previous time 
			system.runTimeout(mspt,20)// in 20 ticks measure the MSPT
		}
	}
}
function mspt(){
	world.sendMessage("MSPT: "+ (Date.now()-previousExecutionTime)/20)// print the MSPT
	previousExecutionTime = Date.now()//get the current time date for the next person.
}