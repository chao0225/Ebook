<template>
    <div>
        
    </div>
</template>

<script>
import store from '@/store'
    export default {
        name: "list",
        store,
        computed:{
            pageLists(){
                return store.state.lists
            }
        },
    }
</script>

<style scoped>

</style>
