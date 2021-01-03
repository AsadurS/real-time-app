class AppStorage{
	storeToken(token)
	{
		 localStorage.setItem("token",token)
	}

	sotreUser(user)
	{
		localStorage.setItem("name",user.name)
		localStorage.setItem("email",user.email)
	}
	store(user,token)
	{
		this.sotreUser(user);
		this.storeToken(token);
	}

	clear(){
		localStorage.removeItem("token")
		localStorage.removeItem("name")
		localStorage.removeItem("email")
	}

	getToken(){
		return localStorage.getItem("token");
	}

	getName(){
		return localStorage.getItem("name");
	}
	getEmail(){
		return localStorage.getItem("email");
	}
}

export default AppStorage = new AppStorage();