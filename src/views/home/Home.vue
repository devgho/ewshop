<template>
  <nav-bar>
    <template v-slot:left>&lt;</template>
    <template v-slot:default>首页</template>
  </nav-bar>
  <Recommend :recommends=recommends></Recommend>
</template>

<script>
import NavBar from "components/common/NavBar";
import Recommend from "components/common/Recommend";
import {getHomeAllData} from "@/network/home";
import {onMounted, ref} from "vue";
export default {
  name: "Home",
  components:{
    NavBar,
    Recommend
  },
  setup(){
    let recommends = ref([]);
    onMounted(()=>{
      getHomeAllData("recommend=1").then(res=>{
        console.log(res);
        recommends.value = res.recommend;
      })
    })
    return {recommends}
  }
}
</script>

<style scoped>

</style>