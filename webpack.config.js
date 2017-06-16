var path=require('path');// 导入路径包 
var webpack=require('webpack'); 
//注入环境变量，来判断生产环境还是开发环境
var DEVELOPMENT=process.env.NODE_ENV==='development'; 
var PRODUCTION=process.env.NODE_ENV==='production'; 
var entry=PRODUCTION 
? ['./src/index.js'] : [ 
'./src/index.js', 
'webpack/hot/dev-server',//开启热重载 hot 
'webpack-dev-server/client?http://localhost:8080'//添加webpack-dev-server客户端 
]; 
var plugins=PRODUCTION ? [] : [ 
new webpack.HotModuleReplacementPlugin()//全局开启代码热替换 
]; 

module.exports={ 
entry:entry//入口文件 
, 
plugins:plugins 
, 
output:{ 
path:path.join(__dirname,'dist'),// 指定打包之后的文件夹 
publicPath:'/dist/',// 指定资源文件引用的目录 
filename:'bundle.js'// 指定打包为一个文件 bundle.js 
} 
}
