import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		shopping:[{"title":"1aa","id":1,"sale":120,"num":1,"img_url":'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2986598543,4057240374&fm=26&gp=0.jpg'},{"title":"1bb","id":3,"sale":120,"num":1,"img_url":'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2986598543,4057240374&fm=26&gp=0.jpg'},{"title":"1cc","id":4,"sale":120,"num":1,"img_url":'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2986598543,4057240374&fm=26&gp=0.jpg'},{"title":"1eee","id":5,"sale":120,"num":1,"img_url":'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2986598543,4057240374&fm=26&gp=0.jpg'},{"title":"2ww","id":6,"sale":120,"num":1,"img_url":'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2986598543,4057240374&fm=26&gp=0.jpg'},
		{"title":"dww","id":11,"sale":120,"num":1,"img_url":'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2986598543,4057240374&fm=26&gp=0.jpg'},{"title":"dee","id":13,"sale":120,"num":1,"img_url":'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2986598543,4057240374&fm=26&gp=0.jpg'},{"title":"drr","id":14,"sale":120,"num":1,"img_url":'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2986598543,4057240374&fm=26&gp=0.jpg'},{"title":"dtt","id":15,"sale":120,"num":1,"img_url":'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2986598543,4057240374&fm=26&gp=0.jpg'},{"title":"ftt","id":16,"sale":120,"num":1,"img_url":'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2986598543,4057240374&fm=26&gp=0.jpg'}]
	},
	mutations:{
		getitemnumplus(state,index){////如果加入购物车的商品是重复的 num就+1
			state.shopping[index].num++;
		},
		getitempush(state,value){//添加
			state.shopping.push(value)
		},
		itemnumjian(state,index){
			state.shopping[index].num--;
		},
		itemnumjia(state,index){
			state.shopping[index].num++;
		},
		removeshoppingitem(state,index){
			state.shopping.splice(index,1)
		}
		// getshopping(state,value){//不推荐在mutations里写复杂的代码 写到actions里
		// 	let flag = true
		// 	for (let item of state.shopping){
		// 		if(item.id == value.id){
		// 			flag = false;
		// 			item.num++;
		// 		}
		// 	}
		// 	if(flag){
		// 		state.shopping.push(value)
		// 	}
			// let flag = state.shopping.some(item=> {
			// 	return item.id == value.id
			// })
			// console.log(flag)
			// if(flag){
			// 	for(let item of state.shopping){
			// 		console.log(item)
			// 		if(item.id==value.id){
			// 			return item.num++
			// 		}
			// 	}
			// }else{
			// 	state.shopping.push(value)
			// }
		// }	
	},
	actions:{
		getshopping(context,value){///添加内容/本来传入的值是context(上下文) 是个对象 {state}通过解构的方法 获得state属性
		// console.log(state)
		return new Promise((res,rej)=>{
			let state = context.state ;
				let flag = true ;
				for (let index in state.shopping){
					if(state.shopping[index].id == value.id){
						flag = false;
						context.commit('getitemnumplus',index)
						res()
					}
				}
				if(flag){
					context.commit('getitempush',value)
					res()
				};
		});
	}
	}
})

export default store