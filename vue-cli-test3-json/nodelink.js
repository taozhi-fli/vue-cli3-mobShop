var htp=require('http');
var fs=require("fs");
var ser=htp.createServer();
ser.on('request',function(req,res){
	var url=req.url;
	var rot="F:/web";
	
    fs.readFile(rot+"/VUE/incVueCli/vue-cli-test3-json"+url,function(err,dat){
		if(err){
			return res.end("error");
		}
		// console.log(dat)
		return res.end(dat);
	});

});
ser.listen('8000',function(){
    console.log('8000ready')
})