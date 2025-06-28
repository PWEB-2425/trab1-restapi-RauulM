const Aluno = require("../modelos/aluno");

// GET /alunos
exports.getAlunos = async (req, res) => {
  const alunos = await Aluno.find();
  res.json(alunos);
};

// POST /alunos
exports.createAluno = async (req, res) => {
  const novoAluno = new Aluno(req.body);
  await novoAluno.save();
  res.status(201).json(novoAluno);
};

// PUT /alunos/:id
exports.updateAluno = async (req, res) => {
  const alunoAtualizado = await Aluno.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(alunoAtualizado);
};

// DELETE /alunos/:id
exports.deleteAluno = async (req, res) => {
  await Aluno.findByIdAndDelete(req.params.id);
  res.json({ msg: "Aluno removido" });
};
