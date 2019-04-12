<template>
  <div id="app">
    <span class="icon-chevron-left"></span>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name:"App"
}
document.addEventListener('DOMContentLoaded',()=>{
  const html=document.querySelector('html')
  let fontSize=window.innerWidth/10
  fontSize=fontSize>20?20:fontSize
  html.style.fontSize=fontSize+'px'
})
</script>
<style lang="scss">

</style>
