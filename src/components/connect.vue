<template>
  <div id="about">
    <div class="company-bg"></div>
    <div class="company-connect">
      <div class="company " style="margin:0;padding-top:50px;">
        <h2>联系方式</h2>
        <span>Contact Way</span>
        <h3>河南汇台金实业有限公司 </h3>
        <br>
        <p>销售地址：河南省郑州市花园路69号</p>
        <p>生产地址：河南省郑州市花园口工业区</p>
        <p>电话：0371-55150201</p>
        <p>传真：0371-55150201 </p>
        <p>邮编：45000</p>
        <div class="company-position">
             <img src="../../static/img/connect/Map.png" />
             <span>生产地址：<br/>河南省郑州市花园口工业区</span>
             <span>销售地址：<br/>河南省郑州市花园路69号</span>
        </div>
       
      </div>
      <div class="company addMargin">
        <h2>招商信息</h2>
        <span> Recruitment</span>
         <h3>河南汇台金实业有限公司 </h3>
        <p style="margin:10px 0;">全国统一招商电话0371-55150201</p>
        <img src="../../static/img/connect/Zhaoshang.png" class="company-change">
      </div>
     
    </div>

    <!-- 二维码弹出框 -->
    <div class="asideMessage">
      <div class="phone">
        <img src="../../static/img/index/iphone.png" @click="open1">
        <div v-show="phone" class="phone-content">
          <span style="color:rgba(6,145,59,1);">联系电话0371-55150201</span>
          <img src="../../static/img/index/close.png" @click="close1" key="1">
        </div>
      </div>

      <div class="henggang"></div>
      <div class="erweima">
        <img src="../../static/img/index/erweima.png" @click="open2">
        <div v-show="erweima" class="erweima-content">
          <span>联系电话0371-55150201</span>
          <img src="../../static/img/index/close.png" @click="close2" key="2">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: false,
      erweima: false
    };
  },
  methods: {
    open1() {
      this.phone = true;
    },
    open2() {
      this.erweima = true;
    },
    close1() {
      this.phone = false;
    },
    close2() {
      this.erweima = false;
    }
  }
};
</script>

<style scoped>

#about {
  width: 100%;
  min-width:1440px;
}
.company-bg {
  width: 100%;
  height: 460px;
  background: url("../../static/img/connect/Relation_banner.png") no-repeat;
  background-size: 100% 100%;
}
.company-connect {
  box-sizing: border-box;
  width: 80%;
  margin: -100px auto 40px;
  box-shadow: 2px 0px 24px 0px rgba(128, 128, 128, 0.2);
  border-radius: 10px;
  background: rgba(255, 255, 255, 1);
  padding: 0 10% 50px;

}
.company {
  text-align: left;
  margin-top: 50px;
}
.addMargin{
    margin-top:604px;
}
.company h2 {
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  color: rgba(51, 51, 51, 1);
}
.company span {
  font-size: 18px;
  font-family: DINAlternate-Bold;

  color: rgba(153, 153, 153, 1);
  display: inline-block;
  margin-bottom: 16px;
}
.company p {
  width: 80%;

  font-size: 16px;
  font-family: PingFangSC-Semibold;

  color: rgba(102, 102, 102, 1);
  line-height: 20px;
}
.company .company-change {
  width: 100%;
  margin-top: 20px;
}
/* 地图位置 */
.company-position{
   position: relative;
     
}

.company-position img{
    width:680px;
    height:604px;
    position: absolute;
    left:50%;
    top:0;
     
    margin-left:-340px;


}
.company-position span:nth-of-type(1){
    position:absolute;
    left:908px;
    top:250px;
}
.company-position span:nth-of-type(2){
    position:absolute;
    left:908px;
    top:343px;
}

/* 二维码弹出框 */
.asideMessage {
  width: 54px;
  height: 160px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 2px 0px 24px 0px rgba(128, 128, 128, 0.5);
  border-radius: 12px 0px 0px 12px;
  position: fixed;
  top: 300px;
  right: 0;
}
.asideMessage img {
  width: 30px;
  height: 34px;
}
.asideMessage .phone,.erweima {
  height: 55px;
  padding-top: 25px;
}
.asideMessage .henggang {
  border-bottom: 1px solid rgba(6, 145, 59, 0.4);
}
.phone,
.erweima {
  position: relative;
}
.phone-content {
  position: absolute;
  left: -288px;
  top: 0;
  width: 288px;
  height: 80px;
  line-height: 80px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 2px 0px 24px 0px rgba(128, 128, 128, 0.5);
  border-radius: 10px;
  display: table-cell;
  vertical-align: middle;
}
.erweima-content {
  position: absolute;
  left: -288px;
  top: 0;
  width: 288px;
  height: 288px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 2px 0px 24px 0px rgba(128, 128, 128, 0.5);
  border-radius: 10px;
  display: table-cell;
  vertical-align: middle;
  color: rgba(6, 145, 59, 1);
}
.phone-content img {
  vertical-align: middle;
  width: 24px;
  height: 24px;
  margin-left: 10px;
}
.erweima-content img {
  vertical-align: middle;
  width: 24px;
  height: 24px;
}
</style>


