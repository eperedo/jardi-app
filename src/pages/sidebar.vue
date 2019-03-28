<template>
  <app-page-wrapper class="sidebar-wrapper">
    <ul class="sidebar-links">
      <li class="sidebar-link">
        <nuxt-link class="link" to="/dashboard">Dashboard</nuxt-link>
      </li>
      <li class="sidebar-link">
        <nuxt-link class="link" to="/transactions">Transactions</nuxt-link>
      </li>
      <li class="sidebar-link">
        <nuxt-link class="link" to="/transactions/new">New Transaction</nuxt-link>
      </li>
      <li class="sidebar-link">
        <nuxt-link class="link" to="/sign-out">Sign Out</nuxt-link>
      </li>
    </ul>
  </app-page-wrapper>
</template>

<script>
import appPageWrapper from '@/components/app-page-wrapper.vue';

export default {
	name: 'pages-sidebar',
	components: {
		appPageWrapper,
	},
};
</script>

<style scoped>
.link {
	border-bottom: 3px solid var(--colorSecondary);
	color: var(--colorSecondary);
	font-size: var(--largeFont);
	padding-bottom: 5px;
}

.sidebar-links {
	align-items: center;
	display: flex;
	flex-direction: column;
}

.sidebar-link {
	cursor: pointer;
	margin: var(--largeSpacing) 0;
	padding: var(--largeSpacing);
}
</style>
