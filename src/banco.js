import mysql2 from 'mysql2';

//Armazendo os dados da conexão
/*const conexao = mysql2.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'escola'
});*/

//Efetivando a conexão
//conexao.connect();
conexao.connect( erro => {
    if( erro ){
        console.error(`erro ao conectar: ${erro.message}`)
    }else{
        console.log(`Banco de dados conectado em: ${conexao.config.host}`);
    }
});

//Banco de dados db4free
const conexao = mysql2.createConnection({
    host : 'db4free.net',
    user : 'vitorsenac',
    password : 'Senac123',
    database : 'apiescolavitor'
});

export default conexao;


