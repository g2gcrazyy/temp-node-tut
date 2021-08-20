const { resolveSoa } = require('dns');
const http = require('http')

// request and response 
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our homepage')
    }
    if(req.url === '/about'){
        res.end('Heres a short history')
    }
    res.end(`
        <h1>Oops!</h1>
        <p> We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
    `)
})

server.listen(5000)