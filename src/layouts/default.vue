<template>
  <main class="layout-container">
    <app-nav-bar :items="items"/>
    <nuxt-child/>
  </main>
</template>

<script>
import appNavBar from '@/components/app-nav-bar.vue';

export default {
	name: 'layouts-default',
	data() {
		return {
			items: [
				{
					alt: 'Sidebar',
					id: 1,
					icon: '/ham.svg',
					name: '',
					url: '/sidebar',
				},
				{
					alt: 'Transactions',
					id: 2,
					icon: '',
					url: '/',
					name: 'Transactions',
				},
				{
					alt: 'Search',
					id: 3,
					icon: '/search.svg',
					url: '/search',
					name: '',
				},
			],
		};
	},
	components: {
		appNavBar,
	},
	middleware: 'identity',
};
</script>

<style scoped>
.layout-container {
	background-color: var(--colorPrimary);
}
</style>