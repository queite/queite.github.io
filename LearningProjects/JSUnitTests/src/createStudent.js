const createStudent = (name) => {
  const student = {
    name,
    feedback: () => 'Eita pessoa boa!',
  };
  return student;
};

module.exports = createStudent;
