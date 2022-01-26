const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const employee = employees.find((person) => person.firstName.includes(employeeName)
  || person.lastName.includes(employeeName));
  return employee;
}

module.exports = getEmployeeByName;
