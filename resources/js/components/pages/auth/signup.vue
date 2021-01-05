<template>
 	<v-container>
 		<v-card style="padding:0px 12px 5px 12px ">
 		 <v-form @onchange="formChanged" @submit.prevent="signUp">
			   <v-text-field
			      v-model="form.name"
			      label="Name"
			      type="text"
			      required
			    ></v-text-field>
			    <v-text-field
			      v-model="form.email"
			      label="E-mail"
			      type="email"
			      required
			    ></v-text-field>
			<v-text-field
			      v-model="form.password"
			      label="password"
			      type="password"
			      required
			    ></v-text-field>
			    <v-text-field
			      v-model="form.confirm_password"
			      label="Confirm password"
			      type="password"
			      required
			    ></v-text-field>

			   <v-btn type="submit" :disabled="isSubmit">Submit</v-btn>
			   <v-btn type="submit" :disabled="isReset">Reset</v-btn>
        </v-form>
    </v-card>
 	</v-container>
</template>
<script>
	export default{
		data()
		{
			return{
				isSubmit: false,
				isReset: true,
				form:this.formData(),
			}
		},

		methods:{
			async signUp()
			{  
				await axios.post("api/auth/signup",this.form)
				.then((res)=>{
                 User.responseAfterLogin(res);
                 this.$router.push("forum")
                 this.$root.$emit("isShow",User.loggedIn());
             })
			 .catch((error)=>{
			 })
			},

			formData()
			{
				return {
					name:null,
					email:null,
					password:null,
					confirm_password:null,
				}
			},
			formChanged(){
				alert();
				let form  = Object.entries(this.form);
				console.log(form);
			}
		},

		created()
		{
		  if(User.loggedIn())
		  {
		  	this.$router.push("forum")
		  }
		}
	}
</script>