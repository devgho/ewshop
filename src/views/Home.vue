<template>
  <div class="home">
    <p class="demo1">this is a text</p>
    <div id="demo"></div>
    <img src="~assets/images/1.png">
    <img :src="imgsc" alt="">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {onMounted} from "vue";
import {getHomeAllData} from "@/network/home";

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return {
      imgsc:require('assets/images/11.png')
    }
  },
  setup(){
    onMounted(()=>{
      getHomeAllData().then(res=>{
        console.log(res.slides);
      })
    })
  }
}
</script>

<style lang="scss" scoped>
  #demo{
    background: url("~assets/images/1.png") no-repeat;
    height: 100px;
    width: 100px;
  }
  .demo1{
    color:var(--color-high-text);
  }
</style>