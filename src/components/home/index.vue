<template>
  <div class="home">
    <nav class="nav">
      <div class="nav-user">
        <Icon type="person"> </Icon>
        <span> 欢迎您,{{username}}</span>
        <span class="logout" @click="logout">退出</span>
      </div>
    </nav>
    <div class="main">
      <div class="head-part-wrapper">
        <div class="head-part">
          <img class="head-icon" src="../../assets/images/dianying_hl.png" alt="" width="30" height="30">
          <h1 class="title">电影推荐</h1>
          <Input v-model="search">
            <Button slot="append" icon="ios-search"></Button>
          </Input>
        </div>
      </div>
      <Layout class="layout">
        <Content class="content">
          <router-view></router-view>
        </Content>
        <Sider class="sider">
          <LikeList></LikeList>
        </Sider>
      </Layout>
      <div class="foot-part">
        © 计算机科学与技术2班 刘艺敏 2018-05
      </div>
    </div>
  </div>
</template>

<script>
import { getCookie, delCookie } from '../../utils/cookie';
import movieBlock from './movie-block';
import likeList from './like-list';

export default {
  data() {
    return {
      username: '',
      search: ''
    };
  },
  mounted() {
    /*页面挂载获取保存的cookie值，渲染到页面上*/
    let uname = getCookie('username');
    this.username = uname;
    /*如果cookie不存在，则跳转到登录页*/
    if (uname == '') {
      this.$router.push('/login');
    }
  },
  methods: {
    logout() {
      delCookie('username');
      this.$router.push('/login');
    }
  },
  components: {
    MovieBlock: movieBlock,
    LikeList: likeList
  }
};
</script>

<style lang="postcss">
.nav {
  height: 30px;
  background-color: rgb(100, 148, 237);
}
.nav-user {
  text-align: right;
  line-height: 30px;
}
.logout {
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
  color: bisque;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
}
.head-part-wrapper {
  border-bottom: 1px solid #dfdfdf;

  & .head-part {
    display: flex;
    margin-top: 20px !important;
    margin-bottom: 30px;
  }

  & .head-icon {
    margin-top: 6px;
    margin-right: 10px;
  }

  & .title {
    flex-basis: 200px;
    font-size: 32px;
    color: rgb(49, 75, 110);
  }

  & .ivu-input-wrapper {
    margin-top: 6px;
    width: 500px;
  }
}
.head-part,
.layout {
  width: 1050px;
  text-align: left;
  margin: 0 auto;
}
.layout {
  background-color: #fff;
}
.content {
  margin-right: 20px;
}
.sider {
  background-color: #fff;
}
.content {
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
}

.foot-part {
  padding-left: 100px;
  background-color: #434343;
  height: 50px;
  line-height: 50px;
  color: #afafaf;
  text-align: left;
}
</style>
