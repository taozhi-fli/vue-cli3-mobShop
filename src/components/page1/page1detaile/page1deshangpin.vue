<template>
	<div class="page1detailshangpin" ref="page1de1">
		<swipe :swipeheight="'15rem'" :img_url="getpage1detailmsg.img_url" :getn="4"></swipe>
		<div class="page1detailitem">
			<p>{{getpage1detailmsg.title}}</p>
			<div>
					<strong> ￥{{getpage1detailmsg.new}}</strong>
					<del>￥{{getpage1detailmsg.old}}</del>
					<span class="tejia">今日特价</span>
					<span class="addgouwuche" @click="addtoshopping">加到购物车</span>
			</div>
			<div class="item"><span>销量:{{getpage1detailmsg.sales}}</span><span>收藏:{{getpage1detailmsg.collec}}</span><span>72小时发货</span></div>
		</div>
		<div class="recmo">
			<span>退货补运费</span>
			<span>全国包邮</span> 
			<span>7天无理由退货</span>
		</div>
	</div>
	
</template>

<script>
	import swipe from 'components/common/swipe/swipe.vue'
	import {getpage1detail} from 'components/page1/page1getrequest'
	
	export default{
		data(){
			return {
				getpage1detailmsg:{}
				// getpage1detailmsg:{'img_url':["data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…AAelNFFFAC0CiigBRQOlFFACd6WiigAoPSiigBMUUUUAf/9k=", "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3106923807,4071639058&fm=26&gp=0.jpg", "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1727684109,3835372974&fm=26&gp=0.jpg", "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=26231459,2683105015&fm=26&gp=0.jpg"]}
			}
		},
		created(){
			console.log('shangpin')
			this.mygetpage1detail()
			// this.scroll.refresh();
		},
		components:{
			swipe
		},
		methods:{
			mygetpage1detail(){
				return getpage1detail().then(data =>{
				if(data.status==0){
					this.getpage1detailmsg=data.message
					// console.log(this.getpage1detailmsg.img_url)
				}
			},err =>{
				console.log(err)
			})
			},
			addtoshopping(){
				// console.log(this.$store.state.shopping)
				let shoppingobj={}
				shoppingobj.title=this.getpage1detailmsg.title;
				shoppingobj.sale=this.getpage1detailmsg.new;
				shoppingobj.id=this.getpage1detailmsg.title;
				shoppingobj.img_url=this.getpage1detailmsg.img_url;
				shoppingobj.num=1;
				this.$store.dispatch('getshopping',shoppingobj).then(
			() =>{
					console.log('123')
				});
				this.$emit('addshoppingnum')
				// this.$store.commit('getshopping',shoppingobj)
				// this.$emit('addtoshop')
			}
		},

	}
</script>

<style>
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
	.addgouwuche{
		display: inline-block;
		background-color: #FF8100;
		color: #F0F8FF;
		padding: 4px 6px;
		border-radius: 15px;
		margin-left: 10px;
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
	
</style>
