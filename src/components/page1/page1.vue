<template>
	<div>
		<tempnavbar>
			<p slot="navbarleft"></p>
			<p slot="navbarmiddle">首页</p>
			<p slot="navbarright"></p>
		</tempnavbar>
		<p1cb :chanbarlist="chanbarlist" v-show="p1cbisfxed" class="p1chanbistotop" @getcurrentindex="getchangebarclick2" ref="patest2"></p1cb>
		<BScroll ref="bsc" :probe-type="3" :pull-up-load="true">
			<swipe :img_url="page1bannerlist" :getn="4"></swipe>
			<p1remk></p1remk>
			<div class="p1k2">
				<!--  占位-->
				<br>111<br>1112 <br>1113 <br>1114 <br>1117 <br>1115 <br>1116<br>1118
			</div>
			<!-- <p1cb :chanbarlist="chanbarlist" class="p1chanbtotop" @getcurrentindex="getchangebarclick"></p1cb> -->
			<p1cb :chanbarlist="chanbarlist" @getcurrentindex="getchangebarclick" ref="patest"></p1cb>
			<!-- 绑定事件父子组件传值 一共有三个变量 父组件上的事件(getchangebarclick) 子组件的点击事件(myclick) 传值的中间值(getcurrentindex) -->
			<!--点击更换热门精选最新 changebar-->
			<!-- <div class="wrapper" >
		<div class="content"> -->
			<p1cbi :list="imglist.left.list" v-show="page1currentindex==0" ref="p1ch1re"></p1cbi>
			<p1cbi :list="imglist.middle.list" v-show="page1currentindex==1" ref="p1ch2re"></p1cbi>
			<p1cbi :list="imglist.right.list" v-show="page1currentindex==2" ref="p1ch3re"></p1cbi>
		</BScroll>
		<upbutton @click.native="backtotop" v-show="istotopshow"></upbutton>
	</div>
</template>
<script>
	// import page1navbar from './navbarpro'
	import {
		getPage1Banner,
		getPage1ImgGoods
	} from 'components/page1/page1getrequest'
	import tempnavbar from '@/components/common/navbar.vue' //navbar

	import swipe from 'components/common/swipe/swipe.vue'
	import p1remk from 'components/page1/page1kuang1/page1k1'
	import p1cb from 'components/common/changebar/changebar'
	import p1cbi from 'components/common/changebar/changebaritem'

	import BScroll from 'components/common/scroll.vue' //整体滚动 better-scroll

	import upbutton from 'components/common/upbutton.vue' //回到顶部按钮

	import {
		defound
	} from 'components/common/defound.js'


	export default {
		data() {
			return {
				p1cbisfxed: false,
				page1bannerlist: [],
				chanbarlist: ['热门', '精选', '最新'],
				page1currentindex: 0,
				currentindexlist: ['left', 'middle', 'right'],
				imglist: {
					'left': {
						'page': 0,
						'list': [],
						'positionY':-413
					},
					'middle': {
						'page': 0,
						'list': [],
						'positionY':-413
					},
					'right': {
						'page': 0,
						'list': [],
						'positionY':-413
					}
				},
				istotopshow: false,
				tabaroffsettop: 0,
				beforeLeavePositionY:0
			}
		},
		components: {
			swipe, //轮播图
			p1remk, //p1k1,//第一个展示框//	p1k1item,//展示框内容
			p1cb, //切换tag
			p1cbi, //切换整体
			BScroll, //整体滚动
			upbutton, //点击回到顶部按钮
			tempnavbar //navbar
			// page1navbar
		},
		created: function() {
			this.getPage1Banner(); //获取轮播图片
			this.getPage1ImgGoods('left', this.imglist.left.page + 1); //获取tarb左图片
			this.getPage1ImgGoods('middle', this.imglist.middle.page + 1); //中
			this.getPage1ImgGoods('right', this.imglist.right.page + 1); //右
			console.log(this.imglist.left.list)
			// this.wrpdivheight = parseInt(window.screen.height) - 137;//

		},
		mounted() {
			this.getscroll();
			this.scroll.refresh()
			this.tabaroffsettop = this.$refs.patest.$el.offsetTop;
		},
		updated(){
			this.scroll.refresh()
		},
		methods: {
			getPage1ImgGoods(style, n) { //获取商品列表
				return getPage1ImgGoods(style, n).then(dat => {
					if (dat.status == 0) {
						this.imglist[style].list.push(...dat.message);
						this.imglist[style].page += 1;
					}
				}, err => {
					console.log('===' + err)
				})
			},
			getPage1Banner() { //轮播图相关
				return getPage1Banner().then(data => { //获取轮播图数据
					if (data.status == 0) { //n获取后端传过来的数据
						for (let value of data.message) {
							this.page1bannerlist.push(value.img_url)
						};
						// //轮播图最后一张和第一张复制一份 加到列表里
						// this.page1bannerlist.push(data.message[0].img_url);
						// this.page1bannerlist.unshift(data.message[3].img_url);
						// console.log(this.page1bannerlist)
						// // console.log(data.message)
					}
				}, err => {
					console.log('====' + err)
				})
			},
			getchangebarclick(index) { //切换处
				this.page1currentindex = index;
				this.$refs.patest.currentindex=index;
				this.$refs.patest2.currentindex=index;
			},
			getchangebarclick2(index){//模拟吸顶的nav 
				this.page1currentindex = index;
				this.$refs.patest.currentindex=index;//real navbar
				this.$refs.patest2.currentindex=index;//monide xiding navbar
				//this.scroll&&this.scroll.refresh();
				let toposition=parseInt(this.imglist[this.currentindexlist[this.page1currentindex]].positionY);
				console.log(this.$refs.bsc.$el.offsetHeight)
				this.scroll.scrollTo(0, toposition, 0);//切换回当前页面时 返回之前离开时记录的位置
			},
			getscroll() { //监听滚动
				// let style = this.currentindexlist[this.currentindex]
				this.scroll.on('scroll', (position) => { //屏幕滚动获取滚屏y值
					let style = this.currentindexlist[this.page1currentindex]
					this.imglist[style].positionY = position.y;//控制切换tabcontro时 记录离开的位置
					this.p1cbisfxed = position.y <= -this.tabaroffsettop ? true : false; //吸顶
					this.istotopshow = position.y < -600 ? true : false; //回到顶部箭头是否显示
				});
				this.scroll.on('pullingUp', () => { //加载更多
					let style = this.currentindexlist[this.page1currentindex]
					this.getPage1ImgGoods(style, this.imglist[style].page + 1)
					
					this.scroll.finishPullUp(); //如果不写这句话 下拉加载更多只能执行一次
				});
			},
			backtotop() {//回到顶部按钮
				this.scroll.scrollTo(0, 0, 1000) //better-scroll内部方法 点击回到顶部 1000ms
			},
		},
		computed: {
			scroll() {//获取scroll
				return this.$refs.bsc.dobetterscroll()
			}
		},
		///正常情况下 谢了keepalive不需要记录 因为引用了 better-scroll  内部有时会有bug 需要手动记录
		activated() {//返回page1页面
			console.log('===================')
			this.scroll&&this.scroll.refresh();
			this.scroll.scrollTo(0,this.beforeLeavePositionY,0);
			// this.scroll&&this.scroll.refresh();
		},
		deactivated() {//离开page1页面 记录当前位置 
		console.log(this.scroll.y)
			this.beforeLeavePositionY=this.scroll.y;
		}
	}
</script>

<style scoped>
	.p1k2 {
		background-color: #FFFFFF;
		border-bottom: #FF8198 1px solid;
	}

	/* 	.p1chanbtotop {
		css实现吸顶效果   父元素有overflow:hidden 时不起作用
		使用了better-scroll不能用这个了
		position: sticky;
		top: 44px;
	} */
	.p1chanbistotop {
		margin-top: 43px;
		position: relative;
		z-index: 100;
		/* position: fixed;
		top: 43px;
		left: 0;
		right: 0;
		z-index: 100; */
	}

	/* .wrapper{
		height:calc(100% - 93px);
		overflow:hidden;
	} */
	.wrapper {
		position: absolute;
		/* top: 44px; */
		bottom: 49px;
		left: 0;
		right: 0;
	}
</style>
