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
      <el-carousel indicator-position="outside" :autoplay=false>
        <el-carousel-item v-for="item in food_pic" :key="item.id">
          <img src="../assets/food/food1.jpeg">
          <!-- <img :src="item.url"> -->

          <div class="text_box">
            <div class="describe">
              <div><strong>Fig And Ricotta Oatmeal</strong></div>
                {{item.describe}}
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="recommend_box">
      <div class="title">
        <strong>Everyday Meals</strong>
        <div class="view_all">View all</div>
      </div>

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
      input:'',
      food_pic:[{
        id:1,
        url:"../assets/food/food1.jpeg",
        describe:'Add Italian whey cheese,figs,almonds and honey.sweet and delicious.with high nutritional value.'
      },{
        id:2,
        url:'../assets/food/food2.jpeg',
        describe:'Add Italian whey cheese,figs,almonds and honey.sweet and delicious.with high nutritional value'
      },{
        id:3,
        url:'../assets/food/food3.jpeg',
        describe:'Add Italian whey cheese,figs,almonds and honey.sweet and delicious.with high nutritional value'
      }]
    }
  },
  created(){
    // console.log(this.food_pic[1].url)
  },
  methods:{
    hover(){
      
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
        right:2rem;
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
  }
  .carousel_box{
    height: 400px;
    border-radius: 32px;
    background-color: rgba(255, 255, 255, 1);
    img{
      width: 100%;
      height: 271px;
      border-radius:32px;
    }
    .text_box{
      width: 253px;
      height: 96px;
      position: relative;
      top: -70px;
      margin:0 auto; 
      background-color: rgba(255, 255, 255, 1);
      border-radius:5px;
      box-shadow: 0 25px 30px -15px rgba(160, 159, 159, 0.3);
      display: flex;
      // justify-content: center;
      align-items: center;
      .describe{
        padding:  0 20px;
        font-size: 12px;
        color: #999999;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;/*想省略几行就写几*/
        -webkit-box-orient: vertical;
        strong{
          display: block;
          margin: 6px 0;
          font-size: 14px;
          color: #000;
        }
      }
    }
  }
  .recommend_box{
    .view_all{
      float:right;
      color:#F5A623 ;
      font-size: 14px;
    }
  }
}
</style>
