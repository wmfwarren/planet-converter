#!/usr/bin/env node
"use strict";

const {earth, agharti, annwyn, avalon, niflheim, omyocan, satyaloka, yomi} = require("./planetData.js"),
			{percentDay, percentYear} = require("./percentTimes"),
			{scaleDay, scaleYear} = require("./scalarTImes.js");
const [,,...args] = process.argv; 
//args[0] is function name
//args[1] is planet
//args[2] is refPlanet

// percentDay(earth, niflheim);
// percentYear(earth, niflheim);

function idPlanet(string){
	switch (string){
		case earth.name:
			return earth;
		case agharti.name:
			return agharti;
		case annwyn.name:
			return annwyn;
		case avalon.name:
			return avalon;
		case niflheim.name:
			return niflheim;
		case omyocan.name:
			return omyocan;
		case satyaloka.name:
			return satyaloka;
		case yomi.name:
			return yomi;
		default:
			return null;
	}
}


if(args[0] === "percentDay"){
	percentDay(idPlanet(args[1]), idPlanet(args[2]));
} else if (args[0] === "percentYear"){
	percentYear(idPlanet(args[1]), idPlanet(args[2]));
} else if (args[0] === "scaleDay"){
	scaleDay(idPlanet(args[1]), idPlanet(args[2]), args[3]);
} else if (args[0] === "scaleYear"){
	scaleYear(idPlanet(args[1]), idPlanet(args[2]), args[3]);
} else if(args[0] === "help"){
	console.log("Enter [function] [planet] [reference planet]");
	console.log("Functions are:\npercentDay\npercentYear\nscaleDay\nscaleYear ");
	console.log("Planets/refPlanet options are:\nearth\nagharti\nannwyn\navalon\nniflheim\nomyocan\nsatyaloka\nyomi");
} else {
	console.log("Invalid entry, type \"node driver.js help\" for options");
}


// console.log("earth", earth );
// console.log("agharti", agharti );
// console.log("annwyn", annwyn );
// console.log("avalon", avalon );
// console.log("niflheim", niflheim );
// console.log("omyocan", omyocan );
// console.log("satyaloka", satyaloka );
// console.log("yomi", yomi );
