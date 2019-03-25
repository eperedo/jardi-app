<template>
  <section>
    <app-sign-form :process-type="processType" @on-success="onSuccess"/>
  </section>
</template>

<script>
import appSignForm from '@/components/app-sign-form.vue';

function data() {
	return {
		processType: 'SIGN_UP',
	};
}

function onSuccess() {
	this.$router.push({ name: 'index' });
}

export default {
	name: 'pages-sign-up',
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
