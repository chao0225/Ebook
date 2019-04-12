<template>
    <div>
        <h1>user</h1>
        <button type="button" @click="add()">添加</button>
    </div>
</template>

<script>
    export default {
        name: "user",
        methods:{
            add(){
                this.$router.push('/add')
            },
        },
    }
</script>

<style scoped>

</style>
