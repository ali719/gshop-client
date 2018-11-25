/**
 * Created by Administrator on 2018/11/19.
 */
export default {
  // 购物车中food的数量
  totalCount(state){
    return state.cartFoods.reduce((pre,food) => pre + food.count,0)
  },
  // 购物车中food的总价格
  totalPrice(state){
    return state.cartFoods.reduce((pre,food) => pre + food.count*food.price,0)
  
  }
}
