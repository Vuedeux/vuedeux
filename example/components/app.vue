
////////////TEMPLATE

<template>
  <section class="todoapp">
    <!-- header -->
      <!--@keyup.enter="addTodo" is shorthand for v-on:keyup.enter='addTodo'-->
    <header class="header">
      <img style='margin: 10px' src= '../assets/vuedeuxsmall.png'>
      <p id='header' style='padding-left: 50px; margin-top: -75px; margin-left: 30px'> Vuedeux TodoMVC</p>
      <input class="new-todo"
        autofocus
        autocomplete="off"
        placeholder="What needs to be done?"
        v-on:keyup.enter="addTodo">
    </header>
    <!-- main section -->
     <!-- v-show used for conditional display, if 0 todos wont render -->
          <!-- v-bind:checked runs allChecked returning boolean value of whether all are currented set to done// v-on:change all arent done set all to done and vice versa -->
    <section class="main" v-show="todos.length">
      <input class="toggle-all"
        type="checkbox"
        v-bind:checked="allChecked" 
        v-on:change="toggleAll({ done: !allChecked })">
       <!-- loop through currenly filtered todos and pass todo object as prop -->
      <ul class="todo-list">
        <todo v-for="todo in filteredTodos" :todo="todo"></todo>
      </ul>
    </section>
  
    <!-- footer -->
    <footer class="footer" v-show="todos.length">
      <span class="todo-count">
          <!-- plularizing filter using pipe {{remaining becomes first argument}} -->
        <strong>{{ remaining }}</strong>
        {{ remaining | pluralize('item') }} left
      </span>
      <ul class="filters">
        <li v-for="(val, key) in filters">
       <!-- looping over key and vals from filters obj / creating  -->
       <!-- on click set visibility to filter name  -->
       <!-- v-bind class, setting "selected" class to true if selected-->
          <a v-bind:href="'#/' + key"
            v-bind:class="{ selected: visibility === key }"
            v-on:click="visibility = key">{{ key | capitalize }}</a>
        </li>
      </ul>
   <!-- v-show if number of todos is greater than those not selected-->
          <!-- on click run mutation that filters out all done-->

      <button class="clear-completed"
        v-show="todos.length > remaining"
        @click="clearCompleted">
        Clear completed
      </button>
    </footer>
  </section>
</template>

////////////SCRIPT

<script>
import { mapMutations } from 'vuex'
import Todo from './todo.vue'
import 'todomvc-app-css/index.css'


const filters = {
  all: todos => todos,
  active: todos => todos.filter(todo => !todo.done),
  completed: todos => todos.filter(todo => todo.done)
}

export default {
  components: { Todo },
  name: "Todo-List",
  data () {
    return {
      visibility: 'all',
      filters: filters,
    }
  },
  computed: {
    todos () {
      return this.$store.state.redux.todos
    },
    allChecked () {
      return this.todos.every(todo => todo.done)
    },
    filteredTodos () {
      return filters[this.visibility](this.todos)
    },
    remaining () {
      return this.todos.filter(todo => !todo.done).length
    }
  },
  methods: {
    addTodo (e) {
      console.log("this in addtodo", this)
      var text = e.target.value
      if (text.trim()) {
        this.$store.dispatch(this.$root.reduxActions.addTodo(text))
      }
      e.target.value = ''
    },

    // map mutations  this.$store.commit('COMPLETE_ALL') to this.toggleAll
    ...mapMutations({
      toggleAll: 'COMPLETE_ALL',
      clearCompleted: 'CLEAR_COMPLETED'
    })
  },
  filters: {
    pluralize: (n, w) => n === 1 ? w : (w + 's'),
    capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)
  }
}

</script>

////////////STYLING
<style src="todomvc-app-css/index.css"></style>
<style>
  body{
    background-color: #42B983 !important;
  }

  #header {   
    text-align: center;
    font-size: 3em;
  }
</style>