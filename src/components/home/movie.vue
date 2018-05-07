<template>
  <div class="movie-container" :data-movieId="movieInfo.id" @click="goToDetail(movieInfo.id)">
    <img class="movie-img" :src="movieInfo.images.large" />
    <p class="movie-title">{{movieInfo.title}}</p>
    <Stars :stars="movieInfo.rating.stars" :score="movieInfo.rating.average"></Stars>
    <div class="handle">
      <Dropdown transfer @on-click="addLikeList">
        <Button type="primary" size="small">
            操作
          <Icon type="arrow-down-b"></Icon>
        </Button>
        <DropdownMenu slot="list">
          <DropdownItem name="add">加入收藏列表</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
</template>

<script>
import stars from './stars';

export default {
  props: ['movieInfo'],
  data() {
    return {};
  },
  methods: {
    goToDetail(id) {
      this.$router.push(`/home/detail/${id}`);
    },
    addLikeList(name) {}
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
