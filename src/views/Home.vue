<template>
  <div class="home">
    <div class="info_box">
      <div class="avatar">
        <div class="redpoint"></div>
        <img src="../assets/logo.png" width="40px" height="43px">
      </div>
      <div class="text">
        <div><strong>Hello,Alex Suprun</strong></div>
        <div class="location">San France</div>
      </div>     
      <div class="clear"></div>
    </div>
    <div class="search_box">
      <el-input v-model="input" placeholder="SEARCH FOR MENU"><i slot="prefix" class="el-input__icon el-icon-search"></i></el-input>
    </div>

    <div class="carousel_box">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <Bar></Bar>
  </div>
</template>

<script>
import Bar from '../components/bar'

export default {
  name: 'Home',
  components: {
    Bar
  },
  data(){
    return{
      avatarUrl:'',
      input:''
    }
  }
}
</script>

<style scoped lang='less'>
/*rectangle*/

.home{
  margin:44px 30px 34px 30px;
  .info_box{
    height: 46px;
    margin-top:16px;
    .text{
      strong{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      }
      .location{
        margin-top:4px;
        font-family: 'Courier New', Courier, monospace;
        color:rgb(102, 102,102)
      }
    }
    .avatar{
      // border: 1px solid red;
      .redpoint{
        position: absolute;
        right:2.5rem;
        width: 7px;
        height: 7px;
        background-color: red;
        border-radius: 100%;
      }
      img{
        float: right;
        border-radius:0 16px 0 16px;
      }
    }
    .clear{
      clear: both;
    }
  }

  .search_box{
    margin:20px 0;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 2px 11px 39px rgba(160, 159, 159, 0.3);
    // .el-input__inner{
    //   border-radius:16px;
    //   border: 1px red solid;
    // }
  }
  .carousel_box{
    height: 340px;
    border-radius: 32px;
    background-color: rgba(255, 255, 255, 1);
    // box-shadow: 0 30px 20px -12px rgba(160, 159, 159, 0.3);
    .el-carousel__container{
      
    }   
  }
}
</style>
