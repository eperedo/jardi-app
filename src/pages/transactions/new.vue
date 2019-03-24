<template>
  <div>
    <app-nav-bar :items="items"/>
    <ApolloMutation
      :mutation="require('@/graphql/new-transaction.gql')"
      :optimistic-response="optimisticResponse"
      :update="update"
      :variables="model"
      @done="onDone"
    >
      <template slot-scope="{ mutate, loading, error }">
        <form class="form" @submit.prevent="mutate()">
          <div class="form-input-container">
            <label class="form-label" for="amount">Amount</label>
            <input
              class="form-control form-input"
              id="amount"
              required
              step="any"
              type="number"
              ref="amount"
              v-model.number="model.amount"
            >
          </div>
          <div class="form-input-container">
            <label class="form-label" for="title">Title</label>
            <input
              class="form-control form-input"
              id="title"
              required
              type="text"
              v-model="model.title"
            >
          </div>
          <div class="form-input-container">
            <label class="form-label" for="date">Date</label>
            <input
              class="form-control form-input"
              id="date"
              required
              type="date"
              v-model="model.registerDate"
            >
          </div>
          <div class="form-input-container">
            <label class="form-label" for="type">Type</label>
            <select class="form-control form-select" id="type" required v-model="model.type">
              <option value="INCOME">Income</option>
              <option value="EXPENSE">Expense</option>
            </select>
          </div>
          <div class="form-input-container">
            <label class="form-label" for="description">Description</label>
            <input
              class="form-control form-input"
              id="description"
              type="text"
              v-model="model.description"
            >
          </div>
          <div v-if="error">Error: {{ error }}</div>
          <div class="form-input-container">
            <button class="btn" type="submit" :disabled="loading">Save</button>
          </div>
        </form>
      </template>
    </ApolloMutation>
  </div>
</template>

<script>
import appNavBar from '@/components/app-nav-bar.vue';
// import newTransaction from '@/graphql/new-transaction.gql';
import listTransactions from '@/graphql/list-transactions.gql';
import { formatDate } from '@/utils/helper';

function data() {
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
		model: {
			amount: 1,
			currency: 'PEN',
			description: '',
			title: '',
			registerDate: formatDate(),
			type: 'INCOME',
		},
		optimisticResponse: null,
	};
}

function mounted() {
	this.$refs.amount.focus();
}

function onDone($event) {
	this.$router.push({ name: 'index' });
}

function update(store, context) {
	this.optimisticResponse = {
		__typename: 'Mutation',
		createTransaction: {
			__typename: 'Transaction',
			id: -1,
			...this.model,
		},
	};
	const variables = {
		endDate: this.model.registerDate,
		startDate: this.model.registerDate,
	};
	const record = store.readQuery({
		query: listTransactions,
		variables,
	});
	record.transactions.push(context.data.createTransaction);
	store.writeQuery({
		query: listTransactions,
		data: record,
		variables,
	});
}

export default {
	name: 'pages-transactions-new',
	components: {
		appNavBar,
	},
	data,
	methods: {
		onDone,
		update,
	},
	mounted,
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