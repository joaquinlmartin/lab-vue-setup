<template>
  <div>
    <h1>{{ message }}</h1>
     <input type="checkbox" id="todo-item" />
    <label for="todo-item">My Todo Item</label>
  </div>
</template>

<script>
export default {
  data () {
    return { message: 'This is the ToDoItem component' }
  }
}
</script>
