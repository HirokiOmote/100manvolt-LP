<template>
  <nav class="nav">
    <ul>
      <li><router-link to="/">トップページ</router-link></li>
      <li><router-link to="/specialsale/">厳選特価品</router-link></li>
      <li><router-link to="/timesale/">タイムセール</router-link></li>
    </ul>
  </nav>
</template>

<script>
import WOW from 'wow.js';
import Headroom from 'headroom.js';

export default {
  name: 'Navigation',

  mounted() {
    new WOW().init();
    this.scrollNavigation();
  },

  methods: {
    scrollNavigation() {
      const myElement = document.querySelector('nav');
      const headroom = new Headroom(myElement, {
        offset: 205,
        tolerance: 5,
        classes: {
          initial: 'animated',
          pinned: 'bounceInDown',
          unpinned: 'bounceOutUp',
        },
      });
      headroom.init();
    },
  },
};
</script>

<style src="animate.css"></style>
<style lang="scss" scoped>
  @import "../assets/stylesheets/_mixin.scss";
  nav {
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(0,0,0,.7);
    transition: .3s;
  }
  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    padding: 0;
  }
  li {
    margin: 0;
    padding: 0 1em;
    text-align: center;
    @include media( sm ) {
      padding: 0 2em;
    }
  }
  a {
    display: block;
    min-width: 8em;
    padding: 20px 0;
    color: #fff;
    font-size: 1.2rem;
    line-height: 1;
    text-decoration: none;
    transition: .3s;
    @include media( sm ) {
      font-size: 1.4rem;
    }
    &:hover {
      background: rgba(0,0,0,.3)
    }
  }
</style>
