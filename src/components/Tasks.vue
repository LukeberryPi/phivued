<script setup>
import { ref } from "vue";
const tasks = ref(Array(5).fill(""));

function completeTask(idx) {
  const t = tasks.value.map((task, i) => (i === idx ? "" : task));
  tasks.value = t;
}
</script>

<template>
  <div class="flex text-center flex-col gap-4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <span class="text-lg">what do you want to do?</span>
    <ul
      class="w-80 rounded-xl border border-black overflow-hidden divide-y divide-black transform shadow-brutalist-dark"
    >
      <li
        v-for="(_, index) in tasks"
        class="group flex items-center justify-between"
      >
        <input
          v-model="tasks[index]"
          :placeholder="index === 0 ? 'watch the office?' : ''"
          class="w-full h-12 px-4 focus:outline-none py-3"
        />
        <button
          @click="completeTask(index)"
          class="hidden group-hover:block bg-berryBlue h-12 px-5 border-l border-black"
        >
          done?
        </button>
      </li>
    </ul>
  </div>
</template>
