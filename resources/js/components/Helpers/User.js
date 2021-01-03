import token  from "./Token"
import AppStorage  from "./AppStorage"
class User{
	login(data)
	{
		axios.post("/api/auth/login", data)
				.then(res=> this.responseAfterLogin(res));


				//	token.payload(res.data.access_token)
	}
	responseAfterLogin(res)
	{
		const access_token = res.data.access_token;
		const user ={
				name:res.data.name,
				email:res.data.email
			}
			console.log(user);
		if(token.isValid(access_token))
		{   
			
			AppStorage.store(user,access_token)
		}
	}

}

export default User = new User();