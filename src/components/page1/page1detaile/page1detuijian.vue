<template>
	<div class="page1detailtuijian">
			<p1cbi :list="imglist"></p1cbi>
	</div>
</template>

<script>
	import p1cbi from 'components/common/changebar/changebaritem'
	import {
		getPage1ImgGoods
	} from 'components/page1/page1getrequest'
	
	export default{
		data(){
			return {
				imglist:[]
			}
		},
		components:{
			p1cbi,
		},
		created(){
			this.getImgGoods()
		},
		methods:{
			getImgGoods() { //获取商品列表
				return getPage1ImgGoods('middle', 2).then(dat => {
					if (dat.status == 0) {
						console.log(dat.message)
						this.imglist=dat.message
						console.log(this.imglist)
					}
				}, err => {
					console.log('===' + err)
				})
			}
		},
	}
</script>

<style scoped>
	.page1detailtuijian{
		background-color: #fff;
	}
</style>
