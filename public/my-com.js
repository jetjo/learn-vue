import { ref } from 'vue';

export default {
    setup() {
        const count = ref('9999999999');
        return {
            message: count
        }
    },
    template: /*html*/`<div>count is {{ message }}</div>`
}
