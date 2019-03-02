<template>
  <section class="wrapper">
    <app-nav-bar :items="items"/>
    <inline-dates :active-date="today" @active-date="activeDate"/>
  </section>
</template>

<script>
import appNavBar from '@/components/app-nav-bar.vue';
import appText from '@/components/app-text.vue';
import inlineDates from '@/components/inline-dates.vue';

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
		today: new Date(),
	};
}

function activeDate({ date }) {
	this.today = new Date(date);
}

export default {
	name: 'pages-home',
	components: {
		appNavBar,
		appText,
		inlineDates,
	},
	data,
	methods: {
		activeDate,
	},
};
</script>

<style scoped>
.wrapper {
	background-color: var(--colorPrimary);
	color: var(--secondaryPrimary);
}
</style>