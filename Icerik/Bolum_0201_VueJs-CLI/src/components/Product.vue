<template>
    <div class="product">
        <strong>Ürün Adı: {{urun.adi}}</strong>
        <p>Açıklaması {{urun.aciklama}}</p>
        <strong>Ürün fiyatı : {{urun.fiyati}}TL | Adet : {{urun.stok}}</strong>
        <br>
        <button @click="addToCart(urun)">Sepete ekle</button>
    </div>
</template>

<script>
export default{
    props : ["urun"], // prop yöntemiyle root'tan childa veri transferi ile gelen veri.
    methods : {
        addToCart (urun){
            this.$emit("addToCart", urun)
        }
    }
}
</script>

<style>
.product{
    border : solid 0.5px;
    border-radius : 5px;
    margin: 5px;
    padding: 5px;
}
.product:hover{
    border : solid 2px;
    background-color: #EDEDED;
}
</style>