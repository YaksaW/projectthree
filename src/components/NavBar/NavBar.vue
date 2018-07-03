<template>
    <div class="navbar">
        <span class="iconfont icon-talk"></span>
        <form action="" class="search_form">
            <i class="iconfont icon-cx search_icon"></i>
            <input type="text" class="search">
        </form>
        <span class="iconfont icon-shop"></span>
    </div>
</template>
<script>
export default {
    
}
</script>

<style lang="less">
    .navbar{
        display: flex;
        align-items: center;
        padding: 0.075rem 0.3rem;
        height: 0.8rem;
        span{
           font-size: 0.42rem;
           color: #666;
        }
        .search_form{
            margin: 0 0.35rem;
            width: 75%;
            position: relative;
            .search_icon{
                position: absolute;
                font-size: 0.3rem;
                color: #666;
                line-height: 0.5rem;
                left:0.1rem;
            }
            .search{
                border-radius: 0.05rem;
                background-color: #eee;
                border: none;
                height: 0.5rem;
                width: 100%;
                outline: none;
                padding-left:0.5rem 

            }
        }
        

    }
</style>
