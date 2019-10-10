
<template>
	<tempnavbar>
			<p slot="navbarmiddle">1111</p>
			<!-- <tempnavbaritem>
				<div slot="navitemtext"> aa </div>
			</tempnavbaritem> -->
	</tempnavbar>
</template>

<script>
	import tempnavbar from '@/components/common/navbar.vue'
	// import tempnavbaritem from '@/components/common/navbaritem.vue'
	
	export default {
		name: 'App',
		components:{
			tempnavbar,
			// tempnavbaritem
		}
	}
</script>

<style>
</style>
