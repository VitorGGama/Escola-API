import conexao from './banco.js';

// CRUD

// LER/EXIBIR todos os alunos
function ler(res) {
    const sql = "SELECT * FROM alunos ORDER BY nome";

    conexao.query(sql, (erro, resultados) => {
        // Verificação para ver se há conteúdo
        if (resultados.length === 0) {
            res.status(204).end(); // Sem conteúdo (204) se não houver resultado
            return;
        } 
        
        
       if (erro) {
                res.status(400).json(erro.code);
            } else {
                res.status(200).json(resultados); // OK (200) com os resultados
            }
    });
}

//INSERINDO alunos no banco de dados
function inserir(aluno,res){
    const sql = "INSERT INTO alunos SET ?";

    conexao.query(sql, aluno, (erro) => {
        if(erro) {
            res.status(400).json(erro.code);
        } else {
            res.status(201).json({ "status" : "Aluno inserido"});
            //res.status(201).end();

        }
    })
    
}
//Ler LER UM ALUNO no banco de dados

function lerUm(id, res) {
    const sql = "SELECT * FROM alunos WHERE id = ?";
    conexao.query(sql, id, (erro, resultados) => {
        if(resultados === 0){
            res.status(204).end();
            return;
        }
        if(erro){
            res.status(400).json(erro.code);
        }else {
            res.status(200).json(resultados[0]);
        }
    });
}

//Atualizar todos/alguns dados de um aluno
function atualizar(id, aluno, res){
    const sql = "UPDATE alunos SET ? WHERE id = ?";
    conexao.query(sql, [aluno, id], (erro, resultados) => {
        if(erro){
            res.status(400).json(erro.code);
        } else {
            //res.status(200).json({"status" : "Atualizado com sucesso"});
            res.status(200).json({...aluno, id} ); //... =>spread operator
    
        }
});
}
 //Excluir aluno
 function excluir(id, res) {
    const sql = "DELETE FROM alunos WHERE id = ?";

    conexao.query(sql, id, (erro, resultados) => {
        if (erro) {
            res.status(400).json(erro.code);
        } else {
            res.status(200).json({ "status": "Aluno excluído com sucesso" });
        }
    });
}
                            
export { ler, inserir, lerUm, atualizar, excluir };

