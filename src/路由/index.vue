<template>
	<a href='#about'>关于</a>
	<a href='#home'>主页</a>
	<a href='#top'>页首</a>
	<component :is="currentCom"></component>
</template>

<script lang='js' setup>
import { ref, computed } from 'vue';
import About from './about.vue';
import Home from './home.vue';
import NotFound from './not-found.vue';

const routes = {
	about: About,
	home: Home,
	'': Home,
	'404': NotFound,
};

const currentPath = ref(location.hash.slice(1) || '');
const currentCom = computed(() => routes[currentPath.value] || routes['404']);

window.addEventListener('hashchange', () => {
	currentPath.value = location.hash.slice(1) || '';
})
</script>

<style scoped>
a {
	display: inline-block;
	margin-right: 10px;
}
</style>