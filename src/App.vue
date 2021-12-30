<template>
  <div id="app">
   <!-- 路由占位符, 这样通过路由所匹配到的组件都会渲染到这里 -->
   <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'

}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  border: 0;
}
</style>
