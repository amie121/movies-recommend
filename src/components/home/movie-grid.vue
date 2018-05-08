<template>
  <div class="grid-wrapper">
    <div class="grid-title">{{movieGrid.title}}</div>
    <Row type="flex" :gutter="16">
      <Col span="4" offset="1" class="grid-item"
      v-for="movie in movieGrid.subjects" :key="movie.id">
        <Movie :movieInfo="movie"></Movie>
      </Col>
    </Row>
    <Page :total="this.movieGrid.total" :current="current" :page-size="pagesize" show-total @on-change="changePage"></Page>
  </div>
</template>

<script>
import movie from './movie';
import { mapGetters, mapActions } from '_vuex@3.0.1@vuex';

export default {
  data() {
    return {
      type: '',
      pagesize: 20,
      current: 1,
      query: ''
    };
  },
  created() {
    this.type = this.$route.params.list;
    if (this.type === 'top250') {
      this.getTop250();
    } else if (this.type === 'search') {
      this.query = this.$route.query;
      const payload = {
        q: this.query.q
      };
      this.searchMovies(payload);
    }
  },
  watch: {
    $route: function(val, old) {
      if (this.type === 'search') {
        this.query = this.$route.query;
        this.searchMovies({ q: this.query.q });
      }
    }
  },
  computed: {
    ...mapGetters(['movieGrid'])
  },
  methods: {
    changePage(page) {
      if (this.type === 'top250') {
        this.getTop250(page);
      } else if (this.type === 'search') {
        const payload = {
          q: this.query.q,
          page: page
        };
        this.searchMovies(payload);
      }
    },
    ...mapActions(['getTop250', 'searchMovies'])
  },
  components: {
    Movie: movie
  }
};
</script>

<style lang="postcss">
.grid-wrapper {
  margin-top: 30px;
}
.grid-title {
  font-size: 20px;
  margin-bottom: 20px;
}
.grid-item {
  margin-bottom: 30px;
}
</style>
