<template>
	<div>
		<div class="p1changebar" @click="myclick">
			<span v-for="(item,index) in chanbarlist" :key="index" :class="{currentclass:index==currentindex}" @click="currentindex=index">
				<a href="javascript:void 0">{{item}}</a>
			</span>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			chanbarlist:{default(){return []}},
			// currentindex:0
		},
		data(){
			return {
				currentindex:0,
			}
		},
		methods:{
			myclick(){
				this.$emit('getcurrentindex',this.currentindex)
				// console.log(this.$emit('getchangebarclick'))
			}
		},
		
		
	}
</script>

<style scoped>
	a{
		color: var(--color-text);
		padding: 5px;
		display: inline-block;
	}
	.p1changebar{
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-around;
		text-align: center;
		/* height: 2rem; */
		line-height: 2rem;
	}
	.currentclass a{
		color:#FF5777;
		border-bottom: 2px solid #FF5777;
		/* padding: 5px; */
	}
</style>
