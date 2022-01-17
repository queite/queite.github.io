const vqv = (name, age) => {
  if (name || age) {
    return `Oi, meu nome é ${name}!
Tenho ${age} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
  }
  return undefined;
};

module.exports = vqv;
