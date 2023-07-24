/* eslint-disable */
<template>
	<div id="app">
		<h1>Tarefas</h1>
    <TasksProgress :progress="progress"></TasksProgress>
    <NewTask @taskAdded="addTask"></NewTask>
		<TaskGrid @taskDeleted="deleteTask" :tasks="tasks" @taskStateChanged="toggleTaskState"></TaskGrid>
    
	</div>
</template>

<script>
import TaskGrid from "@/Components/TaskGrid.vue";
import NewTask from "@/Components/NewTask.vue";
import TasksProgress from "@/Components/TasksProgress.vue";

export default {
  components: { TasksProgress, TaskGrid, NewTask },
  data() {
    return {
      tasks: [
        { name: "Lavar a louça", pending: false },
        { name: "Comprar blusa", pending: true },
      ],
    };
  },
  computed: {
    progress() {
      const total = this.tasks.length;
      const done = this.tasks.filter((t) => !t.pending).length;
      return Math.round((done / total) * 100) || 0;
    },
  },
  methods: {
    addTask(task) {
      const sameName = (t) => t.name === task.name;
      const reallyNew = this.tasks.filter(sameName).length == 0;
      reallyNew &&
        this.tasks.push({
          name: task.name,
          pending: task.pending || true,
        });
    },
    deleteTask(i) {
      this.tasks.splice(i, 1);
    },
    toggleTaskState(i) {
      this.tasks[i].pending = !this.tasks[i].pending;
    },
  },
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
