function defound(fun,delay=200,context){
	let timer = undefined;
	return function(...arg){
		if(timer)  {clearTimeout( timer ) }
		timer = setTimeout(function(){
			console.log('------------')
			fun.apply(context,arg) 
		},delay)
	}
}

export{defound}