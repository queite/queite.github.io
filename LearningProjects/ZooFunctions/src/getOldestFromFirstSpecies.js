const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animal = employees.filter((employee) => employee.id === id)
    .map((item) => item.responsibleFor[0]);
  const { residents } = data.species.find(((specie) => specie.id === animal[0]));
  const older = residents.reduce((acc, resident) => ((resident.age > acc.age) ? resident : acc));
  const { name, sex, age } = older;
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
