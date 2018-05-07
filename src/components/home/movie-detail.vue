<template>
  <div class="detail-wrapper" v-if="movieId === movieDetail.id">
    <div class="detail-info" >
      <div class="title">{{movieDetail.title}}<span class="year">({{movieDetail.year}})</span></div>
      <div class="poster">
        <img :src="movieDetail.images.large" alt="Poster" width="120">
      </div>
      <div class="info">
        <Row>
          <span class="mark">评分</span>
          <Stars :stars="movieDetail.rating.stars" :score="movieDetail.rating.average" class="rate-stars"></Stars>
        </Row>
        <Row>
          <span class="mark">导演</span>
          <span>{{convertToString(movieDetail.directors)}}</span>
        </Row>
        <Row>
          <span class="mark">主演</span>
          <span>{{convertToString(movieDetail.casts)}}</span>
        </Row>
        <Row>
          <span class="mark">编剧</span>
          <span>{{convertToString(movieDetail.writers)}}</span>
        </Row>
        <Row>
          <span class="mark">类型</span>
          <span>{{movieDetail.genres.join('/')}}</span>
        </Row>
        <Row>
          <span class="mark">国家/地区</span>
          <span>{{movieDetail.countries.join('/')}}</span>
        </Row>
        <Row>
          <span class="mark">上映时间</span>
          <span>{{movieDetail.pubdate}}</span>
        </Row>
        <Row>
          <span class="mark">片长</span>
          <span>{{movieDetail.durations[0]}}</span>
        </Row>
        <Row>
          <span class="mark">又名</span>
          <span>{{movieDetail.aka.join('/')}}</span>
        </Row>
      </div>
      <div class="like">
        <Button type="primary">+ 加入收藏列表</Button>
      </div>
    </div>
    <div class="detail-summary">
      <div class="blo-title">
        简介
      </div>
      <pre>{{movieDetail.summary}}</pre>
    </div>
    <div class="detail-actors">
      <div class="blo-title">影人</div>
      <Row type="flex" justify="start">
        <Col span="4" v-for="cast in movieDetail.casts" :key="cast.name">
          <img :src="wrapImageUrl(cast.avatars.large)" :alt="cast.name" width="100">
          <p>{{cast.name}}</p>
        </Col>
      </Row>
    </div>
    <div class="detail-rec">
      <div class="blo-title">喜欢这部电影的人还喜欢</div>
      <Row>
      </Row>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from '_vuex@3.0.1@vuex';
import stars from './stars';
import movie from './movie';

export default {
  data() {
    return {
      movieId: ''
    };
  },
  created() {
    const movieId = this.$route.params.id;
    this.movieId = movieId;
    this.getMovieDetail(movieId);
  },
  computed: {
    ...mapGetters(['movieDetail'])
  },
  methods: {
    convertToString(arr) {
      var namejoin = '';
      for (var idx in arr) {
        namejoin = namejoin + arr[idx].name + ' / ';
      }
      return namejoin.substring(0, namejoin.length - 2);
    },
    wrapImageUrl(url) {
      if (url !== undefined) {
        return url.replace(
          /http\w{0,1}:\/\//g,
          'https://images.weserv.nl/?url='
        );
      }
    },
    ...mapActions(['getMovieDetail'])
  },
  components: {
    Stars: stars,
    Movie: movie
  }
};
</script>

<style lang="postcss">
.detail-wrapper {
  width: 830px;
  margin-top: 30px;
  & > div {
    margin-bottom: 20px;
  }
}
.detail-info {
  & .title {
    font-size: 20px;
    margin-bottom: 10px;

    & .year {
      padding-left: 10px;
      color: #afafaf;
    }
  }

  & .info {
    margin-left: 20px;
    width: 300px;
  }

  & .mark {
    padding-right: 10px;
    color: #666;
  }

  & .poster,
  & .info,
  & .like {
    display: inline-block;
  }
}
.blo-title {
  margin-bottom: 10px;
  font-size: 16px;
  color: #666;
}
.detail-summary {
  & pre {
    padding-left: 20px;
    white-space: pre-wrap;
  }
}
</style>
