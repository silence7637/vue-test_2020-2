
import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS} from './mutation-types'
import {reqAddress,reqFoodCategorys,reqShops} from '../api/index'

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
    }

}