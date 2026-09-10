const http = require('node:http');
// colocar node no require somente para diferenciar o modulo do node do modolo criado por mim};


// STRINGFY == TRANSFORMA OBJETO NODE PARA TEXTO 
// PARSE == DESTRANFORMA TEXTO PARA OBJETO
http.createServer((Request, Response) => {
    Response.writeHead(200, {'content-type': 'application/json'});
    Response.end(JSON.stringify({
        name: 'Alex Bessa',
        email: 'alex@email.com'}));
}).listen(3000);
    
    
//API = Uma API (Application Programming Interface,ou Interface de Programação de Aplicações) é um conjunto de regras e padrões que 
// permite que diferentes sistemas de software se comuniquem entre si de forma segura e 
// automática

// Request > servidor > response

//100 ----> 199 > Informaçoes ao navegador
//200 ----> 299 > Sucesso
//300 ----> 399 > Redirecionamento
//400 ----> 499 >
//500 ----> 599 > ERROR SERVIDOR