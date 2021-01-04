import token  from "./Token"
import AppStorage  from "./AppStorage"
class User{
	
    /**
    * Login user using email amd password
    */
	login(data)
	{
		axios.post("/api/auth/login", data)
				.then(res=> this.responseAfterLogin(res));
	}

	/**
	* After login call app storage for set details
	*/
	responseAfterLogin(res)
	{
		const access_token = res.data.access_token;

		const user ={
					name:res.data.name,
					email:res.data.email
			    }

		if(token.isValid(access_token))
		{   
			AppStorage.store(user,access_token)
		}
	}

    /**
	* Check token has or not
	*/
	hasToken()
	{
		const storedToken = AppStorage.getToken();
       if(storedToken){
         return token.isValid(storedToken) ? true: false
       }
       return false;
	}

	loggedIn()
	{
		return this.hasToken();
	}

	logout()
	{
		AppStorage.clear();
	}
   /**
   * Get user Data
   */
	user()
	{
		if(this.loggedIn())
		{
			const payload = token.payload(AppStorage.getToken());
			const id = payload.sub;
			const user={
				id   :id,
				name : AppStorage.getName(),
				email:AppStorage.getEmail(),
			} 

		 return user;	
		}
		return false
	}

}

export default User = new User();