<template>
	<div>
		<page-header></page-header>
		<section v-if="isLoggedIn">
			Welcome Admin!
		</section>
		<div v-if="isLoggedIn">
			<div>Latest Messages</div>
		</div>
		<section v-else>You do not have the permissions to view this page.</section>
	</div>
</template>
<script>
	export default {
		computed: {
			isLoggedIn() {
				return this.$store.getters.isAuthenticated;
			},
		},
	};
</script>
