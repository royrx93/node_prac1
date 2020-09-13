const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req,res) =>{
    console.log(req.method) // GET
    const url = req.url     // 获取请求的完整url
    console.log('url:', url)
    req.query = querystring.parse(url.split('?')[1]) //解析 querystring
    console.log('query: ',req.query)    
    res.end(                    // 将querystring 返回
        JSON.stringify(req.query)
        )
})

server.listen(8000)
console.log('okk')