<template>
  <div class="category-wrapper">
    <div class="recommend-movies">
      <MovieBlock title="电影推荐" movieData=""></MovieBlock>
    </div>
    <div class="hot-movies">
      <MovieBlock title="正在热映" movieData=""></MovieBlock>
    </div>
    <div class="coming-movies">
      <MovieBlock title="即将上映" movieData=""></MovieBlock>
    </div>
    <div class="top-movies">
      <MovieBlock title="豆瓣评分Top250" movieData=""></MovieBlock>
    </div>
  </div>
</template>

<script>
import movieBlock from './movie-block';

export default {
  components: {
    MovieBlock: movieBlock
  }
};
</script>

<style lang="postcss">
.hot-movies,
.coming-movies,
.top-movies {
  border-top: 1px solid #dfdfdf;
}
</style>

