const inventorySlides = require("./data/inventorySlidesMenu.json");

function getData() {
  const data = {};

  data.inventorySlides = inventorySlides;

  return data;
}

module.exports = getData();
