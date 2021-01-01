<template>
<div>
	<app-toolbar></app-toolbar>
	<br>
	<app-footer></app-footer>

</div>
</template>
<script>
	import AppToolbar from"./app-toolbar";
	import AppFooter from "./app-footer"
	export default{
      components:
      {
      	AppToolbar,
      	AppFooter
      }
	}
</script>