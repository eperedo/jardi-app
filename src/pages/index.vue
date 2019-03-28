<template>
  <section>
    <section class="landing-section-container">
      <app-text tag-name="h1" :styles="['title']">Jardi - your lovely money saving pal!</app-text>
      <picture>
        <img
          src="/landing-1.svg"
          width="300"
          height="300"
          alt="Jardi - your lovely money saving pal!"
        >
      </picture>
    </section>
    <section class="landing-section-container">
      <app-text tag-name="h2" :styles="['title']">Keep track of your daily spend or income!</app-text>
      <picture>
        <img
          src="/landing-2.svg"
          width="300"
          height="300"
          alt="Keep track of your daily spend or income!"
        >
      </picture>
    </section>
    <section class="landing-section-container">
      <app-text tag-name="h2" :styles="['title']">See your current balance whenever you want!</app-text>
      <picture>
        <img
          src="/landing-3.svg"
          width="300"
          height="300"
          alt="See your current balance whenever you want!"
        >
      </picture>
    </section>
    <section class="landing-section-container">
      <app-text tag-name="h2" :styles="['title']">Easy access from your phone!</app-text>
      <picture>
        <img src="/landing-4.svg" width="300" height="300" alt="Easy access from your phone!">
      </picture>
    </section>
    <section class="landing-section-container white">
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
    </section>
  </section>
</template>

<script>
import appText from '@/components/app-text.vue';

function data() {
	return {
		year: new Date().getFullYear(),
	};
}

export default {
	name: 'pages-landing',
	components: {
		appText,
	},
	data,
	layout: 'public',
};
</script>

<style scoped>
.landing-section-container {
	display: flex;
	flex-direction: column;
	padding: var(--largeSpacing);
	text-align: center;
}

.landing-section-container.white {
	background-color: var(--colorSecondary);
}
</style>