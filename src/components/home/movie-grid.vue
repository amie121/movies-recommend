<template>
  <div class="grid-wrapper">
    <Row type="flex" :gutter="16">
      <Col span="4" offset="1" class="grid-item">
        <Movie></Movie>
      </Col>
      <Col span="4" offset="1" class="grid-item">
        <Movie></Movie>
      </Col>
      <Col span="4" offset="1" class="grid-item">
        <Movie></Movie>
      </Col>
      <Col span="4" offset="1" class="grid-item">
        <Movie></Movie>
      </Col>
      <Col span="4" offset="1" class="grid-item">
        <Movie></Movie>
      </Col>
      <Col span="4" offset="1" class="grid-item">
        <Movie></Movie>
      </Col>
      <Col span="4" offset="1" class="grid-item">
        <Movie></Movie>
      </Col>
    </Row>
  </div>
</template>

<script>
import movie from './movie';

export default {
  components: {
    Movie: movie
  }
};
</script>

<style lang="postcss">
.grid-wrapper {
  margin-top: 30px;
}
.grid-item {
  margin-bottom: 30px;
}
</style>
