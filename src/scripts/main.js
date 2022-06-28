console.log("Welcome to the main module")

import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { addPlant, usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js";
import { Catalog } from "./catalog.js";

//create plan
const yearlyPlan = createPlan();
//console.log(yearlyPlan);

//seeds
/* const cornSeed = createCorn();
//console.log(cornSeed);
const asparagusSeed = createAsparagus();
//console.log(asparagusSeed);
const potatoSeed = createPotato();
//console.log(potatoSeed);
const soybeanSeed = createSoybean();
//console.log(soybeanSeed);
const sunflowerSeed = createSunflower();
//console.log(sunflowerSeed);
const wheatSeed = createWheat();
//console.log(wheatSeed); */

//use plants
/* let plants = addPlant(cornSeed);
plants = addPlant(asparagusSeed);
plants = addPlant(potatoSeed);
plants = addPlant(soybeanSeed);
plants = addPlant(sunflowerSeed);
plants = addPlant(wheatSeed);
const field = usePlants();
console.log(Array.isArray(field[0]));
console.log(field); */

let field = plantSeeds(yearlyPlan)
field = usePlants();
const harvestedPlants = harvestPlants(field);
const html = Catalog(harvestedPlants);

let plantsParent = document.querySelector(".container");
plantsParent.innerHTML = html;