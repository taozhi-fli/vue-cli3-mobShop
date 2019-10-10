<template>
	<div>
		<!-- <tempnavbar :bgccolor="'#fff'">
			<p slot="navbarmiddle" v-for="(item,index) in navitem" :class="{'navpink':isnavitempink==index}"> {{item}} </p>
			<p slot="navbarright">  </p>
		</tempnavbar> -->
		<BScroll ref="acc" :probe-type="3" :pull-up-load="true">
			
			<div class="p1k2">
				<!--  占位-->
				<br>111<br>1112 <br>1113 <br>1114 <br>1117 <br>1115 <br>1116<br>1118
				<br>111<br>1112 <br>1113 <br>1114 <br>1117 <br>1115 <br>1116<br>1118
				<br>111<br>1112 <br>1113 <br>1114 <br>1117 <br>1115 <br>1116<br>1118
				<br>111<br>1112 <br>1113 <br>1114 <br>1117 <br>1115 <br>1116<br>1118
				<br>111<br>1112 <br>1113 <br>1114 <br>1117 <br>1115 <br>1116<br>1118
				<br>111<br>1112 <br>1113 <br>1114 <br>1117 <br>1115 <br>1116<br>1118
				<br>111<br>1112 <br>1113 <br>1114 <br>1117 <br>1115 <br>1116<br>1118
				<br>111<br>1112 <br>1113 <br>1114 <br>1117 <br>1115 <br>1116<br>1118
			</div>
		
		</BScroll>
	</div>
</template>

<script>
	import tempnavbar from '@/components/common/navbar.vue' //navbar
	import BScroll from 'components/common/scroll.vue' //整体滚动 better-scroll
	import swipe from 'components/common/swipe/swipe.vue'
	import {getpage1detail} from 'components/page1/page1getrequest'
	
	
	export default{
		data(){
			return {
				navitem:['商品','参数','评论','推荐'],
				isnavitempink:0,
				getpage1detailmsg:{}
				// getpage1detailmsg:{'img_url':["data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…AAelNFFFAC0CiigBRQOlFFACd6WiigAoPSiigBMUUUUAf/9k=", "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3106923807,4071639058&fm=26&gp=0.jpg", "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1727684109,3835372974&fm=26&gp=0.jpg", "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=26231459,2683105015&fm=26&gp=0.jpg"]}
			}
		},
		components:{
			tempnavbar,BScroll,swipe
		},
		computed: {
			scroll() {//获取scroll
				return this.$refs.acc.dobetterscroll()
			}
		}
		// created(){
		// 	this.mygetpage1detail()
		// },
		// methods:{
		// 	mygetpage1detail(){
		// 		return getpage1detail().then(data =>{
		// 		if(data.status==0){
		// 			this.getpage1detailmsg=data.message
		// 			console.log(this.getpage1detailmsg.img_url)
		// 		}
		// 	},err =>{
		// 		console.log(err)
		// 	})
		// 	}
		// }
	}
</script>

<!-- <style scoped>
	.wrapper {
		position: absolute;
		top: 44px;
		bottom: 49px;
		left: 0;
		right: 0;
	}
	.navpink{
		color: #FF5777;
	}
	.page1detailshangpin{
		border-bottom:1px solid #EEEEEE;
		box-shadow:0 0 1px #EEEEEE;
		background-color: #fff;
	}
	.page1detailitem{
		background-color: #fff;
		border-bottom: 1px solid #EEEEEE;
		padding: 0 5px;
	}
	.page1detailitem p{
		padding:15px 0 10px ;
		font-size: 20px;
		color: #4c4c4c;
		font-weight: 500;
	}
	.page1detailitem strong{
		color:#FF5777;
		font-size: 20px;
	}
	.page1detailitem del{
		font-size: 12px;
		color: #666;
		margin: 0 15px 0 5px;
	}
	.tejia{
		display: inline-block;
		background-color: #FF8198;
		color: #F0F8FF;
		padding: 4px 6px;
		border-radius: 15px;
	}
	.item{
		display: flex;
		justify-content: space-between;
		margin: 15px 0 10px;
		font-size: 12px;
		color: #b0b0b0;
	}
	.recmo{
		padding: 0 5px;
		font-size: 13px;
		display: flex;
		justify-content: space-between;
		line-height: 60px;
	}
	
	.page1detailcanshu{
		padding: 15px;
		margin: 3px 0;
		background-color: #fff;
		height: 250px;
	}
	.dianjia{
		height: 60px;
		font-size: 18px;
	}
	.dianjia img{
		margin-right: 30px;
		border: 1px solid #4C4C4C;
		border-radius: 50%;
		vertical-align: middle;
	}
	.canshuxiangqing{
		display: flex;
		justify-content: space-around;
		text-align: center;
		height: 100px;
		background-color: aqua;
	}
	.canshuxiangqingleft{
		flex: 1;
		display: flex;
		border-right: 1px solid #ccc;
	}
	.canshuxiangqingleft div{
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.canshuxiangqingright{
		display: flex;
		flex: 1;
		flex-direction: column;
	}
</style> -->
