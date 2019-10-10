<template>
		<div class="wrapper">
			<div class="content">
				<slot>
					
				</slot>
			</div>
		</div>
</template>

<script>
import BScroll from 'better-scroll'
	
export default {
	name:'BScroll',
	data(){
		return {
			scroll:null
		}
	},
	props:{
		probeType:{type:Number,default:0},
		pullUpLoad:{type:Boolean,default:false}
	},
	methods:{
	dobetterscroll (){//封装 设置基本属性
		this.scroll=new BScroll(document.querySelector('.wrapper'),{
			probeType:this.probeType,pullUpLoad:this.pullUpLoad,click:true
		})
		return this.scroll
	},
	}
}

</script>

<style>
	.wrapper{
		position: absolute;
		top: 44px;
		bottom: 49px;
		left: 0;
		right: 0;
		overflow: hidden;
	}
</style>
