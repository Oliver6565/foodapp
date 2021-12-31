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
        // justify-content: space-between;
        align-items: center;
        // margin-left: auto;
        .icon_box{
            // flex:2;
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
}
</style>