<template>
    <div>
        <lamba-durumu v-for="lamp in 3" v-bind:key="lamp"></lamba-durumu>
        <!-- <lamba-durumu></lamba-durumu> -->

    </div>
</template>
<script>
    import LambaDurumu from './LambaDurumu.vue';
    export default{
        components : {
            "lamba-durumu" : LambaDurumu
        }
    }
</script>     
