'use strict';
const models = require('./db');
const express = require('express');
const router = express.Router();

/************** 登录模块 **************/
// 创建账号--用户注册
router.post('/api/login/createUser', (req, res) => {
  const user = req.body.user;
  const password = req.body.password;

  models.Login.find({ user }, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.length === 0) {
      let newUser = new models.Login({
        user,
        password
      });
      newUser.save((err, data) => {
        if (err) {
          res.send({ success: false, errTxt: err });
        } else {
          res.send({ success: true });
        }
      });
    } else {
      res.send({ success: false, errTxt: '该用户已存在' });
    }
  });
});

// 用户登录
router.post('/api/login/loginUser', (req, res) => {
  // 查找数据库
  const user = req.body.user;
  const password = req.body.password;

  models.Login.find({ user }, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (!result || result.length === 0) {
      res.send({
        success: false,
        errTxt: '该用户不存在！请先注册。'
      });
    } else {
      res.send({
        success: true,
        match: result[0].password === password
      });
    }
  });
});

module.exports = router;
