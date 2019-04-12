<template>
    <div>
        <form  v-if="!isReg">
            用户名：
            <input type="text" v-model="name">
            密码：
            <input type="text" v-model="password">
            <button type="button" @click="login()">登录</button>
            <button type="button" @click="reg()">注册</button>
        </form>
        <form v-else>
            用户名：
            <input type="text" v-model="name">
            密码：
            <input type="text" v-model="password">
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
                password:'',
                repeat:''
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
                localStorage.setItem("name",this.name)
                localStorage.setItem("password",this.password)
            },
            cancel(){

            },
        },
    }
</script>

<style scoped>

</style>
