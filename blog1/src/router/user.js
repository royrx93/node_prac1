const handleUserRouter = (req, res) =>{
    const method = req.method // GET POST
    const url = req.url
    const path = url.split('?')[0]


    //login
    if(method === 'POST' && path === '/api/user/login'){
        return{
            msg:'this is the interface of login'
        }
    }

}

module.exports = handleUserRouter