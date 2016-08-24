"use strict";
const scaleDay = (planet, refPlanet, numDays) => {
	console.log(`${numDays} days on ${planet.name} is ${planet.day / refPlanet.day * numDays} days on ${refPlanet.name}`);
	return planet.day / refPlanet.day * numDays;
};
const scaleYear = (planet, refPlanet, numYears) => {
	console.log(`${numYears} years on ${planet.name} is ${planet.year / refPlanet.year * numYears} years on ${refPlanet.name}`);
	return planet.year / refPlanet.year * numYears;
};

module.exports = {scaleDay, scaleYear};
