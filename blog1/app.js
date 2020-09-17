const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')


const serverHandle = (req, res) =>{
    //设置返回格式 JSON
    res.setHeader('Content-type', 'application/json')


    // get path
    const url = req.url
    req.path = url.split('?')[0]

    // parsing query
    req.query = querystring.parse(url.split('?')[1])

    // handle blog router
    const blogData = handleBlogRouter(req, res)

    if(blogData){
        res.end(
            JSON.stringify(blogData)
        )
        return
    }

    //handle user router
    const userData = handleUserRouter(req,res)

    if(userData){
        res.end(
            JSON.stringify(userData)
        )
        return
    }

    // did not find any router, return 404
    res.writeHead(404,{"Content-type": "text/plain"})
    res.write("404 Not Found\n")
    res.end()


}

module.exports = serverHandle

    // const resData = {
    //     name: 'RoyFirstBlogTest',
    //     site:'imooc',
    //     env: process.env.NODE_ENV // 记录日志 打印到控制台或文件中； 检测数据库
    // }

    // res.end(
    //     JSON.stringify(resData)
    // )