<template>
  
    <v-toolbar dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>
		<v-toolbar-items>
		      <v-btn text>
		       Forum
		      </v-btn>

		      <v-btn text>
		       Ask Question
		      </v-btn>
		      <v-btn text>
		        Category
		      </v-btn text>
		      <v-btn text>
		       <router-link to="/login">Login</router-link> 
		      </v-btn>
		</v-toolbar-items>      
    </v-toolbar>
</template>