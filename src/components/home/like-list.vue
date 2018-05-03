<template>
  <div class="like-list-wrapper">
    <div class="list-title">我的收藏列表</div>
    <div class="like-list" v-if="likeList&&likeList.length!==0">
      <li class="list-item" v-for="item in likeList" :key="item.movieId">{{item.title}}</li>
      <div class="like-more">更多>>></div>
    </div>
    <div class="empty-list" v-else>
      暂无收藏记录
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      likeList: [
        {
          movieId: '123123',
          title: '头号玩家'
        },
        {
          movieId: '123124',
          title: '狂暴巨兽'
        },
        {
          movieId: '123125',
          title: '21克拉'
        }
      ]
    };
  }
};
</script>

<style lang="postcss">
.like-list-wrapper {
  & .list-title {
    height: 40px;
    margin-top: 10px;
    padding-left: 10px;
    line-height: 40px;
    border-radius: 5px;
    background-color: #e2e7f0;
    color: #666;
    font-size: 14px;
  }
  & .list-item {
    list-style: none;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #dfdfdf;
    cursor: pointer;
    &:hover {
      color: #000;
    }
  }
  & .empty-list {
    height: 40px;
    line-height: 40px;
    color: #9f9f9f;
  }
  & .like-more {
    padding-top: 10px;
    color: rgb(37, 117, 236);
    cursor: pointer;
  }
}
</style>
