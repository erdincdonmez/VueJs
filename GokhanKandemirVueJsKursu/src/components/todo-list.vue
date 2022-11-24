<template>
        <div class="row">
            <div class="p-2 col-md-6 offset-md-3 border d-flex justify-content-between align-items-center">
              <span>{{todo}}</span> 
              <button class="btn btn-danger" @click="$emit(''deleteTodo,todo.id)">Sil</button>
            </div>    
        </div>
</template> 
<script>
    export default{
        props : ["todo"]
    }
</script>