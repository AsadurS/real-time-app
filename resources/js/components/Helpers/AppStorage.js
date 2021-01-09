class AppStorage {

	/**
	* Set Token in Local storage
	*/
	storeToken(token) {
		localStorage.setItem("token", token)
	}

	/**
	 * Set User in Local storage
	 */
	sotreUser(user) {
		localStorage.setItem("name", user.name)
		localStorage.setItem("email", user.email)
	}

	/**
	* Function call Set Token & User in Local storage
	*/
	store(user, token) {
		this.sotreUser(user);
		this.storeToken(token);
	}
	/**
	* Clear all Local storage
	*/
	clear() {
		localStorage.removeItem("token")
		localStorage.removeItem("name")
		localStorage.removeItem("email")
	}

	/**
	* Get Token From local storage
	*/
	getToken() {
		return localStorage.getItem("token");
	}

	/**
	* Get name From local storage
	*/
	getName() {
		return localStorage.getItem("name");
	}

	/**
	* Get Token From email storage
	*/
	getEmail() {
		return localStorage.getItem("email");
	}
}

export default AppStorage = new AppStorage();