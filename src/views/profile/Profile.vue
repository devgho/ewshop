<template>
  <nav-bar>
    <template v-slot:left>&lt;</template>
    <template v-slot:default>个人中心</template>
  </nav-bar>
</template>

<script>
import NavBar from "@/components/common/NavBar";
export default {
  name: "Profile",
  components:{
    NavBar
  }
}
</script>

<style scoped>

</style>