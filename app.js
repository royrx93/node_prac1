const http = require('http')
const querystring = require('querystring')
// 处理GET
// const querystring = require('querystring')
// const server = http.createServer((req,res) =>{
//     console.log(req.method) // GET
//     const url = req.url     // 获取请求的完整url
//     console.log('url:', url)
//     req.query = querystring.parse(url.split('?')[1]) //解析 querystring
//     console.log('query: ',req.query)    
//     res.end(                    // 将querystring 返回
//         JSON.stringify(req.query)
//         )
// })

// 处理POST
// const server = http.createServer((req,res) =>{
//     if(req.method === 'POST'){
//         // req 数据格式
//         console.log('req content-type: ', req.headers['content-type'])
//         //接受数据
//         let postData = ''
//         req.on('data', chunk =>{
//             postData += chunk.toString()
//         })
//         req.on('end',() => {
//             console.log('postData: ', postData)
//             res.end('hello world!')
//         } )
//     }
// })

// 综合处理
const server = http.createServer((req,res)=> {
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]
    const query = querystring.parse(url.split('?')[1])

    // 设置返回格式为JSON
    res.setHeader('Content-type', 'application/json')


    // 返回的数据
    const resData = {
        method,
        url,
        path,
        query
    }

    // 返回
    if(method === 'GET'){
        res.end(
            JSON.stringify(resData) // test/html
        )
    }

    if(req.method === 'POST'){
        //接受数据
        let postData = ''
        req.on('data', chunk =>{
            postData += chunk.toString()
        })
        req.on('end',() => {
            resData.postData = postData
            // 返回
            res.end(
                JSON.stringify(resData)
            )

        } )
    }



})

server.listen(3000)
console.log('okk')