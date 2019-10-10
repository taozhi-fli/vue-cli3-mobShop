<template>
	<div class="page1detailcanshu" ref="page1de">
		<div class="dianjia">	
		<img src="http://img5.imgtn.bdimg.com/it/u=316452838,738712579&fm=26&gp=0.jpg" alt="" height="40">
		<span>店家</span>
		</div>
		<div class="canshuxiangqing">
			<div class="canshuxiangqingleft">
				<div><span>111w</span><span>总销量</span></div>
				<div><span>11</span><span>全部宝贝</span></div>
			</div>
			<div class="canshuxiangqingright">
				<p>描述相符</p>
				<p>价格合理</p>
				<p>质量满意</p>
			</div>
		</div>
		<div class="enterhome">进店看看</div>
		<div class="showimg">
			<img v-for="item in img_list" :src="item" width="100%" @load="imgloading">
		</div>
	</div>
</template>

<script>
	import {getpage1detail} from 'components/page1/page1getrequest'
	
	export default{
		data(){
			return{
				img_list:[],
				timer:0
			}
		},
		methods:{
			mygetpage1canshudetail(){
				return getpage1detail().then(data =>{
				if(data.status==0){
					this.img_list=data.message.img_url
					console.log(this.getpage1detailmsg.img_url)
				}
			},err =>{
				console.log(err)
			})
			},
			imgloading(){
				if(this.timer){clearTimeout(this.timer)}
				this.timer=setTimeout(()=>{
					this.$emit('imgload')
				},200)
			}
		},
		
		created(){
			console.log('canshu')
			this.mygetpage1canshudetail()
		},
	}
</script>

<style>
	.page1detailcanshu{
		padding: 15px;
		margin: 3px 0;
		background-color: #fff;
		/* height: 250px; */
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
		align-content: center;
		line-height: 1.5;
		color: #3c3C3C;
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
		justify-content: center;
	}
	.canshuxiangqingright{
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
	}
	.enterhome{
		margin: 15px auto 40px;
		width: 100px;
		text-align: center;
		line-height: 2;
		font-size: 17px;
		background-color: #FF8198;
		color: #F0F8FF;
		border-radius: 15px;
	}
	.showimg{
		padding: 10px 0 0;
		border-top: 1px solid #666666;
	}
</style>
