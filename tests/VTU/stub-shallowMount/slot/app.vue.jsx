import CustomButton from "./custom-btn.vue";
const AnotherApp = {
	props: ['authenticated'],
	components: { CustomButton },
	template:
		`<custom-button>
			<div v-if="authenticated">Log out</div>
			<div v-else>Log in</div>
		</custom-button>`
}

export default AnotherApp;