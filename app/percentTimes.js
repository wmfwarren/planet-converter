"use strict";

const percentDay = (planet, refPlanet) => {
	console.log(`${planet.name}'s day is ${planet.day / refPlanet.day * 100.0}% of ${refPlanet.name}'s day.`);
	return planet.day / refPlanet.day;
};
const percentYear = (planet, refPlanet) => {
	console.log(`${planet.name}'s year is ${planet.year / refPlanet.year * 100.0}% of ${refPlanet.name}'s year.`);
	return planet.year / refPlanet.year;
};

module.exports = {percentDay, percentYear};
