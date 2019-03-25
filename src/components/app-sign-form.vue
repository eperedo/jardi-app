<template>
  <form @submit.prevent="process">
    <div class="form-input-container">
      <label class="form-label" for="email">Email</label>
      <input
        class="form-control form-input"
        id="email"
        required
        type="email"
        ref="email"
        v-model="model.email"
      >
    </div>
    <div class="form-input-container">
      <label class="form-label" for="password">Password</label>
      <input
        class="form-control form-input"
        id="password"
        required
        type="password"
        v-model="model.password"
      >
    </div>
    <div class="form-input-container">
      <button class="btn" type="submit">{{ info.buttonText }}</button>
    </div>
  </form>
</template>

<script>
const processSettings = {
	SIGN_IN: {
		buttonText: 'Sign In',
		methodName: 'login',
		remember: true,
	},
	SIGN_UP: {
		buttonText: 'Sign Up',
		methodName: 'signup',
	},
};

function data() {
	return {
		model: {
			email: '',
			password: '',
		},
	};
}

function info() {
	return processSettings[this.processType];
}

async function process() {
	try {
		const response = await this.$identity[this.info.methodName](
			this.model.email,
			this.model.password,
			this.info.remember,
		);
		this.$emit('on-success', response);
	} catch (error) {
		this.$emit('on-error', error);
	}
}

export default {
	name: 'pages-sign-in',
	computed: {
		info,
	},
	data,
	props: {
		processType: {
			type: String,
			default: 'SIGN_IN',
		},
	},
	methods: {
		process,
	},
};
</script>

<style scoped>
.btn {
	background-color: var(--colorSuccess);
	color: var(--colorSecondary);
	font-size: var(--mediumFont);
	font-weight: bold;
	padding: var(--mediumSpacing);
}

.form {
	color: var(--colorSecondary);
}

.form-control {
	background-color: var(--colorSecondary);
	font-size: var(--mediumFont);
	padding: var(--mediumSpacing);
}

.form-input-container {
	display: flex;
	flex-direction: column;
	padding: var(--mediumSpacing);
}

.form-label {
	font-size: var(--mediumFont);
	margin-bottom: var(--smallSpacing);
}
</style>