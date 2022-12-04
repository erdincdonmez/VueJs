<template>
  <div class="wcol-md-6">
    <h3>Child Component 1</h3>
    <p>Ben User.vue isimli Parent Component'in içerisindeki bir Child componentim</p>
    Parent komponentten gelen veri => {{parenttentenTrasfer}}
    <br>
    Parent komponentn gelenin tersi => {{geleniCevir()}}
    <button @click="parenteGonder">Parent'e "selam" gönder.</button>
  </div>
</template>
<script>
  export default{
    //props : ["parenttenTrasfer"], // burada gelen verinin türü kontrol edilmiyor. 
    //Sayısal veri gelirse problem teşkil etmesin diye aşağıdaki gibi kullanılabilir.
    props : {
      parenttenTrasfer : {
        type : String, // alana gelecek verinin String olması gerektiğini belirtir.
        //required : true, // alanın zorunlu olduğunu ifade eder.
        default : "buraya veri gelmezse bu yazı çıkacak."

      },
    },
    methods : {
      geleniCevir (){
        return this.parenttenTrasfer.split("").reverse().join(""); 
      },
      parenteGonder () {
        this.$emit("childtanGelen", "Bu veri child'tan geldi.")// thisten sonra gelen $ ile başlayan ifadeler (vue instası tarafından kullanılan) ya ptroperty veya methodu ifadede eder.
      }
    }
  }
</script>
<style scoped>
  div {
    background-color: lightcoral;
    padding: 20px;
    border: 1px solid #666;
    display: inline-block;
  }
</style>
