class Token{

	/**
	* Check Token is Valid ro not
	*/
	isValid(token)
	{
		const payload = this.payload(token);
		if(payload)
		{
			return payload.iss === window.location.origin+"/api/auth/login"? true : false;
		}

		return false;
	}

	/**
	* Helper for Payload Decode
	*/
	payload(token){
		
	   const payload = 	token.split(".")[1];

	   return JSON.parse(atob(payload));
	}

}

export default Token = new Token();