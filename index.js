import express from 'express';
const app = express();


// Defina uma rota HTTP GET para a raiz ('/') do seu aplicativo.
// Quando alguém acessa a raiz do seu aplicativo no navegador ou faz uma solicitação GET para ele,
// a função de retorno de chamada será executada.
app.get('/', (req, res) => {
    res.send('Raiz da API NodeJS + Express + mySql');
});

app.get('/alunos', (req, res) =>{
    res.send('dados todos os alunos');
}); 

app.get('/alunos/:id', (req, res) =>{
    res.send('exibindo dados de um aluno');
}); 

app.post('/alunos', (req, res) =>{
    res.send('inserindo um aluno');
});

app.patch('/alunos/:id', (req, res) =>{
    res.send('atualizando dados de um aluno');
});

app.delete('/alunos/:id', (req, res) =>{
    res.send('excluindo alunos');
}); 




//Executando o servidor
const porta = 8080;
app.listen(porta, () => {
    console.log(`Servidor NodeJS rodando na porta ${porta}`);
});