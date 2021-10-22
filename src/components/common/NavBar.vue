<template>
  <div class="navbar">
    <div class="left" @click="back"><slot name="left"></slot></div>
    <div class="center"><slot>Ewshop</slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
import {useRouter} from "vue-router"
export default {
  name: "NavBar",
  setup(){
    const router = useRouter();
    return {
      back(){
        router.back();
      }
    }
  }
}
</script>

<style scoped>
.navbar{
  position:fixed;
  top:0;
  left:0;
  right:0;
  background:lightcyan;
  z-index:9;
  display: flex;
  height:40px;
  box-shadow: 0 3px 1px #ccc;
  line-height:40px;
}
.center{
  flex:1;
}
.right,.left{
  width:60px;
}
</style>