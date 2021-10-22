<template>
  <div id="nav">
    <div class="tab-bar-item">
      <router-link to="/"><i class="iconfont icon-shouye"></i><br>首页</router-link>
    </div>
    <div class="tab-bar-item">
      <router-link to="/category"><i class="icon-fenlei iconfont"></i><br>分类</router-link>
    </div>
    <div class="tab-bar-item">
      <router-link to="/shopcart"><i class="iconfont icon-gouwuche"></i><br>购物车</router-link>
    </div>
    <div class="tab-bar-item">
      <router-link to="/profile"><i class="iconfont icon-yonghu"></i><br>我的</router-link>
    </div>
  </div>
  <router-view/>
</template>

<style lang="scss">
@import "assets/css/base.css";
@import "assets/css/iconfont/iconfont.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  background:#F4F4F4;
  padding: 10px;
  position:fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;

  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: var(--color-high-text);
    }
  }
}

.tab-bar-item{
  flex:1;
  height:50px;
}
.tab-bar-item .iconfont{
  font-size: var(--font-size);
}
</style>
