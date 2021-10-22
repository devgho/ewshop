<template>
  <div class="recommend">
    <div class="recommend-item">
      <a href="">
        <img src="~assets/images/11.png" alt="good">
        <p>细说PHP</p>
      </a>
    </div>
    {{recommends}}
  </div>
</template>

<script>
export default {
  name: "recommend",
  props:{
    recommends:{
      default(){
        return ['haha']
      }
    }
  }
}
</script>

<style scoped lang="scss">
.recommend{
  margin-top:40px;
  display: flex;
  text-align: center;
  padding: 15px 0 30px;
  width:100%;
  border-bottom: 2px #eee solid;
}
.recommend-item{
  flex:1;
  img{
    width:70px;
    height:70px;
    margin-bottom:10px;
  }
}
</style>