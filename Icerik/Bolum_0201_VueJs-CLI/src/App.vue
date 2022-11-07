<template>
  <div id="app" class="container">
    <myComp/>
    <myComp/>
    <Product v-for="index in 7" :key="index"/>
    <!--<Product/>
    <Product/>
    <Product/>
    <Product/>
    <Product/>-->
  </div>  
</template>

<script>
import MainContainer from '@/components/MainContainer.vue'
import Product from '@/components/Product.vue'
export default{
  components : {
    myComp : MainContainer,
    Product
  }

}
</script>

<style>
.container{
  display : flex;
}
</style>