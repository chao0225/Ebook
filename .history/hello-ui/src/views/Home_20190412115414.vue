<template>
    <div>
        <router-view />
        <ul class="footer">
            <li><router-link :to="{name:'list'}">新闻列表</router-link></li>
            <li><router-link :to="{name:'user'}">个人中心</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>
    .footer{
        position:fixed;
        width:100%;
        height:60px;
        line-height: 60px;
        left:0;
        bottom:0;
        display: flex;
        flex-flow: row nowrap;
        justify-content:space-around;

    }
    .icons{
        fons-size:16px;
        flex:1;
        text-align:center;
        border-top:1px solid #42bp83; 
    }
</style>
