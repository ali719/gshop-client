/**
 * Created by Administrator on 2018/11/19.
 */

import {reqAddress,reqFoodCategorys,reqShop} from '../api'
import {RECEIVE_SHOPS,RECEIVE_CATEGORYS,RECEIVE_ADDRESS} from './mutations-types'

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
  }
}
