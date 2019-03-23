<template>
  <section class="layout-container">
    <nuxt-child/>
  </section>
</template>

<script>
export default {
	name: 'layouts-default',
};
</script>

<style scoped>
.layout-container {
	background-color: var(--colorPrimary);
}
</style>