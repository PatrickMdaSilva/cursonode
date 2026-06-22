// Criando servidor web

// Protocolo
const http = require("http")
// IP
const host = "127.0.0.1"
// Porta utilizada
const port = 3000

// Inicialização do servidor envio de requisição e retorno de resposta
const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Ola mundo \n Meu Primeiro Script\n Status: ${res.statusCode}`);
})

server.listen(port, host,()=>{
    console.log(`Server running at http://${host}:${port}`)
})