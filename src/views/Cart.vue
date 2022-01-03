<template>
  <div>
      <div class="cart">
          <div class="info_box">
              <div>Cart</div>
              <div>Edit</div>
          </div>
          <div class="blue_banner"></div>

          <div class="cart_list">
              <div class="cart_box">
                  <div class="goods"><img src="../assets/img/bg/bg_footprints.svg" width="120px" height="111px">
                  <img src="../assets/img/food/veganchips.svg"></div>
                  <div class="text">
                      <div><strong>Marbay</strong><br><span>$9.9/bag</span></div>
                      <div><img src="../assets/img/icon/plus.svg">
                      {{count}}
                      <img src="../assets/img/icon/minus.svg"></div>
                  </div>
              </div>

              <div class="cart_box">
                  <div class="goods"><img src="../assets/img/bg/bg_footprints.svg" width="120px" height="111px">
                  <img src="../assets/img/food/honey.svg"></div>
                  <div class="text">
                      <div><strong>Marbay</strong><br><span>$60.5/tank</span></div>
                      <div><img src="../assets/img/icon/plus.svg">
                      1
                      <img src="../assets/img/icon/minus.svg"></div>
                  </div>
              </div>
          </div>

          <div class="totalprice">Cart Total: <strong>$92.8</strong></div>
          <div class="button_checkout">
            <el-button type="warning" round>Checkout</el-button>
          </div>
      </div>
  <Bar></Bar>
  </div>
</template>

<script>
import Bar from '../components/bar'
export default {
  name: 'Collection',
  components: {
    Bar
  },
  data(){
      return{
          count: 5
      }
  }
}
</script>

<style lang="less" scoped>

.cart{
    padding:44px 0 34px 0;
    .info_box{
        position: relative;
        background-color: #fff;
        text-align: center;
        margin: 0 30px 20px;
        // border: 1px solid red;
        div:first-child{
            font-size: 18px;
            font-weight: bold;
            color: #F5A623;
        }
        div:last-child{
            position: absolute;
            top: 2px;
            right: 0;
            color: rgb(153, 153, 153);
        }
      }

      .blue_banner{
          height: 33px;
          background-color:#E0EFF6;
      }

    .cart_list{
        margin: 50px 30px 20px;   
        .cart_box{
            margin: 30px 0;
            position: relative;
            display: flex;
            align-items: center;
            .goods{
                img{
                    margin-bottom: -5px;
                }
                img:nth-child(2){
                    position: absolute;
                    left: 1.8rem;
                    top: -1rem;
                }
            }
            .text{
                box-shadow: 0px 0px 20px rgba(160, 159, 159, 0.3);
                height: 80px;
                width: 200px;
                padding:0 1rem;
                display: flex;
                align-items: center;

                div:first-child{
                    span{
                        font-size:14px;
                        color: #F5A623;
                    }
                }
                div:nth-child(2){
                    margin-left:auto;
                }
            }
        }
    }
    .totalprice{
        margin: 10px 35px;
        strong{
            color: #F5A623;
        }
    }
    .button_checkout{
        text-align: center;
        .el-button{
            width: 315px;
        }
    }
}
</style>