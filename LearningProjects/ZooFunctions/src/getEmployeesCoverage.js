const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

// Busca por funcionários pelo nome ou ID
function getEmployeeByName(employeeInfo) {
  if (Object.keys(employeeInfo).includes('name')) {
    return employees.find((person) => person.firstName.includes(employeeInfo.name)
    || person.lastName.includes(employeeInfo.name));
  }
  if (Object.keys(employeeInfo).includes('id')) {
    return employees.find((person) => person.id.includes(employeeInfo.id));
  }
}

// Cria objeto de saída
function createCoverageObj(employeeInfo) {
  const { id, firstName, lastName, responsibleFor } = getEmployeeByName(employeeInfo);
  const animals = responsibleFor.map((item) => species.find((specie) => specie.id === item).name);
  const location = responsibleFor.map((item) => species
    .find((specie) => specie.id === item).location);
  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species: animals,
    locations: location,
  };
}

// Gera objeto de todos os funcionários. Ajuda com a estrutura deste forEach no repositório https://github.com/tryber/sd-015-b-project-zoo-functions/blob/Samuel-Silva-zoo-functions-project/src/getEmployeesCoverage.js
function coverage() {
  const allEmployees = [];
  employees.forEach((employee) => {
    const employeeObj = createCoverageObj({ name: employee.firstName });
    allEmployees.push(employeeObj);
  });
  return allEmployees;
}

function getEmployeesCoverage(employeeInfo) {
  if (!employeeInfo) return coverage();
  const { name, id } = employeeInfo;
  const check = employees.find((employee) => employee.firstName === name
    || employee.lastName === name
    || employee.id === id);
  if (check === undefined) throw new Error('Informações inválidas');
  if (name || id) return createCoverageObj(employeeInfo);
}
// Consegui chegar a lógica para lançar o erro com ajuda do repositório https://github.com/tryber/sd-015-b-project-zoo-functions/blob/Samuel-Silva-zoo-functions-project/src/getEmployeesCoverage.js
module.exports = getEmployeesCoverage;
