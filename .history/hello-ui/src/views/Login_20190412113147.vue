<template>
    <div>
        <form  v-if="!isReg">
            用户名：
            <input type="text" v-model="name">
            密码：
            <input type="text">
            <button type="button" @click="login()">登录</button>
            <button type="button" @clicl="reg()">注册</button>
        </form>
        <form v-else>
            用户名：
            <input type="text">
            密码：
            <input type="text">
            再次输入密码：
            <input type="text">
            <button type="button" @click="addUser()">确定</button>
            <button type="button" @click="cancel()">取消</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return {
                isReg:false,
                name:'',
                passworld:'',
            }
        },
        methods:{
            login(){
                this.$router.push('/home/list')
            },
            reg(){
                this.isReg=true
            },
            addUser(){

            },
            cancel(){

            },
        },
    }
</script>

<style scoped>

</style>
