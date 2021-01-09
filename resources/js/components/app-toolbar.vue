<template>
  
    <v-toolbar dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>
		<div>
		      
	    <router-link 
	     to="/forum">
		      <v-btn  text>
		       Forum
		      </v-btn> 
		</router-link> 
		 <router-link 
	     to="/create-question"
	      v-if="isShow">
		      <v-btn  text>
		      Ask Question
		      </v-btn> 
		</router-link> 
		 <router-link 
	     to="/forum"
	      v-if="isShow">
		      <v-btn  text>
		     Category
		      </v-btn> 
		</router-link> 
		 <router-link 
	     to="/login"
	      v-if="!isShow">
		      <v-btn  text>
		     Login
		      </v-btn> 
		</router-link>  
		<router-link 
	     to="/signup"
	      v-if="!isShow">
		      <v-btn  text>
		     Signup
		      </v-btn> 
		</router-link> 
      
		      <v-btn @click="logout" v-if="isShow"  text>
		       Logout
		      </v-btn> 
		

		</div>      
    </v-toolbar>
</template>

<script>
	export default{
		data()
		{   
			return {
				isShow: User.loggedIn(),
				
			}
		},
		methods:
		{
			logout(){
				User.logout();
				this.isShow = User.loggedIn();
			},
		},

		mounted()
		{
			this.$root.$on("isShow", (data)=>{
				console.log(data,5);
              this.isShow = data;
			})
		}
	}
</script>