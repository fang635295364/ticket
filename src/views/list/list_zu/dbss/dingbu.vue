<template>
  <div>
    <div class="ui-fixed-header list-head" style="display:block;">
      <div class="topbar">
        <div class="back">返回</div>
        <div class="ui-searchbox">
          <div class="ui-inner">
            <div class="ui-wrap">
              <div class="ui-icon icon-search"></div>
              <span class="ui-placeholder">搜索明星、演出、场馆</span>
            </div>
            <form action>
              <input type="text" value class="search-input" />
              <div class="clear-input" style="display:none;"></div>
            </form>
          </div>
        </div>
        <div class="cancel" style="display:none;">取消</div>
      </div>
    </div>
    <div class="suggest-wrap" style="display:none;">
      <div class="suggest-end">查找“”</div>
    </div>
    <div class="default-search list-keyword hide" style>
      <div class="row-title">热门搜索</div>
      <div class="hot-searches">
        <div class="keyword">Alan Walker</div>
        <div class="keyword">Shawn Mendes</div>
        <div class="keyword">世终乐队</div>
        <div class="keyword">吴青峰</div>
        <div class="keyword">五月天</div>
        <div class="keyword">刘德华</div>
        <div class="keyword">上港</div>
        <div class="keyword">美食</div>
        <div class="keyword">莫文蔚</div>
        <div class="keyword">陈奕迅</div>
        <div class="keyword">苹果新机</div>
        <div class="keyword">劳力士网球</div>
        <div class="keyword">申花</div>
        <div class="keyword">巴黎圣母院</div>
        <div class="keyword">猫的世界</div>
        <div class="keyword">王者荣耀</div>
        <div class="keyword">脱口秀</div>
        <div class="keyword">简单生活节</div>
        <div class="keyword">曾经如是</div>
        <div class="keyword">威尼斯商人</div>
        <div class="keyword">王一博</div>
        <div class="keyword">肖战</div>
        <div class="keyword">竞演州长</div>
        <div class="keyword">卡塔尔世界杯</div>
        <div class="keyword">五月天</div>
        <div class="keyword">江小白YOLO</div>
        <div class="keyword">费德勒</div>
        <div class="keyword">贾凡</div>
      </div>
      <div class="row-title">搜索记录</div>
      <div class="search-history">
        <ul>
          <li class="remove-all" style="display:none;">清除历史记录</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.ui-filter {
  position: relative;
  display: box;
  display: -webkit-box;
  z-index: 10;
  background-color: #fff;
}
.ui-filter .ui-filter-item {
  box-flex: 1;
  height: 38px;
  line-height: 38px;
  font-size: 14px;
  color: #333;
  border-bottom: 1px solid #e6e6e6;
  overflow: hidden;
  text-align: center;
}
.ui-filter .ui-filter-item .ui-icon {
  margin-left: 5px;
  font-size: 10px;
  float: left;
}
.ui-filter .ui-filter-item .title {
  margin: 0 auto;
}
.ui-filter .ui-filter-item .text {
  display: inline-block;
  margin-right: 4px;
}
.ui-filter .ui-filter-item .icon {
  width: 6px;
  height: 4px;
  display: inline-block;
  top: -3px;
  position: relative;
  background-size: 6px 8px;
  background-image: url(//static.piaoniu.com/nuxt-static/img/tiny-arrows.8d8341e.png);
}
.ui-filter .ui-menu {
  width: 100%;
  display: block;
  position: absolute;
  z-index: 10;
  top: 38px;
  left: 0;
}
.ui-filter .ui-menu li {
  background-color: #fff;
  line-height: 38px;
  height: 38px;
  padding: 0 16px;
  border-bottom: 1px solid #e6e6e6;
}
.ui-filter .ui-menu li.selected {
  background-color: #fbfbfb;
  color: #fbfbfb;
  color: #ff5636;
}
.search-header {
  width: 100%;
  height: 44px;
  overflow: hidden;
  background-color: #fff;
  position: relative;
  z-index: 10;
}
.full-header .topbar {
  background: #ff2661;
  display: -webkit-box;
  -webkit-box-align: center;
}
.full-header .topbar .back {
  display: none;
}
.full-header .topbar .city-picker {
  display: block;
  color: #fff;
  min-width: 28px;
  padding: 0 20px 0 10px;
  background-image: url(/ui/img/arr-down.png);
  background-size: 14px 9px;
  background-repeat: no-repeat;
  background-position: 100%;
}
.full-header .topbar .ui-searchbox {
  -webkit-box-flex: 1;
}
.full-header .topbar .ui-searchbox .ui-inner {
  background-color: #a30d36;
  background-color: rgba(163, 13, 54, 0.4);
}
.full-header .topbar .ui-searchbox .ui-inner .ui-input {
  padding-right: 10px;
  outline: none;
  color: #fff;
}
.full-header .topbar .ui-searchbox .ui-inner .ui-placeholder {
  color: #fff;
  font-size: 15px;
}
.full-header .topbar .person-icon {
  display: block;
  height: 25px;
  width: 25px;
  background-image: url(/ui/img/personIcon.png);
  background-size: 25px 25px;
  margin-right: 10px;
}
.ui-searchbox {
  border-radius: 3px;
  overflow: hidden;
}
.ui-searchbox .ui-inner {
  height: 34px;
  line-height: 34px;
  margin: 5px 8px;
  position: relative;
  background-color: #f2f2f2;
  border-radius: 3px;
}
.ui-searchbox .ui-inner .ui-wrap {
  display: block;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}
.ui-searchbox .ui-inner .ui-wrap .icon-search {
  background-image: url(//static.piaoniu.com/nuxt-static/img/search.0622317.png);
  background-size: 15px 17px;
  width: 15px;
  height: 17px;
  position: absolute;
  left: 14px;
  top: 50%;
  margin-top: -9px;
}
.ui-searchbox .ui-inner .ui-wrap .ui-placeholder {
  font-size: 12px;
  color: #666;
  margin-left: 37px;
}
.ui-searchbox .ui-input {
  outline: none;
  color: #8f8f8f;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  display: none;
  padding: 0 15px;
}
.ui-searchbox .focus .ui-wrap {
  display: block;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}
.ui-searchbox .focus .ui-wrap .icon-search,
.ui-searchbox .focus .ui-wrap .ui-placeholder {
  display: none;
}
.ui-searchbox .focus .ui-input {
  display: block;
}
.suggest-container {
  position: fixed;
  width: 100%;
  z-index: 99;
  top: 44px;
  background-color: #fff;
  bottom: 0;
}
.suggest-container li {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-left: 19px;
  height: 44px;
  line-height: 44px;
  border-bottom: 1px solid #e6e6e6;
}
.ui-fixed-header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  background: #fff;
  height: 44px;
}
.default-search {
  position: fixed;
  top: 44px;
  bottom: 0;
  overflow: auto;
  width: 100%;
  z-index: 15;
  background-color: #fff;
  transition: all 0.2s linear;
  opacity: 1;
}
.default-search.hide {
  display: none;
  opacity: 0;
  top: 50px;
}
.calendar {
  background: #fff;
}
.calendar .time-nav {
  height: 44px;
  line-height: 44px;
  text-align: center;
  position: relative;
  font-size: 15px;
}
.calendar .time-nav .next,
.calendar .time-nav .prev {
  top: 12px;
  width: 10px;
  height: 18px;
  position: absolute;
  background-size: 20px 36px;
  background-image: url(//static.piaoniu.com/nuxt-static/img/arrows.c49a366.png);
}
.calendar .time-nav .disabled {
  background-position-y: -18px;
}
.calendar .time-nav .prev {
  background-position-x: -9px;
  left: 13px;
}
.calendar .time-nav .next {
  right: 13px;
}
.calendar .calendar-container .ui-calendar-wrapper {
  width: 100%;
  border-collapse: collapse;
}
.calendar .calendar-container .ui-calendar-wrapper .ui-calendar-week {
  background: #f9f9f9;
  font-size: 12px;
  color: #666;
  height: 25px;
}
.calendar .calendar-container .ui-calendar-wrapper tr {
  border-bottom: 1px solid #e6e6e6;
}
.calendar .calendar-container .ui-calendar-wrapper tr:first-child,
.calendar .calendar-container .ui-calendar-wrapper tr:last-child {
  border-bottom: none;
}
.calendar .calendar-container .ui-calendar-wrapper td {
  height: 40px;
  text-align: center;
}
.calendar .calendar-container .ui-calendar-wrapper td.today {
  position: relative;
}
.calendar .calendar-container .ui-calendar-wrapper td.today:before {
  content: "";
  display: block;
  width: 4px;
  height: 4px;
  border-radius: 50% 50%;
  background: #31a1f8;
  position: absolute;
  left: 50%;
  margin-left: -2px;
  bottom: 8px;
}
.calendar
  .calendar-container
  .ui-calendar-wrapper
  td.ui-calendar-available.select {
  background: #fff3f6;
  color: #ff5636;
}
.calendar .calendar-container .ui-calendar-wrapper td.ui-calendar-invalid {
  color: #d8d8d8;
}
.calendar .calendar-container .ui-calendar-wrapper td.ui-calendar-available {
  color: #262626;
}
.calendar .calendar-container .ui-calendar-wrapper td.last_month,
.calendar .calendar-container .ui-calendar-wrapper td.next_month {
  opacity: 0;
}
.calendar .time-tabs {
  height: 50px;
  display: -webkit-box;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  border-bottom: 1px solid #e6e6e6;
}
.calendar .time-tabs .tab {
  display: block;
  padding: 0 14px;
  height: 32px;
  line-height: 32px;
  border-radius: 16px;
  font-size: 14px;
  text-align: center;
  border: 1px solid #e6e6e6;
  margin: 0 2px;
  box-sizing: border-box;
}
.calendar .time-tabs .tab.select {
  background: #fff3f6;
  color: #ff5636;
}
.ui-fixed-header {
  z-index: 20;
}
.list-element,
.ui-fixed-header {
  position: relative;
  background: #fcfcfc;
}
.list-element {
  width: 100%;
}
.category {
  box-shadow: 0 1px 1px 0 #c3c3c3;
  position: relative;
  z-index: 11;
  background: #fcfcfc;
}
.toggle-category-button {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 12;
}
.toggle-category-button .img-wrap {
  position: absolute;
  height: 41px;
  width: 30px;
  line-height: 41px;
  text-align: center;
  right: 0;
  background-color: #fcfcfc;
}
.toggle-category-button .img-wrap .arr {
  width: 12px;
  position: relative;
  top: -3px;
}
.toggle-category-button .shadow {
  height: 41px;
  position: absolute;
  right: 30px;
  width: 14px;
  background-image: linear-gradient(90deg, hsla(0, 0%, 100%, 0.39), #fcfcfc);
}
.category-pop {
  position: absolute;
  z-index: 11;
  background: #fff;
  top: 0;
  padding: 0 15px;
}
.dacu-list-item {
  position: relative;
}
.dacu-list-item:before {
  content: "";
  display: block;
  width: 23px;
  height: 23px;
  background-size: 23px 23px;
  position: absolute;
  left: -2px;
  top: 12px;
  z-index: 1;
}
.wanda-fixed-head .topbar {
  background-color: #2abfff;
}
.wanda-fixed-head .topbar .ui-searchbox .ui-inner {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.2);
}
.ui-filter {
  width: 100%;
}
.search-header .ui-searchbox {
  -webkit-box-flex: 1;
}
.search-header .cancel {
  height: 44px;
  line-height: 44px;
  padding: 0 15px 0 5px;
  font-size: 16px;
  color: #666;
}
.wanda-fixed-head,
.wanda-search-head {
  display: none;
}
.list-head .topbar {
  display: -webkit-box;
}
.list-head .city-picker {
  color: #333;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAYCAYAAACMcW/9AAAAAXNSR0IArs4c6QAAARRJREFUSA3V1wEOwiAMBdDh7bzGwk41slsYbzfkk0Fwgiu0G9pEJQHal7IYNgx/EgpOa60yxtwx1lo/lVIW416R89yAAXJd1wc+8zwbLOyJhCF4QgM9NEU55NgLiwZttcfUhLGHbse9hMke2BzSPYILbHDFIy4tnKZJn/3MUmpHKNSUDVgnGdSab1AAqBslsDW1PqBXYWuQMGWhZ2NrkV+hZ2FbkIdQaWwrkgSVwnKQZCgXy0VWQVuxEshqaC1WCtkEpWIlkc3QIyzm97cgXDA494biHz6KHUWpa9jn5uJVjYtEPhZ0AxXvkL4As5PIgWBDkSTXWZ9cCOlz4Usi9liJ405dIh0NCYEN7zi/8JIYXJf+vgC2rcYl1KKjIwAAAABJRU5ErkJggg==);
  background-size: 14px 9px;
  background-repeat: no-repeat;
  background-position: 100%;
}
.list-head .back,
.list-head .city-picker {
  height: 46px;
  min-width: 28px;
  line-height: 46px;
  padding: 0 20px 0 10px;
  font-size: 16px;
}
.list-head .ui-searchbox {
  -webkit-box-flex: 1;
}
.list-head .cancel {
  font-size: 16px;
  line-height: 44px;
  color: #666;
  padding: 0 15px 0 5px;
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.activity-list {
  margin-top: 124px;
  bottom: 45px;
  width: 100%;
  z-index: 3;
}
.activity-list .ui-list {
  position: absolute;
  height: auto;
}
.activity-list .ui-list .activity a .sold-out {
  font-size: 13px;
  color: #666;
}
.coupon-notify {
  position: relative;
  z-index: 4;
  font-size: 12px;
  color: #000;
  text-align: center;
  padding: 7px 0;
  background-color: #ffe7a6;
}
.coupon-notify span {
  color: #ff2661;
}
body.modal-show {
  position: fixed;
  width: 100%;
}
.safe-area-top .city-list,
.safe-area-top .list-head.focus {
  top: 44px;
}
.safe-area-top .default-search,
.safe-area-top .suggest-wrap {
  top: 88px;
}
.list-head.focus {
  top: 0;
}
.list-head.focus,
.suggest-wrap {
  position: fixed;
  left: 0;
  width: 100%;
}
.suggest-wrap {
  top: 44px;
  right: 0;
  bottom: 0;
  padding-left: 14px;
  background-color: #fff;
  z-index: 16;
  box-sizing: border-box;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.suggest-end {
  color: #4b8feb;
  text-align: center;
  padding: 15px 0;
}

.row-title {
  background-color: #f2f2f2;
  height: 32px;
  line-height: 32px;
  padding-left: 15px;
  color: #666;
}
.hot-searches {
  padding: 15px 0 0 15px;
  overflow: hidden;
}
.hot-searches .keyword {
  margin-right: 13px;
  margin-bottom: 13px;
  font-size: 14px;
  padding: 9px 13px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  float: left;
}
.search-history ul li {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  height: 44px;
  line-height: 44px;
  padding-left: 10px;
  padding-right: 50px;
  position: relative;
  border-bottom: 1px solid #e6e6e6;
}
.search-history ul li .remove {
  position: absolute;
  right: 0;
  color: #ff5636;
  padding-right: 10px;
}
.search-history ul .remove-all {
  color: #ff5636;
  text-align: center;
}
.list-keyword {
  display: block;
}
.list-keyword.hide {
  display: none;
}

.ui-filter .ui-filter-item .ui-icon:after {
  content: "";
  display: block;
  clear: both;
}
</style>