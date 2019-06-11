<template>
    <div id="detail2">
        <div class="product-type">
            
            <h2>汇台金高大壮</h2>
            <p>牛羊鹿等使用的体格大小皆宜</p>
            <div>
                <img src="../../static/img/index/play.png" />
                <span>观看视频</span>
            </div>
        </div>
        <div class="product-point">
             <div>
                 <h2>高大壮特点</h2>
              
                 <p>1、有效降低料肉比0.1-0.2，饲料转化率提高11%</p>
                 <p>2、明显增加采食量提高采食量8%-26%</p>
                 <p>3、明显改善体形脖颈明显增粗，鞍口肌肉明显增多，牛精神状态饱满，壁子骨上端外脊增厚，牛粗实。</p>
                 <p>4、提高胴体出肉率无脂瘦肉增长速度提高33%。平均提高增重12%</p>
                 <p>5、生物脱霉，减少危害有效降低发病率3%- 5%</p>
                 <p>6、出栏早有效缩短出栏天数30- 50，提高收益50%以上</p>
                 <p>7、明显改善养殖环境减少牛粪排泄，减轻氨气及臭味</p>
                 <p>8、平衡营养膘肥体健、毛色光亮</p>
                 <p>9、消除牛的亚健康提高免疫力，消除免疫抑制</p>
                 <p>10、调节肠胃肠道强效防治瘤胃积食胀气、腹泻、便秘等各种胃肠道疾病，维持井调节牛(羊)胃肠内微生态平衡。</p>
             </div>
             <div>
                  <img src="../../static/img/detail/Gaodazhuang_1.png" />
            </div>
        </div>
        <div class="product-function">
            <h2>高大壮功能</h2>
            <p>1、多种益生黄在肠道内迅速靶向定制形成有益菌群，抑制合消灭致病菌群，脱霉解毒，强效防治瘤胃及时胀气、翻出次数减少、胃酸吐沫、范围吐槽、倒模流体、肠痉挛、腹泻、便秘等各种胃肠道疾病，维持并调节牛羊胃肠内微生态平衡。</p>
            <p>2、提高饲料利用率，降低料肉比:增强瘤胃的发酵功能，调节胄肠群和Ph值，促进纤毛虫的繁殖增生，改善胃肠消化功能，促进营养物质的消化吸收，可降低料肉比0.1-0.2%。</p>
            <p>3、提高免疫力和抗病力，防病治病;开胃健胃、消食健胃 促动物采食量、催肥键膘、促进机体新城代谢，加速生长、改良肉品质，提高饲料利用率，增加养殖效益。</p>
            <p>4、本品富含活性酵母蘭、双歧杆菌、乳酸菌分泌合成大量的消化酶、有机酸、有机维生素、氨基酸等;加速牛、羊胃肠微生物对精、粗饲料的发酵分解，促进胃肠蠕动和消化液的分泌，改善牛、羊消化生理机能。</p>
          
            <p>5、改善饲养环境:减少舍内氨气、硫化氢等有害气体含量，抑制有害菌的滋生，避免对养殖环境的二次污染，从而防止呼吸道病的发生，为动物健康生长营造最佳环境。</p>
          
            <img src="../../static/img/detail/Gaodazhuang_2.png" />
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
 #detail2{
     width:100%;
 }
 .product-type{
     background: url("../../static/img/index/Product_Gaodazhuang.png") no-repeat;
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
height:33px;
text-align: left;
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

