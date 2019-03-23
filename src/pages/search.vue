<template>
  <app-page-wrapper>
    <input
      aria-label="Search transactions by title or description and press enter"
      class="search-input"
      placeholder="Search transactions by title or description and press enter"
      ref="search"
      type="text"
      @keyup.enter="onSearch(false)"
      @keyup.esc="onSearch(true)"
    >
  </app-page-wrapper>
</template>

<script>
import appPageWrapper from '@/components/app-page-wrapper.vue';

function mounted() {
	this.$refs.search.focus();
}

function onSearch(esc) {
	const query = esc ? {} : { search: this.$refs.search.value };
	this.$router.push({ path: '/', query });
}

export default {
	name: 'pages-search',
	components: {
		appPageWrapper,
	},
	mounted,
	methods: {
		onSearch,
	},
};
</script>

<style scoped>
.search-input {
	background-color: var(--colorPrimary);
	border: none;
	color: var(--colorSecondary);
	font-size: var(--smallFont);
	padding: var(--largeSpacing);
	width: 100%;
}
</style>
