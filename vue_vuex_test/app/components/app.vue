<template>
  <div>
    <input placeholder="Add Item" @keyup.enter="addTodo"></input>
    <ol>
      <li v-for="todo in todos">
        <input type="checkbox" :id="todo.text" :checked="todo.done" @change="toggleTodo(store, todo)">
        <span v-if="todo.done" class="done">{{ todo.text }}</span>
        <span v-if="!todo.done">{{ todo.text }}</span>
        <button :id="todo.text" @click="deleteTodo(store, todo)"></button>     
      </li>
    </ol>
  </div>
</template>



<script>
export default {
  //imports todos array from store
  computed: {
    todos () {
      return this.$store.state.todos
    }
  },
  methods: {
    //method to add item to todos array in store
    addTodo (e) {
      var text = e.target.value
      if (text.trim()) {
        this.$store.commit('addTodo', { text })
      }
      e.target.value = ''
    },
    //method to delete todos item from array in store
    deleteTodo (store, todo) {
      this.$store.commit('deleteTodo', {todo});
    },
    //method to toggle 'done' property of todos in store
   toggleTodo (store, todo) {
      this.$store.commit('toggleTodo', todo)
      console.log(todo)
    }
  }
}
</script>


<style>
.done {
  color: red;
}
</style>