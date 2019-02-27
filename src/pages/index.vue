<template>
  <section class="wrapper">
    <app-nav-bar :items="items"/>
  </section>
</template>

<script>
import appNavBar from '@/components/app-nav-bar.vue';
import appText from '@/components/app-text.vue';

function data() {
	return {
		items: [
			{
				id: 1,
				icon: '/ham.svg',
				name: '',
				url: '/admin/dashboard',
			},
			{
				id: 2,
				icon: '',
				url: '/admin/dashboard',
				name: 'Transactions',
			},
			{
				id: 3,
				icon: '/search.svg',
				url: '/admin/search',
				name: '',
			},
		],
	};
}

export default {
	name: 'pages-home',
	components: {
		appNavBar,
		appText,
	},
	data,
};
</script>

<style scoped>
.wrapper {
	background-color: var(--colorPrimary);
	color: var(--secondaryPrimary);
}
</style>