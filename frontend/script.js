// JS para operações CRUD com Fetch API
const API_URL = 'http://localhost:3001/alunos';

const listaAlunos = document.getElementById('lista-alunos');
const form = document.getElementById('aluno-form');

function carregarAlunos() {
  fetch(API_URL)
    .then(res => res.json())
    .then(alunos => {
      listaAlunos.innerHTML = '';
      alunos.forEach(aluno => {
        const li = document.createElement('li');
        li.textContent = `${aluno.nome} ${aluno.apelido} - Curso ${aluno.curso} (${aluno.anoCurricular}º ano)`;
        li.innerHTML += `
          <button onclick="editarAluno(${aluno.id})">Editar</button>
          <button onclick="deletarAluno(${aluno.id})">Excluir</button>
        `;
        listaAlunos.appendChild(li);
      });
    });
}

form.onsubmit = function (e) {
  e.preventDefault();
  const aluno = {
    nome: form.nome.value,
    apelido: form.apelido.value,
    curso: form.curso.value,
    anoCurricular: parseInt(form.anoCurricular.value)
  };
  const id = form['aluno-id'].value;
  if (id) {
    fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(aluno)
    }).then(carregarAlunos);
  } else {
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(aluno)
    }).then(carregarAlunos);
  }
  form.reset();
};

function editarAluno(id) {
  fetch(`${API_URL}/${id}`)
    .then(res => res.json())
    .then(aluno => {
      form['aluno-id'].value = aluno.id;
      form.nome.value = aluno.nome;
      form.apelido.value = aluno.apelido;
      form.curso.value = aluno.curso;
      form.anoCurricular.value = aluno.anoCurricular;
    });
}

function deleteAluno(id) {
  fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  }).then(carregarAlunos);
}

carregarAlunos();
