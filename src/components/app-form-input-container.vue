<template>
  <div class="form-input-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
	name: 'app-form-input-container',
};
</script>

<style scoped>
.form-input-container {
	display: flex;
	flex-direction: column;
	padding: var(--mediumSpacing);
}
</style>
