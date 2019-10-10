<template>
  <div id="app">
		<!-- <div id="t">
			<navbar></navbar>
		</div> -->
		<!-- <keep-alive> -->
		<div id="m">
			<keep-alive exclude="page1de">
				<!-- 除了page1de模块 其他都保持记忆 -->
				<router-view></router-view>
			</keep-alive>
		</div>
		<!-- </keep-alive> -->
		<div id="b">
			<tabbar></tabbar>
		</div>
  </div>
</template>


<script>
import router from '@/router/router.js'
import tabbar from 'components/pageall/tabbarpro.vue';//封装了component的路径 不用写./
import navbar from '@/components/pageall/navbarpro.vue';


export default {
	
  name: 'app',
  components: {
		tabbar,
		navbar
  }
}
</script>

<style scoped>
	@import "assets/css/base.css";
	#app{
		height: 100vh;
		/* position: relative; */
		/* 100%视高 */
	}
	/* #t{
		height: 44px;
	} */
	#m{
		/* overflow: hidden; */
		margin-bottom: 44px;
		height: 100%;
		/* margin-top: 44px; */
	}
	#b{
		position:fixed;
		bottom:0;
	}
</style>
