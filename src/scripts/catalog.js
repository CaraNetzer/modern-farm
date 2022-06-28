export const Catalog = (harvestedPlants) => {
    let html = "";
    for (const plant of harvestedPlants) {
        html += `<section class="plant">${plant.type}</section>`
    }
    return html;
}