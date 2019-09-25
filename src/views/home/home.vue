<template>
  <div id="home">
    <div v-if="routex==''">
      <!-- home头部 -->
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
      <!-- home轮播图 -->
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
      <!-- home分类列表 -->
      <div class="home-entries">
        <div class="home-entries-item" v-for="(item,index) in entries" :key="index">
          <img :src="item.src" alt />
          <div>{{item.name}}</div>
        </div>
      </div>
      <!-- home活动 -->
      <div class="home-operating">
        <div class="home-operating-item">
          <div>
            <img src="https://assets.piaoniu.com/home/op1-title-v2@3x.png" alt />
            <div>0元看周杰伦</div>
          </div>
          <div>
            <img
              src="https://img.piaoniu.com/misc/3638eb89605a99ba3e11d1dd4e5d0b37ec286cea.png"
              alt
            />
          </div>
        </div>
        <div class="home-operating-item">
          <div>
            <img src="https://assets.piaoniu.com/home/op2-title@3x.png" alt />
            <div>显示限量抢</div>
          </div>
          <div>
            <img
              src="https://img.piaoniu.com/misc/1cca4af4f80feda66133b40c8ce0c196dbb1f9f2.png"
              alt
            />
          </div>
        </div>
      </div>
      <!-- home服务 -->
      <div class="home-service" @click="skip('/home/service')">
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
      <!-- home近期热门 -->
      <item>
        <div slot="title">近期热门</div>
        <scrollitem v-for="(item,index) in Details.hot" :key="index">
          <img :src="item.showPic" alt slot="img" />
          <div slot="name">{{item.showName}}</div>
          <span slot="price">￥{{item.fares}}</span>
          <div slot="like">2000</div>
        </scrollitem>
      </item>
      <!-- home折扣专区 -->
      <item>
        <div slot="title">折扣专区</div>
        <scrollitem v-for="(item,index) in Details.discount" :key="index">
          <img :src="item.showPic" alt slot="img" />
          <div slot="name">{{item.showName}}</div>
          <span slot="price">￥{{item.fares}}</span>
          <div slot="like">{{item.discount*10}}折</div>
        </scrollitem>
      </item>
      <!-- home发现 -->
      <div class="home-discover">更多精彩内容待你发现</div>
      <!-- home猜你喜欢 -->
      <div class="home-guess">
        <div class="home-guess-title">猜你喜欢</div>
        <div class="home-guess-item">
          <div class="home-guess-item-di1">
            <img
              src="https://img.piaoniu.com/poster/69bf68da4888a9774bf9507c9ac4731b94852ca2.jpg"
              alt
            />
            <div class="home-guess-item-di3">
              <div>8.3</div>
              <div>折</div>
            </div>
          </div>
          <div class="home-guess-item-di2">
            <div>
              <span>[上海]</span> SHAWN MENDES 上海演唱会
            </div>
            <div>
              <span>2019.09.28 20:00</span>|
              <span>上海梅赛德斯-奔驰文化中心</span>
            </div>
            <div>
              评分
              <span>5.9</span>
            </div>
            <div>
              <span>499</span>元起
            </div>
            <div>“格莱美提名获得者、多张白金唱片认证的唱作男歌手”</div>
          </div>
        </div>
      </div>
    </div>
    <router-view v-else></router-view>
  </div>
</template>

<script>
import Swiper from "swiper";
import "../../../node_modules/swiper/css/swiper.min.css";
import "../../styles/home.css";
// 列表组件
import item from "./components/home-item";
import scrollitem from "./components/home-scroll-item";
import ajax from "../../api/api-home";
import api from "../../api/index";
export default {
  name: "Home",
  // 组件注册
  components: {
    item,
    scrollitem
  },
  data() {
    return {
      // 分类列表数据
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
      ],
      Details: [],
      routex:''
    };
  },
  created() {
    ajax.Details({ cityId: "1" }).then(res => {
      console.log(res);
      this.Details = res;
    });
  },
  mounted() {
    // 轮播图配置
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
  },
  methods: {
    skip(res) {
      this.routex=res;
      this.$router.push(res);
      console.log(this.routex)
    }
  }
};
</script>

<style>
</style>