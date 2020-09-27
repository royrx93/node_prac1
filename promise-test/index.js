const fs = require('fs');
const path = require('path');
var nodemailer  = require('nodemailer');

// get the content of a file by callback
// function getFileContent(fileName, callback){
    // const fullFileName = path.resolve(__dirname,'files',fileName); // __dirname nodejs 中的全局变量，表示当前文件位置
    // fs.readFile(fullFileName, (err,data) =>{
    //     if(err){
    //         console.error(err);
    //         return;
    //     }
    //     callback(
    //         JSON.parse(data.toString())
    //     );
//     })

// }

// getFileContent('a.json',aData =>{
//     console.log('a.data: ', aData);
//     getFileContent(aData.next, bData =>{
//         console.log('b.data: ',bData);
//         getFileContent(bData.next, cData =>{
//             console.log('c.data: ', cData);
//         })
//     })
// })

// get file by promise
function getFileContent(fileName){
    const promise = new Promise((resolve, reject) =>{
        const fullFileName = path.resolve(__dirname,'files',fileName); // __dirname nodejs 中的全局变量，表示当前文件位置
        fs.readFile(fullFileName, (err,data) =>{
            if(err){
                reject(err);
                return;
            }
            resolve(
                JSON.parse(data.toString())
            );
        });
    });
    return promise;
}

getFileContent('a.json').then(aData =>{
    console.log(aData);
    return getFileContent(aData.next);
}).then(bData =>{
    console.log(bData);
    return getFileContent(bData.next);
}).then(cData =>{
    console.log(cData);
})

var mailTransport = nodemailer.createTransport("SMTP",{
    host : 'smtp.gmail.com',
    secureConnection: true, // 使用SSL方式（安全方式，防止被窃取信息）
    auth : {
        user : 'nobodycares.verify@gmail.com',
        pass : 'Nobody123'
    },
});

smtpTransport.sendMail({
    from    : 'Nobodycares<nobodycares.verify@gmail.com>'
  , to      : '<royfmttm@gmail.com>'
  , subject : 'Node.JS通过SMTP协议从QQ邮箱发送邮件'
  , html    : '这是一封测试邮件 <br> '
}, function(err, res) {
    console.log(err, res);
});

// /* 浏览器输入地址（如127.0.0.1:3000/sned）后即发送 */
// router.get('/send', function(req, res, next) {
//     var options = {
//         from        : 'nobodycares.verify@gmail.com',
//         to          : 'royfmttm@gmail.com',
//         // cc         : ''  //抄送
//         // bcc      : ''    //密送
//         subject        : '一封来自Node Mailer的邮件',
//         text          : '一封来自Node Mailer的邮件',
//         html           : '<h1>你好，这是一封来自NodeMailer的邮件！</h1><p><img src="cid:00000001"/></p>',
//         // attachments : 
//         //             [
//         //                 {
//         //                     filename: 'img1.png',            // 改成你的附件名
//         //                     path: 'public/images/img1.png',  // 改成你的附件路径
//         //                     cid : '00000001'                 // cid可被邮件使用
//         //                 },
//         //                 {
//         //                     filename: 'img2.png',            // 改成你的附件名
//         //                     path: 'public/images/img2.png',  // 改成你的附件路径
//         //                     cid : '00000002'                 // cid可被邮件使用
//         //                 },
//         //             ]
//     };
    
//     mailTransport.sendMail(options, function(err, msg){
//         if(err){
//             console.log(err);
//             res.render('index', { title: err });
//         }
//         else {
//             console.log(msg);
//             res.render('index', { title: "已接收："+msg.accepted});
//         }
//     });
// });