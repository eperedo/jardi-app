<template>
  <main class="layout-container">
    <nav>
      <ul class="nav-container">
        <li class="nav-link">
          <nuxt-link class="link" to="/">Jardi</nuxt-link>
        </li>
        <li class="nav-link">
          <nuxt-link class="link" to="/sign-in">Sign In</nuxt-link>
        </li>
        <li class="nav-link">
          <nuxt-link class="link" to="/sign-up">Sign Up</nuxt-link>
        </li>
      </ul>
    </nav>
    <nuxt-child/>
    <app-landing-section-container class="white">
      <footer>
        <app-text :styles="['small', 'app-text-light']">{{ year }} - All rights and lefts reserved</app-text>
        <app-text :styles="['small', 'app-text-light']">
          Made with
          <span aria-label="code, love">👨🏼‍💻</span> and a lot of free time by
          <a
            title="code"
            href="https://blog.eperedo.com"
            target="_blank"
            rel="noopener"
          >Eduardo P. Rivero</a>
        </app-text>
      </footer>
    </app-landing-section-container>
  </main>
</template>

<script>
import appLandingSectionContainer from '@/components/containers/app-landing-section-container.vue';
import appText from '@/components/app-text.vue';

function data() {
	return {
		year: new Date().getFullYear(),
	};
}

export default {
	name: 'layouts-public',
	components: {
		appLandingSectionContainer,
		appText,
	},
	data,
};
</script>

<style scoped>
.link {
	color: var(--colorSecondary);
	margin: var(--smallSpacing);
}

.layout-container {
	background-color: var(--colorPrimary);
}

.nav-container {
	display: flex;
	padding: var(--largeSpacing);
}

.nav-link:nth-child(2) {
	margin-left: auto;
}
</style>