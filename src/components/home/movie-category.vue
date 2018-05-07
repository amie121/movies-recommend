<template>
  <div class="category-wrapper">
    <div class="recommend-movies">
      <MovieBlock title="电影推荐" movieData="" more="true"></MovieBlock>
    </div>
    <div class="hot-movies">
      <MovieBlock title="正在热映" :movieData="inTheaters"></MovieBlock>
    </div>
    <div class="coming-movies">
      <MovieBlock title="即将上映" :movieData="comingSoon"></MovieBlock>
    </div>
    <div class="top-movies">
      <MovieBlock title="豆瓣评分Top250" :movieData="top250" more="true"></MovieBlock>
    </div>
  </div>
</template>

<script>
import movieBlock from './movie-block';
import { mapGetters, mapActions } from '_vuex@3.0.1@vuex';

export default {
  created() {
    this.getMovies();
  },
  computed: {
    ...mapGetters(['inTheaters', 'comingSoon', 'top250'])
  },
  methods: {
    ...mapActions(['getMovies'])
  },
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

