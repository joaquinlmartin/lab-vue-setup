<template>
  <div>
<<<<<<< HEAD
    <input type="checkbox" id="todo-item" />
    <label for="todo-item">{{label}}</label>
=======
    <h1>{{ message }}</h1>
     <input type="checkbox" id="todo-item" />
    <label for="todo-item">My Todo Item</label>
>>>>>>> 1414ced1f2cafe5130edf12410884dca16eeca7b
  </div>
</template>

<script>
export default {
<<<<<<< HEAD
  props: {
    label: { required: true, type: String },
    done: { default: false, type: Boolean }
=======
  data () {
    return { message: 'This is the ToDoItem component' }
>>>>>>> 1414ced1f2cafe5130edf12410884dca16eeca7b
  }
}
</script>
