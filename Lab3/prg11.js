import http, {createServer} from "http";
const server = createServer((req, res) => {
    if(req.url==="/" && req.method==="GET")
        res.end('home page')
    else if(req.url==='/product' && req.method==='GET')
        res.end('show product')
    else if(req.url==='/product' && req.method==='POST')
        res.end('add product')
    else if(req.url==='/product' && req.method==='PUT')
        res.end('update product')
    else if(req.url==='/product' && req.method==='DELETE')
        res.end('delete product')
});

server.listen(3000,()=> console.log('prg11 is running'))