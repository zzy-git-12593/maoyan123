<template>
  <div class="cinema_snack_wrapper">
      <div class="tool"></div>
      <div class="cinema_snack_title">影院超值套餐</div>
      <div class="cinema_snack_list" v-for="(item,index) in cinemaTicket.dealList.dealList" :key="index">
          <img :src="item.imageUrl|filterImg" alt="">
          <div class="snack_info">
              <div class="snack_setmeal_title"><span>{{item.recommendPersonNum==2?'双人':'单人'}}</span>&nbsp;&nbsp;{{item.title}}</div>
              <div class="snack_curNumberDesc">{{item.curNumberDesc}}</div>
              <div class="snack_setmeal_price">
                  <div class="snack_price"><span>￥</span>{{item.price}}</div>
                  <div class="buy-btn">购买</div>
              </div>
          </div>
      </div>
      <div class="footer_tool"></div>
  </div>


</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["cinemaTicket"])
  },
  filters: {
  filterImg (item) {
    return item.replace('w.h', '440.440')
    }
  },
};
</script>

<style>
  .tool{height: 10px;background: #f2f2f2;}
  .footer_tool{height: 30px;background: #f2f2f2;}
  .cinema_snack_title{font-size: 14px ;color: #777;padding: 10px}

  .cinema_snack_list{display: flex;flex-direction: row;background: #fff;padding: 10px 0;margin: 0 10px;border-top: 1px solid #f2f2f2}
  .cinema_snack_list img{width: 92px;height: 92px;}

  .snack_info{display: flex;flex-direction: column;justify-content: space-between;flex-grow: 1;margin-left: 10px}
  .snack_setmeal_title{font-size: 14px;line-height: 18px;color: #333;padding-left: 5px;	display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;text-overflow:ellipsis;}
  .snack_setmeal_title span{font-size: 12px;color: white;padding: 0 2px;background: #FF9900;border-radius: 4px}

  .snack_curNumberDesc{text-align: right;font-size: 13px;color: #777;margin-top: 10px}
  .snack_setmeal_price{display: flex;flex-direction: row;justify-content: space-between}
  .snack_price{color: #f03d37;font-size: 16px}
  .snack_price span{font-size: 13px}
  .buy-btn{font-size: 13px;line-height: 13px;color: #fff;background: #f03d37;padding: 6px 12px;border-radius: 3px}
</style>