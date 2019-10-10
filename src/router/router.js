import Vue from 'vue'
import VueRouter from 'vue-router'

const page1 = () => import('../components/page1/page1.vue')
const page2 = () => import('../components/page2/page2.vue')
const page3 = () => import('../components/page3/page3.vue')
const page4 = () => import('../components/page4/page4.vue')

const page1details = () => import ('../components/page1/page1detaile/page1de.vue') 
const test = () => import ('../test/test1.vue') 
const test2 = () => import ('../test/test2.vue') 

const shopping = () => import('../components/pageall/shopping.vue')

Vue.use(VueRouter);
const router=new VueRouter({
	mode:'history',
	routes:[
		{path:'/',redirect:'/page1'},
		{path:'/page1',component:page1},
		{path:'/page2',component:page2},
		{path:'/page3',component:page3},
		{path:'/page4',component:page4},
		{path:'/page1/:id',component:page1details},
		{path:'/shopping',component:shopping},
		{path:'/test1',component:test},
		{path:'/test2',component:test2},
	]
})
export default router