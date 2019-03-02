<template>
  <section class="inline-dates-container">
    <app-text tag-name="span" :styles="['app-text', 'date-text']">{{ dayName }}</app-text>
    <div class="inline-dates-numbers">
      <app-text
        @click.native="$emit('active-date', day)"
        tag-name="p"
        v-for="day in days"
        :class="setClass(day)"
        :styles="['app-text', 'date-text']"
        :key="day.number"
      >{{ day.number }}</app-text>
    </div>
  </section>
</template>

<script>
import appText from '@/components/app-text.vue';

const daysNames = [
	'Enero',
	'Febrero',
	'Marzo',
	'Abril',
	'Mayo',
	'Junio',
	'Julio',
	'Agosto',
	'Setiembre',
	'Octubre',
	'Noviembre',
	'Diciembre',
];

function dayName() {
	return daysNames[this.activeDate.getMonth()];
}

function dayNumber() {
	return this.activeDate.getDate();
}

function days() {
	const result = [3, 2, 1, 0, 1, 2, 3];
	return result.map((number, index) => {
		const currentDate = new Date(this.activeDate);
		return {
			date:
				index <= 2
					? currentDate.setDate(currentDate.getDate() - number)
					: currentDate.setDate(currentDate.getDate() + number),
			number: currentDate.getDate(),
		};
	});
}

function setClass(date) {
	return this.dayNumber === date.number && 'active-date';
}

export default {
	name: 'inline-dates',
	components: {
		appText,
	},
	computed: {
		dayName,
		dayNumber,
		days,
	},
	props: {
		activeDate: {
			type: Date,
			default: new Date(),
		},
	},
	methods: {
		setClass,
	},
};
</script>

<style scoped>
.active-date {
	font-weight: bold;
	opacity: 1 !important;
}

.date-text {
	opacity: 0.6;
	text-transform: uppercase;
}

.inline-dates-container {
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.inline-dates-container > * {
	padding: 10px 0;
}

.inline-dates-numbers {
	display: flex;
	justify-content: space-between;
	width: 100%;
}
</style>