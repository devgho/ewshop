<template>
  <nav-bar>
    <template v-slot:left>&lt;</template>
    <template v-slot:default>分类</template>
  </nav-bar>
</template>

<script>
import NavBar from "@/components/common/NavBar";

export default {
  name: "Category",
  components:{
    NavBar
  }
}
</script>

<style scoped>

</style>