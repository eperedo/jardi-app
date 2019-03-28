<template>
  <section>
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
  </section>
</template>

<script>
export default {
	name: 'pages-landing',
	layout: 'public',
};
</script>

<style scoped>
.nav-container {
	display: flex;
	padding: var(--largeSpacing);
}

.link {
	color: var(--colorSecondary);
	margin: var(--smallSpacing);
}

.nav-link:nth-child(2) {
	margin-left: auto;
}
</style>