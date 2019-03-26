<template>
  <button class="btn" v-on="$listeners">
    <slot></slot>
  </button>
</template>

<script>
export default {
	name: 'app-button',
};
</script>

<style scoped>
.btn {
	background-color: var(--colorSuccess);
	color: var(--colorSecondary);
	font-size: var(--mediumFont);
	font-weight: bold;
	padding: var(--mediumSpacing);
}

.btn:disabled {
	cursor: not-allowed;
	opacity: 0.6;
}
</style>