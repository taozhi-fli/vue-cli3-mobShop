<template>
	<div id="navbar" :style="'background-color:'+bgccolor">
		<div  class="navbarleft" @click="backto"><slot name="navbarleft"> < </slot></div>
		<div  class="navbarmiddle"><slot name="navbarmiddle">middle</slot></div>
		<div  class="navbarright"><slot name="navbarright"> ··· </slot></div>
	</div>
</template>

<script>
	export default{
		props:{
			bgccolor:{
				default:'#FF5777',
			}
		},
		methods:{
			backto(){
				// console.log(this.$router)
				window.history.back()
			}
		}
	}
</script>

<style>
	#navbar{
		height: 44px;
		position: fixed;
		top: 0;
		width: 100%;
		display: flex;
		justify-content: space-between;
		line-height: 44px;
		text-align: center;
		z-index: 100;
	}
	.navbarleft{
		flex: 1;
	}
	.navbarmiddle{
		flex: 6;
		display: flex;
		justify-content: space-around;
	}
	.navbarright{
		flex: 1;
	}
</style>
