const { getList } = require('../controller/blog')
const {SuccessModel, ErrorModel } = require('../model/resModel')

const handleBlogRouter = (req, res) => {
    const method = req.method // GET POST


    // get blog list
    if(method  ==='GET' && req.path === '/api/blog/list'){
        // return{
        //     msg:'This is the interface of getting blog list'
        // }
        const author = req.query.author || '' 
        const keyword = req.query.keyword || ''
        const listData = getList(author, keyword)

        return new SuccessModel(listData)
    }

    // get blog detail
    if(method ==="GET" && req.path === '/api/blog/detail'){
        return{
            msg:'This is the interface of getting blog detail'
        }
    }

    // create a new blog
    if (method === 'POST' && req.path === '/api/blog/new'){
        return{
            msg:'this is the interface of creating a new blog'
        }
    }

    // update a blog
    if(method === 'POST' && req.path === '/api/blog/update'){
        return{
            msg: 'this is the interface of updating blog'
        }
    }

    //delete a blog
    if (method === 'POST' && req.path === '/api/blog/del'){
        return{
            msg:'this is the interface of deleting a new blog'
        }
    }

}

module.exports = handleBlogRouter