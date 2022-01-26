const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const olderThan = data.species.find((specie) => specie.name === animal).residents
    .every((resident) => resident.age > age);
  return olderThan;
}

module.exports = getAnimalsOlderThan;
