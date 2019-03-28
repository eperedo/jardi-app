<template>
  <app-form-container @submit.prevent="process">
    <app-text tag-name="h1" :styles="['title', 'center']">{{ info.buttonText }}</app-text>
    <app-form-input
      id="email"
      required
      type="email"
      ref="email"
      label="Email"
      v-model="model.email"
    ></app-form-input>
    <app-form-input
      id="password"
      label="Password"
      required
      type="password"
      v-model="model.password"
    ></app-form-input>
    <app-form-input-container>
      <app-button class="btn" type="submit" :disabled="isLoading">{{ info.buttonText }}</app-button>
    </app-form-input-container>
  </app-form-container>
</template>

<script>
import appButton from '@/components/app-button.vue';
import appFormContainer from '@/components/containers/app-form-container.vue';
import appFormInput from '@/components/app-form-input.vue';
import appFormInputContainer from '@/components/app-form-input-container.vue';
import appText from '@/components/app-text.vue';

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
		isLoading: false,
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
	window.localStorage.clear();
	this.isLoading = true;
	try {
		const response = await this.$identity[this.info.methodName](
			this.model.email,
			this.model.password,
			this.info.remember,
		);
		this.$emit('on-success', response);
	} catch (error) {
		this.$emit('on-error', error);
		this.isLoading = false;
	}
}

export default {
	name: 'pages-sign-in',
	components: {
		appButton,
		appFormContainer,
		appFormInput,
		appFormInputContainer,
		appText,
	},
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
