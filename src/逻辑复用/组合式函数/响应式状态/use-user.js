import { ref, onMounted } from "#vue";
import axios from "axios";

export function useUser(userId) {
	const user = ref();

	function fetchUser(id) {
		axios.get(`users/${id}`).then((response) => (user.value = response.data));
	}

	onMounted(() => fetchUser(userId));

	return { user };
}
