<template>
    <div>
        user
        <ul>
            <li><router-link :to="{name:'list'}">新闻列表</router-link></li>
            <li><router-link :to="{name:'user'}">个人中心</router-link></li>
        </ul>
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
                this.title=''
                this.content=''
                this.$router.push('/home/list')
            },
        },
    }
</script>

<style scoped>

</style>
