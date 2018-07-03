<template>
    <div class="foot_bar">
        <router-link class="foot_bar_list" to="" >
            <i class="iconfont icon-home"></i>
            <p>首页</p>
        </router-link> 
        <router-link to="" class="foot_bar_list">
            <i class="iconfont icon-leimupinleifenleileibie"></i>
            <p>分类</p>
        </router-link> 
        <router-link to="" class="foot_bar_list">
            <i class="iconfont icon-shop"></i>
            <p>购物车</p>
        </router-link> 
        <router-link to="" class="foot_bar_list">
            <i class="iconfont icon-wode"></i>
            <p>我的</p>
        </router-link>   
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less">
    .foot_bar{
        width: 100%;
        display: flex;
        position: fixed;
        bottom: 0;
        border-top:0.01rem solid #ccc;
        &_list{
            display: block;
            text-align: center;
            width: 25%;
            padding: 0.1rem 0;
            color: #666;
            i{
                font-size: 0.37rem
            }
        }
    }
</style>
