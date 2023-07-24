<template>
    <div class="tasks-grid">
        <template v-if="tasks.length">
            <Task :task="task" v-for="(task,i) in tasks" :key="task.name" @taskStateChanged="$emit('taskStateChanged',i)" @taskDeleted="$emit('taskDeleted',i)">{{task.name}}                
            </Task>
        </template>
        <p v-else class="no-task"> Todas as tasks estão concluídas !</p>
    </div>
</template>

<script>
import Task from "./Task.vue";

export default {
  components: { Task },
  props: {
    tasks: { type: Array, required: true },
  },
};
</script>

<style>
.task-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.task-grid .task {
  margin: 10px;
}

.no-task {
  color: #aaa;
  font-size: 1.7rem;
}
</style>
