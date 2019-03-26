<template>
  <app-form-input-container>
    <label class="form-label" :for="$attrs.id">{{ $attrs.label }}</label>
    <input
      class="form-control form-input"
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
    >
  </app-form-input-container>
</template>

<script>
import appFormInputContainer from './app-form-input-container.vue';

export default {
	name: 'app-form-input',
	components: {
		appFormInputContainer,
	},
	inheritAttrs: false,
};
</script>

<style scoped>
.form-control {
	background-color: var(--colorSecondary);
	font-size: var(--mediumFont);
	padding: var(--mediumSpacing);
}

.form-label {
	font-size: var(--mediumFont);
	margin-bottom: var(--smallSpacing);
}
</style>