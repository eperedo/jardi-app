<template>
  <main class="layout-container">
    <nuxt-child/>
  </main>
</template>

<script>
export default {
	name: 'layouts-public',
};
</script>

<style scoped>
.layout-container {
	background-color: var(--colorPrimary);
}
</style>