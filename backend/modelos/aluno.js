const mongoose = require('mongoose');

const alunoSchema = new mongoose.Schema({
  nome: String,
  apelido: String,
  curso: String,
  anoCurricular: Number,
  idade: Number
});

module.exports = mongoose.model('Aluno', alunoSchema);
