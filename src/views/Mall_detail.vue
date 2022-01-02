<template>
<div class="top_bg">
    <div class="mallDetail">
      <div class="info_box">
        <div class="left"><img src="../assets/img/icon/return.svg" width="40px" height="40px" @click="toMall" ></div>
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
          <span>Evaluation Of Sun Sheets</span>
          <div class="view_all">View all</div>
          <div class="person_box">
            <div class="person_info">
              <img src="../assets/img/avatar/malld头像1.svg"> 
              <div class="personinfo_top">
                 <div class="person_name">Jabel Ahmed</div>
                 <div class="vip">vip</div>
                 <div class="leval">LV.2</div>
              </div>
              <div class="personinfo_bottom">
                <div class="person_address">Sylhet</div>
                <div class="last_time">1hour ago</div>
              </div>
                       
            </div>
            <div class="comment">
              This time to buy fruit is not bad, good happy, note buyers pack good point, 
              really a fruit bag two pearl bags, green apples are powdered, 
              thought it is crisp that kind of it! But it's also delicious.
            </div>

            <div class="person_info">
              <img src="../assets/img/avatar/malld头像2.svg">
              <div class="personinfo_top">
                <div class="person_name">Anup</div>
                <!-- <div class="vip">vip</div> -->
                <div class="leval">LV.1</div>
              </div>
              <div class="personinfo_bottom">
                <div class="person_address">Bangladesh</div>
                <div class="last_time">1day ago</div>
              </div>
            </div>
            <div class="comment">
                Apple received, very large and brittle, water is also sufficient, 
                really delicious, next time also come to your home to buy!
            </div>
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

.mallDetail{
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
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      span{
        font-size: 18px;
        font-family: none;
        color: #000;
       }
       // 这个地方 viewall是14px的高度，但是和左边的18px标题不搭；
       // 这里用了margin-top的4px来压下去 就有18px；底下就能保持在水平一行中
      .view_all{
        float:right;
        color:#F5A623;
        font-size: 14px;
        margin-top: 4px;
      }
      .person_box{
        .person_info{
         position: relative;
         margin: 10px 0;
         .personinfo_top{
           position: absolute;
           top: 0;
           left: 2.5rem;
         }
         .personinfo_bottom{
           position: absolute;
           top: 1.2rem;
           left: 2.5rem;
         }
         .person_name{
           display: inline-block;
         }
         .person_address{
           display: inline-block;
           font-size: 14px;
           color: rgb(211, 211, 211);
         }
         .last_time{
           display: inline-block;
           font-size: 14px;
           color: rgb(211, 211, 211);
         }
         .vip{
           margin-left: 5px;
           display: inline-block;
           width: 2rem;
           background-color:rgb(253, 216, 155);
           border-radius: 8px 2px;
           text-align: center;
           color:rgb(245, 166, 35);
           font-size: 14px;
         }
         .leval{
           display: inline-block;
           color:rgb(245, 166, 35);
           font-size: 12px;
           margin-top: 2px;
           margin-left: 5px;
         }
       }
       .comment{
          font-size: 12px;
          color: #999999;
          text-indent: 24px;
       }
      }

    }
    .button_purchase{
        text-align: center;
    }
  }
}
</style>
