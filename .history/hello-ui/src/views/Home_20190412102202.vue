<template>
    <div>
        <router-view />
        <ul>
            <li><router-link :to="{name:'list'}"></router-link></li>
            <li><router-link :to="{name:'user'}"></router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>

</style>
