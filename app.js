/*
 * @Description:
 1. 创建网站服务器并实现客户端的请求和访问
 2. 实现路由 模板传递
 3. 静态资源访问功能
 4. 添加功能
 * @Version: 1.0
 * @Autor: ksr
 * @Date: 2021-03-16 16:26:43
 * @LastEditors: ksr
 * @LastEditTime: 2021-03-16 17:59:04
 * @FilePath: \Node\template\students\app.js
 */
const http = require('http');
const path = require('path');
const dateformat = require('dateformat');
const serverStatic = require('serve-static');
const template = require('art-template');

require('./model/connect');
const router = require('./route/index');

// 实现静态资源访问
const serve = serverStatic(path.join(__dirname, 'public'));

// 配置模板
template.defaults.root = path.join(__dirname, 'views');
template.defaults.extname = '.art';
template.defaults.imports.dateformat = dateformat;

const app = http.createServer();

app.on('request', (req, res) => {
    // 启用路由 第三个参数回调函数是必填项
    router(req, res, () => { });
    // 启用静态资源访问服务 第三个参数回调函数是必填项
    serve(req, res, () => { });
})
app.listen(80);
console.log('服务器启动成功');