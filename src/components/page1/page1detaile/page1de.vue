<template>
	<div class="pagde">
		<tempnavbar :bgccolor="'#fff'">
			<p slot="navbarmiddle" v-for="(item,index) in navitem" :class="{'navpink':isnavitempink==index}" @click="navbarisclick(index)"> {{item}} </p>
			<p slot="navbarright"> </p>
		</tempnavbar>
		<BScroll :probe-type="3" :pull-up-load="true" ref="page1desc">
			<shangpin ref="page1de1" @addshoppingnum="page1addshoppingnum" ></shangpin>
			<canshu ref="page1de2" @imgload="imgloading"></canshu>
			<pinglun ref="page1de3"></pinglun>
			<tuijian ref="page1de4"></tuijian>
			<div class="page1end">-----end-----</div>
		</BScroll>
		<div class="page1debutton">
			<div>
				<div><img src="http://img0.imgtn.bdimg.com/it/u=3813064241,3882198389&fm=26&gp=0.jpg" alt="" width="15px"><span>收藏</span></div>
				<div><img src="http://img0.imgtn.bdimg.com/it/u=24198168,3031032168&fm=26&gp=0.jpg" alt="" width="15px"><span>店铺</span></div>
				<div><img src="http://img4.imgtn.bdimg.com/it/u=3106773582,1956972692&fm=26&gp=0.jpg" alt="" width="15px"><span>客服</span></div>
			</div>
			<div class="shoppingview" @click="toshoppingview" :shoppingnum="getshoppingnum">购物车</div>
			<div>购买</div>
			
		</div>
	</div>
</template>

<script>
	import tempnavbar from '@/components/common/navbar.vue' //navbar
	import BScroll from 'components/common/scroll.vue' //整体滚动 better-scroll
	import swipe from 'components/common/swipe/swipe.vue'
	import {
		getpage1detail
	} from 'components/page1/page1getrequest'

	import shangpin from './page1deshangpin.vue'
	import canshu from './page1decanshu.vue'
	import pinglun from './page1depinglun.vue'
	import tuijian from './page1detuijian.vue'


	export default {
		data() {
			return {
				navitem: ['商品', '参数', '评论', '推荐'],
				isnavitempink: 0,
				compoHeight:[0,0,0,0]
			}
		},
		components: {
			tempnavbar,
			BScroll,
			canshu,
			shangpin,
			pinglun,
			tuijian
		},
		mounted() {
			console.log(this.$refs.page1de1)
			this.getscroll()
		},
		methods: {

			getscroll() { //监听滚动
				// console.log(shangpin)
				// console.log(canshu)
				// console.log(pinglun)
				// console.log(tuijian)
				this.scroll.on('scroll', (position) => { //屏幕滚动获取滚屏y值
					// console.log(position.y)
					// this.isnavitempink = position.y <= -shangpin ? true : false; //吸顶
					switch (true) {
						case position.y <= -this.compoHeight[0] && position.y >= -this.compoHeight[1]:
							this.isnavitempink=0;
							break;
						case position.y <= -this.compoHeight[1] && position.y >= -this.compoHeight[2]:
							this.isnavitempink=1;
							break;
						case position.y <= -this.compoHeight[2] && position.y >= -this.compoHeight[3]:
							this.isnavitempink=2;
							break;
						case position.y <= -this.compoHeight[3]:
							this.isnavitempink=3
							break;
					}
				});
			},
			
			imgloading(){
				console.log('----')
				this.scroll.refresh()
				this.compoHeight[0] = this.$refs.page1de1.$el.offsetTop;
				this.compoHeight[2] = this.$refs.page1de3.$el.offsetTop;
				this.compoHeight[1] = this.$refs.page1de2.$el.offsetTop;
				this.compoHeight[3] = this.$refs.page1de4.$el.offsetTop;
			},
			
			navbarisclick(index){
				let targetheight=this.compoHeight[index]
				this.scroll.scrollTo(0,-targetheight,200)
			},
			
			toshoppingview(){
				this.$router.push('/shopping')
			},
			
			page1addshoppingnum(){
				// console.log('123')
				let allshopping = this.$store.state.shopping;
				let num = 0;
				for(let key of allshopping){
					num += key.num;
				}
			}
		},
		computed: {
			scroll() { //获取scroll
				return this.$refs.page1desc.dobetterscroll()
			},
			getshoppingnum(){
				let allshopping = this.$store.state.shopping;
				let num = 0;
				for(let key of allshopping){
					num += key.num;
				}
				return num
			}
		},
		activated() { //返回page1页面
			// 	console.log('===================')
			this.scroll && this.scroll.refresh();
			// 	this.scroll.scrollTo(0,this.beforeLeavePositionY,0);
			// 	// this.scroll&&this.scroll.refresh();
		},
		// deactivated() {//离开page1页面 记录当前位置 
		// console.log(this.scroll.y)
		// 	this.beforeLeavePositionY=this.scroll.y;
		// }
	}
</script>

<style scoped>
	.pagde {
		position: relative;
		z-index: 50;
		/* margin-top: 44px; */
		height: 100%;
		bottom: 0;
	}

	.wrapper {
		position: absolute;
		/* top: 44px; */
		top: 0;
		bottom: 0;
		height: auto;
		/* bottom: 49px; */
		left: 0;
		right: 0;
	}

	.navpink {
		color: #FF5777;
	}

	.page1end {
		height: 100px;
		text-align: center;
		background-color: #fff;
		padding: 30px;
	}
	.page1debutton{
		display: flex;
		position: fixed;
		left: 0;
		right:0;
		bottom: 0;
		height: 49px;
		z-index: 100;
		background-color: #fff;
		line-height: 49px;
		text-align: center;
	}

	.page1debutton div{
			flex: 1;
			border: 1px dotted #FF5777;
	}
	.page1debutton div:nth-child(1){
			flex: 1.5;
			border: 1px dotted #FF5777;
			display: flex;
			line-height: 1;
	}
	.page1debutton div:nth-child(1) div{
			border: 1px dotted #FF5777;
			display: flex;
			flex: 1;
			flex-direction: column;
	}
	.page1debutton div:nth-child(1) div img{
		margin: 6px auto;
	}

	.shoppingview::after{
		content: attr(shoppingnum);
		/* width: 10px; */
		/* height: 10px; */
		border-radius: 50%;
		font-size: 12px;
		color: #EEEEEE;
		background-color: #D62929;
		display: inline-table;
		line-height: 1;
	}
	.wrapper{
		margin-top: 44px;
	}
</style>
