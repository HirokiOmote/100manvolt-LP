<template>
  <div class="wrapper">
    <h1 class="wow rubberBand">
      <picture>
        <source
          media="(min-width: 768px)"
          srcset="static/images/top/img_top001.png">
        <source
          media="(min-width: 320px)"
          srcset="/static/images/top/img_top001_xs.png">
        <img src="/static/images/top/img_top001.png" alt="プレミアムフライデーセール！実質タダになるプレミアム抽選会。最大10万円が当たる！">
      </picture>
    </h1>
    <main class="container">
      <p class="wow jello"><router-link to="/timesale/"><img src="static/images/top/img_top002.png" alt="2月24日(金)限定タイムセール開催。タイムセール一覧を見る。"></router-link></p>
      <p class="wow jello"><router-link to="/specialsale/"><img src="static/images/top/img_top003.png" alt="2月24日・25日・26日厳選特価品。厳選特価品一覧を見る。"></router-link></p>
    </main>
    <footer>
      <p><small>Copyright (C) 2017 Y3Q Co.,Ltd,. All Rights Reserved. </small></p>
    </footer>
  </div>
</template>

<script>
import WOW from 'wow.js';

export default {
  name: 'Top',

  mounted() {
    new WOW().init();
  },
};
</script>

<style src="animate.css"></style>
<style lang="scss" scoped>
  @import "../assets/stylesheets/mixin";

  .wrapper {
    overflow: hidden;
    text-align: center;
  }

  .container {
    @include media( sm ) {
      display: flex;
      justify-content: center;
    }
  }

  h1 {
    margin: 0;
    @include media( sm ) {
      margin: 0 -30px 0 0;
    }
  }

  p {
    margin: 15px;
    @include media( sm ) {
      margin: 15px 7.5px;
    }
  }

  footer {
    padding: 1em;
    color: #fff;
    background-color: #1f3135;
  }
</style>
