<template>
    <div>
        <form action="">
            用户名：
            <input type="text" v-if="!isReg">
            密码：
            <input type="text">
            <button type="button" @click="reg()">登录</button>
            <button type="button">注册</button>
        </form>
        <form action="">
            用户名：
            <input type="text">
            密码：
            <input type="text">
            再次输入密码：
            <input type="text">
            <button type="button" @click="reg()">登录</button>
            <button type="button">注册</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "login",
        methods:{
            reg(){
                this.$router.push('/home/list')
            }
        },
    }
</script>

<style scoped>

</style>
