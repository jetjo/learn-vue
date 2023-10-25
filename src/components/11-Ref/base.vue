<template>
    <div>
        <input type="text" placeholder="first input non focus">
        <input type="text" ref="inputRef">
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const inputRef = ref( null );
onMounted( () => {
    inputRef.value.focus();
} );
</script>
