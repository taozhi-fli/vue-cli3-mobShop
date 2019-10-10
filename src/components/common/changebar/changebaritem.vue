<template>
	<div id="p1changebark">
		<div class="everyitem" v-for="(item,index) in list" :key="index" :style="'width:'+imgwidth+'px'" @click="totouter(item.title)">
			<div><img :src="item.img_url" alt="" @load="imgonload" ></div>
			<p v-text="item.title"></p>
		</div>
	</div>
</template>

<script>
	
	export default{
		props:['list'],
		data(){
			return {
				imgwidth:window.screen.width*0.47,
			}
		},
		methods:{
			imgonload(){
				this.$bus.$emit('page1imgonload')
			},
			totouter(id){
				this.$router.push('/page1/'+id)
			}
		}
	}
</script>

<style scoped>
	#p1changebark{
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	#p1changebark .everyitem{
		margin: 2px 4px;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		/* background-color: #FF5777; */
		margin-bottom:5px ;
	}
	#p1changebark .everyitem div{
		overflow: hidden;
		border-radius: 10%;
	}
	#p1changebark .everyitem div img{
		/* flex: 1; */
		/* width: 100%; */
		height: 12rem;
		/* border: 1px solid #EEEEEE; */
		/* margin: 5px; */
	}
</style>
