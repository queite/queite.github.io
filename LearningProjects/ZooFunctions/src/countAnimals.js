const data = require('../data/zoo_data');

function countAnimals(animal) {
  // Sem parâmetro
  if (!animal) {
    const obj = {};
    data.species.forEach((specie) => {
      obj[specie.name] = specie.residents.length;
    });
    return obj;
  }

  let residentsNumber;
  if (Object.keys(animal).includes('sex')) { // Com chave sex
    residentsNumber = data.species
      .find(({ name }) => animal.specie === name).residents
      .filter(({ sex }) => sex === animal.sex).length;
  } else { // Sem chave sex
    residentsNumber = data.species.find(({ name }) => animal.specie === name).residents.length;
  }
  return residentsNumber;
}

module.exports = countAnimals;
