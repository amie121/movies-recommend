<template>
  <div class="stars-container">
    <div class="stars">
      <div v-for="(star, index) in starsArr" :key="index">
        <Icon v-if="star === 1" type="ios-star" color="rgb(253,156,36)" size="14"></Icon>
        <Icon v-else-if="star === 0.5" type="ios-star-half" color="rgb(253,156,36)" size="14"></Icon>
        <Icon v-else type="ios-star-outline"  color="#aaa" size="14"></Icon>
      </div>
    </div>
    <div class="score">{{score}}</div>
  </div>
</template>

<script>
export default {
  props: ['stars', 'score'],
  data() {
    return {};
  },
  computed: {
    starsArr() {
      let _stars = this.stars;
      let _starsArr = [];
      for (let i = 0; i < 5; i++) {
        if (_stars >= 10) {
          _starsArr.push(1);
          _stars -= 10;
          continue;
        } else if (_stars >= 5) {
          _starsArr.push(0.5);
          _stars -= 5;
        } else {
          _starsArr.push(0);
        }
      }
      console.log(_starsArr, this.score);
      return _starsArr;
    }
  }
};
</script>

<style lang="postcss">
.stars-container {
  display: inline-flex;
  margin: 0 auto;
  flex-direction: row;
}
.stars {
  display: flex;
  flex-direction: row;
  line-height: 16px;
  margin-right: 12px;
  vertical-align: top;
}
.score {
  color: #1f3463;
  line-height: 16px;
}
</style>
