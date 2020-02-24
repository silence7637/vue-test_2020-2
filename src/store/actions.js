
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO,
    RESET_USER_INFO,
    RECEIVE_INFO,
    RECEIVE_RATINGS,
    RECEIVE_GOODS,
    INCREMENT_FOOD_COUNT,
    DECREMENT_FOOD_COUNT,
    CLEAR_CART,
    RECEIVE_SEARCH_SHOPS
} from './mutation-types'

import {reqAddress,reqFoodCategorys,reqShops,reqUserInfo,reqLogout,reqShopRatings,reqShopGoods,reqShopInfo} from '../api/index'

export default {
    //异步获取地址
    getAddress({commit,state}){
        const geohash = state.latitude+','+state.longitude
        reqAddress(geohash).then(res=>{
            if(res.code===0){
                const address = res.data
                commit(RECEIVE_ADDRESS,{address})
            }
        })
    },

    //异步获取食品分类
    getCategorys({commit}){
        reqFoodCategorys().then(res=>{
            if(res.code===0){
                const categorys = res.data
                commit(RECEIVE_CATEGORYS,{categorys})
            }
        })
    },

    //异步获取商家
    getShops({commit,state}){
        const {longitude,latitude} = state
        reqShops(longitude,latitude).then(res=>{
            if(res.code===0){
                const shops = res.data
                commit(RECEIVE_SHOPS,{shops})
            }
        })
    },

    //同步记录用户信息
    recordUser({commit},userInfo){
        commit(RECEIVE_USER_INFO,{userInfo})
    },

    //异步获取用户信息
    getUserInfo({commit}){
        reqUserInfo().then(res=>{
            if(res.code===0){
                const userInfo = res.data
                commit(RECEIVE_USER_INFO,{userInfo})
            }
        })
    },
    //异步登出
    logout({commit}) {
        reqLogout().then(res=>{
            if(res.code===0){
                commit(RESET_USER_INFO)
            }
        })
    },

    // 异步获取商家信息
    getShopInfo({commit}) {
        reqShopInfo().then(result=>{
            if (result.code === 0) {
                const info = result.data
                commit(RECEIVE_INFO, {info})
            }
        })

    },

    // 异步获取商家评价列表
    getShopRatings({commit}, callback) {
        reqShopRatings().then(result=>{
            if (result.code === 0) {
                const ratings = result.data
                commit(RECEIVE_RATINGS, {ratings})
                // 数据更新了, 通知一下组件
                callback && callback()
            }
        })

    },

    // 异步获取商家商品列表
    getShopGoods({commit}, callback) {
        reqShopGoods().then(result=>{
            if (result.code === 0) {
                const goods = result.data
                commit(RECEIVE_GOODS, {goods})
                // 数据更新了, 通知一下组件
                callback && callback()
            }
        })

    },

}