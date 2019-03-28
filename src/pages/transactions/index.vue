<template>
  <section class="wrapper">
    <inline-dates :active-date="today" @active-date="activeDate"/>
    <section class="transactions-wrapper">
      <div style="color:#fff" v-if="$apollo.loading">Loading...</div>
      <transaction-item v-for="tx in transactions" :key="tx.id" v-bind="tx"></transaction-item>
    </section>
  </section>
</template>

<script>
import listTransactions from '@/graphql/list-transactions.gql';
import appNavBar from '@/components/app-nav-bar.vue';
import appText from '@/components/app-text.vue';
import inlineDates from '@/components/inline-dates.vue';
import transactionItem from '@/components/transactions/transaction-item.vue';
import { formatDate } from '@/utils/helper';

function data() {
	return {
		search: this.$route.query.search,
		today: new Date(),
	};
}

function activeDate({ date }) {
	this.today = new Date(date);
}

function formattedDate() {
	return formatDate(this.today);
}

export default {
	name: 'pages-transactions',
	apollo: {
		transactions: {
			query: listTransactions,
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