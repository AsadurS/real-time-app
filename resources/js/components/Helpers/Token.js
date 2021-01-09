class Token {

	/**
	* Check Token is Valid ro not
	*/
	isValid(token) {
		const payload = this.payload(token);
		let iss = payload.iss === window.location.origin + "/api/auth/login" ? payload.iss : window.location.origin + "/api/auth/signup";

		if (payload) {
			return payload.iss === iss ? true : false;
		}

		return false;
	}

	/**
	* Helper for Payload Decode
	*/
	payload(token) {

		const payload = token.split(".")[1];

		return JSON.parse(atob(payload));
	}

}

export default Token = new Token();