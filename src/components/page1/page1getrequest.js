import request from '@/network/request.js'

const getPage1Banner=function(){
	return request('/api/page1banner.json')
	// return request('api/api/articles?type=more&category=home&shown_offset=1524276761019196&first_view=false')
}

const getPage1ImgGoods=function(style,n){
	return request('/api/page1/'+style+'page'+n+'.json')
}
const getpage1detail=function(){
	return request('/api/page1detail.json')
}

export{
	getPage1Banner,
	getPage1ImgGoods,
	getpage1detail
}