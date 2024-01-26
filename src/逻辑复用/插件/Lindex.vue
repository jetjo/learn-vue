<template>
	<div>
		<h3>{{ $translate("greetings.hello") }}</h3>
		<h3>{{ $translate("greetings") }}</h3>
		<!-- <pre>{{ i18nOpts }}</pre> -->
	</div>
</template>

<script setup>
	import { i18nOptsKey } from "./i18n";
	import { inject } from "#vue";
	const i18nOpts = inject(i18nOptsKey);
</script>
