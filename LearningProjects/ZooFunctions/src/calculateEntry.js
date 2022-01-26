const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  const ageCount = entrants.reduce((acc, currentValue) => {
    if (currentValue.age < 18) {
      acc.child += 1;
    } else if (currentValue.age >= 50) {
      acc.senior += 1;
    } else {
      acc.adult += 1;
    }
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
  return ageCount;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  const { child, adult, senior } = countEntrants(entrants);
  const total = child * prices.child + adult * prices.adult + senior * prices.senior;
  return total;
}

module.exports = { calculateEntry, countEntrants };
