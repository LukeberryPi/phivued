import { reactive } from "vue";

export const store = reactive({
  tasks: ["a", "b", "c", "d", "e"],
  delete() {
    this.tasks = Array(5).fill("");
  },
});
