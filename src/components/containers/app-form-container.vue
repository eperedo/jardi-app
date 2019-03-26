<template>
  <form class="form" v-on="$listeners">
    <slot></slot>
  </form>
</template>

<script>
export default {
	name: 'app-form-container',
};
</script>

<style scoped>
.form {
	color: var(--colorSecondary);
}
</style>