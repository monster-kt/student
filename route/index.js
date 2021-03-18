/*
 * @Description:实现路由功能
 * @Version: 1.0
 * @Autor: ksr
 * @Date: 2021-03-16 17:54:38
 * @LastEditors: ksr
 * @LastEditTime: 2021-03-16 17:58:27
 * @FilePath: \Node\template\students\route\index.js
 */
const getRouter = require('router');
const Student = require('../model/user');
const template = require('art-template');
const querystring = require('querystring');
// 获取路由对象
const router = getRouter();



// 学生档案信息页面
router.get('/add', (req, res) => {
    let html = template('index', {});
    res.end(html);
});

// 学生档案信息列表页面
router.get('/list', async (req, res) => {
    let students = await Student.find();

    let html = template('list', {
        students: students
    });
    res.end(html);
});

// 实现学生信息添加功能路由
router.post('/add', (req, res) => {
    // 接收post请求参数
    let formData = '';
    req.on('data', param => {
        formData += param;
    });
    req.on('end', async () => {
        await Student.create(querystring.parse(formData));
        res.writeHead(301, {
            Location: '/list'
        });
        res.end();
    })
})
module.exports = router;