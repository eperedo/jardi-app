<template>
  <section class="wrapper">
    <app-text tag-name="h1">Home Page</app-text>
  </section>
</template>

<script>
import appText from '@/components/app-text.vue';

export default {
	name: 'pages-home',
	components: {
		appText,
	},
};
</script>

<style scoped>
.wrapper {
	background-color: var(--colorPrimary);
	color: var(--secondaryPrimary);
	display: grid;
	justify-content: center;
}
</style>