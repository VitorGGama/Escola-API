import express from 'express';
import { ler, inserir, lerUm, atualizar, excluir } from './src/aluno.js';
const app = express();
const porta = 8080;

//add suporte ao formato json
app.use(express.json());

//adicionando suporte a dados
app.use(express.urlencoded({ extended : true}));


// Defina uma rota HTTP GET para a raiz ('/') do seu aplicativo.
// Quando alguém acessa a raiz do seu aplicativo no navegador ou faz uma solicitação GET para ele,
// a função de retorno de chamada será executada.
app.get('/', (req, res) => {
    res.send('Raiz da API NodeJS + Express + mySql');
});

app.get('/alunos', (req, res) =>{
    //res.send('dados de todos os alunos');
    ler(res);
}); 

app.get('/alunos/:id', (req, res) =>{
    //res.send('exibindo dados de um aluno');
    const id = parseInt(req.params.id);
    lerUm(id, res);
}); 

app.post('/alunos', (req, res) =>{
    //res.send('inserindo um aluno');
    const novoAluno = req.body;
    inserir(novoAluno, res);


});

app.patch('/alunos/:id', (req, res) =>{
    //res.send('atualizando dados de um aluno');
    const id = parseInt(req.params.id);
    const aluno = req.body;
    atualizar(id, aluno, res);
});

app.delete('/alunos/:id', (req, res) =>{
    //res.send('excluindo alunos');
    const id = parseInt(req.params.id);
    excluir(id, res);

}); 




//Executando o servidor
app.listen(porta, () => {
    console.log(`Servidor NodeJS rodando na porta ${porta}`);
});