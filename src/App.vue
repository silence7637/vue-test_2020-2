<template>
  <div id="app">
    <router-view></router-view>
    <TabBar v-show="$route.meta.showFooter"/><!--在配置路由时使用配置源数据meta来判断是否显示TabBar-->
  </div>
</template>

<script>

  import TabBar from './components/Tab-Bar/Tab-Bar'
  
  import {reqFoodTypes} from './api'

  export default {

    components:{
      TabBar
    },
   mounted() {
      this.$store.dispatch('getAddress')
    }

  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  width 100%
  height 100%
  background-color: #f5f5f5;

</style>
