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
import store from '@/store'
    export default {
        name: "add",
        store,
        data(){
            return{
                title:'',
                content:'',
            }
        },
        methods:{
            add(){
                store.commit('addItem',{
                    title:this.title,
                    content:this.content
                })
            },
        },
    }
</script>

<style scoped>

</style>
