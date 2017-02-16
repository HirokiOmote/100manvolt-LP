<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import 'babel-polyfill';
import 'picturefill';

export default {
  name: 'app',
};
</script>

<style src="normalize.css"></style>
<style lang="scss">
  html {
      color: #323232;
      font-size: 62.5%;
      font-family: Lucida, "游ゴシック" , "Yu Gothic" , "游ゴシック体" , "YuGothic" , sans-serif;
      line-height: 1;
      font-feature-settings: "palt" 1;
      letter-spacing: 0.02em;
  }
  body {
    background: linear-gradient(to bottom, #3e41b1 0%, #252895 100%) no-repeat;
  }
  picture {
    display: block;
  }
  source {
    display: inline;
  }
  img {
      max-width: 100%;
      height: auto;
  }
  * {
    box-sizing: border-box;
  }
</style>
