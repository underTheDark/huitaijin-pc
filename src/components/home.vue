<template>
  <div id="home">
    <div id="banner">
        <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in bannerList" :key="item">
               <img :src="item" />
            </el-carousel-item>
        </el-carousel>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            bannerList:["../../static/img/index/Home_Dafeibao.png",
            "../../static/img/index/Home_Xiaofeibao.png","../../static/img/index/Home_Gaodazhuang.png",]
        }
    },
    
};
</script>

<style scoped>
</style>


