<template>
  <div class="todoitem">
    <button @click="helloMessage">Show</button>
    <button @click="welcomeWorld">Botón Stargate</button>
  </div>
</template>

<script>
export default {
  name: 'ToDoItem',
  methods: {
    helloMessage() {
      console.log('This is the ToDoItem component');
    },
    welcomeWorld() {
      console.log('Bienvenido al mundo de Daniel');
    },
  },
};
</script>
