<template>
    <div>
        <ul>
            <li v-for></li>
        </ul>
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
