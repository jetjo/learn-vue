<template>
  <ul>
    <li v-for="(student, index) in students" :key="index">
      {{ student.name }} - {{ student.age }}
    </li>
    <li><button @click="onClick">添加学生</button></li>
  </ul>
</template>

<script setup>
import { inject } from "vue";
const { students, addStudent } = inject("students");
// const {
//   // students: { value: students },//这样仍然是只读的
//   students: {
//     value: [...students],//可写,但没有响应性,页面不自动更新
//   },
//   addStudent,
// } = inject("students");
function onClick() {
  addStudent({
    name: "柳如是",
    age: 20,
  });
  // NOTE: Cannot read properties of undefined (reading 'push')
  // NOTE: [Vue warn] Set operation on key "1" failed: target is readonly.
  // NOTE: [Vue warn] Set operation on key "length" failed: target is readonly.
  // students.value.push({
  //   name: "董小宛",
  //   age: 20,
  // })
  // NOTE: ok, 也没有警告
  // NOTE: TypeError: students.push is not a function
  // students.push({
  //   name: "董小宛",
  //   age: 20,
  // });
  // // NOTE: TypeError: Assignment to constant variable.
  // students = [
  //   {
  //     name: "刘亦菲",
  //     age: 16,
  //   },
  // ];
}
</script>

<style lang="scss" scoped></style>
