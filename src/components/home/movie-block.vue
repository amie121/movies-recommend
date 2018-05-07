<template>
<div class="block-wrapper">
  <div class="subtitle">
    {{title}}
    <span v-if="more" class="more-movie" @click="loadMore()">更多>>></span>
  </div>
  <Carousel class="carousel"
    :autoplay="carousel.autoplay"
    :autoplay-speed="carousel.speed"
    :dots="carousel.showdots"
    @mouseenter.native="enter"
    @mouseleave.native="leave">
    <CarouselItem v-for="group in movieData" :key="group[0].title">
      <Row class="item-row" type="flex" justify="space-around">
        <Col span="4" v-for="movie in group" :key="movie.movieId">
          <Movie :movieInfo="movie"></Movie>
        </Col>
      </Row>
    </CarouselItem>
  </Carousel>
</div>
</template>

<script>
import movie from './movie';
export default {
  props: {
    title: {
      require: true
    },
    movieData: {
      require: true
    },
    more: {
      default: false
    }
  },
  data() {
    return {
      carousel: {
        speed: 5000,
        showdots: 'none',
        autoplay: true
      }
    };
  },
  methods: {
    enter() {
      this.carousel.autoplay = false;
    },
    leave() {
      this.carousel.autoplay = true;
    },
    loadMore() {
      this.$router.push({ path: '/home/grid/top250' });
    }
  },
  components: {
    Movie: movie
  }
};
</script>

<style lang="postcss">
.block-wrapper {
  margin: 10px 0 20px 0;
}
.subtitle {
  margin-bottom: 15px;
  font-size: 16px;
}
.more-movie {
  display: inline-block;
  float: right;
  margin-right: 50px;
  font-size: 12px;
  color: rgb(37, 117, 236);
  cursor: pointer;
}
.carousel {
  width: 830px;
}
.item-row {
  width: 740px;
  margin: 0 auto;
}
</style>
