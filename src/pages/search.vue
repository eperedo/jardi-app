<template>
  <section class="search-wrapper">
    <input
      aria-label="Search transactions by title or description and press enter"
      class="search-input"
      placeholder="Search transactions by title or description and press enter"
      ref="search"
      type="text"
      @keyup.enter="onSearch(false)"
      @keyup.esc="onSearch(true)"
    >
  </section>
</template>

<script>
function mounted() {
	this.$refs.search.focus();
}

function onSearch(esc) {
	const query = esc ? {} : { search: this.$refs.search.value };
	this.$router.push({ path: '/', query });
}

export default {
	name: 'pages-search',
	mounted,
	methods: {
		onSearch,
	},
};
</script>

<style scoped>
.search-wrapper {
	background-color: var(--colorPrimary);
	padding: var(--smallSpacing);
	height: 100vh;
}

.search-input {
	background-color: var(--colorPrimary);
	border: none;
	color: var(--colorSecondary);
	font-size: var(--smallFont);
	padding: var(--largeSpacing);
	width: 100%;
}
</style>
