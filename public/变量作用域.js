const myButton = document.getElementById("my-button-id");
let someString = "Data";

myButton.addEventListener("click", () => {
  console.log(someString); // 预期输出：'Data'

  someString = "Data Again~~~";
});

console.log(someString); // 预期输出：'Data'（不可能是 'Data Again~~~'）

setTimeout(() => {
  console.log(someString); // 预期输出：'Data Again~~~'
}, 10000);
