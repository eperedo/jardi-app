<template>
  <main class="layout-container">
    <nav>
      <ul class="nav-container">
        <li class="nav-link">
          <nuxt-link class="link" to="/landing">Jardi</nuxt-link>
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
  </main>
</template>

<script>
export default {
	name: 'layouts-public',
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