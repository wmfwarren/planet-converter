"use strict";

const second = 1000.0,
			minute = second * 60.0,
			hour = minute * 60;

const earth = {
	name: "earth",
	day: 24.0 * hour
};
earth.year = 365.0 * earth.day;

const agharti = {
	name: "agharti",
	day: 18.0 * hour + 24 * minute + 39.0 * second
}
agharti.year = 529.0 * agharti.day;

const annwyn = {
	name: "annwyn",
	day: 21.0 * hour + 15.0 * minute + 13.0 * second
}
annwyn.year = 294.0 * annwyn.day;

const avalon = {
	name: "avalon",
	day: 21.0 * hour + 1.0 * minute + 28.0 * second
}
avalon.year = 300.0 * avalon.day;

const niflheim = {
	name: "niflheim",
	day: 69.0 * hour + 51.0 * minute + 33.0 * second
}
niflheim.year = 1056.0 * niflheim.day;

const omyocan = {
	name: "omyocan",
	day: 15.0 * hour + 39.0 * minute + 3.0 * second
}
omyocan.year = 191.0 * omyocan.day;

const satyaloka = {
	name: "satyaloka",
	day: 22.0 * hour + 33.0 * minute + 15.0 * second
}
satyaloka.year = 297.0 * satyaloka.day;

const yomi = {
	name: "yomi",
	day: 20.0 * hour + 46.0 * minute + 59.0 * second
}
yomi.year = 314.0 * yomi.day;

module.exports = {earth, agharti, annwyn, avalon, niflheim, omyocan, satyaloka, yomi}


