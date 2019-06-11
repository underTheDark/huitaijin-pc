<template>
  <div id="index">
    <div id="header">
      <div class="header-left">
        <img src="../../static/img/index/Logo.png" />
        <span>河南汇台金集团</span>
      </div>
      <div class="header-right">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">首页</el-menu-item>
          
          <el-menu-item index="2" >产品</el-menu-item>
          <el-menu-item index="3" >关于我们</el-menu-item>
          <el-menu-item index="4" >联系我们</el-menu-item>
          
        </el-menu>
      </div>
    </div>
    <router-view></router-view>
    <div id="footer">
        <div class="footer-left">
            <div>
                 <img src="../../static/img/index/Logo.png" />
                 <span>河南汇台金集团</span>
            </div>
             <div>河南汇台金集团是一家以动物营养科技、尖端生物科技为基础，严格按照兽药GMP标准建造，专业从事高端饲料添加剂科研、生产、销售于一体的科技型技术企业。</div>
             <div class="partThree">
                 <span>京公网安备&nbsp;11000002000088号</span>
                  <span class="shugang">|</span>
                 <span>营业执照</span>
                  <span class="shugang">|</span>
                 <span>经营执照</span>
             </div>
        </div>
        <div class="footer-right">
            <div>关于</div>
            <div>
                <span>公司名称：河南汇台金实业有限公司</span>
                <span class="shugang">|</span>
                 <span>销售地址：花园路69号</span>
                 <span class="shugang">|</span>
                  <span>生产地址：河南省郑州市花园口工业区</span>
            </div>
             <div>
                <span>电话：0371-55150201</span>
                <span class="shugang"></span>
                 <span>传真：0371-55150201</span>
                 <span class="shugang"></span>
                  <span>邮编：45000</span>
            </div>
             <div>
               <img src="../../static/img/index/qq.png" />
                <img src="../../static/img/index/weibo.png" />
                 <img src="../../static/img/index/weixin.png" />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
         return{
         activeIndex: '1',
         }
    },
     methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }

};
</script>

<style scoped>
#index{


width:100%;
}
/* 头部 */
#header{

height:72px;

opacity:0.9;
overflow: hidden;
}
#header .header-left{
    float:left;
    margin-left:130px;
    height:72px;
    display:table-cell;
    vertical-align: middle;
}
.header-left img{
width:48px;
height:48px;
vertical-align: middle;
}
.header-left span{
display:inline-block;
height:72px;
line-height:72px;
  width:126px;
font-size:18px;
font-family:PingFangSC-Medium;
font-weight:500;
color:rgba(0,78,30,1);

}
.header-right{
    float:right;
    height:72px;
    margin-right:130px;
}
.header-right .el-menu{
height:100%;
}
.el-menu .el-menu-item{
    height:72px;
    line-height:72px;
    margin:0 36px;
    color:rgba(51,51,51,1);
    padding:0;
    }
.el-menu--horizontal>.el-menu-item.is-active {
    color:rgba(0,61,34,1);
    border-color:rgba(0,61,34,1);
}


/* 尾部 */
#footer{
 
height:224px;
background:linear-gradient(135deg,rgba(96,205,151,1) 0%,rgba(34,149,108,1) 100%);
padding-top:56px;
}
.footer-left{
    float:left;
    margin-left:130px;
    width:436px;
}
.footer-left div:nth-child(1){
   
    height:48px;
    line-height:48px;
    margin-bottom:20px;
   
     display:table-cell;
    vertical-align: middle;
}
.footer-left  div:nth-child(1) img{
    width:48px;
    height:48px;
     border: none;
   
    vertical-align: middle;
}
.footer-left div:nth-child(1) span{
    
    width:112px;
    font-size:16px;
font-family:PingFangSC-Semibold;
font-weight:600;
color:rgba(255,255,255,1);

}

.footer-left div:nth-child(2){
    width:436px;
height:34px;
font-size:12px;
font-family:PingFangSC-Semibold;
font-weight:500;
color:white;
margin-top:10px;
}
.footer-left div:nth-child(3){
    margin-top:30px;
    text-align: left;

font-size:12px;
font-family:PingFangSC-Semibold;
font-weight:500;
color:rgba(255,255,255,1);

}



/* 尾部右部分 */
.footer-right{
    float:left;
    margin-left:10%;
    text-align: left;
    font-size:14px;
font-family:PingFangSC-Semibold;
color:rgba(255,255,255,1);
}
.footer-right div:nth-child(1){
margin-bottom:5px;
 height:48px;
font-size:16px;
font-family:PingFangSC-Semibold;
font-weight:600;

line-height:48px;
}


#footer .shugang{
   padding:0 5px ;
}
.footer-right div:nth-child(3){
    margin:10px 0;
}
</style>


