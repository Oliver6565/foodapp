<template>
  <div class="bar">
      <div class="icons">
        <img @click="toHome" src="../assets/img/icon/icon0.jpg">
        <img @click="toCollection" src="../assets/img/icon/icon1.jpg">
        <img src="../assets/img/icon/icon2.jpg">
        <img @click="toMall" src="../assets/img/icon/icon3.jpg">
        <img @click="toProfile" src="../assets/img/icon/icon4.jpg">
      </div>
  </div>
</template>

<script>
export default {
  methods:{
    toHome(){
      this.$router.push({
        path:"/"
      })
    },
    toCollection(){
        this.$router.push({
        path:"/Collection"
      })
    },
    toMall(){
        this.$router.push({
        path:"/Mall"
      })
    },
    toProfile(){
        this.$router.push({
        path:"/Profile"
      })
    }
  }
}
</script>

<style lang="less" scoped>
.bar{
  position: fixed;
  background-color: #fff;
  bottom: 0;
  width: 100%;
  height: 83px;
  border-radius:50px 50px 0 0 ;
  box-shadow: 0 -4px 15px -2px rgba(160, 159, 159, 0.3); //顶部阴影;

  // display: flex;
  // align-items: center;
  .icons{
    img{
      margin-top: 25px;
      margin-left: 45px;
    }
  }
}

</style>>
