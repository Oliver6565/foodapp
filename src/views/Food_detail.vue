<template>
<div class="top_bg">
    <div class="foodDetail">
      <div class="info_box">
        <div class="left"><img src="../assets/img/icon/return.svg" width="40px" height="40px" @click="toHome"></div>
        <div class="right">
            <img src="../assets/img/icon/like.svg" width="40px" height="40px">
            <img src="../assets/img/icon/share.svg" width="40px" height="40px">
        </div>
        <div class="clear"></div>
      </div>
      <div class="text_box">
        <div class="describe">
          <h2>Ojingeo Muchim</h2>
          <div class="star">Level 5</div> 
          <div class="introduction">
            <strong>Introduction</strong>
            <div>Ojingeo muchim is a spicy,sweet and tangy dish that's made with boiled 
              squid and fresh vegetables. The perfect blend of spicy, sweet, and sour tastes
              in this dish will surely increase your appetite.
            </div>
          </div>

          <div class="ingredients">
            <strong>Ingredients</strong>
            <div class="view_all">View all</div>
            <div>1 medium squid about 14 ounces<br>
1 kirby cucumber or 1/2 Korean cucumber thinly sliced<br>
1/4 medium red onion thinly sliced<br>
a few stalks minari water dropwort, cut into 2-inch pieces<br>
1 green or red chili pepper thinly sliced<br>
1 scallion finely chopped<br>
2 teaspoons gochugaru Korean red chili pepper flakes<br>
1 tablespoon gochujang Korean red chili pepper paste<br>
2 teaspoons soy sauce</div>
          </div>

          <div class="listofraw">
            <strong>List Of Raw Materials</strong>
            <div class="materials_box">
              <div class="materials">
                <img src="../assets/img/food/squid.svg">
                <div class="name">Squid</div>
              </div>
              <div class="materials">
                <img src="../assets/img/food/cucumber.svg">
                <div class="name">cucumber</div>
              </div>
              <div class="materials">
                <img src="../assets/img/food/shallot.svg">
                <div class="name">shallot</div>
              </div>
              <div class="materials">
                <img src="../assets/img/food/pepper.svg">
                <div class="name">pepper</div>
              </div>
            </div>
          </div>
          <div class="button_purchase">
            <el-button type="warning" round>One-click purchase</el-button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FoodDetail',
  components: {
    // Bar
  },
  data(){
    return{
      
    }
  },
  created(){
  },
  methods:{
    toHome(){
      this.$router.push({
        path:"/"
      })
    }
  }
}
</script>

<style scoped lang='less'>
/*rectangle*/
.top_bg{
  background-image: url('../assets/img/food/food10.jpg');
  background-repeat: no-repeat;
  background-position-y: -60%;
  background-size: 100%;/*按比例缩放*/
  
}

.foodDetail{
  padding:44px 0px 34px 0px;
  background-repeat: no-repeat;
  .info_box{
      margin: 0 30px 0;
      height: 135px;
    .left{
      position: relative;
      display: inline-block;
      z-index: 999;
      width:68%;      
    }
    .right{
      position: relative;
      display: inline-block;
      z-index: 999;
      width: 32%;
      img{
          padding-left:0.625rem;
      }
    }
  }
  .text_box{   
    background-color: #fff;
    height: 580px;
    // border: 1px solid red;
    border-radius:50px 50px 0 0;
    .describe{
      padding-top: 25px;
      margin: 0 30px 0;
      .star{
        font-family: 'Times New Roman', Times, serif;
      }

      .introduction{
        padding: 20px 0;
        font-size: 12px;
        color: #999999;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        strong{
          font-size: 18px;
          font-family: fantasy;
          color: #000;
        }
      }
      .ingredients{
        height: 163px;
        overflow: hidden;
/* 点击view all 将overflow和height元素都去掉*/
        margin:0 0 20px;
        font-size: 12px;
        color: #999999;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        strong{
          font-size: 18px;
          font-family: fantasy;
          color: #000;
        }
        .view_all{
          float:right;
          color:#F5A623 ;
          font-size: 14px;
        }
      }
      .listofraw{
        padding:0 0 20px ;
        // border: 1px solid red;
        strong{
          font-size: 18px;
          font-family: fantasy;
          color: #000;
        }
        .materials_box{   
          .materials{
            display: inline-block;
            img{
              margin-right: 6px;
            }
            .name{
              position: relative;
              font-size: 12px;
              color: #999999;
              font-family: Verdana, Geneva, Tahoma, sans-serif;;
            }
          }
          
        }
      }

      .button_purchase{
        text-align: center;
      }
    }
  }
}
</style>
