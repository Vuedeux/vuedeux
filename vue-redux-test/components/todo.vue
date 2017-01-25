//TEMPLATE
<template>
  <li class="todo" v-bind:class="{ completed: todo.done, editing: editing }">
    <div class="view">
      <input class="toggle"
        type="checkbox"
        v-bind:checked="todo.done"
        v-on:change="toggleTodo({ todo: todo })">
      <label v-text="todo.text" @dblclick="editing = true"></label>
      <button class="destroy" @click="deleteTodo({ todo: todo })"></button>
    </div>
    <input class="edit"
      v-show="editing"
      v-focus="editing"
      :value="todo.text"
      @keyup.enter="doneEdit"
      @keyup.esc="cancelEdit"
      @blur="doneEdit">
  </li>
</template>

//SCRIPT
<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Todo',
  props: ['todo'],
  data () {
    return {
      editing: false
    }
  },
  directives: {
    focus (el, { value }, { context }) {
      if (value) {
        context.$nextTick(() => {
          el.focus()
        })
      }
    }
  },
  methods: {
    ...mapMutations({
      editTodo: 'EDIT_TODO',
      toggleTodo: 'COMPLETE_TODO',
      deleteTodo: 'DELETE_TODO'
    }),
    doneEdit (e) {
      console.log("THIS FROM WITHIN TODO: ", this);
      const value = e.target.value.trim()
      const { todo } = this
      if (!value) {
        this.deleteTodo({
          todo
        })
      } else if (this.editing) {
        this.editTodo({
          todo,
          value
        })
        this.editing = false
      }
    },
    cancelEdit (e) {
      e.target.value = this.todo.text
      this.editing = false
    }
  }
}
</script>
