<template>
    <div class="" id="">
        <h1>ebook</h1>
    </div>
</template>
<script>
import Epub from 'epub.js'
const DOWNLOAD_URL='/static/2018_Book_AgileProcessesInSoftwareEngine.epub'
export default {
   data() {
      return {
      }
   },
   methods:{
       //电子书的解析和渲染
       showEpub(){
           //生成Book
           this.book=new Epub(DOWNLOAD_URL)
           console.log(this.book);
           //生成Rendition
           //通过Rendition.display 渲染电子书
       },
   },
}
</script>
<style scoped>
@import './assets/styles/global.scss';
/*  */
</style>
