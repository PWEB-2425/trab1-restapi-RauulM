# Trabalho Prático #1

Raul Domingues Moreira n22249

Link frontend: https://trab1-restapi-rauul-m-ijzd.vercel.app/
Link backend: Nao fiz deploy no render

Um pedido GET para /alunos retorna uma lista de todos os alunos. Para adicionar um novo aluno,  pode enviar um pedido POST para /alunos com os dados do aluno no corpo do pedido (como nome, ano e curso). Se precisar de atualizar um aluno existente, um pedido PUT para /alunos/:id permite-lhe modificar as suas informações especificando o seu ID único no URL e passando os campos actualizados no corpo do pedido. Finalmente, para remover um aluno da base de dados, pode fazer um DELETE para /alunos/:id, que elimina o aluno com o ID indicado.

O projeto usa o MongoDB Atlas como base de dados hospedada na nuvem. O backend conecta-se à base de dados usando uma string de conexão armazenada no arquivo .env com o nome MONGO_URI.

## Consumo e Implementação de APIs RESTful

Este projeto consiste num frontend implementado no Vercel e num servidor backend ligado a uma base de dados MongoDB. O frontend comunica com a API do backend para fornecer todas as funcionalidades.

O backend precisa de ser executado localmente, enquanto que o frontend é acessível através do link do Vercel.

### Configuração do backend

Clonar o repositório e navegar até a pasta do backend:

 git clone <repository-url>

 cd backend

 npm install

 npm start

Depois do server estar conectado ao MongoDB, aceder ao link https://trab1-restapi-rauul-m-ijzd.vercel.app/ e experimentar
as funcionalidades