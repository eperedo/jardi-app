<template>
  <app-page-wrapper class="padding">
    <section class="amounts-info bottom">
      <app-text tag-name="h1" :styles="['title']">Current Balance</app-text>
      <app-text tag-name="h2" :styles="['title']">{{ balance.balance | formatNumber }}</app-text>
    </section>
    <section class="amounts-container">
      <section class="amounts-info">
        <app-text tag-name="h3" :styles="['title', 'income']">Income</app-text>
        <app-text tag-name="p" :styles="['title']">{{ balance.income| formatNumber }}</app-text>
      </section>
      <section class="amounts-info left">
        <app-text tag-name="h3" :styles="['title', 'expense']">Expense</app-text>
        <app-text tag-name="p" :styles="['title']">{{ balance.expense | formatNumber }}</app-text>
      </section>
    </section>
  </app-page-wrapper>
</template>

<script>
import balance from '@/graphql/balance.gql';
import appText from '@/components/app-text.vue';
import appPageWrapper from '@/components/app-page-wrapper.vue';

function data() {
	return {
		balance: {
			balance: 0,
			income: 0,
			expense: 0,
		},
	};
}

function formatNumber(value, currency = 'PEN') {
	return new Intl.NumberFormat('es-PE', {
		style: 'currency',
		currency,
	}).format(value);
}

export default {
	name: 'pages-dashboard',
	apollo: {
		balance: {
			query: balance,
		},
	},
	components: {
		appPageWrapper,
		appText,
	},
	data,
	filters: {
		formatNumber,
	},
};
</script>

<style scoped>
.amounts-container {
	display: flex;
}

.amounts-info {
	display: flex;
	flex-direction: column;
}

.amounts-info.left {
	margin-left: var(--largeSpacing);
}

.bottom {
	margin-bottom: var(--largeSpacing);
}

.expense {
	color: var(--colorDanger);
}

.income {
	color: var(--colorSuccessLight);
}

.padding {
	padding: calc(var(--largeSpacing) * 1.5);
}
</style>