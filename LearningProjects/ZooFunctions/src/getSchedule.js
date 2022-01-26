const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const weekDays = Object.keys(data.hours);
const speciesList = data.species.map((specie) => specie.name);

// Animais em exibição por dia da semana
function getAnimalByWeekDay(weekDay) {
  return species.filter((specie) => specie.availability.includes(weekDay))
    .map((specie) => specie.name);
}

// Hora de abertura
function getOpenHour(weekDay) {
  const { open } = data.hours[weekDay];
  return open;
}

// Hora de fechamento
function getCloseHour(weekDay) {
  const { close } = data.hours[weekDay];
  return close;
}

function createSchedule() {
  const schedule = {};
  weekDays.forEach((day) => {
    if (day === 'Monday') {
      schedule[day] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      schedule[day] = { // Ajuda para montar o objeto no repositório https://github.com/tryber/sd-015-b-project-zoo-functions/blob/AndreLuiiz-zoo-functions-project/src/getSchedule.js
        officeHour: `Open from ${getOpenHour(day)}am until ${getCloseHour(day)}pm`,
        exhibition: getAnimalByWeekDay(day),
      };
    }
  });
  return schedule;
}

// Filtra a saída dependendo do tipos de entrada (dia ou animal)
function returnFilter(target) {
  const days = weekDays.find((item) => item === target);
  const animals = speciesList.find((item) => item === target);
  if (animals === undefined) {
    const schedule = {};
    schedule[target] = {
      officeHour: `Open from ${getOpenHour(target)}am until ${getCloseHour(target)}pm`,
      exhibition: getAnimalByWeekDay(target),
    };
    return schedule;
  }
  if (days === undefined) {
    const animal = data.species.filter((specie) => specie.name === target);
    return animal[0].availability;
  }
}

function getSchedule(scheduleTarget) {
  const days = weekDays.find((item) => item === scheduleTarget);
  const animals = speciesList.find((item) => item === scheduleTarget);
  if (!scheduleTarget) return createSchedule();
  if (days === undefined && animals === undefined) {
    return createSchedule();
  }
  if (scheduleTarget === 'Monday') {
    return {
      Monday: {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      },
    };
  }
  return returnFilter(scheduleTarget);
}
console.log(getSchedule('lions'));
module.exports = getSchedule;
