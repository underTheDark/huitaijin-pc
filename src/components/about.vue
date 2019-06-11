<template>
  <div id="about">
    <div class="company-bg"></div>
    <div class="company-des">
      <div class="company" style="margin:0;padding-top:50px;">
        <h2>汇金台集团</h2>
        <span>Hui Tai Jin Group</span>
        <p>河南汇台金集团是一家以动物营养科技、尖端生物科技为基础，严格按照兽药GMP标准建造，专业从事高端饲料添加剂科研、生产、销售于一体的科技型技术企业。办公室地址位 于中国地理中心河南省会郑州，公司生产基地位于郑州市花园口工业区，注册资本为5000（万元）。</p>
        <br>
        <p>汇台金高大壮主要针对牛、羊、鹿等动物而研发的育肥保健产品其主要功效：明显增加采食量，改善体型，提高酮体出肉率等。</p>
        <p>汇台金大肥宝主要针对猪研发的育肥产品其主要功效：增加采食量，提高免疫力、提高酮体出肉率，减少肠胃肠道疾病等。</p>
      </div>
      <div class="company">
        <h2>企业文化</h2>
        <span>Enterprise Culture</span>
        <p>全国牛羊育肥的真正领导者！诚信至上，文明经营，以义生利，以德兴企，成就员工，服务社会！</p>
        <img src="../../static/img/about/My_qiye.png" class="company-change">
      </div>
      <div class="company">
        <h2>企业愿景</h2>
        <span>Enterprise Vision</span>
        <p>技精于专，做于细;业成于勤，守于挚。</p>
      </div>
      <div class="company">
        <h2>企业展示</h2>
        <span>Enterprise Show</span>

        <img src="../../static/img/about/My_zhanshi.png" class="company-change">
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
  
  min-width: 1440px;
}
.company-bg {
  width: 100%;
  height: 460px;
  background: url("../../static/img/about/Aboutus_banner.png") no-repeat;
  background-size: 100% 100%;
}
.company-des {
  width: 80%;
  margin: -100px auto 40px;
  box-shadow: 2px 0px 24px 0px rgba(128, 128, 128, 0.2);
  border-radius: 10px;
  background: rgba(255, 255, 255, 1);
  padding: 0 48px 50px;
}
.company {
  text-align: left;
  margin-top: 50px;
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


