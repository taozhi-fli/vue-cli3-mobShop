<template>
	<span :style="'background-image:url('+spanbaimg+')'">
		<!-- <slot name="p1k1itemimg"> <img src="../../../assets/img/kk2.jpg" alt=""> </slot> -->
		<slot name="p1k1itemtext"> <p>lalala</p></slot>
		
	</span>
</template>

<script>
	export default{
		props:{
			spanbaimg:{default:'data:image/jpeg;base64,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'}
		}
	}
</script>

<style scoped>
	span{
		padding: 5px;
		text-align: center;
		background:no-repeat center;
		background-size: cover;
		
	}
	span img{
		height: 3.5rem;
		width:3.5rem;
		border-radius: 50%;
	}
</style>
