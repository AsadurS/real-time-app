<template>
 	<v-container>
 		 <v-form @submit.prevent="login">
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

			   <v-btn type="submit">Submit</v-btn>
        </v-form>
 	</v-container>
</template>
<script>
	export default{
		data()
		{
			return{
				form:{
					email:null,
					password:null,
				}
			}
		},

		methods:{
			login()
			{
				axios.post("/api/auth/login", this.form)
				.then(res=> console.log(res.data))
				
			}
		}
	}
</script>