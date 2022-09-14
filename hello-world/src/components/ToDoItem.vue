<template>
  <div class="todoitem">
    <input type="checkbox" id="todo-item" />
    <label for="todo-item">{{ label }}</label>
    <button @click="helloWorld">Botón Hola Mundo</button>
    <button @click="welcomeWorld">Botón Stargate</button>
  </div>
</template>

<script>
export default {
  props: {
    label: { required: true, type: String },
    done: { default: false, type: Boolean }
  },
  methods: {
    helloWorld () {
      console.log('Hola mundo, soy un método de Vue')
    },
    welcomeWorld () {
      console.log('Bienvenido al mundo de Daniel')
    }
  }
}
</script>

<style>
.todoitem {
  display: flexbox;
}

button {
    color: red
  }
</style>
