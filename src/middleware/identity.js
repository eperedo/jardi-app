export default async function(context) {
	try {
		const user = await context.app.$identity.currentUser();
		await user.jwt();
		return true;
	} catch (error) {
		return context.redirect(401, '/sign-in');
	}
}
