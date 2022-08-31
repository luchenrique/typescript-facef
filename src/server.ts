// Importa express
import express from 'express';
// Importar o arquivo de conexão com o banco de dados
import './typeorm' // acessa o arquivo index.ts
// Cria o servidor
let servidor = express()

// importa as rotas
import router from './routes'


servidor.use(router) // servidor var usar nossas rotas

/*servidor.get('/', function(req, res){
    res.send('A aula acabou')
})*/

// Coloca o servidor para executar na porta 3333 e aqguardar as requisições
servidor.listen(3333, () => {
    console.log('Servidor iniciado')
})
