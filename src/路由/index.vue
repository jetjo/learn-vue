<template>
	<a href='#/home'>主页</a> |
	<a href='#/about'>关于</a> |
	<a href='#top'>Broken Link</a>
	<component :is="currentCom" />
</template>

<script lang='js' setup>
import { ref, computed } from 'vue';
import About from './about.vue';
import Home from './home.vue';
import NotFound from './not-found.vue';

const routes = {
	'/': Home,
	'/home': Home,
	'/about': About,
};

const currentPath = ref(window.location.hash);

window.addEventListener('hashchange', () => {
	currentPath.value = window.location.hash;
})

const currentCom = computed(() => {
	return routes[currentPath.value.slice(1) || '/'] || NotFound
});
</script>

<style scoped>
a {
	display: inline-block;
	margin-right: 10px;
}
</style>