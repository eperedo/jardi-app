<template>
  <section>
    <app-sign-form :process-type="processType" @on-success="onSuccess"/>
  </section>
</template>

<script>
import appSignForm from '@/components/app-sign-form.vue';

const actions = {
	'#recovery_token': {
		message: 'Account was recovered!',
		method: 'recover',
		route: '/admin/change-password',
		saveToken: true,
	},
	'#confirmation_token': {
		message: 'Account was confirmed!',
		method: 'confirm',
		route: '/sign-in',
	},
};

function data() {
	return {
		processType: 'SIGN_IN',
	};
}

async function beforeCreate() {
	const { hash } = window.location;
	if (hash) {
		const token = hash.split('=');
		if (token.length === 2) {
			const [actionName, tokenValue] = token;
			const action = actions[actionName];
			await this.$identity[action.method](tokenValue, true);
			this.$router.push(action.route);
		}
	}
}

function onSuccess() {
	this.$router.push({ name: 'dashboard' });
}

export default {
	name: 'pages-sign-in',
	beforeCreate,
	components: {
		appSignForm,
	},
	data,
	layout: 'public',
	methods: {
		onSuccess,
	},
};
</script>
