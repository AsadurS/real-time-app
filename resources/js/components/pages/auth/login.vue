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
					email:"asadur@gmail.com",
					password:123456,
				}
			}
		},

		methods:{
			login()
			{
				User.login(this.form)
			}
		}
	}
</script>