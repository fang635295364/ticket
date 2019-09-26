<template>
  <div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">热门</mt-tab-item>
      <mt-tab-item id="2">关注</mt-tab-item>
      <mt-tab-item id="3">淘票</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div>
          <mt-navbar v-model="selectedd">
            <mt-tab-item id="4">全部</mt-tab-item>
            <mt-tab-item id="5">音乐</mt-tab-item>
            <mt-tab-item id="6">戏剧</mt-tab-item>
            <mt-tab-item id="7">展览</mt-tab-item>
            <mt-tab-item id="8">亲子</mt-tab-item>
            <mt-tab-item id="9">幕后花絮</mt-tab-item>
          </mt-navbar>
          <mt-tab-container v-model="selectedd">
            <mt-tab-container-item id="4">
              <div>
                <div class="sck-guan">
                  <div class="quan-1">
                    <img src="../../assets/guanzhu-img/touxiang.jpg" alt class="img-5" />
                    <ul class="sck-ul">
                      <li>用户131****3823</li>
                      <li>来自话剧:一个陌生女人的来信 孟京辉</li>
                    </ul>
                  </div>

                  <div class="quan-2">
                    <ul class="sck-ul1">
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                    </ul>
                  </div>
                  <div class="quan-3">
                    真的是第一部看的话剧了，这部戏带领我看了后面的几十部话剧和音乐剧。
                    孟京辉和蜂巢剧场算是久闻其名，一个陌生女人的来到来看待荆防颗粒打暑假工开发的时间赶快拉上
                  </div>
                  <hr />
                  <div class="guan-6">
                    <div class="guan-8">195阅读</div>
                    <ul class="guan-7">
                      <li>
                        <img src="../../assets/guanzhu-img/dianzan.png" alt />8
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/pinglun.png" alt />回复
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/fenxiang.png" alt />分享
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="sck-guan">
                  <div class="quan-1">
                    <img src="../../assets/guanzhu-img/touxiang.jpg" alt class="img-5" />
                    <ul class="sck-ul">
                      <li>用户131****3823</li>
                      <li>来自话剧:一个陌生女人的来信 孟京辉</li>
                    </ul>
                  </div>

                  <div class="quan-2">
                    <ul class="sck-ul1">
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                    </ul>
                  </div>
                  <div class="quan-3">
                    真的是第一部看的话剧了，这部戏带领我看了后面的几十部话剧和音乐剧。
                    孟京辉和蜂巢剧场算是久闻其名，一个陌生女人的来到来看待荆防颗粒打暑假工开发的时间赶快拉上
                  </div>
                  <hr />
                  <div class="guan-6">
                    <div class="guan-8">195阅读</div>
                    <ul class="guan-7">
                      <li>
                        <img src="../../assets/guanzhu-img/dianzan.png" alt />8
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/pinglun.png" alt />回复
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/fenxiang.png" alt />分享
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="sck-guan">
                  <div class="quan-1">
                    <img src="../../assets/guanzhu-img/touxiang.jpg" alt class="img-5" />
                    <ul class="sck-ul">
                      <li>用户131****3823</li>
                      <li>来自话剧:一个陌生女人的来信 孟京辉</li>
                    </ul>
                  </div>

                  <div class="quan-2">
                    <embed src="https://video.piaoniu.com/review/15679224353795741.mp4" type />
                    <!-- <ul class="sck-ul1">
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                    </ul>-->
                  </div>
                  <div class="quan-3">
                    真的是第一部看的话剧了，这部戏带领我看了后面的几十部话剧和音乐剧。
                    孟京辉和蜂巢剧场算是久闻其名，一个陌生女人的来到来看待荆防颗粒打暑假工开发的时间赶快拉上
                  </div>
                  <hr />
                  <div class="guan-6">
                    <div class="guan-8">195阅读</div>
                    <ul class="guan-7">
                      <li>
                        <img src="../../assets/guanzhu-img/dianzan.png" alt />8
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/pinglun.png" alt />回复
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/fenxiang.png" alt />分享
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="5">
              <div>
                <div class="sck-guan">
                  <div class="quan-1">
                    <img src="../../assets/guanzhu-img/touxiang.jpg" alt class="img-5" />
                    <ul class="sck-ul">
                      <li>用户131****3823</li>
                      <li>来自话剧:一个陌生女人的来信 孟京辉</li>
                    </ul>
                  </div>

                  <div class="quan-2">
                    <ul class="sck-ul1">
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                    </ul>
                  </div>
                  <div class="quan-3">
                    真的是第一部看的话剧了，这部戏带领我看了后面的几十部话剧和音乐剧。
                    孟京辉和蜂巢剧场算是久闻其名，一个陌生女人的来到来看待荆防颗粒打暑假工开发的时间赶快拉上
                  </div>
                  <hr />
                  <div class="guan-6">
                    <div class="guan-8">195阅读</div>
                    <ul class="guan-7">
                      <li>
                        <img src="../../assets/guanzhu-img/dianzan.png" alt />8
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/pinglun.png" alt />回复
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/fenxiang.png" alt />分享
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="6">
               <div>
                <div class="sck-guan">
                  <div class="quan-1">
                    <img src="../../assets/guanzhu-img/touxiang.jpg" alt class="img-5" />
                    <ul class="sck-ul">
                      <li>用户131****3823</li>
                      <li>来自话剧:一个陌生女人的来信 孟京辉</li>
                    </ul>
                  </div>

                  <div class="quan-2">
                    <ul class="sck-ul1">
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                    </ul>
                  </div>
                  <div class="quan-3">
                    真的是第一部看的话剧了，这部戏带领我看了后面的几十部话剧和音乐剧。
                    孟京辉和蜂巢剧场算是久闻其名，一个陌生女人的来到来看待荆防颗粒打暑假工开发的时间赶快拉上
                  </div>
                  <hr />
                  <div class="guan-6">
                    <div class="guan-8">195阅读</div>
                    <ul class="guan-7">
                      <li>
                        <img src="../../assets/guanzhu-img/dianzan.png" alt />8
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/pinglun.png" alt />回复
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/fenxiang.png" alt />分享
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="7">
               <div>
                <div class="sck-guan">
                  <div class="quan-1">
                    <img src="../../assets/guanzhu-img/touxiang.jpg" alt class="img-5" />
                    <ul class="sck-ul">
                      <li>用户131****3823</li>
                      <li>来自话剧:一个陌生女人的来信 孟京辉</li>
                    </ul>
                  </div>

                  <div class="quan-2">
                    <ul class="sck-ul1">
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                    </ul>
                  </div>
                  <div class="quan-3">
                    真的是第一部看的话剧了，这部戏带领我看了后面的几十部话剧和音乐剧。
                    孟京辉和蜂巢剧场算是久闻其名，一个陌生女人的来到来看待荆防颗粒打暑假工开发的时间赶快拉上
                  </div>
                  <hr />
                  <div class="guan-6">
                    <div class="guan-8">195阅读</div>
                    <ul class="guan-7">
                      <li>
                        <img src="../../assets/guanzhu-img/dianzan.png" alt />8
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/pinglun.png" alt />回复
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/fenxiang.png" alt />分享
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="8"> <div>
                <div class="sck-guan">
                  <div class="quan-1">
                    <img src="../../assets/guanzhu-img/touxiang.jpg" alt class="img-5" />
                    <ul class="sck-ul">
                      <li>用户131****3823</li>
                      <li>来自话剧:一个陌生女人的来信 孟京辉</li>
                    </ul>
                  </div>

                  <div class="quan-2">
                    <ul class="sck-ul1">
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                    </ul>
                  </div>
                  <div class="quan-3">
                    真的是第一部看的话剧了，这部戏带领我看了后面的几十部话剧和音乐剧。
                    孟京辉和蜂巢剧场算是久闻其名，一个陌生女人的来到来看待荆防颗粒打暑假工开发的时间赶快拉上
                  </div>
                  <hr />
                  <div class="guan-6">
                    <div class="guan-8">195阅读</div>
                    <ul class="guan-7">
                      <li>
                        <img src="../../assets/guanzhu-img/dianzan.png" alt />8
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/pinglun.png" alt />回复
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/fenxiang.png" alt />分享
                      </li>
                    </ul>
                  </div>
                </div>
              </div></mt-tab-container-item>
            <mt-tab-container-item id="9">
               <div>
                <div class="sck-guan">
                  <div class="quan-1">
                    <img src="../../assets/guanzhu-img/touxiang.jpg" alt class="img-5" />
                    <ul class="sck-ul">
                      <li>用户131****3823</li>
                      <li>来自话剧:一个陌生女人的来信 孟京辉</li>
                    </ul>
                  </div>

                  <div class="quan-2">
                    <ul class="sck-ul1">
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/touxiang.jpg" alt />
                      </li>
                    </ul>
                  </div>
                  <div class="quan-3">
                    真的是第一部看的话剧了，这部戏带领我看了后面的几十部话剧和音乐剧。
                    孟京辉和蜂巢剧场算是久闻其名，一个陌生女人的来到来看待荆防颗粒打暑假工开发的时间赶快拉上
                  </div>
                  <hr />
                  <div class="guan-6">
                    <div class="guan-8">195阅读</div>
                    <ul class="guan-7">
                      <li>
                        <img src="../../assets/guanzhu-img/dianzan.png" alt />8
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/pinglun.png" alt />回复
                      </li>
                      <li>
                        <img src="../../assets/guanzhu-img/fenxiang.png" alt />分享
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </mt-tab-container-item>
          </mt-tab-container>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div>
          <div class="sck-guan">
            <div class="guan-1">
              <div class="guan-2">
                <img src="../../assets/guanzhu-img/touxiang.jpg" alt class="img-1" />
                <ul class="guan-3">
                  <li>
                    票牛小秘书
                    <span>官方</span>
                  </li>
                  <li>11:09</li>
                </ul>
              </div>
              <img src="../../assets/guanzhu-img/xiala.png" alt class="img-2" />
            </div>

            <div class="guan-4">
              <ul class="guan-5">
                <li>
                  <p>#你眼中的秋天#</p>
                </li>
                <li>秋分刚过，你有没有感受到秋天已经来了？</li>
                <li>哪些信号让你感受到秋天已经来了？</li>
                <li>渐凉的天气，地上的落叶，风中的桂花香......</li>
                <li>也可以用一句话/诗来形容你眼中的秋天~</li>
              </ul>
              <img src="../../assets/guanzhu-img/touxiang.jpg" alt class="img-3" />
            </div>
            <hr />
            <div class="guan-6">
              <div class="guan-8">195阅读</div>
              <ul class="guan-7">
                <li>
                  <img src="../../assets/guanzhu-img/dianzan.png" alt />12
                </li>
                <li>
                  <img src="../../assets/guanzhu-img/pinglun.png" alt />回复
                </li>
                <li>
                  <img src="../../assets/guanzhu-img/fenxiang.png" alt />分享
                </li>
              </ul>
            </div>
          </div>
          <div class="sck-guan">
            <div class="guan-1">
              <div class="guan-2">
                <img src="../../assets/guanzhu-img/touxiang.jpg" alt class="img-1" />
                <ul class="guan-3">
                  <li>
                    票牛小秘书
                    <span>官方</span>
                  </li>
                  <li>11:09</li>
                </ul>
              </div>
              <img src="../../assets/guanzhu-img/xiala.png" alt class="img-2" />
            </div>

            <div class="guan-4">
              <ul class="guan-5">
                <li>
                  <p>#你眼中的秋天#</p>
                </li>
                <li>秋分刚过，你有没有感受到秋天已经来了？</li>
                <li>哪些信号让你感受到秋天已经来了？</li>
                <li>渐凉的天气，地上的落叶，风中的桂花香......</li>
                <li>也可以用一句话/诗来形容你眼中的秋天~</li>
              </ul>
              <img src="../../assets/guanzhu-img/touxiang.jpg" alt class="img-3" />
            </div>
            <hr />
            <div class="guan-6">
              <div class="guan-8">195阅读</div>
              <ul class="guan-7">
                <li>
                  <img src="../../assets/guanzhu-img/dianzan.png" alt />12
                </li>
                <li>
                  <img src="../../assets/guanzhu-img/pinglun.png" alt />回复
                </li>
                <li>
                  <img src="../../assets/guanzhu-img/fenxiang.png" alt />分享
                </li>
              </ul>
            </div>
          </div>
          <div class="">
            <p>私信</p>
            <p>取消</p>
          </div>
        </div>
      </mt-tab-container-item>

      <mt-tab-container-item id="3">淘票</mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "1",
      selectedd: "4"
    };
  }
};
</script>

<style scope>
.sck-guan {
  margin-bottom: 10px;
  background: white;
  padding: 20px;
}
body {
  background: #eee;
}
.guan-2 {
  display: flex;
}
.guan-2 .img-1 {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
.guan-1 .img-2 {
  width: 30px;
  height: 30px;
  padding-top: 4px;
}
.guan-1 {
  display: flex;
  justify-content: space-between;
  line-height: 18px;
}
.guan-3 {
  font-size: 16px;
}
.guan-3 span {
  border: 1px solid red;
  background: red;
  width: 100px;
  border-radius: 5px;
  color: white;
  font-size: 12px;
}
.guan-3 li:last-child {
  font-size: 12px;
  color: #ccc;
}
.guan-5 {
  font-size: 16px;
  line-height: 24px;
}
.guan-5 li p {
  padding-top: 6px;
  color: blue;
}
.guan-4 .img-3 {
  width: 240px;
  height: 140px;
  padding-top: 6px;
}
.guan-6 {
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
}
.guan-7 img {
  width: 18px;
  height: 18px;
  vertical-align: middle;
}
.guan-7 li {
  margin-left: 20px;
}
.guan-7 {
  display: flex;
  color: #ccc;
  font-size: 16px;
}
.guan-8 {
  color: #ccc;
  font-size: 16px;
}
hr {
  margin-top: 10px;
}
.quan-1 {
  display: flex;
  padding-top: 10px;
}
.quan-2{
  padding-top:10px;
}
.quan-1 .img-5 {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
.sck-ul li:first-child {
  font-size: 16px;
}
.sck-ul li:last-child {
  font-size: 12px;
  color: #ccc;
}
.sck-ul {
  padding-left: 10px;
}
.sck-ul1 {
  display: flex;
  flex-wrap: wrap;
}
.sck-ul1 img {
  width: 110;
  height: 110px;
}
.quan-3 {
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

</style>