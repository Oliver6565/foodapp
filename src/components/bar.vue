<template>
  <div class="bar">
      <div class="icons">
        <img src="../assets/img/icon/icon0.jpg">
        <img src="../assets/img/icon/icon1.jpg">
        <img src="../assets/img/icon/icon2.jpg">
        <img src="../assets/img/icon/icon3.jpg">
        <img src="../assets/img/icon/icon4.jpg">
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.bar{
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 83px;
  border-radius:50px 50px 0 0 ;
  box-shadow: 0 -4px 15px -2px rgba(160, 159, 159, 0.3); //顶部阴影;

  // display: flex;
  // align-items: center;
  .icons{
    img{
      padding-top: 25px;
      padding-left: 45px;
    }
  }
}

</style>>
