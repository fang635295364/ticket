<template>
  <div id="xxk">
    <mt-navbar v-model="selected" style="overflow:auto;">
      <mt-tab-item id="1">全部分类</mt-tab-item>
      <mt-tab-item id="2">演唱会</mt-tab-item>
      <mt-tab-item id="3">话剧歌剧</mt-tab-item>
      <mt-tab-item id="4">休闲展览</mt-tab-item>
      <mt-tab-item id="5">体育赛事</mt-tab-item>
      <mt-tab-item id="6">旅游玩乐</mt-tab-item>
      <mt-tab-item id="7">音乐会</mt-tab-item>
      <mt-tab-item id="8">儿童亲子</mt-tab-item>
      <mt-tab-item id="9">舞蹈芭蕾</mt-tab-item>
      <mt-tab-item id="10">戏曲综艺</mt-tab-item>
    </mt-navbar>

    <div class="listing-filter">
      <div class="listing-filter__item-wrap">
        <!---->
        <div class="listing-filter__item listing-filter__item--pop" @click="flag=!flag">{{hou}}</div>
        <!---->
        <div class="listing-filter__item listing-filter__item--pop" @click="fllag=!fllag">全部时间</div>
        <div class="listing-filter__pop" style="display:none;"></div>
        <a href="###" class="listing-filter__item">在线选座</a>
        <!---->
      </div>
      <!---->
      <div class="listing-filter__pop" style="display:block;" v-if="flag">
        <div class="row-list">
          <a
            href="###"
            :class="flllag?'row-list__item':'row-list__item row-list__item--active'"
            @click="hh(0)"
            ref="wgb1"
          >综合排序</a>
          <a
            href="###"
            :class="fllllag?'row-list__item':'row-list__item row-list__item--active'"
            @click="hh(1)"
            ref="wgb2"
          >最新优先</a>
          <a
            href="###"
            :class="flllllag?'row-list__item':'row-list__item row-list__item--active'"
            @click="hh(2)"
            ref="wgb3"
          >低价优先</a>
          <a
            href="###"
            :class="fllllllag?'row-list__item':'row-list__item row-list__item--active'"
            @click="hh(3)"
            ref="wgb4"
          >好评优先</a>
        </div>
      </div>
      <!---->
      <div class="listing-filter__pop" style="display:block;" v-if="fllag">
        <div class="list-calendar">
          <div class="list-calendar__month">
            <div class="list-calendar__sub-month" style="display: none;"></div>
            <div class="list-calendar__month-text">9月演出</div>
            <div class="list-calendar__add-month"></div>
          </div>
          <div class="list-calendar__time-period">
            <div class="list-calendar__time-btn list-calendar__time-btn--select">全部时间</div>
            <div class="list-calendar__time-btn">本周末</div>
            <div class="list-calendar__time-btn">一周内</div>
            <div class="list-calendar__time-btn">一月内</div>
          </div>
          <div class="list-calendar__week">
            <div class="list-calendar__weekday">日</div>
            <div class="list-calendar__weekday">一</div>
            <div class="list-calendar__weekday">二</div>
            <div class="list-calendar__weekday">三</div>
            <div class="list-calendar__weekday">四</div>
            <div class="list-calendar__weekday">五</div>
            <div class="list-calendar__weekday">六</div>
          </div>
          <div class="list-calendar__days">
            <div class="list-calendar__day-wrap">
              <div class="list-calendar__day list-calendar__day--before-today">1</div>
            </div>
            <div class="list-calendar__day-wrap">
              <div class="list-calendar__day list-calendar__day--before-today">2</div>
            </div>
            <div class="list-calendar__day-wrap">
              <div class="list-calendar__day list-calendar__day--before-today">3</div>
            </div>
            <div class="list-calendar__day-wrap">
              <div class="list-calendar__day list-calendar__day--before-today">4</div>
            </div>
            <div class="list-calendar__day-wrap">
              <div class="list-calendar__day list-calendar__day--before-today">5</div>
            </div>
            <div class="list-calendar__day-wrap">
              <div class="list-calendar__day list-calendar__day--before-today">6</div>
            </div>
            <div class="list-calendar__day-wrap">
              <div class="list-calendar__day list-calendar__day--before-today">7</div>
            </div>
            <div class="list-calendar__day-wrap">
              <div class="list-calendar__day list-calendar__day--before-today">8</div>
            </div>
            <div class="list-calendar__day-wrap">
              <div class="list-calendar__day list-calendar__day--before-today">9</div>
            </div>
            <div class="list-calendar__day-wrap">
              <div class="list-calendar__day list-calendar__day--before-today">10</div>
            </div>
            <div class="list-calendar__day-wrap">
              <div class="list-calendar__day list-calendar__day--before-today">11</div>
            </div>
            <div class="list-calendar__day-wrap">
              <div class="list-calendar__day list-calendar__day--before-today">12</div>
            </div>
            <div class="list-calendar__day-wrap">
              <div class="list-calendar__day list-calendar__day--before-today">13</div>
            </div>
            <div class="list-calendar__day-wrap">
              <div class="list-calendar__day list-calendar__day--before-today">14</div>
            </div>
            <div class="list-calendar__day-wrap">
              <div class="list-calendar__day list-calendar__day--before-today">15</div>
            </div>
            <div class="list-calendar__day-wrap">
              <div class="list-calendar__day list-calendar__day--before-today">16</div>
            </div>
            <div class="list-calendar__day-wrap">
              <div class="list-calendar__day list-calendar__day--before-today">17</div>
            </div>
            <div class="list-calendar__day-wrap">
              <div class="list-calendar__day list-calendar__day--before-today">18</div>
            </div>
            <div class="list-calendar__day-wrap">
              <div class="list-calendar__day list-calendar__day--before-today">19</div>
            </div>
            <div class="list-calendar__day-wrap">
              <div class="list-calendar__day list-calendar__day--before-today">20</div>
            </div>
            <div class="list-calendar__day-wrap">
              <div class="list-calendar__day list-calendar__day--before-today">21</div>
            </div>
            <div class="list-calendar__day-wrap">
              <div class="list-calendar__day list-calendar__day--before-today">22</div>
            </div>
            <div class="list-calendar__day-wrap">
              <div class="list-calendar__day list-calendar__day--before-today">23</div>
            </div>
            <div class="list-calendar__day-wrap">
              <div class="list-calendar__day list-calendar__day--today">24</div>
            </div>
            <div class="list-calendar__day-wrap">
              <div class="list-calendar__day">25</div>
            </div>
            <div class="list-calendar__day-wrap">
              <div class="list-calendar__day">26</div>
            </div>
            <div class="list-calendar__day-wrap">
              <div class="list-calendar__day">27</div>
            </div>
            <div class="list-calendar__day-wrap">
              <div class="list-calendar__day">28</div>
            </div>
            <div class="list-calendar__day-wrap">
              <div class="list-calendar__day">29</div>
            </div>
            <div class="list-calendar__day-wrap">
              <div class="list-calendar__day">30</div>
            </div>
            <div class="list-calendar__day-wrap">
              <div class="list-calendar__day"></div>
            </div>
            <div class="list-calendar__day-wrap">
              <div class="list-calendar__day"></div>
            </div>
            <div class="list-calendar__day-wrap">
              <div class="list-calendar__day"></div>
            </div>
            <div class="list-calendar__day-wrap">
              <div class="list-calendar__day"></div>
            </div>
            <div class="list-calendar__day-wrap">
              <div class="list-calendar__day"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div class="activity-list-container">
          <div class="ui-list">
            <ul class="activities">
              <li class="activity">
                <!---->
                <div class="main-top">
                  <a class="poster-wrap">
                    <!---->
                    <!---->
                    <div class="video-play" style="background-size: 26px 26px; display: none;">
                      <video class="video"></video>
                    </div>
                    <div
                      class="poster"
                      data-src="https://img.piaoniu.com/poster/dbc4e135930add1538a3a9ebb47483e1f40125ac.jpg?imageView2/2/w/164/h/220/format/jpg/q/60"
                      lazy="loaded"
                      style="background-image: url(&quot;https://img.piaoniu.com/poster/dbc4e135930add1538a3a9ebb47483e1f40125ac.jpg?imageView2/2/w/164/h/220/format/jpg/q/60&quot;);"
                    ></div>
                  </a>
                  <div class="info">
                    <div class="title-line">
                      <a class="title">
                        <span class="city">[上海]</span>五月天上海站
                      </a>
                      <div class="activityTag">
                        <!---->
                        <!---->
                      </div>
                    </div>
                    <div class="time-address">
                      <span class="time">2019.10.25 - 11.03</span>
                      <span class="split">|</span>
                      <span class="address">虹口足球场</span>
                    </div>
                    <div class="rank">
                      评分&nbsp;
                      <span>9.7</span>
                    </div>
                    <!---->
                    <div class="price-wrap">
                      <div>
                        <span class="price">638</span>
                        <span class="qi">元起</span>
                        <!---->
                        <!---->
                      </div>
                      <div class="status-text"></div>
                    </div>
                    <div class="promotion-info">
                      <ul></ul>
                    </div>
                    <!---->
                  </div>
                </div>
              </li>
              <li class="activity">
                <!---->
                <div class="main-top">
                  <a class="poster-wrap">
                    <div class="discount-tag">
                      <span class="integer">8</span>
                      <span class="decimal">.5</span>
                      <span class="text">折</span>
                    </div>
                    <!---->
                    <div class="video-play" style="background-size: 26px 26px; display: none;">
                      <video class="video"></video>
                    </div>
                    <div
                      class="poster"
                      data-src="https://img.piaoniu.com/poster/69bf68da4888a9774bf9507c9ac4731b94852ca2.jpg?imageView2/2/w/164/h/220/format/jpg/q/60"
                      lazy="loaded"
                      style="background-image: url(&quot;https://img.piaoniu.com/poster/69bf68da4888a9774bf9507c9ac4731b94852ca2.jpg?imageView2/2/w/164/h/220/format/jpg/q/60&quot;);"
                    ></div>
                  </a>
                  <div class="info">
                    <div class="title-line">
                      <a class="title">
                        <span class="city">[上海]</span>SHAWN MENDES 上海演唱会
                      </a>
                      <div class="activityTag">
                        <div class="choose">座</div>
                        <!---->
                      </div>
                    </div>
                    <div class="time-address">
                      <span class="time">2019.09.28 20:00</span>
                      <span class="split">|</span>
                      <span class="address">上海梅赛德斯-奔驰文化中心</span>
                    </div>
                    <div class="rank">
                      评分&nbsp;
                      <span>6.4</span>
                    </div>
                    <!---->
                    <div class="price-wrap">
                      <div>
                        <span class="price">487</span>
                        <span class="qi">元起</span>
                        <!---->
                        <!---->
                      </div>
                      <div class="status-text"></div>
                    </div>
                    <div class="promotion-info">
                      <ul></ul>
                    </div>
                    <div class="light-spot">“格莱美提名获得者、多张白金唱片认证的唱作男歌手”</div>
                  </div>
                </div>
              </li>
              <li class="activity">
                <!---->
                <div class="main-top">
                  <a class="poster-wrap">
                    <div class="discount-tag">
                      <span class="integer">5</span>
                      <span class="decimal">.6</span>
                      <span class="text">折</span>
                    </div>
                    <!---->
                    <div class="video-play" style="background-size: 26px 26px; display: none;">
                      <video class="video"></video>
                    </div>
                    <div
                      class="poster"
                      data-src="https://img.piaoniu.com/poster/b4db46de1a55d525ed3466dd42f1926e86860df7.jpg?imageView2/2/w/164/h/220/format/jpg/q/60"
                      lazy="loaded"
                      style="background-image: url(&quot;https://img.piaoniu.com/poster/b4db46de1a55d525ed3466dd42f1926e86860df7.jpg?imageView2/2/w/164/h/220/format/jpg/q/60&quot;);"
                    ></div>
                  </a>
                  <div class="info">
                    <div class="title-line">
                      <a class="title">
                        <span class="city">[上海]</span>中超联赛第23轮上海申花VS深圳佳兆业
                      </a>
                      <div class="activityTag">
                        <div class="choose">座</div>
                        <!---->
                      </div>
                    </div>
                    <div class="time-address">
                      <span class="time">2019.09.26 19:35</span>
                      <span class="split">|</span>
                      <span class="address">虹口足球场</span>
                    </div>
                    <div class="rank">
                      评分&nbsp;
                      <span>10.0</span>
                    </div>
                    <!---->
                    <div class="price-wrap">
                      <div>
                        <span class="price">71</span>
                        <span class="qi">元起</span>
                        <!---->
                        <!---->
                      </div>
                      <div class="status-text"></div>
                    </div>
                    <div class="promotion-info">
                      <ul></ul>
                    </div>
                    <!---->
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div class="activity-list-container">
          <div class="ui-list">
            <ul class="activities">
              <div class="bimg">
                <img
                  src="https://img.piaoniu.com/searchBanner/8bd581a2932a4ad0f8aeb9fb35523b3b116b71e9.png"
                  style="width:100%;box-sizing:border-box;"
                />
              </div>
              <li class="activity">
                <!---->
                <div class="main-top">
                  <a class="poster-wrap">
                    <!---->
                    <!---->
                    <div class="video-play" style="background-size:26px 26px;display:none;">
                      <video class="video"></video>
                    </div>
                    <div
                      class="poster"
                      data-src="https://img.piaoniu.com/poster/dbc4e135930add1538a3a9ebb47483e1f40125ac.jpg?imageView2/2/w/164/h/220/format/jpg/q/60"
                      lazy="loaded"
                      style="background-image: url(&quot;https://img.piaoniu.com/poster/dbc4e135930add1538a3a9ebb47483e1f40125ac.jpg?imageView2/2/w/164/h/220/format/jpg/q/60&quot;);"
                    ></div>
                  </a>
                  <div class="info" style="border-bottom-width: 1px;">
                    <div class="title-line">
                      <a class="title">
                        <span class="city" style>[上海]</span>五月天上海站
                      </a>
                      <div class="activityTag">
                        <!---->
                        <!---->
                      </div>
                    </div>
                    <div class="time-address">
                      <span class="time">2019.10.25 - 11.03</span>
                      <span class="split">|</span>
                      <span class="address">虹口足球场</span>
                    </div>
                    <div class="rank">
                      评分&nbsp;
                      <span>9.7</span>
                    </div>
                    <!---->
                    <div class="price-wrap">
                      <div>
                        <span class="price">638</span>
                        <span class="qi">元起</span>
                        <!---->
                        <!---->
                      </div>
                      <div class="status-text"></div>
                    </div>
                    <div class="promotion-info">
                      <ul></ul>
                    </div>
                    <!---->
                  </div>
                </div>
              </li>
              <li class="activity">
                <!---->
                <div class="main-top">
                  <a class="poster-wrap">
                    <div class="discount-tag">
                      <span class="integer">8</span>
                      <span class="decimal">.5</span>
                      <span class="text">折</span>
                    </div>
                    <!---->
                    <div class="video-play" style="background-size:26px 26px;display:none;">
                      <video class="video"></video>
                    </div>
                    <div
                      class="poster"
                      data-src="https://img.piaoniu.com/poster/69bf68da4888a9774bf9507c9ac4731b94852ca2.jpg?imageView2/2/w/164/h/220/format/jpg/q/60"
                      lazy="loaded"
                      style="background-image: url(&quot;https://img.piaoniu.com/poster/69bf68da4888a9774bf9507c9ac4731b94852ca2.jpg?imageView2/2/w/164/h/220/format/jpg/q/60&quot;);"
                    ></div>
                  </a>
                  <div class="info">
                    <div class="title-line">
                      <a class="title">
                        <span class="city" style>[上海]</span>SHAWN MENDES 上海演唱会
                      </a>
                      <div class="activityTag">
                        <div class="choose">座</div>
                        <!---->
                      </div>
                    </div>
                    <div class="time-address">
                      <span class="time">2019.09.28 20:00</span>
                      <span class="split">|</span>
                      <span class="address">上海梅赛德斯-奔驰文化中心</span>
                    </div>
                    <div class="rank">
                      评分&nbsp;
                      <span>6.4</span>
                    </div>
                    <!---->
                    <div class="price-wrap">
                      <div>
                        <span class="price">487</span>
                        <span class="qi">元起</span>
                        <!---->
                        <!---->
                      </div>
                      <div class="status-text"></div>
                    </div>
                    <div class="promotion-info">
                      <ul></ul>
                    </div>
                    <div class="light-spot">“格莱美提名获得者、多张白金唱片认证的唱作男歌手”</div>
                  </div>
                </div>
              </li>
              <li class="activity">
                <!---->
                <div class="main-top">
                  <a class="poster-wrap">
                    <!---->
                    <!---->
                    <div class="video-play" style="background-size:26px 26px;display:none;">
                      <video class="video"></video>
                    </div>
                    <div
                      class="poster"
                      data-src="https://img.piaoniu.com/poster/d494ffbb759fd7ac04d3e642c7223ba9b52eb6c0.jpg?imageView2/2/w/164/h/220/format/jpg/q/60"
                      lazy="loaded"
                      style="background-image: url(&quot;https://img.piaoniu.com/poster/d494ffbb759fd7ac04d3e642c7223ba9b52eb6c0.jpg?imageView2/2/w/164/h/220/format/jpg/q/60&quot;);"
                    ></div>
                  </a>
                  <div class="info">
                    <div class="title-line">
                      <a class="title">
                        <span class="city" style>[上海]</span>[快速发货]五月天演唱会上海站
                      </a>
                      <div class="activityTag">
                        <!---->
                        <!---->
                      </div>
                    </div>
                    <div class="time-address">
                      <span class="time">2019.10.25 - 11.03</span>
                      <span class="split">|</span>
                      <span class="address">虹口足球场</span>
                    </div>
                    <div class="rank">
                      评分&nbsp;
                      <span>5.5</span>
                    </div>
                    <!---->
                    <div class="price-wrap">
                      <div>
                        <span class="price">702</span>
                        <span class="qi">元起</span>
                        <!---->
                        <!---->
                      </div>
                      <div class="status-text"></div>
                    </div>
                    <div class="promotion-info">
                      <ul></ul>
                    </div>
                    <!---->
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <div class="activity-list-container">
          <div class="ui-list">
            <ul class="activities">
              <li class="activity">
                <!---->
                <div class="main-top">
                  <a class="poster-wrap">
                    <div class="discount-tag">
                      <span class="integer">6</span>
                      <span class="decimal">.7</span>
                      <span class="text">折</span>
                    </div>
                    <!---->
                    <div class="video-play" style="background-size: 26px 26px; display: none;">
                      <video class="video"></video>
                    </div>
                    <div
                      class="poster"
                      data-src="https://img.piaoniu.com/poster/a544f88e1c683bc64c510ef3540d0904a58e211f.jpg?imageView2/2/w/164/h/220/format/jpg/q/60"
                      lazy="loaded"
                      style="background-image: url(&quot;https://img.piaoniu.com/poster/a544f88e1c683bc64c510ef3540d0904a58e211f.jpg?imageView2/2/w/164/h/220/format/jpg/q/60&quot;);"
                    ></div>
                  </a>
                  <div class="info">
                    <div class="title-line">
                      <a class="title">
                        <span class="city">[上海]</span>金世佳阿云嘎《威尼斯商人》
                      </a>
                      <div class="activityTag">
                        <div class="choose">座</div>
                        <!---->
                      </div>
                    </div>
                    <div class="time-address">
                      <span class="time">2019.10.04 - 10.06</span>
                      <span class="split">|</span>
                      <span class="address">中国大戏院</span>
                    </div>
                    <div class="rank">
                      评分&nbsp;
                      <span>9.8</span>
                    </div>
                    <!---->
                    <div class="price-wrap">
                      <div>
                        <span class="price">304</span>
                        <span class="qi">元起</span>
                        <!---->
                        <!---->
                      </div>
                      <div class="status-text"></div>
                    </div>
                    <div class="promotion-info">
                      <ul></ul>
                    </div>
                    <!---->
                  </div>
                </div>
              </li>
              <li class="activity">
                <!---->
                <div class="main-top">
                  <a class="poster-wrap">
                    <div class="discount-tag">
                      <span class="integer">7</span>
                      <span class="decimal">.3</span>
                      <span class="text">折</span>
                    </div>
                    <!---->
                    <div class="video-play" style="background-size: 26px 26px; display: none;">
                      <video class="video"></video>
                    </div>
                    <div
                      class="poster"
                      data-src="https://img.piaoniu.com/poster/be85f3fe4aba692684984d0fd1ca1075b7e1ba82.jpg?imageView2/2/w/164/h/220/format/jpg/q/60"
                      lazy="loaded"
                      style="background-image: url(&quot;https://img.piaoniu.com/poster/be85f3fe4aba692684984d0fd1ca1075b7e1ba82.jpg?imageView2/2/w/164/h/220/format/jpg/q/60&quot;);"
                    ></div>
                  </a>
                  <div class="info">
                    <div class="title-line">
                      <a class="title">
                        <span class="city">[上海]</span>【上海站】暗恋桃花源（专属版）
                      </a>
                      <div class="activityTag">
                        <div class="choose">座</div>
                        <!---->
                      </div>
                    </div>
                    <div class="time-address">
                      <span class="time">2019.09.19 - 10.14</span>
                      <span class="split">|</span>
                      <span class="address">上剧场</span>
                    </div>
                    <div class="rank">
                      评分&nbsp;
                      <span>7.9</span>
                    </div>
                    <!---->
                    <div class="price-wrap">
                      <div>
                        <span class="price">112</span>
                        <span class="qi">元起</span>
                        <!---->
                        <!---->
                      </div>
                      <div class="status-text"></div>
                    </div>
                    <div class="promotion-info">
                      <ul>
                        <a
                          href="https://www.piaoniu.com/activity/108052&amp;channel=zn_tmhd_bj_yc_108052"
                        >
                          <li>
                            <span class="inner-icon"></span>
                            <span class="desc">点击查看：2019年最不能错过的音乐会</span>
                          </li>
                        </a>
                      </ul>
                    </div>
                    <div class="light-spot">“赖声川口碑佳作！”</div>
                  </div>
                </div>
              </li>
              <li class="activity">
                <!---->
                <div class="main-top">
                  <a class="poster-wrap">
                    <!---->
                    <!---->
                    <div class="video-play" style="background-size: 26px 26px; display: none;">
                      <video class="video"></video>
                    </div>
                    <div
                      class="poster"
                      data-src="https://img.piaoniu.com/poster/b6b02b51a6c53ba44ff4e10bed014f7b74b2ccff.jpg?imageView2/2/w/164/h/220/format/jpg/q/60"
                      lazy="loaded"
                      style="background-image: url(&quot;https://img.piaoniu.com/poster/b6b02b51a6c53ba44ff4e10bed014f7b74b2ccff.jpg?imageView2/2/w/164/h/220/format/jpg/q/60&quot;);"
                    ></div>
                  </a>
                  <div class="info">
                    <div class="title-line">
                      <a class="title">
                        <span class="city">[上海]</span>李宗盛音乐剧《当爱已成往事》1元优惠通道
                      </a>
                      <div class="activityTag">
                        <!---->
                        <div class="eCard">电</div>
                      </div>
                    </div>
                    <div class="time-address">
                      <span class="time">2019.09.19 - 10.31</span>
                      <span class="split">|</span>
                      <span class="address">上汽上海文化广场</span>
                    </div>
                    <div class="rank">
                      评分&nbsp;
                      <span>9.1</span>
                    </div>
                    <!---->
                    <div class="price-wrap">
                      <div>
                        <span class="price">1</span>
                        <span class="qi">元起</span>
                        <!---->
                        <!---->
                      </div>
                      <div class="status-text"></div>
                    </div>
                    <div class="promotion-info">
                      <ul></ul>
                    </div>
                    <!---->
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="4">休闲zhanlan</mt-tab-container-item>
      <mt-tab-container-item id="5">体育赛事</mt-tab-container-item>
      <mt-tab-container-item id="6">旅游玩乐</mt-tab-container-item>
      <mt-tab-container-item id="7">音乐会</mt-tab-container-item>
      <mt-tab-container-item id="8">儿童亲子</mt-tab-container-item>
      <mt-tab-container-item id="9">舞蹈芭蕾</mt-tab-container-item>
      <mt-tab-container-item id="10">戏曲综艺</mt-tab-container-item>
    </mt-tab-container>
    <div style="height:52px;"></div>
    <div class="overlay" style="opacity: 1; display: block;" v-if="flag"></div>
    <div class="overlay" style="opacity: 1; display: block;" v-if="fllag"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "1",
      flag: false,
      fllag: false,
      hou: "综合排序",
      flllag: true,
      fllllag: true,
      flllllag: true,
      fllllllag: true
    };
  },
  methods: {
    hh: function(e) {
      if (e == 0) {
        let hou = this.$refs.wgb1.innerText;
        this.hou = hou;
        this.flllag = !this.flllag;
        this.fllllag = true;
        this.flllllag = true;
        this.fllllllag = true;
      }
      if (e == 1) {
        let hou = this.$refs.wgb2.innerText;
        this.hou = hou;
        this.fllllag = !this.fllllag;
        this.flllag = true;
        this.flllllag = true;
        this.fllllllag = true;
      }
      if (e == 2) {
        let hou = this.$refs.wgb3.innerText;
        this.hou = hou;
        this.flllllag = !this.flllllag;
        this.flllag = true;
        this.fllllag = true;
        this.fllllllag = true;
      }
      if (e == 3) {
        let hou = this.$refs.wgb4.innerText;
        this.hou = hou;
        this.fllllllag = !this.fllllllag;
        this.flllag = true;
        this.fllllag = true;
        this.flllllag = true;
      }
    }
  },
  watch: {
    hou: {
      handler: function(val, oldval) {
        // function接受两个参数
        console.log("修改后", val, "修改前", oldval);
      }
    }
  }
};
</script>

<style scoped>
.red {
  color: red;
  font-size: 14px;
}
.blue {
  color: blue;
  font-size: 20px;
}
#xxk {
  height: 100%;
  width: 375px;
}
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 0.08rem solid #ff2661;
  color: #ff2661;
  margin-bottom: 0.08rem;
}
.mint-tab-item {
  font-size: 14px;
  display: block;
  text-decoration: none;
  color: #333;
  margin: 0 15px;
  padding: 10px 0;
}
.mint-navbar {
  background-color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  text-align: center;
  z-index: 11;
  box-shadow: 0 0.5px 0 0 #e6e6e6;
  background-color: #fcfcfc;
  position: relative;
}

/*排序时间选座开始*/
.listing-filter {
  position: relative;
  width: 100%;
  z-index: 10;
  background-color: #fff;
}
.listing-filter__item-wrap {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.15);
  z-index: 11;
}
.listing-filter__item {
  -ms-flex: 1;
  flex: 1;
  display: block;
  font-size: 12px;
  color: #666;
  text-align: center;
  padding: 10px 0;
  border-bottom: 1px solid #e6e6e6;
}
.listing-filter__item.active {
  color: #ea3667;
}
.listing-filter__item--pop:after {
  content: "";
  display: inline-block;
  position: relative;
  top: 0;
  left: 3px;
  width: 0;
  height: 0;
  border: 3px solid transparent;
  border-top-color: #666;
}
.listing-filter__item--collapse {
  color: #ea3667;
}
.listing-filter__item--collapse:after {
  top: -3px;
  border-color: transparent;
  border-bottom-color: #ea3667;
}
.listing-filter__item--active {
  color: #ea3667;
}
.listing-filter__pop {
  position: absolute;
  top: 34px;
  left: 0;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  z-index: 10;
}
/*排序时间选座结束*/

/*综合排序开始*/
.row-list {
  padding-left: 15px;
}
.row-list__item {
  position: relative;
  font-size: 12px;
  color: #333;
  padding-left: 9px;
  display: block;
  border-bottom: 1px solid #f5f5f5;
  padding: 14px 30px 14px 9px;
}
.row-list__item:last-child {
  border-bottom: 0;
}
.row-list__item--active {
  color: #ff2661;
}
.row-list__item--active:after {
  content: "";
  position: absolute;
  top: 18px;
  right: 18px;
  width: 12px;
  height: 9px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAYAAABB7B6eAAAAAXNSR0IArs4c6QAAAlRJREFUOBG1lE1oE0EUx9+b2WpbbLHJVtKjeNGbp6Zp/IhIUaNCD1VBMQc9tFkVqhc9eNiLNy9SUqMoKloKRQ8qmuZSBDVNBG968qKCWt21qbZmlWRnfCNtWGKTUIwDy87se//fe2/mzSL8h5GPDK8tFZz7APidN5ovQ6db5os/J4m7FRHnWCMDyIip2a4zAVKGCf5B4/xgwwJIKdFyPl+XIPcRPM80vqsjk3inNaoCOzh0kVgxegqM873+54nXit2QCgh+TgKcQYAiMDbgzySmFVwN+vZv40v34HEiXCOQBIZHO7PJMS8RrZ4hE4Rs01u7zuITs+Q11pvb3fF+ieKulMAp1eF1uSuXKjWMDiemyrOcmXHVBZUO1dZWKL5doBhXcAZ4YTm40jIO7DAizFNrDdjOpzvywETdu5HvNTZT1Q9oU5pJe1V/kTxfLRHmz13OMsZ3A+ICZXPIfj91u1aQud5TG4quO0mVt5Pmnr6nK14Nrr6XD3k2aGwpgUhRJWsQcEyPBmJomsIrXogYgYLjZijz9dTrU7qvKYqpkV9en8p5uU19udFnQP1LDj/oshyxUzM3pWmW7er/UnBEehH+ErT2/npwFaxcwVJkdXjSFY9p3UrmW53RwDFIf1ttCydN26L+L2+aVzWF256OWEuaWu+/AihnK2jskCAe0Xa1UAo3UIJOnbaf4B81hHBHNvm2FtRrWzaAcrBDJ3YK4T78E4TWBM9zDtt8meQrL6DevGoAJfwaHOxzAVQ7Cs55n396NFMPuGK73WNsskMnN65YuCj4DSGs3WDtt8yYAAAAAElFTkSuQmCC);
  background-size: 100%;
  background-position: 100%;
  background-repeat: no-repeat;
}
/*综合排序结束*/

/*月份开始*/
.list-calendar {
  padding: 16px 0 6px;
}
.list-calendar__month {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
}
.list-calendar__add-month {
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-left-color: #ababab;
  margin-top: 4px;
}
.list-calendar__sub-month {
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-right-color: #ababab;
  margin-top: 4px;
}
.list-calendar__month-text {
  font-size: 17px;
  font-weight: 700;
  color: #525252;
  margin: 0 17px;
}
.list-calendar__time-period {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0 15px;
  margin-top: 16px;
  margin-bottom: 17px;
}
.list-calendar__time-btn {
  line-height: 32px;
  color: #333;
  border-radius: 16px;
  padding: 0 14px;
  background-color: #f5f5f5;
}
.list-calendar__time-btn--select {
  color: #ff2661;
  background-color: #fff0f4;
}
.list-calendar__week {
  display: -ms-flexbox;
  display: flex;
  font-size: 11px;
  color: #666;
}
.list-calendar__weekday {
  width: 14.28%;
  margin: 6px 0;
  text-align: center;
}
.list-calendar__days {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.list-calendar__day-wrap {
  width: 14.28%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 6px 0;
}
.list-calendar__day-wrap--select {
  background-color: #fff0f4;
}
.list-calendar__day-wrap--first-choosed {
  border-radius: 20px 0 0 20px;
}
.list-calendar__day-wrap--last-choosed {
  border-radius: 0 20px 20px 0;
}
.list-calendar__day {
  position: relative;
  width: 28px;
  height: 28px;
  line-height: 28px;
  text-align: center;
}
.list-calendar__day--today {
  color: #ff2661;
}
.list-calendar__day--today:after {
  content: "\4ECA\5929";
  position: absolute;
  top: 14px;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 9px;
}
.list-calendar__day--before-today {
  color: #999;
}
.list-calendar__day-wrap--first-choosed.list-calendar__day-wrap--last-choosed.list-calendar__day-wrap--select {
  background-color: transparent;
}
.list-calendar__day-wrap--first-choosed.list-calendar__day-wrap--last-choosed.list-calendar__day-wrap--select
  .list-calendar__day {
  color: #ff2661;
  background-color: #fff0f4;
  border-radius: 14px;
}
/*月份结束*/

/*蒙层*/
a,
body,
h1,
h2,
h3,
input,
li,
p,
textarea,
ul {
  margin: 0;
  padding: 0;
  line-height: 1.2;
  color: #262626;
  font-size: 12px;
  font-family: PingFang SC, Lantinghei SC, Roboto, Helvetica Neue,
    Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei,
    sans;
}
a {
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
}
li {
  list-style-type: none;
}
input {
  -moz-appearance: none;
  appearance: none;
  -webkit-appearance: none;
  border-radius: 0;
  opacity: 1;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 5;
}
.ui-overlay {
  opacity: 0;
  display: none;
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.6);
  transition: opacity 0.2s linear;
  z-index: 5;
}
.mobile .citylist,
.ui-overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
.mobile .citylist {
  background: #fff;
  z-index: 99;
  font-size: 14px;
}
.mobile .citylist .current {
  padding: 10px;
  overflow: hidden;
}
.mobile .citylist .current .name {
  font-size: 14px;
  color: #999;
  float: left;
}
.mobile .citylist .current .hint {
  font-size: 12px;
  color: #999;
  float: right;
  margin-right: 10px;
}
.mobile .citylist .header {
  padding: 10px;
  color: #999;
  background-color: #f0f0f0;
}
.mobile .citylist li {
  font-size: 14px;
  padding: 10px 5px;
  margin-left: 10px;
  border-bottom: 1px solid #f8f8f8;
}
.mobile .citylist li.active {
  color: #ee562c;
}
.mobile .citylist .others {
  text-align: center;
  padding: 10px;
  color: #666;
}
::-webkit-input-placeholder {
  color: #999;
}
* {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
input,
textarea {
  -webkit-user-select: auto;
}
input ::-webkit-input-placeholder,
textarea ::-webkit-input-placeholder {
  color: #999;
}
input ::-ms-input-placeholder,
textarea ::-ms-input-placeholder {
  color: #999;
}
input ::placeholder,
textarea ::placeholder {
  color: #999;
}
.pn-loading {
  min-width: 80px;
  max-width: 80%;
  padding: 10px;
  line-height: 1.5;
  color: #fff;
  text-align: center;
  font-size: 18px;
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  margin-left: -50px;
  margin-top: -24px;
}
.ani-progress,
.pn-loading {
  position: fixed;
  top: 50%;
  z-index: 2000;
  left: 50%;
}
.ani-progress {
  width: 80px;
  height: 80px;
  margin-top: -40px;
  margin-left: -40px;
}
body.disable-scroll {
  overflow: hidden;
  height: 100%;
}
.no-app-link .bottombar.app-link,
[v-cloak] {
  display: none;
}
.app-topbar,
.bottombar {
  position: fixed;
  bottom: 0;
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 50px;
  z-index: 4;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
.app-topbar .logo,
.bottombar .logo {
  border-radius: 5px;
  width: 34px;
  height: 34px;
  margin-left: 15px;
  background-image: url(//static.piaoniu.com/nuxt-static/img/logo.8f74deb.png);
  background-size: 34px 34px;
}
.app-topbar .copywrite,
.bottombar .copywrite {
  color: #fff;
  font-size: 14px;
  margin-left: 15px;
  -ms-flex: 1;
  flex: 1;
}
.app-topbar .copywrite p,
.bottombar .copywrite p {
  color: #fff;
}
.app-topbar .copywrite .top,
.bottombar .copywrite .top {
  font-size: 11px;
  margin-bottom: 3px;
}
.app-topbar .copywrite .bottom,
.bottombar .copywrite .bottom {
  font-size: 14px;
}
.app-topbar .button,
.bottombar .button {
  background-color: #e82b5e;
  text-align: center;
  font-size: 14px;
  color: #fff;
  height: 50px;
  line-height: 50px;
  width: 109px;
}
.app-topbar {
  position: relative;
  top: 0;
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 50px;
  z-index: 4;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
.overlay {
  left: 0;
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.35);
  height: 100%;
}
.overlay,
.weixin-tip {
  position: fixed;
  top: 0;
  width: 100%;
}

/*列表开始*/
.no-result {
  display: block;
}
.ui-list {
  background-color: #fff;
  width: 100%;
}
.ui-list .bimg img {
  display: block;
  padding: 14px;
  padding-bottom: 0;
  background-color: #fff;
}

.activity {
  position: relative;
  margin-left: 15px;
  margin-right: 15px;
  background-color: #fff;
}
.activity .main-top {
  min-height: 125px;
  position: relative;
  display: block;
}
.activity .poster-wrap {
  position: absolute;
  left: 0;
  top: 15px;
}
.activity .poster-wrap .icon-play {
  background-image: url(//static.piaoniu.com/nuxt-static/img/icon-play.23407ce.png);
  width: 26px;
  height: 26px;
  background-size: 26px 26px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -13px;
  margin-top: -13px;
}
.activity .poster-wrap .poster {
  width: 75px;
  height: 100px;
}
.activity .info {
  padding-top: 15px;
  margin-left: 92px;
  border-bottom: 1px solid hsla(0, 0%, 90%, 0.5);
}
.activity .info .title-line {
  display: -ms-flexbox;
  display: flex;
}
.activity .info .title {
  font-size: 15px;
  color: #333;
  max-height: 44px;
  line-height: 22px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: Helvetica Neue, Microsoft Yahei, Hiragino Sans GB,
    Microsoft Sans Serif, WenQuanYi Micro Hei, sans;
  font-weight: 600;
}
.activity .info .no-rank,
.activity .info .rank {
  font-size: 10px;
  color: #999;
  margin-top: 4px;
  margin-bottom: 16px;
}
.activity .info .no-rank span,
.activity .info .rank span {
  font-size: 12px;
  font-weight: 700;
  color: #ffb02e;
}
.activity .info .stars {
  width: 100%;
}
.activity .info .time-address {
  font-size: 12px;
  color: #999;
  margin-top: 9px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.activity .info .time-address .split {
  margin: 0 4px;
}
.activity .info .time-line {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: baseline;
  align-items: baseline;
  color: #999;
  font-size: 12px;
}
.activity .info .time-line .time {
  -ms-flex: 1;
  flex: 1;
}
.activity .price-wrap {
  position: relative;
  margin-bottom: 10px;
}
.activity .price-wrap .qi,
.activity .price-wrap .unit {
  font-size: 10px;
  color: #999;
}
.activity .price-wrap .unit {
  position: relative;
  right: -2px;
  color: #ff2661;
}
.activity .price-wrap .price {
  position: relative;
  top: 1px;
  color: #ff2661;
  font-size: 18px;
  font-weight: 700;
  margin-right: 4px;
}
.activity .price-wrap .price.zhaohang,
.activity .price-wrap .unit.zhaohang {
  color: #f85255;
}
.activity .price-wrap.soldOut {
  font-size: 10px;
  color: #666;
}
.activity .price-wrap .origin-price {
  text-align: right;
  color: #999;
  font-size: 10px;
  text-decoration: line-through;
  margin-left: 8px;
}
.activity .price-wrap .pintuan-tag {
  display: inline-block;
  position: relative;
  line-height: 16px;
  font-size: 10px;
  color: #ea3667;
  background: linear-gradient(180deg, #ffedf6, #fff7fe);
  padding: 0 6px;
  margin-left: 11px;
}
.activity .price-wrap .pintuan-tag:before {
  content: "";
  position: absolute;
  left: -5px;
  top: 0;
  width: 0;
  height: 0;
  border-top: 5px solid #ffedf6;
  border-left: 5px solid transparent;
}
.activity .price-wrap .status-text {
  font-size: 10px;
  color: #999;
  width: 45px;
  line-height: 19px;
  text-align: center;
  background-color: #f0f0f0;
}
.activity .price-wrap .status-text.presale {
  color: #6b9d92;
  background-color: #e9fffa;
}
.activity .activityTag {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  max-width: 40px;
  margin-left: 4px;
  color: #fff;
}
.activity .status {
  margin-left: 92px;
  color: #499afe;
  border: 1px solid #499afe;
  border-radius: 2px;
  padding: 2px;
  display: inline-block;
  bottom: 12px;
  text-align: center;
  font-size: 10px;
  margin-right: 5px;
}
.activity .status.expire {
  color: #d8d8d8;
  border: 1px solid #d8d8d8;
}
.activity .status.pre {
  color: #fb8333;
  border: 1px solid #fb8333;
}
.activity .choose {
  display: inline-block;
  border-radius: 2px;
  padding: 1px;
  margin-right: 5px;
  bottom: 12px;
  text-align: center;
  font-size: 10px;
  width: 15px;
  height: 15px;
  background-color: #f66b9d;
  box-sizing: border-box;
}
.activity .choose.zhaohang {
  background-color: #f85255;
}
.activity .eCard {
  margin-right: 5px;
  border-radius: 2px;
  padding: 1px;
  width: 15px;
  height: 15px;
  background-color: #96a3ff;
  box-sizing: border-box;
}
.activity .eCard,
.activity .eCard2 {
  bottom: 12px;
  text-align: center;
  font-size: 10px;
  display: inline-block;
}
.activity .eCard2 {
  margin-left: 143px;
  color: #96a3ff;
  border: 1px solid #96a3ff;
  width: 42px;
  border-radius: 3px;
  padding: 2px;
  position: absolute;
}
.activity .main-bottom {
  margin-left: 92px;
  margin-top: 10px;
  margin-bottom: 14px;
}
.activity .light-spot {
  font-size: 12px;
  color: #999;
  padding: 14px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  border-top: 1px solid hsla(0, 0%, 90%, 0.5);
}
.activity .promotion-info {
  margin-bottom: 10px;
}
.activity .promotion-info li {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: 5px;
}
.activity .promotion-info li:last {
  margin-bottom: 0;
}
.activity .promotion-info .inner-icon {
  display: inline-block;
  width: 11px;
  height: 11px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAAxhJREFUOBGlVM1LVFEUP+cp5fd7kkW1McEiKMKgmUH7skVREkU6PZLELAyiWrQwrEUmBm1aFC2iNmUmRTOjQSZliZl96ChRf4Ab29XGGRW1HN/pdyfuNOiMs/DyHufdc37nd84959zHlGKJ73hamMdOs1BGCmjUnEdZrWz3T6UvBRZpNkKB7lYSqpGlgHG2WYq8xDY5sYhwOOB5oEiJeZJJnoA8Ob/wKZhzdIykGYf8nrsA1hPTdLohh3OrRga0UyI57nMdgX5p4pDfdQsZX2TiWTKMo7lVQwOo9QrUukVIahUxbG2mFDax7f+TKNCijMf9nhYRp4GJ5vB6zaqhXuUYJRVp1CQI0Aid2l7RunhpxG9w/KskzjVmjginnTDt4W5t15mGiq9Xhzc2nVR6rdOYeBnLGJleQqY3kaXDTLWWd6gzHvj/2wEET4oVJQ4F3OfEcW6DUISMessbfLbQT9VUHd8avfFU25ROfy+U6ehmHejuRQ1CF/Lt4KOFILVXjVI11cfXzSMaTgQnDvncMwBn4HAdlj3iTYhKoQz7Sosdmv+m5jiDVhZm2p9+GGzwWVUClK0yHHBXp+BYZJ4IlG52OIIZx+Vg/piRk/tTgQzTG2zHdbqM4rI48jjk8+xf5J1EMdlZttVx5vuR1jqUps/Ksw5xxevfCh5r779LQQ1QTQFUbtnBr0n4omr0pgTO75BUAfA9JqUdY3twRvvEiNW/AdPRhug1mONfLGk7TXtwVAPjJXA7yKG36E0+jv/Kyl7l1ZlqXOyCgEysou1nEP0NgqwRjvRM+VxrNVDLCZ+7FCXrVaTAvrCKSioXkipsLGPtKD0HssPh8T4c0Q3H72YO7+WK4ISyT/jdu+eJujGeuXB8bq7OruF9/RHtGy8XEUcJusoLnJnpz8hqE8jfm1R4MExju4SlC6XKQjrtlmyoww8IcRKvhMQKOtNRVjg7P/cFn+vxfsDh3BipTJTsoemtwIg2OwqXbCUlVg5TAc+2OcfBjJKp9iC9j/E8r/qh9stakx2uPep2YrzuLIsokfNkwLUlkX4p3V9wXTp38EZEtgAAAABJRU5ErkJggg==);
  background-size: 100%;
  margin-right: 5px;
  vertical-align: middle;
}
.activity .promotion-info .desc {
  font-size: 12px;
  color: #efaa35;
}
.activity:last-child .info {
  border-bottom: 0;
}
.activity .poster {
  background-size: cover;
  background-position: 50%;
}
.activity .discount-tag {
  position: absolute;
  top: -3px;
  left: 2px;
  width: 28px;
  height: 30px;
  background-size: 100%;
  text-align: center;
  color: #fff;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA8CAYAAAAzF3kIAAAAAXNSR0IArs4c6QAAAsdJREFUaAXtms9rE0EUx79vSGJT1OIPsIrEm7YqRRskqJeeVCJeREG9WWs8eOtJPeWqqHiSWjB/gOJNavUiaAVTifUHkVq9qCAKCoK/WtPd8W2i6bJtMkTa8FZmIezbN9+d+b73mc1pCHzprr61mHTPgdADrVd7ubBchdcvTsfdxMVNuP5rLs9ULm7KfcqFLZ9LID03+qrI1ikfQ2R/Nx68D/pVZXIhLW6mGJ0qoVQYxfYdM7lKpMrbMpgN4bMG2jWcuw+Ryvjtq7B9c37zwZiLjPE/ypU8UgNFHOQYiARFYXsm0DsuKmBbp7/ibVsRPcdJrz8aHA2IhT8uicaoMFiq5VLVGvhf8rbAsJO0BC1B4R2wW1Q4IKM9S9DYIuECS1A4IKM9S9DYIuECS1A4IKM9S9DYIuECS1A4IKM9S9DYIuECS1A4IKM9S9DYIuECS1A4IKM9S9DYIuECS1A4IKM9S9DYIuECS1A4IKM9S9DYIuECS1A4IKM9S9DYIuECS1A4IKM9S9DYonoCAp+jpql6koUem2+CDohGoNQZRGkLDq+L40iiFSraBVKnuNh7PD690EX554/wgj/41G+rP9lYTB/5QOowzzOE+NI79OTSl+r7xWr0nCPvd1YnM2345uziNdMgvYfPsrZXVY0GXrP2rXFQqP0i6Q29I7zYztqS4Ai5nHnERQ2Vixq/WiCifzpUq/m4PDae2ArXSfN8aS42xfcGdhWN0USuO+jQ/0y689heOO5Nf3JWTPjMudv8uwUdHaaJwU+zNPOQ0B0nVwCTu8t0Ae++su60ig7QeO5GPQ15g7qjN8Pdu8ATLv4j1nwaf4zjCqVDiTxlsx65pl06m1W49mYbXMVkPbo6yYuX/fL9J++efnqZGzAZ+vsCKt+Gm4RCC1TsMRUvfzC93MxxvblvFabRyYW2YNGy+/Ts/Pdmri92rd/DSLLMQNi9tQAAAABJRU5ErkJggg==);
}
.activity .discount-tag .integer {
  position: absolute;
  top: 0;
  left: 1px;
  font-size: 22px;
  font-weight: 700;
}
.activity .discount-tag .decimal {
  position: absolute;
  top: 4px;
  right: 4px;
  font-size: 12px;
  font-weight: 700;
}
.activity .discount-tag .text {
  position: absolute;
  bottom: 4px;
  right: 4px;
  font-size: 8px;
  color: #fff;
}
.activity .stars {
  margin-top: 8px;
  margin-bottom: 10px;
}
.activity .hot-tag {
  position: absolute;
  left: 0;
  top: 0;
  width: 35px;
  height: 35px;
  background-size: 35px 35px;
  background-image: url("/home/img/tag-hot.png");
}
/*列表结束*/
</style>