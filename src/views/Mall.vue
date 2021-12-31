<template>
  <div class="bg_mall">
    <div class="mall">
      <div class="search_box">
        <strong>MALL</strong>
        <el-input v-model="input" placeholder="Search for menu,ingredients"><i slot="prefix" class="el-input__icon el-icon-search"></i></el-input>
      </div>
      
      <el-card> 
        <div class="menu">
            <div class="icon_box">
                <img src="../assets/img/icon/vip.svg">
                <div class="name">VIP</div>
            </div>
            <div class="icon_box">
                <img src="../assets/img/icon/seasonalfresh.svg">
                <div class="name">Fresh</div>
            </div>
            <div class="icon_box">
                <img src="../assets/img/icon/baking.svg">
                <div class="name">Bake</div>
            </div>
            <div class="icon_box">
                <img src="../assets/img/icon/kitchen.svg">
                <div class="name">Kitch</div>
            </div>
            <div class="icon_box">
                <img src="../assets/img/icon/grain.svg">
                <div class="name">Grain</div>
            </div>
            <div class="icon_box">
                <img src="../assets/img/icon/health.svg">
                <div class="name">Health</div>
            </div>
            <div class="icon_box">
                <img src="../assets/img/icon/teadrinking.svg">
                <div class="name">Drink</div>
            </div>
            <div class="icon_box">
                <img src="../assets/img/icon/all.svg">
                <div class="name">All</div>
            </div>
        </div>
      </el-card>
      
      <div class="killsecond_box">
          <div class="title">
            <strong>Kill Every Second</strong>
            <div class="view_all">View all</div>
          </div>
          <div class="show_food"> 
              <div class="food_list"> 
                  <div class="logo">Parc</div>
                  <img src="../assets/img/food/beef.svg">
                  <div class="text">
                      Natnudo Beef<br>
                      $ 15.9/catty
                  </div>
                  <span><img src="../assets/img/icon/heart.svg"></span>
              </div>
              <div class="food_list"> 
                  <div class="logo">Parc</div>
                  <img src="../assets/img/food/shrimps.svg">
                  <div class="text">
                      Krewetkl Shrimps<br>
                      $ 9.9/package
                  </div>
                  <span><img src="../assets/img/icon/heart.svg"></span>
              </div>
              <div class="food_list"> 
                  <div class="logo">Parc</div>
                  <img src="../assets/img/food/shrimps.svg">
                  <div class="text">
                      shrimps<br>
                      $ 15.9/catty
                  </div>
                  <span><img src="../assets/img/icon/heart.svg"></span>
              </div>
          </div>
          
      </div>

      <div class="weekly_box">
          <div class="title">
            <strong>Weekly Bursts</strong>
            <div class="view_all">View all</div>
          </div>

          <div class="show_food">
              <div class="food_list"> 
                  <div class="text">
                      <b>Gala</b><br>
                      $ 16.9/catty
                  </div>
                  <img src="../assets/img/bg/bg_food1.svg">
              </div>
              <div class="food_list"> 
                  <div class="text">
                      <b>pumpkin</b><br>
                      $ 10.9/catty
                  </div>
                  <img src="../assets/img/bg/bg_food2.svg">
              </div>
              <div class="food_list"> 
                  <div class="text">
                      <b>cherry</b><br>
                      $ 30.9/catty
                  </div>
                  <img src="../assets/img/bg/bg_food3.svg">
              </div>
              <div class="food_list"> 
                  <div class="text">
                      <b>Tomato</b><br>
                      $ 18.9/catty
                  </div>
                  <img src="../assets/img/bg/bg_food4.svg">
              </div>
          </div>
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
          input:''
      }
  }
}
</script>

<style lang="less" scoped>
.bg_mall{
    background-image: url('../assets/bg_mall.svg');
    background-repeat: no-repeat;
    background-position-y: -85px;
    background-size: 100%;
}
.mall{
    padding:44px 30px 34px 30px;
    // border:1px solid  red;


    .search_box{
        strong{
            width: 25%;
            display: inline-block;
            font-size: 18px;
            color: #fff;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
        }        
    }

    // 记住 千万别再组件中使用flex布局 ！！@！！！改变不了方向 ！！@！！ 就是el-card 不会生效
    // flex 布局，想要按照一定的宽度换行，那么父元素和子元素都要设置宽度！ 4个子元素宽度塞满父元素宽度过后，就能换行
    .menu{
        width: 315px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
        .icon_box{
            // 315px/4 = 78
            width:78px;
            .name{
                width: 36px;
                text-align: center;
                font-size: 12px;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
                padding-bottom:10px ;
            }
        }
    }

    .killsecond_box{
      .view_all{
        float:right;
        color:#F5A623 ;
        font-size: 14px;
      }

      .show_food{
        margin: 10px 0;   
        width: 315px;
        overflow: scroll;
        white-space: nowrap;
        .food_list::-webkit-scrollbar{
            display: none;
        }
        .food_list{
          display: inline-block;
          margin-right: 20px;
          width: 120px;
          height: 160px;
          background-image: url('../assets/bg_blue.svg');
          background-repeat:no-repeat;
          position: relative;
          .logo{
              font-size:12px;
              color: #fff;
              margin-left:8px ;
          }
    // !!@!@!!! 这样设置图片的居中
          img{
              clear: both;
              display: block;
              margin:10px auto 0;
          }
          .text{
              width: 100%;
              text-align: center;
              font-size: 12px;
              color: #fff;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
          }
          span{
              img{
                  z-index: 99;
                  position: absolute;
                  right:10px;
                  bottom:10px;
              }
          }
        }
      }
    }

    .weekly_box{
      .view_all{
        float:right;
        color:#F5A623 ;
        font-size: 14px;
      }
      .show_food{
        margin: 10px 0;   
        width: 315px;
        overflow: scroll;
        white-space: nowrap;
      }
      .food_list::-webkit-scrollbar{
          display: none;
      }
      .food_list{
          display: inline-block;
          margin-right: 10px;
          width: 100px;
          height: 160px;
          border-radius:5px 20px ;
          box-shadow: 2px 0 8px rgba(160, 159, 159, 0.3);
          overflow: hidden;
          
          .text{
              padding: 5px 0 0 5px;
              font-size: 14px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              b{
                  font-family: fantasy;
              }
          }
          img{
              position: relative;
              top: 40px;
              left: 20px;
              width: 100px;
          }
      }
    }
}
</style>