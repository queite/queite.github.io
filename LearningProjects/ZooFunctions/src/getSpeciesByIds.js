const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const arrayFilter = species.filter((specie) => ids.find((id) => id === specie.id));
  return arrayFilter;
}

module.exports = getSpeciesByIds;
