import axios from 'axios'

export default function request(config){
	const inst=axios.create({
		// baseURL:'http://192.168.1.6:8080/',
		timeout:5000
	})
	inst.interceptors.request.use(config => {
		
		return config
	},err =>{
		console.log(err)
	});
	inst.interceptors.response.use(res =>{
		return res.data
	},err =>{
		console.log(err)
	})
	return inst(config)
}