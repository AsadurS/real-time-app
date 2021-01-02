<template>
<div>
	<app-toolbar></app-toolbar>
	<router-view></router-view>
	<app-footer></app-footer>

</div>
</template>
<script>
	import AppToolbar from"./app-toolbar";
	import AppFooter from "./app-footer";
	import Login from "./pages/auth/login";
	export default{
      components:
      {
      	AppToolbar,
      	AppFooter,
      	Login
      }
	}
</script>