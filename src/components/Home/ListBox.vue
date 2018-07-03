<template>
    <div class="ListBox">
        <TypeItem class="item" v-for="(v,i) of 10" :key="i"></TypeItem>
    </div>
</template>
<script>
import TypeItem from './TypeItem'
export default {
    components:{
        TypeItem
    }
}
</script>
<style lang="less">
    .ListBox{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .item{
            width: 20%;
        }
    }
</style>

