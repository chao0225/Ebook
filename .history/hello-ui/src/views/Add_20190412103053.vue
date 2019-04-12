<template>
    <div>
        <h3>标题</h3>
        <input type="text" v-model="title">
        <h3>内容</h3>
        <input type="text" v-model="content">
        <div class="btn" @click="add()">添加</div>        
    </div>
</template>

<script>
    export default {
        name: "add",
        data(){
            return{
                title:'',
                content:'',
            }
        },
        methods:{
            add(){
                
            },
        },
    }
</script>

<style scoped>

</style>
