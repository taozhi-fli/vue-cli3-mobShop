<template>
	<p1k1 class="p1k1"><!--  推荐页面框框-->
		<p1k1item>
			<p slot="pak1itemtext"> 44444</p>
		</p1k1item>
		<p1k1item>
			<p slot="pak1itemtext"> 44444</p>
		</p1k1item>
		<p1k1item>
			<p slot="pak1itemtext"> 44444</p>
		</p1k1item>
	</p1k1>
</template>

<script>
	import p1k1 from './page1kuang1.vue'
	import p1k1item from './page1kuang1item.vue'
	
	export default{
		components:{
			p1k1,p1k1item
		}
	}
</script>

<style>
	.p1k1 {
		margin-bottom: 10px;
	}
</style>
