<template>
    <div>
        <p> Lamba durumu : {{durum}}</p>
        <button @click="lambayiAc()">Lambayı Aç</button> 
        <br>
        <label for="" v-for="i in 44" v-bind:key="i">-</label>
        <!-- üstteki onclick değil @click olacak -->
    </div>
</template>
<script>
    export default{
        data : function(){
            return {
                durum : "Kapalı"
            }
        },
        methods : {
            lambayiAc(){
                this.durum = "Açık"
            }
        }
    }
</script>