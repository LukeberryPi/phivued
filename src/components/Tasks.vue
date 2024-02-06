<script setup>
import { ref } from "vue";
const tasks = ref(Array(5).fill("a"));

function deleteTask(index) {
  const t = tasks.value.map((task, i) => i === index ? "" : task);
  tasks.value = t;
  return tasks.value;
}
</script>

<template>
  <ul
    class="w-80 rounded-xl border border-black overflow-hidden fixed top-1/2 left-1/2 divide-y divide-black transform shadow-brutalist-dark -translate-x-1/2 -translate-y-1/2"
  >
    <li
      v-for="(task, index) in tasks"
      class="group flex items-center justify-between"
    >
      <input
        :value="task"
        :placeholder="index === 0 ? 'watch the office' : ''"
        class="w-full h-12 px-4 focus:outline-none py-3"
      />
      <button
        @click="deleteTask(index)"
        class="hidden group-hover:block bg-berryBlue h-12 px-4 border-l border-black"
      >
        done?
      </button>
    </li>
  </ul>
</template>
