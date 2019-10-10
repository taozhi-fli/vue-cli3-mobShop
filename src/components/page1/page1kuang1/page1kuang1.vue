<template>
	<div id="page1kuang1">
		<slot>123</slot>
	</div>
</template>

<script>
	export default{}
</script>

<style>
	#page1kuang1{
		background-color: #fff;
		height: 5rem;
		/* background-color: #FF8198; */
		padding: 10px 5px;
		display: flex;
		justify-content: space-around;
		color: aliceblue;
		line-height: 80px;
		text-shadow:0 0 4px #000;
		font-size: 14px;
	}
	#page1kuang1 span{
		display: inline-block;
		height: 100%;
		/* flex: 1; */
		width: 60px;
		height: 60px;
		border-radius: 50%;
		box-shadow: 0 0 1px #666666;
	}
</style>
