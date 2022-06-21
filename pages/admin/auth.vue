<template>
	<div>
		<section>
			<form @submit.prevent="submitForm">
				<div class="form-control">
					<label for="email">E-Mail</label>
					<input type="email" id="email" v-model.trim="email" />
				</div>
				<div class="form-control">
					<label for="password">Password</label>
					<input type="password" id="password" v-model.trim="password" />
				</div>
				<button>Login</button>
			</form>
		</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				email: '',
				password: '',
				mode: 'login',
				error: null,
			};
		},
		methods: {
			async submitForm() {
				const actionPayload = {
					email: this.email,
					password: this.password,
				};
				try {
					await this.$store.dispatch('login', actionPayload);
					const redirectUrl = '/' + (this.$route.query.redirect || 'admin');
					this.$router.replace(redirectUrl);
				} catch (err) {
					this.error = err.message || 'Failed to authenticate, try later.';
				}
			},
		},
	};
</script>

<style scoped>
	form {
		margin: 1rem;
		padding: 1rem;
	}
	.form-control {
		margin: 0.5rem 0;
	}
	label {
		font-weight: bold;
		margin-bottom: 0.5rem;
		display: block;
	}
	input,
	textarea {
		display: block;
		width: 100%;
		font: inherit;
		border: 1px solid #ccc;
		padding: 10px;
		border-radius: 20px;
	}
	input:focus,
	textarea:focus {
		background-color: #eee;
		outline: none;
	}
	button {
		padding: 10px;
		border: 0px;
		background-color: #eee;
		color: #000;
		cursor: pointer;
	}
</style>
