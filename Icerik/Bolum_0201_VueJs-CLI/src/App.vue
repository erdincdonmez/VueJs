<template>
  <div id="app" class="container">
    <myComp/>
    <div class="card1">
      <br>
      <h3>Sepet</h3>
      <ul>
        <li v-for="item in cardItems" :key="item.id">{{item.adi}}</li>
      </ul>
    </div>
    <Product @addToCart="cardItems.push($event)" :urun="urun" v-for="urun in urunListesi" :key="urun.id"/>
    <!--// :urun="urun" yöntemiyle root'tan childa veri transferi ile gönderilen prop ile alınacak veri-->
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
  },
  data(){
    return{
      urunListesi : [
          {
            id : 1,
            adi : "Sansung A50",
            fiyati : 3400,
            stok : 22,
            aciklama : "Açıklama-1"
          },
          {
            id : 2,
            adi : "Appla Iphone 12",
            fiyati : 200000,
            stok : 3,
            aciklama : "Açıklama-2"
          },
          {
            id : 3,
            adi : "30W Şarj aleti",
            fiyati : 300,
            stok : 4,
            aciklama : "Açıklama-3"
          }
        ],
        //cardItems:["MacBook","Klavye","Notebook"]
        cardItems:[]
    }
  }

}
</script>

<style>
.container{
  display : flex;
}
</style>