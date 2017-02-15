<template>
  <div>
    <header>
      <h1 class="wow bounceInLeft">
        <picture>
          <source
            media="(min-width: 768px)"
            srcset="/static/images/common/ttl_page.png, /static/images/common/ttl_page@2x.png 2x">
          <img src="/static/images/common/ttl_page.png" alt="プレミアムフライデーセール！実質タダになるプレミアム抽選会。最大10万円が当たる！">
        </picture>
      </h1>
      <p class="wow bounceInRight">
        <picture>
          <source
            media="(min-width: 768px)"
            srcset="/static/images/specialsale/txt_specialsale_sm.png, /static/images/specialsale/txt_specialsale_sm@2x.png 2x">
            <source
              media="(min-width: 320px)"
              srcset="/static/images/specialsale/txt_specialsale_xs.png">
          <img src="/static/images/specialsale/txt_specialsale_xs.png" alt="プレミアムフライデーセール！実質タダになるプレミアム抽選会。最大10万円が当たる！">
        </picture>
      </p>
    </header>
    <ul class="productsContainer">
      <product v-for="product in products" :product="product"></product>
    </ul>
    <a class="wow bounceInLeft Btn" href="#">WEBチラシを見る<span>(PDF:00kb)</span></a>
    <footer>
      <p><small>Copyright (C) 2017 Y3Q Co.,Ltd,. All Rights Reserved. </small></p>
    </footer>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Product from '../components/Product';

Vue.use(VueAxios, axios);

export default {
  name: 'Specialsale',
  components: {
    Product,
  },

  mounted() {
    this.getProducts();
  },

  data() {
    return {
      products: [],
    };
  },

  methods: {
    getProducts() {
      Vue.axios.get('../../static/JSON/specialsale.json').then((response) => {
        this.products = response.data;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/stylesheets/_mixin.scss";

  header {
    padding: 15px;
    line-height: 0;
    text-align: center;
  }

  .productsContainer {
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
    max-width: 970px;
    margin: 0 auto;
    padding: 0;
  }

  .Btn {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 950px;
    margin: 40px auto;
    padding: .7em;
    color: #1f3134;
    font-size: 1.75rem;
    font-weight: 600;
    text-decoration: none;
    border-radius: 5px;
    box-shadow: 2px 2px #554a09 , 1px 1px #ddd28f inset;
    background-color: #b7a014;
    @include media( md ) {
      font-size: 2.1rem;
    }
  }

  footer {
    padding: 1em;
    color: #fff;
    text-align: center;
    background-color: #1f3135;
  }
</style>
