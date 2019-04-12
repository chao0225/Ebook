<template>
    <div>
        <form  v-if="!isReg">
            用户名：
            <input type="text" v-model="name"><br>
            密码：
            <input  type="password" v-model="password"><br>
            <button type="button" @click="login()">登录</button>
            <button type="button" @click="reg()">注册</button>
        </form>
        <form v-else>
            用户名：
            <input type="text" v-model="name"><br>
            密码：
            <input type="password" v-model="password"><br>
            再次输入密码：
            <input  type="password" v-model="repeat"><br>
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
                if(localStorage.setItem('name')===this.name && localStorage.setItem('password')===this.password){}
                this.$router.push('/home/list')
            },
            reg(){
                this.isReg=true
            },
            addUser(){
                if(this.password===this.repeat){
                    localStorage.setItem("name",this.name)
                localStorage.setItem("password",this.password)
                }else{
                    alert('两次密码输入不一致')
                }
                
            },
            cancel(){

            },
        },
    }
</script>

<style scoped>

</style>
