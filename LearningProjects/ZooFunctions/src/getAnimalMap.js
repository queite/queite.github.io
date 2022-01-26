const data = require('../data/zoo_data');

// Constantes com localização
const ne = data.species.filter((specie) => specie.location === 'NE');
const nw = data.species.filter((specie) => specie.location === 'NW');
const se = data.species.filter((specie) => specie.location === 'SE');
const sw = data.species.filter((specie) => specie.location === 'SW');

// Retorna espécie com seus residentes
function getResidentsName(location) {
  const residentsBySpecie = location.map((specie) => {
    const specieName = specie.name;
    const residents = specie.residents.map((resident) => resident.name);
    return { [specieName]: residents };
  });
  return residentsBySpecie;
}

// Retorna espécie com seus residentes ordenado por ordem alfabética
function getResidentsNameSorted(location) {
  const residentsBySpecie = location.map((specie) => {
    const specieName = specie.name;
    const residents = specie.residents.map((resident) => resident.name);
    return { [specieName]: residents.sort() };
  });
  return residentsBySpecie;
}

// Retorna objeto com nome de residentes em ordem alfabética
function createObjNameSorted() {
  return {
    NE: getResidentsNameSorted(ne),
    NW: getResidentsNameSorted(nw),
    SE: getResidentsNameSorted(se),
    SW: getResidentsNameSorted(sw),
  };
}

// Retorna espécies com residentes cfe sexo
function getResidentsBySex(location, sex) {
  const residentsBySex = location.map((specie) => {
    const specieName = specie.name;
    const residents = specie.residents.filter(((resident) => resident.sex === sex))
      .map((resident) => resident.name);
    return { [specieName]: residents };
  });
  return residentsBySex;
}

// Retorna objeto com resitentes cfe sexo
function createObjBySex(sex) {
  return {
    NE: getResidentsBySex(ne, sex),
    NW: getResidentsBySex(nw, sex),
    SE: getResidentsBySex(se, sex),
    SW: getResidentsBySex(sw, sex),
  };
}

// Retorna espécies com residentes por ordem alfabética cfe sexo
function getResidentsBySexSorted(location, sex) {
  const residentsBySex = location.map((specie) => {
    const specieName = specie.name;
    const residents = specie.residents.filter(((resident) => resident.sex === sex))
      .map((resident) => resident.name);
    return { [specieName]: residents.sort() };
  });
  return residentsBySex;
}

// Retorna objeto com resitentes por odem alfabética cfe sexo
function createObjBySexSorted(sex) {
  return {
    NE: getResidentsBySexSorted(ne, sex),
    NW: getResidentsBySexSorted(nw, sex),
    SE: getResidentsBySexSorted(se, sex),
    SW: getResidentsBySexSorted(sw, sex),
  };
}

// Função que retorna objeto com localização e espécies
function getLocation() {
  const neSpecies = ne.map((specie) => specie.name);
  const nwSpecies = nw.map((specie) => specie.name);
  const seSpecies = se.map((specie) => specie.name);
  const swSpecies = sw.map((specie) => specie.name);

  const animalsLocation = {
    NE: neSpecies,
    NW: nwSpecies,
    SE: seSpecies,
    SW: swSpecies,
  };
  return animalsLocation;
}

// Retorna objeto com espécies e seus residentes por localização
function createMapByName() {
  const residentsByName = {
    NE: getResidentsName(ne),
    NW: getResidentsName(nw),
    SE: getResidentsName(se),
    SW: getResidentsName(sw),
  };
  return residentsByName;
}

// Filtra o tipo de retorno cfe objeto inserido como parâmetro
function returnFilter(options) {
  if (options.sex && options.sorted === true) return createObjBySexSorted(options.sex);
  if (options.sorted === true) return createObjNameSorted();
  if (options.sex) return createObjBySex(options.sex);
  return createMapByName();
}

function getAnimalMap(options) {
  if (!options || !options.includeNames) return getLocation();
  return returnFilter(options);
}

module.exports = getAnimalMap;
