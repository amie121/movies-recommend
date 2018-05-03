<template>
  <div class="movie-container" :data-movieId="movieId">
    <img class="movie-img" :src="coverUrl" />
    <p class="movie-title">{{title}}</p>
    <Stars :stars="stars" :score="average"></Stars>
    <div class="handle">
      <Dropdown transfer>
        <Button type="primary" size="small">
            操作
          <Icon type="arrow-down-b"></Icon>
        </Button>
        <DropdownMenu slot="list">
          <DropdownItem>加入收藏列表</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
</template>

<script>
import stars from './stars';

export default {
  data() {
    return {
      movieId: '4920389',
      coverUrl:
        'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2516578307.jpg',
      title: '头号玩家头号玩家头号玩家头号玩家',
      stars: 35,
      average: 8.9,
      like: false
    };
  },
  components: {
    Stars: stars
  }
};
</script>


<style lang="postcss">
.movie-container {
  display: flex;
  flex-direction: column;
  padding: 0 12px;

  & .ivu-btn {
    padding: 0 6px;
    margin: 3px;
  }
}
.movie-img {
  width: 115px;
  height: 161px;
  padding-bottom: 10px;
}

.movie-title {
  width: 115px;
  font-size: 14px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.handle {
  margin: 0 auto;
}
.dropdown-index {
  z-index: 9999;
}
</style>
