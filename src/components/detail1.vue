<template>
    <div id="detail1">
        <div class="product-type">
            
            <h2>汇台金小肥宝</h2>
            <p>仔猪"保育猪"专用保健产品</p>
            <div>
                <img src="../../static/img/index/play.png" />
                <span>观看视频</span>
            </div>
        </div>
        <div class="product-point">
             <div>
                 <h2>小肥宝特点</h2>
                 <p>仔猪"保育猪"专用保健产品，五星级产品</p>
                 <p>1、催肥促生长</p>
                 <p>2、增强机体免疫力，抵抗力</p>
                 <p>3、有效解决“仔猪断奶应激性腹泻”，红黄白痢疾等</p>
                 <p>4、消除营养应激:促进仔猪健康、实现快速生长</p>
                 <p>5、调理仔猪胃肠道:为后期快速生长“打基础”</p>
                 <p>6、调高仔猪的成活率和齐整度，减少僵猪的发生</p>
                 <p>7、提高生长速度百分之30以上，节约成本10-20元</p>
                 <p>8、添加饲料中后，可实现更低“料肉比”</p>
                 <p>9、不含任何抗生素、急速、无残留，使用安全</p>
                 <p>10、投入回报率高达1:10以上</p>
             </div>
             <div>
                  <img src="../../static/img/detail/Xiaofeibao_1.png" />
            </div>
        </div>
        <div class="product-function">
            <h2>小肥宝功能</h2>
            <p>成活率高彻底预防“仔猪断奶应激性腹泻”，提高成活率3%以上。转群、早转群整齐度高，仔猪生长速度提高30%以上，平均重增加2公斤以 上节省成本30-40元/头。</p>
            <p>调理胃肠道，消除营养应激，料肉比降低0.2-0.4, 投入回报率高达1:10以上。</p>
            <p>猪肠道生理机能，建立完善的肠道环境，调高仔猪的成活率和齐整度，减少僵猪的发生。大幅度降低仔猪黄白痢疾的发生率。</p>
            <p>同时具有较强的清热解毒功能，具有抗菌抗病毒的作用，能代替部分抗生素抗病毒药物的作用，减少抗药性的产生。大幅度降低发病率，减少防控药物的使用成本。</p>
            <p>提高生产性能:能够很好地改善肠道消化吸收功能，提高营养成分的利用率，促进乳、仔猪的生长速度，促进体重、提高饲料报酬。</p>
            <p>提高机体免疫力，增强抗病能力。刺激乳、仔猪免疫器官的生长发育。激活T、B淋巴细胞，增加机体细胞免疫力和体液免疫力，是优良的免疫伴侣。</p>
            <p>优化养殖环境，提高饲料转化率，降低粪便中的臭味，并能增加体内有益菌的生长，减少有害微生物的滋生，以生物学的方式净化养殖场，减少疾病的发生。</p>
            <img src="../../static/img/detail/Xiaofeibao_2.png" />
        </div>
        <!-- 二维码弹出框 -->
        <div class="asideMessage">
            <div class="phone" >
                 <img  src="../../static/img/index/iphone.png" @click="open1"/>
                <div v-show="phone" class="phone-content">
                    <span style="color:rgba(6,145,59,1);">联系电话0371-55150201</span>
                    <img src="../../static/img/index/close.png" @click="close1" key="1"/>
                </div>
            </div>
           
            <div class="henggang"></div>
             <div class="erweima" >
                 <img  src="../../static/img/index/erweima.png"  @click="open2"/>
                 <div v-show="erweima" class="erweima-content">
                    <span>联系电话0371-55150201</span>
                    <img src="../../static/img/index/close.png" @click="close2" key="2"/>
                </div>
            </div>
           
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            phone:false,
            erweima:false
        }
    },
     methods: {
      open1() {
        this.phone=true;
      },
     open2() {
      this.erweima=true;
     },
     close1(){
        
        this.phone=false;
     },
     close2(){
        
         this.erweima=false;
     }
    },
}
</script>

<style scoped>
 #detail1{
     width:100%;
 }
 .product-type{
     background: url("../../static/img/index/Product_Xiaofeibao.png") no-repeat;
     height: 544px;
     padding:316px 0 0 0px;
     background-size: 100% 100%;
     width:100%;
 }
 .product-type h2{
     width:247px;
height:56px;
font-size:40px;
font-family:PingFangSC-Semibold;
margin-left:130px;
color:rgba(0,78,30,1);
line-height:56px;
letter-spacing:1px;
 }
 .product-type p{
     width:307px;
height:33px;

font-size:24px;
font-family:PingFangSC-Semibold;
margin:10px 0 20px 130px;
color:rgba(0,78,30,1);
line-height:33px;
letter-spacing:1px;
 }
 .product-type div{
     width:160px;
height:54px;
border-radius:43px;
margin-left:130px;
border:2px solid rgba(0,61,34,1);
line-height:54px;

 }
 .product-type img{
     vertical-align: middle;
     width:18px;
height:20px;
 }

 /* 产品特点 */
 .product-point:after{
     display: block;
     clear: both;
     visibility: hidden;
     overflow: hidden;
     height:0;
     content: "."
 }
 .product-point div:nth-child(1){
     float: left;
     margin-left:130px;
     width:24%;
 }
 .product-point div:nth-child(2){
     float:left;
     margin:-130px 0 0 100px;
     width:48%
 }
 .product-point div:nth-child(2) img{
     width:100%;
height:480px;
background:rgba(255,255,255,1);
box-shadow:2px 0px 24px 0px rgba(128,128,128,0.2);
border-radius:10px;
 }
 .product-point div:nth-child(1) h2{
     width:120px;
height:33px;
font-size:24px;
font-family:PingFangSC-Semibold;
font-weight:600;
color:rgba(51,51,51,1);
line-height:33px;
margin-bottom: 20px;
 }
 .product-point div:nth-child(1) p{
 font-size:14px;
font-family:PingFangSC-Semibold;

color:rgba(102,102,102,1);
letter-spacing:1px;
text-align: left
 }

 /* 功能 */
 .product-function{
  padding-left:130px;
  margin-top:64px;
 }
 .product-function h2{
     width:120px;

font-size:24px;
margin-bottom: 30px;
color:rgba(51,51,51,1);

 }
 .product-function p{
     width:85%;

font-size:14px;
font-family:PingFangSC-Semibold;
text-align: left;
color:rgba(102,102,102,1);
line-height:20px;
letter-spacing:1px;
 }
 .product-function img{
     width:85%;
     height:270px;
     
     margin:30px 0 50px;
 }

 /* 二维码弹出框 */
 .asideMessage{
     width:54px;
height:160px;
background:rgba(255,255,255,1);
box-shadow:2px 0px 24px 0px rgba(128,128,128,0.5);
border-radius:12px 0px 0px 12px;
position:fixed;
top:300px;
right:0;
 }
 .asideMessage img{
     width:30px;
height:34px;

 }
 .asideMessage .phone,.erweima{
     height:55px;
     padding-top:25px;
 }
 .asideMessage .henggang{
     border-bottom: 1px solid rgba(6,145,59,0.4);
 }
 .phone ,.erweima{
     position:relative;
 }
 .phone-content{
     position: absolute;
     left:-288px;
     top:0;
     width:288px;
height:80px;
line-height:80px;
background:rgba(255,255,255,1);
box-shadow:2px 0px 24px 0px rgba(128,128,128,0.5);
border-radius:10px;
display: table-cell;
vertical-align: middle;
 }
 .erweima-content{
     position: absolute;
     left:-288px;
     top:0;
     width:288px;
height:288px;
background:rgba(255,255,255,1);
box-shadow:2px 0px 24px 0px rgba(128,128,128,0.5);
border-radius:10px;
display:table-cell;
vertical-align: middle;
color:rgba(6,145,59,1);
 }
 .phone-content img{
     vertical-align: middle;
     width:24px;
     height:24px;
     margin-left:10px;
 }
  .erweima-content img{
     vertical-align: middle;
     width:24px;
     height:24px
 }
</style>

