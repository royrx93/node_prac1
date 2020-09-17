const handleBlogRouter = (req, res) => {
    const method = req.method // GET POST
    const url = req.url
    const path = url.split('?')[0]

    // get blog list
    if(method  ==='GET' && path == '/api/blog/list'){
        return{
            msg:'This is the interface of getting blog list'
        }
    }

    // get blog detail
    if(method ==="GET" && path === '/api/blog/detail'){
        return{
            msg:'This is the interface of getting blog detail'
        }
    }

    // create a new blog
    if (method === 'POST' && path === '/api/blog/new'){
        return{
            msg:'this is the interface of creating a new blog'
        }
    }

    // update a blog
    if(method === 'POST' && path === '/api/blog/update'){
        return{
            msg: 'this is the interface of updating blog'
        }
    }

    //delete a blog
    if (method === 'POST' && path === '/api/blog/del'){
        return{
            msg:'this is the interface of deleting a new blog'
        }
    }

}

module.exports = handleBlogRouter