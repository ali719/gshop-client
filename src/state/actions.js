/**
 * Created by Administrator on 2018/11/19.
 */

import {reqAddress,reqFoodCategorys,reqShop,reqUserInfo} from '../api'
import {RECEIVE_SHOPS,RECEIVE_CATEGORYS,RECEIVE_ADDRESS,RECEIVE_USER} from './mutations-types'

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
  async getUserInfo({commit},){
    const result = await reqUserInfo()
    if(result.code===0) {
      const user = result.data
      commit(RECEIVE_USER, {user})
    }
  }
}
