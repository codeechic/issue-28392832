let timer;

export default {
	async login(context, payload) {
		return context.dispatch('auth', {
			...payload,
			mode: 'login',
		});
	},
	async auth(context, payload) {
		const url = 'http://localhost:3000/api/user/login';

		const response = await fetch(url, {
			method: 'POST',
			body: JSON.stringify({
				email: payload.email,
				password: payload.password,
				returnSecureToken: true,
			}),
		});

		const responseData = await response.json();

		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to authenticate. Check your login data.'
			);
			throw error;
		}

		const expiresIn = +responseData.expiresIn * 5000;
		// const expiresIn = 5000;
		const expirationDate = new Date().getTime() + expiresIn;

		localStorage.setItem('token', responseData.token);
		localStorage.setItem('userId', responseData.userId);
		localStorage.setItem('tokenExpiration', expirationDate);

		context.commit('setUser', {
			token: responseData.token,
			userId: responseData.userId,
		});
	},
	tryLogin(context) {
		context.commit('setUser', {
			token: responseData.token,
			userId: responseData.userId,
		});
		if (token && userId) {
			context.commit('setUser', {
				token: token,
				userId: userId,
			});
		}
	},
};
