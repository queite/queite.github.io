// Validação login
const validation = () => {
  const email = document.getElementById('emailLogin');
  const password = document.getElementById('senhaLogin');
  const sendButton = document.getElementById('botaoEntrar');
  sendButton.addEventListener('click', () => {
    if (email.value !== 'tryber@teste.com' || password.value !== '123456') {
      alert('Email ou senha inválidos.');
    }
    alert('Olá, Tryber!');
  });
};
validation();

// Cria contador textarea
const createCounter = () => {
  const paragraph = document.getElementById('counter');
  const textarea = document.getElementById('textarea');
  textarea.addEventListener('keyup', () => {
    paragraph.innerHTML = 500 - textarea.value.length;
  });
};
createCounter();

// Ativação botão enviar
const btnSend = document.getElementById('submit-btn');
const permissionInput = document.getElementById('agreement');
function ativarDesativarBtnEnviar() {
  btnSend.disabled = !permissionInput.checked;
}
permissionInput.addEventListener('input', ativarDesativarBtnEnviar);

// Menu hamburguer - feito com a ajuda do vídeo https://www.youtube.com/watch?v=DnODupiIAiE&t=653s
const sendButton = document.getElementById('btn-mobile');

const toggle = () => {
  const login = document.getElementById('login');
  login.classList.toggle('active');
  console.log(login);
};
sendButton.addEventListener('click', toggle);

// Retorna as matérias selecionadas
function getSubjects() {
  const subjectClass = document.getElementsByClassName('subject');
  const subject = [];
  for (let i = 0; i < subjectClass.length; i += 1) {
    if (subjectClass[i].checked) {
      subject.push(subjectClass[i].value);
    }
  }
  return subject.join(', ');
}

// Retorna um objeto com os dados no formulário
function getData(form) {
  const data = {
    Nome: `${form.name.value} ${form.lastname.value}`,
    Email: form.email.value,
    Casa: form.house.value,
    Família: form.family.value,
    Matérias: getSubjects(),
    Avaliação: form.rate.value,
    Observações: form.comment.value,
  };
  return data;
}

// Mostra os dados do formulário quando clicar no botão enviar
function showData(event) {
  event.preventDefault();
  const form = document.getElementById('evaluation-form');
  const formInfo = getData(form);
  form.innerHTML = '';
  Object.entries(formInfo).forEach((item) => { // Ajuda aqui: https://pt.stackoverflow.com/questions/173293/como-percorrer-um-objeto-em-javascript
    const paragraph = document.createElement('p');
    form.appendChild(paragraph);
    paragraph.innerHTML = `${item[0]}: ${item[1]}`;
  });

  event.target.innerHTML = 'Voltar';
  form.appendChild(event.target);
}
btnSend.addEventListener('click', showData);
