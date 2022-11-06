<template>
  <div id="app">
    <myComp/>
    <myComp/>
    <myComp/>
  </div>  
</template>

<script>
import MainContainer from '@/components/MainContainer.vue'
export default{
  components : {
    myComp : MainContainer
  }

}
</script>

<style>
</style>