<template>
  <nav class="navbar-wrapper">
    <ul class="navbar">
      <li v-for="item in items" :key="item.id">
        <nuxt-link :to="item.url">
          <img v-if="item.icon" :src="item.icon" width="20" height="20">
          <app-text tag-name="span" :styles="['app-text']" v-if="item.name">{{ item.name }}</app-text>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import appText from '@/components/app-text.vue';

export default {
	name: 'app-nav-bar',
	components: {
		appText,
	},
	props: {
		items: {
			type: Array,
			default: () => [],
		},
	},
};
</script>

<style scoped>
.navbar {
	align-items: center;
	display: flex;
	justify-content: space-between;
}

.navbar-wrapper {
	padding: var(--largePadding);
}
</style>