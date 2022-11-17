<template>
  <div @click="fetchData" id="container">
    <div class="row">
    
      <div class="col-md-8 offset-md-2 text-center">
        <h3 class="mt-5">Todo List | VueJs</h3>
        **{{todoList}}
        <hr>
        <div class="row">
          <div class="p-2 col-md-6 offset-md-3 border d-flex justify-content-between align-items-center">
            <input type="text" v-model="todoText">
            <button @click="addTodo()" class="btn btn-primary">Ekle</button>
          </div>
        </div>
        <hr>
        <div class="todo-container">
          <div class="row">
            <!-- <div v-for="list in todoList" :todo="todo" :key="list.id" class="p-2 col-md-6 offset-md-3 border d-flex justify-content-between align-items-center"> -->
              <!-- <todo v-for="list in todoList" :key="list.id" @deleteTodo="deleteTodo($event)"/>  -->
              <!-- <todo/>  -->
              <span>{{list.text}}</span> 
              <!-- <span>{{list.text}}</span>  -->
              <button @click="deleteTodo(list)" class="btn btn-danger">Sil</button>
            <!-- </div>     -->
          </div>
        </div>
      </div>
    </div>
    <button @click="fetchData">Verileri getir</button>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
// import todo from "./components/todo-list"
import axios from "axios"
//import { response } from "express"
export default {
components : {
    //  todo
  },
  data(){
    return{
      todoText : "",
      todoList : []
    }
  },
  methods:{
    deleteTodo(todo){
      alert(todo.key)
    },
    addTodo(){
      //alert(this.todoText);
      axios.post("https://erdincdonmez-vuejs-default-rtdb.firebaseio.com/todolist.json",{text : this.todoText})
      .then(response=>{
        console.log(response.data)
        this.fetchData()
      })
      .catch(e=>{
        console.log(e)
      })
    },
    fetchData(){
        axios.get("https://erdincdonmez-vuejs-default-rtdb.firebaseio.com/todolist.json")
        .then(response=>{
          // this.todoList= Object.values(response.data);
          this.todoList= Object(response);
          console.log(this.todoList)
        })
        .catch()
    }

  },
  created1(){
        axios.get("https://erdincdonmez-vuejs-default-rtdb.firebaseio.com/todolist.json")
        .then(response=>{
          // this.todoList= Object.values(response.data);
          this.todoList= response.data;

          console.log(this.todoList)
          for(let key in response.data){
            // console.log(response.data[key])
             console.log(response.data[key])
             this.todoList.push(response.data[key])
             let todo = {
              text: response.data[key].text,
              id: key
             }
             this.todoList.push(todo)
          }
        })
        .catch()
    }
}
</script>


