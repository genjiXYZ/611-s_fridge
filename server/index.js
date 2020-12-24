const express = require("express");
// const cors = require('cors');
const app  = express();

// app.all("*",function(req,res,next){
//     //设置允许跨域的域名，*代表允许任意域名跨域
//     res.header("Access-Control-Allow-Origin",'http://fridge.genji.xyz/');
//     //允许的header类型
//     // res.header("Access-Control-Allow-Headers","content-type,Authorization");
  
//     //跨域允许的请求方式 
//     res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
//     if (req.method.toLowerCase() == 'options')
//         res.send(200);  //让options尝试请求快速结束
//     else
//         next();
// })


//jwt  secret
app.set('envSecret',"envSecret" )   


app.use (express.json())

// //跨域


// app.use(cors())
app.use('/avatars',express.static(__dirname+'/avatars'))
app.use('/admin',express.static(__dirname+'/admin'))
app.use('/web',express.static(__dirname+'/web'))



// //数据库
require('./db/db')(app)

// //路由
require('./router_admin')(app)

//端口3000
app.listen(3000, (req,res)=>{
	console.log("http://localhost:3000")
	
})



console.log(__dirname)