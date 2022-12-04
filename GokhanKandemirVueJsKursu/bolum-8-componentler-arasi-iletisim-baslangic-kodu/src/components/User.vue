<template>
  <div class="container">
    <h1>Parent Component (User)</h1>
    <p>Burası parent component yani herşeyin import edildiği component :)</p>
    <button @click="veriGonder">Alt komponente bilgi gönder</button>
    => {{gonderilecekBaslik}}
    <p>Childtan gelen veri => {{childVerisi}}</p>
    <hr>
    <div class="row">  <!-- VVV v-on ile @ aynı manaya geliyordu. -->
      <app-user-detail @childtanGelen="childVerisi = $event" :parenttenTrasfer="gonderilecekBaslik"></app-user-detail>
      <app-user-edit></app-user-edit>
    </div>
  </div>
</template>
<script>
  import UserDetail from "./UserDetail";
  import UserEdit from "./UserEdit";
  export default {
    components : {
      appUserDetail : UserDetail,
      appUserEdit : UserEdit,
    },
    data : function(){
      return {
        gonderilecekBaslik : "Gönderilecek başlık",
        //gonderilecekBaslik : 123
        childVerisi : ""
      }
    },
    methods : {
      veriGonder : function (){
        this.gonderilecekBaslik = "Gönderilen başlık"
      }
    }
  }
</script>

<style>
  div.container{
    margin-top: 30px;
    padding: 20px 40px;
    background-color: #6a8d99;
    border: 1px solid #666;
  }
  div.row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
