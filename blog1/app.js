const serverHandle = (req, res) =>{
    //设置返回格式 JSON
    res.setHeader('Content-type', 'application/json')

    const resData = {
        name: 'RoyFirstBlogTest',
        site:'imooc',
        env: process.env.NODE_ENV // 记录日志 打印到控制台或文件中； 检测数据库
    }

    res.end(
        JSON.stringify(resData)
    )
}

module.exports = serverHandle

