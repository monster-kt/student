/*
 * @Description:连接数据库
 * @Version: 1.0
 * @Autor: ksr
 * @Date: 2021-03-16 16:33:15
 * @LastEditors: ksr
 * @LastEditTime: 2021-03-16 16:33:36
 * @FilePath: \Node\template\students\model\connect.js
 */
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('数据库连接成功'))
    .catch(err => console.log('连接失败', err));