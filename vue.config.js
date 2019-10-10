// module.exports = {
// 	configureWebpack : () => {
// 		resolve: {
// 			alias: {
// 				// 配置别名 alias 实际webpack文件在nodemodules里 不方便改 在这里新建文件 写
// 				//不知道为什么不起作用
// 				'assets': './src/assets',
// 				'components': './src/components',
// 				'network': './src/network',
// 
// 			}
// 		}
// 	}
// }
// 

const path = require('path');

module.exports = {
	// baseUrl: '/',
	devServer: {
		proxy: {
			// 只要是项目中使用了匹配"/api"地址的都会自动替换。例如：'api/111/222'==>'https://www.csdn.net/111/222
			'/api': {
				target:'http://localhost:8000',
				// target: 'https://www.csdn.net',//跨域的后端网址
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		}
	},
	configureWebpack: {
		resolve: {
			alias: {
				components: path.join(__dirname, 'src/components'),
			},
		},
	},
};
