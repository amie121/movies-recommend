<template>
  <div class="detail-wrapper">
    <div class="detail-info">
      <div class="title">后来的我们<span class="year">(2018)</span></div>
      <div class="poster">
        <img :src="poster" alt="Poster" width="120">
      </div>
      <div class="info">
        <Row>
          <span class="mark">评分</span>
          <Stars stars="30" score="6.7" class="rate-stars"></Stars>
        </Row>
        <Row>
          <span class="mark">导演</span>
          <span>刘若英</span>
        </Row>
        <Row>
          <span class="mark">主演</span>
          <span>周冬雨/井柏然</span>
        </Row>
        <Row>
          <span class="mark">编剧</span>
          <span>袁媛</span>
        </Row>
        <Row>
          <span class="mark">类型</span>
          <span>剧情/爱情</span>
        </Row>
        <Row>
          <span class="mark">国家/地区</span>
          <span>中国大陆</span>
        </Row>
        <Row>
          <span class="mark">上映时间</span>
          <span>2018-04-18</span>
        </Row>
        <Row>
          <span class="mark">片长</span>
          <span>120分钟</span>
        </Row>
        <Row>
          <span class="mark">又名</span>
          <span>us and them</span>
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
      <p v-for="text in summary" :key="text">{{text}}</p>
    </div>
    <div class="detail-actors">
      <div class="blo-title">影人</div>
      <Row>
        <Col span="4" v-for="actor in actors" :key="actor.name">
          <img :src="actor.avator" :alt="actor.name" width="100">
          <p>{{actor.name}}</p>
        </Col>
      </Row>
    </div>
    <div class="detail-rec">
      <div class="blo-title">喜欢这部电影的人还喜欢</div>
      <Row>
        <Col span="5"><Movie></Movie></Col>
        <Col span="5"><Movie></Movie></Col>
        <Col span="5"><Movie></Movie></Col>
      </Row>
    </div>
  </div>
</template>

<script>
import stars from './stars';
import movie from './movie';

export default {
  data() {
    return {
      poster:
        'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2519994468.jpg',
      summary: [
        '这是一个爱情故事，关于一对异乡漂泊的年轻人。',
        '十年前，见清和小晓偶然地相识在归乡过年的火车上。两人怀揣着共同的梦想，一起在北京打拼，并开始了一段相聚相离的情感之路。',
        '十年后，见清和小晓在飞机上再次偶然重逢……',
        '命运似乎是一个轮回。在一次次的偶然下，平行线交叉，再平行，故事始终有“然后”。可后来的他们，学会如何去爱了吗？'
      ],
      actors: [
        {
          name: '周冬雨',
          avator:
            'https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p36798.jpg'
        },
        {
          name: '井柏然',
          avator:
            'https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1452260519.76.jpg'
        },
        {
          name: '田壮壮',
          avator:
            'https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524822270.56.jpg'
        }
      ]
    };
  },
  components: {
    Stars: stars,
    Movie: movie
  }
};
</script>

<style lang="postcss">
.detail-wrapper {
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
  & p {
    text-indent: 2em;
  }
}
</style>
