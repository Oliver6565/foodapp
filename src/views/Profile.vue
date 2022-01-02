<template>
  <div class="bg_profile">
    <div class="profile">
            <img class="blue_circle1" src="../assets/img/bg/blue_circle.svg">
    <img class="blue_circle2" src="../assets/img/bg/blue_circle.svg">
        <div class="info_box">
            <div class="left"><img src="../assets/img/icon/设置.svg" width="25px" height="25px"></div>
            <div class="right">
                <img src="../assets/img/icon/消息.svg" width="25px" height="25px">
            </div>
            <div class="clear"></div>
            <div class="person_profile">
                <div class="mine">Mine</div>
                <img src="../assets/img/avatar/头像1.jpg" width="41px" height="44px">
                <div class="name">Alex Suprun</div>
                <div class="list">
                    <div>&nbsp;987 &nbsp;Browse</div>
                    <div>&nbsp;&nbsp;&nbsp;786 &nbsp;&nbsp;&nbsp;Fans</div>
                    <div>&nbsp;68 &nbsp;Concern</div>
                    <div>&nbsp;&nbsp;32 &nbsp;&nbsp;Works</div>
                </div>
            </div>
        </div>    

        <div class="action">
            <div><img src="../assets/img/icon/order.svg"><br>Order</div>
            <div><img src="../assets/img/icon/release.svg"><br>Release</div>
            <div><img src="../assets/img/icon/coupons.svg"><br>Coupons</div>
            <div><img src="../assets/img/icon/wallet.svg"><br>Wallet</div>
        </div>

        <div class="myfootprints_box">
            <strong>My Footprints</strong>
            <div class="view_all">View all</div>
            <div class="footprints">
                <el-timeline>
                    <el-timeline-item timestamp="28 Jun/2021" placement="top">
                        <div class="card">
                            <div><img src="../assets/img/bg/bg_footprints.svg">
                            <img src="../assets/img/food/veganchips.svg"></div>
                            <div class="text">
                                <div>Vegan Chips</div>
                                <div>sweet/acid</div>
                                <div>star 5</div>
                                <img src="../assets/img/avatar/malld头像1.svg" width="24px" height="24px">
                                Jabel Ahmed
                            </div>
                        </div>
                    </el-timeline-item>
                    <el-timeline-item timestamp="8 Jun/2021" placement="top">
                        <div class="card">
                            <div><img src="../assets/img/bg/bg_footprints.svg">
                            <img src="../assets/img/food/brazly.svg"></div>
                            <div class="text">
                                <div>Brazly</div>
                                <div>sweet/acid</div>
                                <div>star 5</div>
                                <img src="../assets/img/avatar/malld头像4.svg" width="24px" height="24px">
                                Sushama
                            </div>
                        </div>
                    </el-timeline-item>
                </el-timeline>
            </div>
        </div>
    </div>


    <Bar></Bar>
  </div>
</template>

<script>
import Bar from '../components/bar'
export default {
  name: 'Profile',
  components: {
    Bar
  },
  data(){
      return{
          input:''
      }
  },
  methods:{
  }
}
</script>

<style lang="less" scoped>
.bg_profile{
    background-image: url('../assets/bg_mall.svg');
    background-repeat: no-repeat;
    background-position-y: -85px;
    background-size: 100%;
}
.profile{
    padding:44px 30px 34px 30px;
    position: relative;
    overflow: hidden;
    .blue_circle1{
        position: absolute;
        top: -10rem;
        left:-5rem;
    }
    .blue_circle2{
        position: absolute;
        top:5rem;
        right:-8rem;
    }
    .left{
      position: relative;
      display: inline-block;
      z-index: 999;
      width:90%;      
    }
    .right{
      position: relative;
      display: inline-block;
      z-index: 999;
      width:10%;     
      right: 0;
    }
    .clear{
        clear: both;
      }

    .info_box{
        .person_profile{
            position: relative;
            top: -1.5rem;
            text-align: center;
            .mine{
                font-size: 24px;
                color: #fff;
                margin-bottom: 5px;
            }
            img{
                border-radius: 5px 15px 5px 15px;
                border:2px solid white;
            }
            .name{
                color: #fff;
            }

            // 这里使用flex 布局，将315px分成4份，然后之前有text-align center 所以每块里面的文字会居中
            .list{
                margin-top: 8px;
                font-size: 14px;
                color: #fff;
                display: flex;
                flex-wrap: wrap;
                div{
                    flex:1;
                }
            }
        }
    }

    .action{
        position: relative;
        margin:20px 0 ;
        display: flex;
        text-align: center;
        align-content: center;
        font-size: 14px;
        color: #666666;
        z-index: 999;
        div{
            flex:1;
        }
        div:nth-child(2){
            margin-top: .625rem;
        }
        div:nth-child(3){
            margin-top: .4rem;
        }
        div:nth-child(4){
            margin-top: .3rem;
        }
    }
    .myfootprints_box{
      .view_all{
        float:right;
        color:#F5A623;
      }
      .footprints{
          margin: 10px 0;
          .card{
              padding:10px 0 0;
              display: flex;
              position: relative;
              img:nth-child(2){
                  position: absolute;
                  top: 0;
                  left: 2rem;
              }
              div{
                  flex:1
              }
              .text{
                  div:nth-child(2){
                      color: rgb(153, 153, 153);
                  }
              }
          }
      }
    }
}

</style>