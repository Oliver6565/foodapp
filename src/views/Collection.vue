<template>
  <div>
      <div class="collection">
          <div class="info_box">
              <div>Commodity</div>
              <div>Share</div>
          </div>

          <div class="food_list">
              <div class="food_box">
                <div class="logo">Parc</div>
                <div class="imgbox">
                    <img src="../assets/img/food/marbay.svg" width="150px" height="100px">
                </div>
                <div class="name">Marbay</div>
                <div class="price">$ 9.9/bag</div>
                <div class="imgcart"><img src="../assets/img/icon/cart.svg"></div>
              </div>
              <div class="food_box">
                <div class="logo">Parc</div>
                <div class="imgbox">
                    <img src="../assets/img/food/ryazanski.svg" width="150px" height="100px">
                </div>
                <div class="name">Ryazanski</div>
                <div class="price">$ 10.9/bag</div>
                <div class="imgcart"><img src="../assets/img/icon/cart.svg"></div>
              </div>
                            <div class="food_box">
                <div class="logo">Parc</div>
                <div class="imgbox">
                    <img src="../assets/img/food/marbay.svg" width="150px" height="100px">
                </div>
                <div class="name">Marbay</div>
                <div class="price">$ 9.9/bag</div>
                <div class="imgcart"><img src="../assets/img/icon/cart.svg"></div>
              </div>
                            <!-- <div class="food_box">
                <div class="logo">Parc</div>
                <div class="imgbox">
                    <img src="../assets/img/food/marbay.svg" width="150px" height="100px">
                </div>
                <div class="name">Marbay</div>
                <div class="price">$ 9.9/bag</div>
                <div class="imgcart"><img src="../assets/img/icon/cart.svg"></div>
              </div> -->
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
}
</script>

<style lang="less" scoped>

.collection{
    // background-color: rgb(170, 97, 97);
    padding:44px 30px 34px 30px;
    .info_box{
        background-color: #fff;
        display: flex;
        text-align: center;
        margin-bottom: 20px;
        div{
            flex: 1;
        }
        div:first-child{
            font-size: 18px;
            font-weight: bold;
            color: #F5A623;
        }
        div:last-child{
            margin-top: 2px;
            color: rgb(153, 153, 153);
        }
    }
    .food_list{
        position: relative;
        display: flex;
        flex-wrap: wrap;
        .food_box{
            // 这里的宽度高度是指food_box的宽度和高度。下面那个background-size是指定
            // 背景图的宽度和高度，这样就能够在完全没有添加东西的情况下，显示出完整的背景
            width: 150px;
            height: 200px;
            margin: 5px 3px;
            background-image: url('../assets/bg_blue.svg');
            background-size:100% 100%;
            background-repeat: no-repeat;
            font-size: 14px;
            // flex: 1;
            color: #fff;
            position: relative;
            border-radius: 1.5rem;
            box-shadow: 5px 5px 5px rgba(160, 159, 159, 0.3);
            .logo{
                position: absolute;
                left: .4rem;
                top: 0.2rem;
                margin-left:8px ;
            }
            .imgbox{
                img{
                    clear: both;
                    display: block;
                    margin:2rem auto 1rem;
                }
            }
            .name{
                margin-left: 1rem;
                width: 120px;
                overflow: hidden;
            }
            .price{
                margin-left: 1rem;
            }
            .imgcart{
                position: absolute;
                bottom:.6rem;
                right: 1rem;
            }
        }
    }
}
</style>