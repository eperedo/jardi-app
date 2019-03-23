<template>
  <section class="wrapper">
    <app-nav-bar :items="items"/>
    <inline-dates :active-date="today" @active-date="activeDate"/>
    <section class="transactions-wrapper">
      <transaction-item v-for="tx in transactions" :key="tx.id" v-bind="tx"></transaction-item>
    </section>
  </section>
</template>

<script>
import gql from 'graphql-tag';
import appNavBar from '@/components/app-nav-bar.vue';
import appText from '@/components/app-text.vue';
import inlineDates from '@/components/inline-dates.vue';
import transactionItem from '@/components/transactions/transaction-item.vue';

function data() {
	return {
		items: [
			{
				alt: 'Dashboard',
				id: 1,
				icon: '/ham.svg',
				name: '',
				url: '/',
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
		search: this.$route.query.search,
		today: new Date(),
	};
}

function activeDate({ date }) {
	this.today = new Date(date);
}

function formattedDate() {
	const today = this.today;
	const year = today.getFullYear();
	const month = Number(today.getMonth()) + 1;
	const day = today.getDate();
	return `${year}-${month}-${day}`;
}

export default {
	name: 'pages-home',
	apollo: {
		transactions: {
			query() {
				return gql`
					query getTransactions(
						$startDate: String
						$endDate: String
						$search: String
					) {
						transactions(
							startDate: $startDate
							endDate: $endDate
							search: $search
						) {
							amount
							currency
							description
							id
							registerDate
							title
							type
						}
					}
				`;
			},
			variables() {
				return {
					endDate: this.formattedDate,
					search: this.search,
					startDate: this.formattedDate,
				};
			},
		},
	},
	components: {
		appNavBar,
		appText,
		inlineDates,
		transactionItem,
	},
	computed: {
		formattedDate,
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
</style>