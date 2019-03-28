<template>
  <section class="landing-section-container">
    <slot></slot>
  </section>
</template>

<script>
export default {
	name: 'app-landing-section-container',
};
</script>

<style scoped>
.landing-section-container {
	display: flex;
	flex-direction: column;
	padding: var(--largeSpacing);
	text-align: center;
}

.landing-section-container.white {
	background-color: var(--colorSecondary);
}
</style>