const API_URL = "https://trab1-restapi-rauulm.onrender.com/alunos";
  
    const form = document.getElementById('alunoForm');
    const tbody = document.getElementById('alunoTableBody');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const id = document.getElementById('id').value;
      const aluno = {
        nome: document.getElementById('nome').value,
        apelido: document.getElementById('apelido').value,
        curso: document.getElementById('curso').value,
        anoCurricular: parseInt(document.getElementById('anoCurricular').value)
      };

      try {
        if (id) {
          // Update
          await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(aluno)
          });
        } else {
          // Create
          await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(aluno)
          });
        }
        resetForm();
        fetchAlunos();
      } catch (err) {
        console.error('Erro ao salvar aluno:', err);
      }
    });

    function resetForm() {
      form.reset();
      document.getElementById('id').value = '';
    }

    async function fetchAlunos() {
      const res = await fetch(API_URL);
      const alunos = await res.json();

      tbody.innerHTML = '';
      alunos.forEach(aluno => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${aluno.nome}</td>
          <td>${aluno.apelido}</td>
          <td>${aluno.curso == 1? 'Engenharia da Computação Gráfica e Multimédia':'Engenharia de Redes e Sistemas de Computadores'}</td>
          <td>${aluno.anoCurricular}</td>
          <td>
            <button onclick="editAluno('${aluno._id}', '${aluno.nome}', '${aluno.apelido}', '${aluno.curso}', ${aluno.anoCurricular})">Editar</button>
            <button onclick="deleteAluno('${aluno._id}')">Apagar</button>
          </td>
        `;
        tbody.appendChild(tr);
      });
    }

    function editAluno(id, nome, apelido, curso, anoCurricular) {
      document.getElementById('id').value = id;
      document.getElementById('nome').value = nome;
      document.getElementById('apelido').value = apelido;
      document.getElementById('curso').value = curso;
      document.getElementById('anoCurricular').value = anoCurricular;
    }

    async function deleteAluno(id) {
      if (confirm("Tem certeza que deseja apagar este aluno?")) {
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        fetchAlunos();
      }
    }

    // Load data initially
    fetchAlunos();