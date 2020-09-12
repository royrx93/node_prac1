const {add, mul} = require('./nd_p2') 
const _ = require('lodash')

const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/html'})
    res.end('<h1>hello world</h1')
})

server.listen(3000,() => {
    console.log('listerning on 3000 port')
})


const sum = add(20,20)
const time = mul(50,40)

console.log(sum)
console.log(time)

const arr = _.concat([1,2],3)
console.log('arr:', arr)