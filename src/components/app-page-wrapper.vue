<template>
  <div class="page-wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
	name: 'app-page-wrapper',
};
</script>

<style scoped>
.page-wrapper {
	background-color: var(--colorPrimary);
	color: var(--colorSecondary);
	padding: var(--smallSpacing);
	height: 100vh;
}
</style>