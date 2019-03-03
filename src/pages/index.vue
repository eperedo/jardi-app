<template>
  <section class="wrapper">
    <app-nav-bar :items="items"/>
    <inline-dates :active-date="today" @active-date="activeDate"/>
    <section class="transactions-wrapper">
      <transaction-item v-bind="transactions[0]"/>
      <transaction-item v-bind="transactions[1]"/>
      <transaction-item v-bind="transactions[2]"/>
    </section>
  </section>
</template>

<script>
import appNavBar from '@/components/app-nav-bar.vue';
import appText from '@/components/app-text.vue';
import inlineDates from '@/components/inline-dates.vue';
import transactionItem from '@/components/transactions/transaction-item.vue';

function data() {
	return {
		transactions: [
			{
				amount: Math.random() * 1000,
				categoryName: 'Work',
				currency: 'PEN',
				date: new Date(),
				id: 1,
				title: 'Freelance Work',
				type: 1,
			},
			{
				amount: Math.random() * 1000,
				categoryName: 'Studies',
				currency: 'PEN',
				date: new Date(2019, 2, 20, 20, 15, 20),
				id: 2,
				title: 'Books',
				type: 2,
			},
			{
				amount: Math.random() * 1000,
				categoryName: 'Hardware',
				currency: 'PEN',
				date: new Date(2019, 4, 20, 20, 15, 20),
				id: 3,
				title: 'CPU Intel Processor',
				type: 2,
			},
		],
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
		transactionItem,
	},
	data,
	methods: {
		activeDate,
	},
};
</script>

<style scoped>
.transactions-wrapper {
	display: grid;
	padding: var(--largeSpacing);
	grid-gap: var(--largeSpacing);
}
.wrapper {
	color: var(--secondaryPrimary);
}
</style>