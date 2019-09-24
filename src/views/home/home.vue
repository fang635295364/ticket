<template>
  <div>
    <div class="home-top">
      <div class="home-top-di1">
        上海
        <span class="el-icon-caret-bottom"></span>
      </div>
      <div class="home-top-di2">
        <span class="el-icon-search"></span>
        <input type="text" placeholder="搜索明星、演出、场馆" />
      </div>
      <div class="home-top-di3">
        <span class="el-icon-location-information"></span>
      </div>
    </div>
    <div class="home-swiper">
      <div class="swiper-container swiper-container-initialized swiper-container-horizontal">
        <div
          class="swiper-wrapper"
          style="transition-duration: 300ms; transform: translate3d(-3240px, 0px, 0px);"
        >
          <div class="swiper-slide" style="width: 375px; margin-right: 30px;">
            <img
              src="https://img.piaoniu.com/misc/5e413b81e2b5bb694f458d5ed2a7521f7d99f64b.jpg"
              alt
            />
          </div>
          <div class="swiper-slide" style="width: 375px; margin-right: 30px;">
            <img
              src="https://img.piaoniu.com/misc/139a1718c678af88b2e42b8cc0c3513ecfcbe10d.png"
              alt
            />
          </div>
          <div class="swiper-slide" style="width: 375px; margin-right: 30px;">
            <img
              src="https://img.piaoniu.com/misc/ffab420911ebac99ae7408cccb975c5913e78f66.jpg"
              alt
            />
          </div>
          <div class="swiper-slide" style="width: 375px; margin-right: 30px;">
            <img
              src="https://img.piaoniu.com/misc/00117e97c2a72b4963f1747395caa83568927bbb.png"
              alt
            />
          </div>
          <div class="swiper-slide" style="width: 375px; margin-right: 30px;">
            <img
              src="https://img.piaoniu.com/misc/29c947ff2f2eec0d25f0f4b68595d2c6fa00e268.png"
              alt
            />
          </div>
          <div class="swiper-slide" style="width: 375px; margin-right: 30px;">
            <img
              src="https://img.piaoniu.com/misc/68d057f2b11552b6f7f8808d983abdef2ad8d552.jpg"
              alt
            />
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"></div>
      </div>
    </div>
    <div class="home-entries">
      <div class="home-entries-item" v-for="(item,index) in entries" :key="index">
        <img :src="item.src" alt />
        <div>{{item.name}}</div>
      </div>
    </div>
    <div class="home-operating">
      <div class="home-operating-item">
        <div>
          <img src="https://assets.piaoniu.com/home/op1-title-v2@3x.png" alt />
          <div>0元看周杰伦</div>
        </div>
        <div>
          <img src="https://img.piaoniu.com/misc/3638eb89605a99ba3e11d1dd4e5d0b37ec286cea.png" alt />
        </div>
      </div>
      <div class="home-operating-item">
        <div>
          <img src="https://assets.piaoniu.com/home/op2-title@3x.png" alt />
          <div>显示限量抢</div>
        </div>
        <div>
          <img src="https://img.piaoniu.com/misc/1cca4af4f80feda66133b40c8ce0c196dbb1f9f2.png" alt />
        </div>
      </div>
    </div>
    <div class="home-service">
      <div>服务保障</div>
      <ul>
        <li>
          无票赔付
          <span>|</span>
        </li>
        <li>
          出票保真
          <span>|</span>
        </li>
        <li>配送保障</li>
      </ul>
    </div>
    <item>
      <div slot="title">近期热门</div>
      <scrollitem>
        <img
          src="https://img.piaoniu.com/poster/08e7cbfd81627eb7897a0f7b1e1ec24dc78ce9ca.jpg"
          alt
          slot="img"
        />
        <div slot="name">艾伦·沃克 2019巡演 上海站</div>
        <span slot="price">￥200</span>
        <div slot="like">6000</div>
      </scrollitem>
    </item>
    <item>
      <div slot="title">折扣专区</div>
      <scrollitem>
        <img
          src="https://img.piaoniu.com/poster/08e7cbfd81627eb7897a0f7b1e1ec24dc78ce9ca.jpg"
          alt
          slot="img"
        />
        <div slot="name">艾伦·沃克 2019巡演 上海站</div>
        <span slot="price">￥200</span>
        <div slot="like">6000</div>
      </scrollitem>
    </item>
    <div class="home-discover">更多精彩内容待你发现</div>
    <div class="home-guess">
      <div class="home-guess-title">猜你喜欢</div>
      <div class="home-guess-item">
        <div><img src="https://img.piaoniu.com/poster/69bf68da4888a9774bf9507c9ac4731b94852ca2.jpg" alt=""></div>
        <div>
          <div><span>[上海]</span> SHAWN MENDES 上海演唱会</div>
          <div><span>2019.09.28 20:00</span>上海梅赛德斯-奔驰文化中心<span></span></div>
          <div>评分<span>5.9</span></div>
          <div><span>499</span>元起</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "../../../node_modules/swiper/css/swiper.min.css";
import "../../styles/home.css";
import item from "./components/home-item";
import scrollitem from "./components/home-scroll-item";
export default {
  components: {
    item,
    scrollitem
  },
  data() {
    return {
      entries: [
        {
          src: "http://assets.piaoniu.com/home/icons/category-live-large.png",
          name: "演唱会"
        },
        {
          src: "http://assets.piaoniu.com/home/icons/category-drama-large.png",
          name: "话剧歌剧"
        },
        {
          src:
            "http://assets.piaoniu.com/home/icons/category-exibition-large.png",
          name: "休闲展览"
        },
        {
          src: "http://assets.piaoniu.com/home/icons/category-sports-large.png",
          name: "体育赛事"
        },
        {
          src:
            "http://assets.piaoniu.com/home/icons/category-concert-large.png",
          name: "音乐会"
        },
        {
          src:
            "http://assets.piaoniu.com/home/icons/category-child-small-v2.png",
          name: "儿童亲子"
        },
        {
          src:
            "http://assets.piaoniu.com/home/icons/category-xiqu-small-v2.png",
          name: "戏曲综艺"
        },
        {
          src: "http://assets.piaoniu.com/home/icons/category-dance-small.png",
          name: "舞蹈芭蕾"
        },
        {
          src: "http://assets.piaoniu.com/home/icons/category-travel-small.png",
          name: "旅游玩乐"
        },
        {
          src:
            "http://assets.piaoniu.com/home/icons/category-play-small-v2.png",
          name: "更多精彩"
        }
      ]
    };
  },
  mounted() {
    var swiper = new Swiper(".swiper-container", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }
};
</script>

<style>
</style>