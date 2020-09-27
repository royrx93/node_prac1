const getList = (author, keyword) =>{
    // return fake value in corret format
    return[
        {
            id: 1,
            title: 'TITLE_A',
            content: 'CONTENT_A',
            createTIme: 1546610491112,
            author: 'jiaoYuan'
        },
        {
            id: 2,
            title: 'TITLE_B',
            content: 'CONTENT_B',
            createTIme: 1546610494473,
            author: 'DaoShangFei'
        }
    ]
}

const getDetail = (id) =>{
    // return dum value
    return {
        id: 1,
        title: 'TITLE_A',
        content: 'CONTENT_A_longlonglong',
        createTIme: 1546610491112,
        author: 'jiaoYuan'
    }
}

module.exports = {
    getList,
    getDetail
}