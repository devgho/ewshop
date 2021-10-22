<template>
  <nav-bar>
    <template v-slot:left>&lt;</template>
    <template v-slot:default>购物车</template>
  </nav-bar>
</template>

<script>
import NavBar from "@/components/common/NavBar";

export default {
  name: "Shopcart",
  components:{
    NavBar
  }
}
</script>

<style scoped>

</style>