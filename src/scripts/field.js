let field = [];

export const addPlant = (seed) => {
    field.push(seed);
}

export const usePlants = () => {
    return field.map(plant => ({...plant}))
}