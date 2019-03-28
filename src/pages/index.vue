<template>
  <section>
    <app-landing-section-container>
      <app-text tag-name="h1" :styles="['title']">Jardi - your lovely money saving pal!</app-text>
      <picture>
        <img
          src="/landing-1.svg"
          width="300"
          height="300"
          alt="Jardi - your lovely money saving pal!"
        >
      </picture>
    </app-landing-section-container>
    <app-landing-section-container>
      <app-text tag-name="h2" :styles="['title']">Keep track of your daily spend or income!</app-text>
      <picture>
        <img
          src="/landing-2.svg"
          width="300"
          height="300"
          alt="Keep track of your daily spend or income!"
        >
      </picture>
    </app-landing-section-container>
    <app-landing-section-container>
      <app-text tag-name="h2" :styles="['title']">See your current balance whenever you want!</app-text>
      <picture>
        <img
          src="/landing-3.svg"
          width="300"
          height="300"
          alt="See your current balance whenever you want!"
        >
      </picture>
    </app-landing-section-container>
    <app-landing-section-container>
      <app-text tag-name="h2" :styles="['title']">Easy access from your phone!</app-text>
      <picture>
        <img src="/landing-4.svg" width="300" height="300" alt="Easy access from your phone!">
      </picture>
    </app-landing-section-container>
  </section>
</template>

<script>
import appText from '@/components/app-text.vue';
import appLandingSectionContainer from '@/components/containers/app-landing-section-container.vue';

export default {
	name: 'pages-landing',
	components: {
		appLandingSectionContainer,
		appText,
	},
	layout: 'public',
};
</script>
