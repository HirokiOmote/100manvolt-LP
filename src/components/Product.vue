<template>
  <li class="wow bounceInDown product">
    <article>
      <h2>{{ product.title }}</h2>
      <figure>
        <img v-bind:src="product.img_url" alt="">
        <figcaption>{{ product.catch }}</figcaption>
      </figure>
      <dl>
        <dt>限定数</dt>
        <dd class="Attention">{{ product.note.limit }}</dd>
      </dl>
      <dl>
        <dt>メーカー</dt>
        <dd>{{ product.note.brand }}</dd>
      </dl>
      <dl>
        <dt>型番</dt>
        <dd>{{ product.note.serial }}</dd>
      </dl>
      <dl>
        <dt>ポイント</dt>
        <dd class="Attention">{{ product.note.point }}</dd>
      </dl>
      <ul class="marker">
        <li v-if="product.marker.warranty">
          <picture>
            <source
              srcset="/static/images/common/img_icon001.png, /static/images/common/img_icon001@2x.png 2x">
            <img src="/static/images/common/img_icon001.png" alt="100満ボルトカードで5年間無料保証">
          </picture>
        </li>
        <li v-if="product.marker.delivery">
          <picture>
            <source
              srcset="/static/images/common/img_icon002.png, /static/images/common/img_icon002@2x.png 2x">
            <img src="/static/images/common/img_icon002.png" alt="配送設置無料">
          </picture>
        </li>
        <li v-if="product.marker.setting">
          <picture>
            <source
              srcset="/static/images/common/img_icon003.png, /static/images/common/img_icon003@2x.png 2x">
            <img src="/static/images/common/img_icon003.png" alt="出張無料設定">
          </picture>
        </li>
        <li v-if="product.marker.extension">
          <picture>
            <source
              srcset="/static/images/common/img_icon004.png, /static/images/common/img_icon004@2x.png 2x">
            <img src="/static/images/common/img_icon004.png" alt="メーカー保証3年間">
          </picture>
        </li>
      </ul>
      <p><b>100満特価</b><strong>{{ product.price }}</strong>(税別)</p>
    </article>
  </li>
</template>

<script>
import WOW from 'wow.js';

export default {
  name: 'ProductList',
  props: {
    product: {
      type: Object,
      default() {
        return {
          title: '',
          img_url: '',
          catch: '',
          note: '',
          marker: '',
          price: '',
          link: '',
        };
      },
    },
  },

  mounted() {
    new WOW().init();
  },

  data() {
    return {
    };
  },
};
</script>


<style lang="scss" scoped>
@import "../assets/stylesheets/mixin";

  @for $i from 1 through 20 {
    .bounceInDown:nth-child(#{$i}) {
      animation-delay: #{ $i * 0.1 }s;
    }
  }

  header {
    line-height: 0;
    text-align: center;
  }

  .product {
    width: 100%;
    max-width: 480px;
    margin: 8px;
    @include media( sm ) {
      width: calc( 100% / 3 - 16px );
      max-width: none;
    }
  }

  article {
    position: relative;
    height: 100%;
    padding: 15px;
    background-color: #fff;
  }

  h2 {
    margin-top: 0;
    font-size: 2.2rem;
    line-height: 1.3;
  }

  figure {
    margin: 0;
    text-align: center;
  }

  figcaption {
    color: #007d0c;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 1.3;
    text-align: left;
  }

  dl {
    display: flex;
    margin: 0.4em 0;
    font-size: 1.4rem;
  }

  dd {
    margin: 0;
    &::before {
      content: "：";
    }
    &.Attention {
      color: #ff0000;
    }
  }

  .marker {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    padding: 0;
    list-style: none;
    li {
      margin-right: 10px;
    }
  }

  p {
    font-size: 1.2rem;
    text-align: center;
    b {
      font-size: 1.25em;
    }
    strong {
      margin: 0 .1em;
      color: #ff0000;
      font-size: 3.1em;
    }
  }

  .btnLink {
    display: flex;
    justify-content: center;
    width: 100%;
    @include media( sm ) {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 15px;
    }
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 1.6rem;
    width: 200px;
    height: 40px;
    margin: 10px auto 0;
    text-decoration: none;
    border-radius: 30px;
    border-bottom: 5px solid #b30311;
    background-color: #e60012;
  }
</style>
