<template>
    <div id="detail3">
        <div class="product-type">
            
            <h2>汇台金大肥宝</h2>
            <p>大肥宝是大猪吃的60斤—出栏</p>
            <div>
                <img src="../../static/img/index/play.png" />
                <span>观看视频</span>
            </div>
        </div>
        <div class="product-point">
             <div>
                 <h2>大肥宝特点</h2>
              
                 <p>1、有效降低料肉比有效降低料肉0.2-0.35饲料转化率提高11%</p>
                 <p>2、明显增加采食量提高采食量8%-26%</p>
                 <p>3、明显改善体型背宽、腹平、后驱和臀部肌肉丰满、结实、背膘薄</p>
                 <p>4、提高酮体出肉率脂瘦肉增长速度提高33%平均提高增重12%</p>
                 <p>5、生物脱霉、减少危害提高免疫力有效降低发病率3%-.5%</p>
                 <p>6、出栏早有效缩短出栏天数20天，提高收益50%以上，每头猪投资30元， 可以多赚200元以上</p>
                 <p>7、明显改善养殖环境猪粪排泄、减少氨气及臭味</p>
                 <p>8、平衡营养皮肤红润、毛色光亮</p>
                 <p>9、彻底驱虫体内外寄生虫一网打尽</p>
                 <p>10、调节肠胃道肠道疾病发病率减少50%以上</p>
             </div>
             <div>
                  <img src="../../static/img/detail/Dafeibao_1.png" />
            </div>
        </div>
        <div class="product-function">
            <h2>大肥宝功能</h2>
            <p>1、显著提高瘦肉率，无脂瘦肉增长速度提高33%，提高商品猪酮体瘦肉率和肌面积，提高屠宰率，明显改善生猪外观体形，背宽沟深，腹部平面紧凑，后臀肌肉突出，腿部丰满。</p>
            <p>2、提高氮积，增加蛋白质合成，促进机体营养物质吸收，改善饲料转化率(平均提高饲料利用率达11%)，省长省能，降低料肉比。</p>
            <p>3、促进蛋白质的合成和骨骼生长，平均提高增重达12%。</p>
            <p>4、使肌肉变红，改善猪肉品质。降低滴水损失。</p>
          
            <p>5、能有效完全分解平衡饲料中各种蛋白质的转化利用，使动物更易消化吸收、生长快速，并达到最佳生产性能。</p>
          
            <img src="../../static/img/detail/Dafeibao_2.png" />
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
 #detail3{
     width:100%;
 }
 .product-type{
     background: url("../../static/img/index/Product_Dafeibao.png") no-repeat;
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

