import { addPlant, usePlants } from "./field.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { createCorn } from "./seeds/corn.js";

/* 
@param an array of arrays defining where each seed should go in a field
*/
export const plantSeeds = (plan) => {
    for (const row of plan) {
        for (const spot of row) {
            if (spot == "Potato") {
                const potato = createPotato();
                addPlant(potato);
            }
            else if (spot == "Corn") {
                const corn = createCorn();
                addPlant(corn[0]);
                addPlant(corn[1]);
            }
            else if (spot == "Sunflower") {
                const sunflower = createSunflower();
                addPlant(sunflower);
            }
            else if (spot == "Soybean") {
                const soybean = createSoybean();
                addPlant(soybean);
            }
            else if (spot == "Wheat") {
                const wheat = createWheat();
                addPlant(wheat);
            }
            else if (spot == "Asparagus") {
                const asparagus = createAsparagus();
                addPlant(asparagus);
            }
        }
    }
}