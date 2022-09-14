<template>
    <div id="todo-item">
        <ToDoItem />
    </div>
</template>

<script>
import ToDoItem from '@/components/ToDoItem.vue';

export default {
  name: 'ToDoItemView',
  components: {
    ToDoItem,
  },
};
</script>
