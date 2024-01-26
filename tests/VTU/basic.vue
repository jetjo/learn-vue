<template>
	<div>
		<div
			v-for="todo in todos"
			:key="todo.id"
			data-test="todo"
			:class="[todo.completed ? 'completed' : '']"
		>
			{{ todo.text }}
			<input
				v-show="!readonly"
				type="checkbox"
				v-model="todo.completed"
				data-test="todo-checkbox"
			/>
		</div>

		<form v-if="!readonly" data-test="form" @submit.prevent="createTodo">
			<input data-test="new-todo" v-model="newTodo" />
		</form>
	</div>
</template>

<script>
	import { defineEmits } from "#vue";
	export default {
		name: "TodoApp",
		setup() {
			// [Vue warn]: defineEmits() is a compiler - hint helper that is only
			// usable inside < script setup > of a single file component.
			// Its arguments should be compiled away and passing it at runtime has no effect.
			// const emit = defineEmits(['submitted'])
			return {
				// emit,
				submitCounter: 0,
			};
		},
		data() {
			return {
				readonly: true,
				newTodo: "",
				todos: [
					{
						id: 1,
						text: "Learn Vue.js 3",
						completed: false,
					},
				],
			};
		},
		props: ["eventName"],
		methods: {
			createTodo() {
				this.todos.push({
					id: 2,
					text: this.newTodo,
					completed: false,
				});
				this.submitCounter += 1;
				const isEven = this.submitCounter % 2 === 0;
				this.$emit(this.eventName, this.submitCounter, isEven);
				// console.log(this.emit, 'this.emit');
				// this.emit('submitted', this.submitCounter, isEven)
			},
		},
	};
</script>
