<template>
  <div class="transaction-item">
    <img alt="Ingreso" :src="typeProps.icon" height="32" width="32">
    <section class="transaction-text-wrapper">
      <app-text tag-name="p" :title="title">{{ title }}</app-text>
      <app-text tag-name="p" :styles="['small']" :title="registerDate">{{ formatDate }}</app-text>
    </section>
    <section class="transaction-number-wrapper">
      <app-text
        tag-name="p"
        :style="`color: ${typeProps.color}`"
      >{{ amount | formatNumber(currency) }}</app-text>
      <app-text tag-name="p" :styles="['small']">{{ categoryName }}</app-text>
    </section>
  </div>
</template>

<script>
import appText from '@/components/app-text.vue';

function formatDate() {
	const locales = {
		day: '2-digit',
		hour: '2-digit',
		hour12: true,
		minute: '2-digit',
		month: 'short',
	};
	return new Intl.DateTimeFormat('es-prl', locales).format(
		new Date(Number(this.registerDate)),
	);
}

function formatNumber(value, currency) {
	return new Intl.NumberFormat('es-PE', {
		style: 'currency',
		currency,
	}).format(value);
}

function limitText(value, limit = 14) {
	const lengthStr = value.length;
	return value.length > limit ? `${value.substring(limit, 0)}...` : value;
}

function typeProps() {
	const isIncome = this.type === 'INCOME';
	const result = {
		icon: isIncome ? 'up-arrow.svg' : 'down-arrow.svg',
		color: isIncome ? '#68ac8d' : '#FF9999',
	};
	return result;
}

export default {
	name: 'transaction-tem',
	components: {
		appText,
	},
	computed: {
		formatDate,
		typeProps,
	},
	filters: {
		formatNumber,
		limitText,
	},
	props: {
		amount: {
			required: true,
			type: Number,
		},
		categoryName: {
			type: String,
		},
		currency: {
			type: String,
		},
		registerDate: {
			required: true,
			type: String,
		},
		title: {
			required: true,
			type: String,
		},
		type: {
			required: true,
			type: String,
		},
	},
};
</script>

<style scoped>
.transaction-item {
	align-items: center;
	background-color: #262a2d;
	display: flex;
	justify-content: space-between;
	padding: var(--largeSpacing) var(--smallSpacing);
}

.transaction-number-wrapper {
	text-align: right;
}

.transaction-text-wrapper {
	margin: 0 auto 0 var(--largeSpacing);
	min-width: 112px;
}
</style>