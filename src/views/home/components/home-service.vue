<template>
  <div>
    <div class="service-top">
      <span></span>
      <div>票牛服务保障</div>
    </div>
    <div class="service-logo">
      <div class="service-logo-title">票牛服务保障</div>
      <div class="service-logo-content">多重保障，让您购票无忧</div>
      <img src="../../../assets/imgs/home/service-logo.png" alt="">
    </div>
    <div class="service-explain">
        <div class="service-explain-title">无票赔付</div>
        <div class="service-explain-content">在票牛购买门票，如果因为卖家原因无法获得指定票品（因主办或不可抗力的因素导致演出取消除外），除全额退款外，可获得额外赔付：</div>
        <div class="service-explain-list">
            <div class="service-explain-list-item">
                <img src="//static.piaoniu.com/m/static/img/service1.d6e0905.png" alt="">
                <div>
                    <div>提前一周（非现场）</div>
                    <div>若商家距开演时间前7天(不含)确认无票，非现场自取订单按订单支付价全额退款并按票面价<span>30%</span>的票牛余额进行赔付</div>
                </div>
                <div>赔余额</div>
            </div>
            <div class="service-explain-list-item">
                <img src="//static.piaoniu.com/m/static/img/service2.2117c69.png" alt="">
                <div>
                    <div>提前一周(现场)</div>
                    <div>若商家距开演时间前7天(不含)确认无票，现场自取订单按订单支付价全额退款并按票面价<span>50%</span>的票牛余额进行赔付</div>
                </div>
                <div>赔余额</div>
            </div>
            <div class="service-explain-list-item">
                <img src="//static.piaoniu.com/m/static/img/service3.57d688c.png" alt="">
                <div>
                    <div>临近开演</div>
                    <div>若商家于非现场自取订单距开演时间7天内 (含)、开演前一天18点前确认无票，所有订单按订单支付价全额退款并按票面价<span>80%</span>的票牛余额进行赔付</div>
                </div>
                <div>赔余额</div>
            </div>
            <div class="service-explain-list-item">
                <img src="//static.piaoniu.com/m/static/img/service4.2f4d301.png" alt="">
                <div>
                    <div>演出当天</div>
                    <div>若商家于开演前一天18点(含)后确认无票，所有订单按订单支付价全额退款并按票面价<span>100%</span>的现金进行赔付</div>
                </div>
                <div>赔余额</div>
            </div>
        </div>
    </div>
    <div class="service-real">
        <div class="service-explain-title">出票保真</div>
        <div>
            <img src="//static.piaoniu.com/m/static/img/serviceBanner1.88c9ff7.png" alt="">
            <div>票牛对所有票品进行真票承诺，如果发现票牛所售票品为假票，一经核实将按订单支付价的300%进行赔偿</div>
        </div>
    </div>
    <div class="service-real">
        <div class="service-explain-title">配送保障</div>
        <div>
            <img src="//static.piaoniu.com/m/static/img/serviceBanner3.939396e.png" alt="">
            <div>多种配送方式：现场自取、门店自取、电子票、快递寄送。 顺丰快递同城次日达达</div>
        </div>
    </div>
    <div class="service-real">
        <div class="service-explain-title">15分钟内无条件退款</div>
        <div>
            <img src="//static.piaoniu.com/m/static/img/serviceBanner2.5e4bdcb.png" alt="">
            <div>下单后15分钟内，可以无条件取消订单，按订单支付价全额退款※下单时选择“现场取票”订单及特殊演出项目除外</div>
        </div>
    </div>
    <div class="service-flow">
        <div class="service-explain-title">服务流程</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scope>
.service-top {
  height: 44px;
  width: 100%;
  line-height: 44px;
  font-size: 17px;
  color: #525252;
  text-align: center;
  display: flex;
}
.service-top span {
  display: block;
  width: 44px;
  height: 44px;
  background: url("../../../assets/imgs/home/left.png") no-repeat;
  background-size: 11px 19px;
  background-position: center;
}
.service-top>div{
    width: 200px;
    margin:0 auto;
}
.service-logo{
    width: 100%;
    height: 151px;
    background-image: linear-gradient(180deg,#4994ff,#337aec);
    font-size: 24px;
    color:#fff;
    text-align: center;
    position: relative;
    padding-top:50px;
}
.service-logo-content{
    font-size: 12px;
    margin-top:2px;
}
.service-logo img{
    width: 80px;
    height: 88px;
    position: absolute;
    bottom:0;
    right:0;
}
.service-explain{
    width: 100%;
    margin-top:30px;
    padding:0 14px;
}
.service-explain-title{
    width: 347px;
    font-size: 18px;
    color:#525252;
    font-weight: 700;
    text-align: center;
    margin-bottom:16px;
}
.service-explain-title:after{
    content:'';
    margin:2px auto;
    display: block;
    width: 60px;
    height: 2px;
    background-color: #f35983;
    border-radius: 2px;
}
.service-explain-content{
    color:#666;
    font-size: 12px;
    line-height: 20px;
    width: 347px;
    height: 60px;
    margin:0 auto;
}
.service-explain-list{
    width: 100%;
    margin-top:16px;
}
.service-explain-list-item{
    width: 347px;
    box-shadow: 4px 2px 4px 2px rgba(0,0,0,.05);
    display: flex;
    font-size: 10px;
    position: relative;
    margin:0 auto;
}
.service-explain-list-item>img{
    width: 111px;
    height: 100px;
    background-color: rgb(244, 249, 255);
}
.service-explain-list-item>div:first-of-type{
    margin-top:8px;
    margin-left:6.4px;
}
.service-explain-list-item>div:first-of-type>div:first-of-type{
    font-size: 14px;
}
.service-explain-list-item>div:first-of-type>div:last-of-type{
    padding:6.4px 6.4px 6.4px 0;
}
.service-explain-list-item>div:first-of-type>div:last-of-type span{
    color:#ff2661;
}
.service-explain-list-item>div:last-of-type{
    width:40px;
    height: 16px;
    color:#fff;
    line-height: 16px;
    border-radius: 10px;
    background-color: #4b8feb;
    position: absolute;
    top:6px;
    left:6px;
    text-align: center;
}
.service-real{
    width: 100%;
    margin-top:40px;
}
.service-real>div:last-child{
    width:347px;
    margin:0 auto;
    font-size: 12px;
    color:#666;
}
.service-real>div>img{
    width: 347px;
    height: 110px;
}
.service-real>div>div{
    padding:10px 13px;
}
</style>