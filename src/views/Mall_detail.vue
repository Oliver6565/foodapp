<template>
<div class="top_bg">
    <div class="foodDetail">
      <div class="info_box">
        <div class="left" @click="toMall"><img src="../assets/img/icon/return.svg" width="40px" height="40px" @click="toMall" ></div>
        <div class="right">
            <img src="../assets/img/icon/like.svg" width="40px" height="40px">
            <img src="../assets/img/icon/share.svg" width="40px" height="40px">
        </div>
        <div class="food_pic"><img src="../assets/img/food/gala.svg"></div>

        <div class="clear"></div>
      </div>
      <div class="text_box">
        <div class="describe">
          <h2>New Zealand Gara</h2>
          <div class="star">Sour sweet delicious, beauty and beauty</div> 
          <div class="newprice">$ 16.9/catty</div>
          <div class="oldprice">$ 29.9/catty</div>
          <div class="sell">
            Sold 2756
            <div class="sell_location">New Zealand</div>
          </div>
        </div>

        <div class="middle_box">
          <div class="promotion">Promotion<div class="fulltime">Full minus</div></div>
          <div class="deliver">
            Deliver to
            <div class="deliver_location">San Francisco, CA</div>
            <div class="right el-icon-arrow-right"></div>
          </div>
          
        </div>
        <div class="evaluation_box">
          <strong>Evaluation Of Sun Sheets</strong>
          <div>Ojingeo muchim is a spicy,sweet and tangy dish that's made with boiled 
            squid and fresh vegetables. The perfect blend of spicy, sweet, and sour tastes
            in this dish will surely increase your appetite.
          </div>
        </div>
        <div class="button_purchase">
          <el-button type="warning" round>Add to the shopping cart</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MallDetail',
  components: {
    
  },
  data(){
    return{
      
    }
  },
  created(){
  },
  methods:{
    toMall(){
      this.$router.push({
        path:"/Mall"
      })
    }
  }
}
</script>

<style scoped lang='less'>
/*rectangle*/
.top_bg{
    background-image: url('../assets/bg_mall.svg');
    background-repeat: no-repeat;
    background-position-y: -85px;
    background-size: 100%;
}

.foodDetail{
  padding:44px 0px 34px 0px;
  background-repeat: no-repeat;
  .info_box{
      overflow: hidden;
      margin: 0 30px 0;
      height: 135px;
// !!!@!@!!@!!!要让z-index生效，就是元素的position属性要是relative，absolute或是fixed；
// 并且此元素不能有float属性。而且此元素的父标签不能有position:relative
    .left{
      position: relative;
      display: inline-block;
      z-index: 999;
      width:70%;      
    }
    .right{
      position: relative;
      display: inline-block;
      z-index: 999;
      width: 30%;
      img{
          padding-left:5px;
      }
    }
    .clear{
        clear: both;
      }
    }
    .food_pic{
      position: relative;
      top: -3rem;
      img{ 
        width: 100%;
      }
    }
  .text_box{   
    background-color: #fff;
    height: 580px;
    border-radius:50px 50px 0 0;
    .describe{
      padding-top: 25px;
      margin: 0 30px 0;
      .star{
        color:rgb(153, 153, 153);
        font-family: fantasy;
      }
      .newprice{
        display: inline-block;
        color:rgb(245, 166, 35) ;
      }
      .oldprice{
        margin-left: 16px;
        display: inline-block;
        color: rgb(153, 153, 153);
        font-size: 14px;
        text-decoration: line-through;
      }
      .sell{
        margin: 10px 0;
        font-size: 14px;
        color: rgb(153, 153, 153);
        .sell_location{
           float: right;
        }
      }
    }
    .middle_box{
      background-color: #E0EFF6;
      border-radius: 50px 50px 0 0;
      padding: 0 30px 0;
      height: 130px;
      .promotion{
        padding: 20px 0 0;
        .fulltime{
          display: inline-block;
          width: 80px;
          margin-left: 20px;
          background-color: rgb(250, 205, 132);
          border-radius: 10px 2px;
          text-align: center;
          color: #fff;
          font-size: 14px;
        }
      }
      .deliver{
        padding:18px 0 10px;
        .deliver_location{
          display: inline-block;
          margin-left: 20px;
          color:rgb(153, 153, 153);
          font-size: 14px;
        }
        .right{
          color: rgb(153, 153, 153);
          float: right;
        }
      }
    }

    .evaluation_box{
      background-color: #fff;
      position: relative;
      top: -2.5rem;
      border-radius: 50px 50px 0 0;
      padding: 20px 30px;
      font-size: 12px;
      color: #999999;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      strong{
        font-size: 18px;
        font-family: none;
        color: #000;
       }
    }
    .button_purchase{
        text-align: center;
    }
  }
}
</style>
