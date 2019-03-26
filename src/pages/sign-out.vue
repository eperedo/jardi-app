<template>
  <app-page-wrapper>
    <app-text tag-name="h1" :styles="['title']">Hope you come back soon. Be safe!🤞🏼</app-text>
  </app-page-wrapper>
</template>

<script>
import appPageWrapper from '@/components/app-page-wrapper.vue';
import appText from '@/components/app-text.vue';

async function created() {
	const user = this.$identity.currentUser();
	await user.logout();
	setTimeout(() => {
		this.$router.push({ name: 'sign-in' });
	}, 1000);
}

export default {
	name: 'pages-sign-out',
	components: {
		appPageWrapper,
		appText,
	},
	created,
};
</script>
