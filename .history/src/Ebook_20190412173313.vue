<template>
    <div class="" id="">
        <h1>ebook</h1>
    </div>
</template>
<script>
import Epub from 'epubjs'
const DOWNLOAD_URL='../static/lover.epub'
export default {
   data() {
      return {

      }
   },
   methods:{
       //电子书的解析和渲染
       showEpub(){
           //生成Book
           console.log(1111);
           this.book=new Epub(DOWNLOAD_URL)
           console.log(this.book);
           
           //生成Rendition
           //通过Rendition.display 渲染电子书
       },
       mounted () {
           this.showEpub()
       },
   },
}
</script>
<style scoped>
@import './assets/styles/global.scss';
/*  */
</style>
