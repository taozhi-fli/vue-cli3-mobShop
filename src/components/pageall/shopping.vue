<template>
	<div id="page3">
		<navbar class="navbarcolor">
			<div slot="navbarmiddle">
				购物车
			</div>
		</navbar>
		<BScroll  :probe-type="3" :pull-up-load="true" ref="shoppingbsc">
			<div class="shoppingitem">
				<div class="shoppingeveryitem" v-for="(item,index) in shoppimgitems">
					<div :class="{'everysellect':true ,'isshowgou':isshowgou.indexOf(index)!=-1}" @click="isshowornotgou(index)"> √ </div>
					<div><img :src="item.img_url" height="60" width="60"></div>
					<div class="addordel">
						<div>{{item.title}}</div>
						<div class="addordelitem">
							<span style="width: 70px;">￥{{item.sale}}</span>
							<div class="addordelrealitem">
								<span @click="itemnumjian(item,index)">-</span>
								<span>{{item.num}}</span>
								<span @click="itemnumjia(item,index)">+</span>
							</div>
							<div style="width: 90px;">
								￥ {{(item.num*item.sale).toFixed(2)}}
							</div>
						</div>
					</div>
				</div>
			</div>
		</BScroll>
		<div class="shoppingbar">
			<span><div :class="{'allsellect':true ,'isallshow':isallshow}" @click="allclick"> √ </div>全选</span>
			<span>合计:{{cuclall}}</span>
			<span @click="jiesuan">结算</span>
		</div>
	</div>
</template>

<script>
	import BScroll from 'components/common/scroll.vue' //整体滚动 better-scroll
	import navbar from '@/components/common/navbar.vue'
	
	export default{
		// name:'page3',
		data(){
			return {
				shoppimgitems:[],
				isshowgou:[],
				isallshow:false
			}
		},
		components:{BScroll,navbar},
		created(){
			this.getshopping()
		},
		methods:{
			getshopping(){//获得放在vuex的购物车数据
				this.shoppimgitems=this.$store.state.shopping
			},
			isshowornotgou(index){////每个商品选择按钮
				console.log(this.isshowgou)
				if(this.isshowgou.indexOf(index)==-1){
					this.isshowgou.push(index)
				}else{
					this.isshowgou.splice(this.isshowgou.indexOf(index),1)
				}
				if(this.isshowgou.length==this.shoppimgitems.length){
					this.isallshow=true;
				}else{
					this.isallshow=false;
				}
			},
			allclick(){///全选按钮
				this.isallshow = !this.isallshow;
				let currentsrr=[];
				if(this.isallshow){///当前按钮未被选中
					for(let index in this.shoppimgitems){
						currentsrr.push(Number(index));
					}
					this.isshowgou=currentsrr;
				}else{//已经是全选状态
					this.isshowgou=currentsrr;
				}
			},
			itemnumjian(item,index){////item.num----
				if(item.num==1){
					this.$store.commit('removeshoppingitem',index)
				}else{
					this.$store.commit('itemnumjian',index)
				}
			},
			itemnumjia(item,index){////item.num++++
				this.$store.commit('itemnumjia',index)
			},
			jiesuan(){
				console.log('付款了')
			}
		},
		computed:{
			'cuclall':function(){
				let cucl=0;
				for(let item of this.isshowgou) {
					cucl += (this.shoppimgitems[item].num*this.shoppimgitems[item].sale)
				}
				return cucl
			},
			scroll() { //获取scroll
				return this.$refs.shoppingbsc.dobetterscroll()
			},
		},
		activated() { //返回page1页面
			// 	console.log('===================')
			this.scroll && this.scroll.refresh();
			this.isallshow=false;
			this.isshowgou=[]
			// 	this.scroll.scrollTo(0,this.beforeLeavePositionY,0);
			// 	// this.scroll&&this.scroll.refresh();
		},
	}
	
</script>

<style scoped>
	.navbarcolor{
		color:#fff
	}
	
	
	/* 购物车每件商品  */
	.shoppingitem{
		background-color: #fff;
		margin-top: 44px;
		padding: 10px 5px;
		text-align: center;
	}
	.shoppingeveryitem{
		margin-bottom: 5px;
		background-color: #fbebff8f;
		display: flex;
		justify-content: space-between;
		height: 10vh;
		overflow: hidden;
	}
	.addordel{
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.addordelitem{
		display: flex;
		justify-content: space-around;
		margin-top: 10px;
		font-size: 14px;
	}
	.addordelrealitem{
		width: 50px;
		border: 1px solid #f0b8da;
		display: flex;
		line-height: 22px;
	}
	.addordelrealitem span{
		flex: 1;
		background-color: #f0b8da;
		color: #fff;
	}
	.addordelrealitem span:nth-child(2){
		/* border-left: 1px solid #FF8198;
		border-right: 1px solid #FF8198; */
		background-color: #fff;
		color: #3C3C3C;
	}
	.everysellect{
		font-size:25px;
		line-height: 10px;
		height: 15px;
		width: 15px;
		border: 1px solid #F0B00A;
		border-radius: 50%;
		margin: auto 5px ;
		overflow: hidden;
		color:#fdf4ff;
	}
	.isshowgou{
		color: #F0100A;
		overflow:visible;
	}
	
	/* 底部导航栏 */
	.shoppingbar{
		position: fixed;
		bottom: 0;
		height: 49px;
		width: 100vw;
		z-index: 500;
		background-color: #F0F8FF;
		display: flex;
		text-align: center;
		line-height: 49px;
		justify-content: space-between;
	}
	.shoppingbar>span:nth-child(1){
		width: 70px;
		display: flex;
		/* justify-content: center; */
		background-color: #F0B00A;
		color: #fff;
	}
	.shoppingbar>span:nth-child(3){
		width: 70px;
		text-align: center;
		background-color: #F0B0fA;
		color: #fff;
	}
	.allsellect{
		font-size:25px;
		line-height: 10px;
		height: 15px;
		width: 15px;
		border: 1px solid #fff;
		border-radius: 50%;
		margin: auto 5px ;
		overflow: hidden;
		color:#F0B00A;
	}
	.isallshow{
		color: #d62929;
		overflow:visible;
	}

</style>
