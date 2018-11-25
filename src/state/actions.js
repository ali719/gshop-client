/**
 * Created by Administrator on 2018/11/19.
 */

import {
  reqAddress,
  reqFoodCategorys,
  reqShop,
  reqUserInfo,
  reqLogout,
  reqShopGoods,
  reqShopInfo,
  reqShopRatings
} from '../api'
import {
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_ADDRESS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  ADD_FOOD_COUNT,
  REDUCE_FOOD_COUNT,
  CLEAR_CART
} from './mutations-types'

export default {
  // 异步获取地址信息的异步action
  async getAddress({commit,state}){
    const {latitude,longitude} = state
    const result = await reqAddress(latitude,longitude )
    
    if (result.code === 0){
      const address = result.data
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  
  // 异步获取食品分类信息的异步action
  async getFoodCategorys({commit}){
    const result = await reqFoodCategorys()
    if (result.code === 0){
      const categorys = result.data
      commit(RECEIVE_CATEGORYS,{categorys})
    }
  },
  // 异步获取商家信息的异步action
  async getShops({commit,state}){
    const {latitude,longitude} = state
    const result = await reqShop({latitude,longitude} )
    console.log(result);
    if (result.code === 0){
      const shops = result.data
      commit(RECEIVE_SHOPS,{shops})
    }
  },
  // 保存user的同步action
  saveUser({commit},user){
    commit(RECEIVE_USER,{user})
  },
  // 获取当前用户信息的异步action
  async getUserInfo({commit}){
    const result = await reqUserInfo()
    if(result.code===0) {
      const user = result.data
      commit(RECEIVE_USER, {user})
    }
  },
  //退出登录
  async logout({commit}){
    const result = await reqLogout()
    if (result.code === 0){
      commit(RESET_USER)
    }
  },
  // 异步获取商家信息
  async getShopInfo({commit}) {
    const result = await reqShopInfo()
    if(result.code===0) {
      const info = result.data
      // info.score = 3.5
      commit(RECEIVE_INFO, {info})
    }
  },

// 异步获取商家评价列表
  async getShopRatings({commit}) {
    const result = await reqShopRatings()
    if(result.code===0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
    }
  },

// 异步获取商家商品列表
  async getShopGoods({commit}, cb) {
    const result = await reqShopGoods()
    if(result.code===0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      // 提交mutation, 更新状态之后, 调用回调函数
      typeof cb==='function' && cb()
    }
  },
  // 更新指定food的数量的同步action
  updateFoodCount({commit},{food,isAdd}){
    if (isAdd){
      commit(ADD_FOOD_COUNT, {food})
    }else {
      commit(REDUCE_FOOD_COUNT, {food})
    }
  },
  clearCart({commit}){
    commit(CLEAR_CART)
  }
  
}
