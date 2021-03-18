/*
 * @Description:创建集合
 * @Version: 1.0
 * @Autor: ksr
 * @Date: 2021-03-16 16:36:37
 * @LastEditors: ksr
 * @LastEditTime: 2021-03-16 16:41:40
 * @FilePath: \Node\template\students\model\user.js
 */
const mongoose = require('mongoose');
const stuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 10
    },
    age: {
        type: Number,
        min: 10,
        max: 25
    },
    sex: {
        type: String
    },
    email: String,
    hobbies: [String],
    collage: String,
    enterDate: {
        type: Date,
        default: Date.now
    }
})
const Student = mongoose.model('Student', stuSchema);
module.exports = Student;