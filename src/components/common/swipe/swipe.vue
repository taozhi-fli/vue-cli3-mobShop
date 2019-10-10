<template>
	<div id="swipe" :style="'height:'+swipeheight">
		<ul :style="'width:'+n*parseInt(imgwidth)+'px;margin-left:'+ulleft+';'" @touchmove="getulmove" @touchend="getulend" @touchstart="getulstart">
			<!-- {{img_url}} -->
			<li v-for="(item,index) in realimgurl" :key="index">
				<img :width="imgwidth" :src="item"/>
			</li>
		</ul>
	</div>
</template>

<script>
	
	export default{
		name:'swipe',
		data(){
			return{
				ulleft:null,
				cun:null,
				obj:{sID:null},
				currentulleft:null,
				currenttouchleft:null,
				realimgurl:null,
				// n:4
			}
		},
		props:{
			time:{default:100},
			getn:{default:2},
			img_url:{type:Array,default(){
				return['http://localhost:8080/img/wk2.5435bccd.jpg','http://localhost:8080/img/kk2.54c4fea5.jpg']},
			},
			swipeheight:{type:String ,default: '10rem'}
		},
		watch:{
			'img_url':function(newvalue){
				// console.log(newvalue)
				// console.log(this.img_url)
				this.realimgurl=this.img_url.slice(0)
				this.realimgurl.push(newvalue[0]);
				this.realimgurl.unshift(newvalue[newvalue.length-1]);
				// console.log(this.realimgurl)
				this.ulleft=-parseInt(this.imgwidth);
				this.getulleft();
			},
		},
		methods:{
			getulleft(){///自动轮播
				this.obj.sID=setInterval(() =>{
					// console.log(this.obj.sID)
					// console.log(e.touch)
					this.cun=-parseInt(parseInt(this.ulleft)/360)
					let target=-(this.cun+1)*parseInt(this.imgwidth);
					let step=-Math.floor((target-parseInt(this.ulleft))/7);
					this.ulleft=parseInt(this.ulleft)-step+'px';
					this.gettoleft();
					if(parseInt(this.ulleft)%360==0){
						this.cun+=1;
						// clearInterval(this.obj.sID)
						// setTimeout(() =>{
						// 	this.getulleft();
						// },2000)
					}
					// console.log(this.ulleft)
				},this.time)
			},
			gettoleft(){///到两端事件
				if(parseInt(this.ulleft)<-(this.n-1)*parseInt(this.imgwidth)){//左边走到最远之后 回到第一张图片
					this.ulleft=-parseInt(this.imgwidth)+1+'px';
					this.cun=1;
				}else if(parseInt(this.ulleft)>-this.imgwidth){
					this.ulleft=-parseInt(this.imgwidth)*(this.n-1)+'px';
					this.cun=this.n-1;
				}
			},
			getulstart(e){
				this.currentulleft=parseInt(this.ulleft);
				this.currenttouchleft=e.targetTouches[0].pageX;
			},
			getulmove(e){///手指移动事件
				this.ulleft=-this.currenttouchleft+e.targetTouches[0].pageX+this.currentulleft;
				console.log(this.ulleft)
				clearInterval(this.obj.sID);
			},
			getulend(){
				clearInterval(this.obj.sID);
				this.getulleft();
			}

		},
		computed:{
			'imgwidth':function(){
				return window.screen.width+"px";
			},
			'n':function(){
				return this.getn+2
			}
		}
	}
	
	
	
</script>

<style scoped>
	#swipe {
		overflow: hidden;
	}
	#swipe ul{
		height:100%;
		/* width:400%; */
	}
	#swipe li{
		float: left;
		height: 100%;
	}
	#swipe img{
		/* width: 100%; */
		height: 100%;
	}
</style>
