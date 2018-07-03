<template>
<swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="(v,i) of 4" :key="i">
        <img class="slide-img" src="http://via.placeholder.com/475x170">
    </swiper-slide> 
    <div class="swiper-pagination" id="pag" slot="pagination"></div>
    
</swiper>  

</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    data(){
        return {
            swiperOption:{
                autoplay: true,
                pagination: {
                    el: '.swiper-pagination',                 
                },
            }
        }
    },
  components: {
    swiper,swiperSlide
  }
}

</script>
<style lang="less">
    .slide-img{
        width: 100%;
    }
    #pag{
        text-align: left;
        padding-left: 0.15rem;
        span{
            margin-left:0.15rem;
        }
    }
</style>
