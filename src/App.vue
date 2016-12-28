<template>
  <div>
     <v-header></v-header>
     <router-view :home="home" keep-alive></router-view>
  </div>  
</template>

<script type="text/ecmascript-6">
import header from './components/header/header';
  export default {
    components:{
       'v-header':header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
