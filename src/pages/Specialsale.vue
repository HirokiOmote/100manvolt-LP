<template>
  <div>
    <navigation></navigation>
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
    <a class="wow bounceInLeft Btn" href="#" target="_blank">WEBチラシを見る<span>(PDF:00kb)</span></a>
    <aside>
      <p>【おことわり】<br>
      ※台数限定商品は、特別商材につきお一人様１商品かつ１台限り、表示台数限りの先着販売となります。※ご来店多数の場合、先着順にてお一人様１枚限り整理券を配布させていただく場合がございます。※整理券は、お一人様１商品かつ１台限りとさせていただきます。異なる商品分を含め一枚のみとさせていただきます。※同業者及び転売目的の方への販売は固くお断りさせていただきます。また、｢同一名義によるご購入」及び「同一住所へのお届け」はお断りさせていただきます。※なくなり次第終了とさせていただきます。※配達・設置には別途送料が必要になる場合があります。※台数限定商品は他のセール値引き及び各種値引き券の利用はできません。※お電話でのご予約ご注文はお受けいたしかねます。 ※徹夜での並んでのお買い求めは固くお断りします。※日替り<br>
      限定品に並ばれる際に、中学生未満のお客様は人数の対象外とさせていただきます。※順番待ちのトラブル等があった場合、販売を中止させていただく場合もございます。※荷物をおいての場所取りはご遠慮ください。やむを得ず場所を離れる場合は、前後の方に一声かけていただき、速やかにお戻りください。</p>
    </aside>
    <footer>
      <p><small>Copyright (C) 2017 Y3Q Co.,Ltd,. All Rights Reserved. </small></p>
    </footer>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Navigation from '../components/Navigation';
import Product from '../components/Product';

Vue.use(VueAxios, axios);

export default {
  name: 'Specialsale',
  components: {
    Navigation,
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
    padding: 90px 15px 15px;
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

  aside {
    margin: 1em 15px;
    color: #fff;
    line-height: 1.5;
    @include media( sm ) {
      display: none;
    }
  }

  footer {
    padding: 1em;
    color: #fff;
    text-align: center;
    background-color: #1f3135;
  }
</style>
