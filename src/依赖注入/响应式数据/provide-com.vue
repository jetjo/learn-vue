<template>
  <InjectCom />
</template>

<script setup>
import { provide, ref, readonly, shallowReadonly } from "vue";
import InjectCom from "./inject-com.vue";
const students = ref([
  {
    name: "shuchang",
    age: 18,
  },
]);
function addStudent(s) {
  students.value.push(s);
}
provide(
  "students",
  // NOTE: 不能像下面这样,这样的话,子组件使用
  // "const { students, addStudent } = inject("students");"
  // 的语法后,students失去了响应性,并且不是只读的只读的
  // readonly({
  //   students,
  //   addStudent,
  // })
  {
    // students: readonly(students),
    students: shallowReadonly(students),
    addStudent,
  }
);
</script>
