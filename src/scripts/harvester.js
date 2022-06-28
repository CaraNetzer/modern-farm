export const harvestPlants = (field) => {
    let harvestedPlants = [];
    for (const plant of field) {
        if(plant.type == "Corn") {
            const cornOutput = plant.output/2;
            for (let i = 0; i<cornOutput; i++) {
                harvestedPlants.push(plant);
            }
        } else {
            const output = plant.output;
            for (let i = 0; i<output; i++) {
                harvestedPlants.push(plant);
            }
        } 
    }
    console.log(harvestedPlants);
    return harvestedPlants;    
}