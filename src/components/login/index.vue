<template>
  <div class="login-wrapper">
    <div class="login">
      <img src="../../assets/images/login.jpeg" alt="login_page" class="login-img" width="400">
      <div class="login-form">
        <div class="title">Movies Recommand</div>
        <Form ref="loginForm" :model="loginForm" :rules="loginRules">
          <FormItem prop="user">
              <Input type="text" v-model="loginForm.user" placeholder="Username">
                  <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
          </FormItem>
          <FormItem prop="password">
              <Input type="password" v-model="loginForm.password" placeholder="Password">
                  <Icon type="ios-locked-outline" slot="prepend"></Icon>
              </Input>
          </FormItem>
          <FormItem>
              <Button class="signup-btn" type="primary" @click="login('loginForm')">登录</Button>
              <Button type="success" @click="signup('loginForm')">注册</Button>
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import http from '../../utils/http';
import apiUrl from '../../utils/ApiSetting';

export default {
  data() {
    return {
      loginForm: {
        user: '',
        password: ''
      },
      loginRules: {
        user: [
          {
            required: true,
            message: '请填写用户名',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请填写密码',
            trigger: 'blur'
          },
          {
            type: 'string',
            min: 6,
            message: '不能少于6位',
            trigger: 'blur'
          }
        ]
      },
      modal1: false,
      modelContent: ''
    };
  },
  methods: {
    signup(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          http(apiUrl.signup, {
            user: this.loginForm.user,
            password: this.loginForm.password
          })
            .then(res => {
              const data = res.data;
              if (data.success) {
                this.$Message.success('注册成功！请登录');
                this.loginForm.password = '';
              } else {
                const errTxt = data.errTxt;
                this.$Message.error(`注册失败!${errTxt}`);
              }
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
    },
    login(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          http(apiUrl.login, {
            user: this.loginForm.user,
            password: this.loginForm.password
          })
            .then(res => {
              const data = res.data;
              if (data.success) {
                if (data.match) {
                  // TODO: 登陆成功跳转逻辑
                  this.$Message.success('登录成功！');
                } else {
                  this.$Message.error('密码错误！请重试');
                }
              } else {
                this.$Message.error('该用户不存在！请先注册');
              }
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
    }
  }
};
</script>

<style lang="postcss">
.login-wrapper {
  width: 100%;
  height: 100%;
  background-color: #eee;
}
.login {
  display: inline-block;
  margin-top: 100px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.login-img {
  vertical-align: middle;
}
.login-form {
  display: inline-block;
  vertical-align: top;
  width: 200px;
  margin-top: 100px;
  margin-left: 60px;
  margin-right: 60px;
}
.title {
  margin-bottom: 20px;
  font-size: 16px;
}
.signup-btn {
  margin-right: 30px;
}
</style>
