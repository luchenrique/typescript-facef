// Importa express
import express from 'express';

// Cria o servidor
let servidor = express()

servidor.get('/', function(req, res){
    res.send('A aula acabou')
})
// COloca o servidor para executar na porta 3333 e aqguardar as requisições
servidor.listen(3333, () => {
    console.log('Servidor iniciado')
})
