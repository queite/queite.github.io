const ol = document.getElementById('lista-tarefas');
const saveButton = document.getElementById('salvar-tarefas');
const tasks = [];
const input = document.getElementById('texto-tarefa');

// Criação de tarefas
function createTask() {
  const createButton = document.getElementById('criar-tarefa');
  createButton.addEventListener('click', () => {
    if (input.value !== '') {
      const li = document.createElement('li');
      li.innerText = input.value;
      ol.appendChild(li);
      input.value = '';
    } else {
      alert('Digite uma tarefa');
    }
  });
}
createTask();

// Com a tecla enter. Parte adicionada depois com o exemplo do course 5.3
input.addEventListener('keyup', (event) => {
  if (event.key === 'Enter' && input.value.length > 0) {
    const newLi = document.createElement('li');
    newLi.innerText = input.value;

    ol.appendChild(newLi);
    input.value = '';
  }
});

// Selecionar tarefa
function selectTask() {
  ol.addEventListener('click', (event) => {
    const selected = document.querySelector('.selected');
    if (selected !== null) {
      selected.classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}
selectTask();

// Marcar tarefa como concluida
function completedTask() {
  ol.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}
completedTask();

// Botão limpar tudo
function clearButton() {
  const clearButtonselectedLi = document.getElementById('apaga-tudo');
  clearButtonselectedLi.addEventListener('click', () => {
    ol.innerHTML = '';
    localStorage.setItem('tasks', '');
  });
}
clearButton();

// Botão remover tarefas concluídas
function removeSelected() {
  const completed = document.querySelectorAll('li.completed');
  for (let i = 0; i < completed.length; i += 1) {
    completed[i].remove();
  }
}
document.getElementById('remover-finalizados').addEventListener('click', removeSelected);

// Remove item selecionado
const removeButton = document.getElementById('remover-selecionado');
removeButton.addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  console.log(selected);
  selected.remove();
});

// Botão salvar
function addToLocalStorage() {
  saveButton.addEventListener('click', () => {
    const li = document.getElementsByTagName('li');
    if (li.length > 0) {
      for (let i = 0; i < li.length; i += 1) {
        const j = { task: li[i].innerHTML, class: li[i].className };
        tasks.push(j);
      }
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  });
}
addToLocalStorage();

// Recria lista de tarefas
function renderization() {
  if (localStorage.getItem('tasks') != null) {
    const tasksArray = JSON.parse(localStorage.getItem('tasks'));
    for (let i = 0; i < tasksArray.length; i += 1) {
      const list = document.createElement('li');
      list.innerHTML = tasksArray[i].task;
      list.className = tasksArray[i].class;
      ol.appendChild(list);
    }
  }
}
renderization();

// Move para cima
function moveUp() {
  const moveUpButton = document.getElementById('mover-cima');
  moveUpButton.addEventListener('click', () => {
    const selected = document.querySelector('.selected');
    const li = document.getElementsByTagName('li');
    console.log(li);
    if (selected != null && selected.innerHTML !== li[0].innerHTML) {
      const currentTask = selected.outerHTML;
      const previousTask = selected.previousElementSibling.outerHTML;
      selected.previousElementSibling.outerHTML = currentTask;
      document.getElementsByClassName('selected')[1].outerHTML = previousTask;
    }
  });
}
moveUp();

// Move para baixo
function moveDown() {
  const moveDownButton = document.getElementById('mover-baixo');
  const li = document.getElementsByTagName('li');
  moveDownButton.addEventListener('click', () => {
    const selected = document.querySelector('.selected');
    if (selected != null && selected.innerHTML !== li[li.length - 1].innerHTML) {
      const currentTask = selected.outerHTML;
      const nextTask = selected.nextElementSibling.outerHTML;
      selected.nextElementSibling.outerHTML = currentTask;
      document.getElementsByClassName('selected')[0].outerHTML = nextTask;
    }
  });
}
moveDown();
