module.exports = {


	css: {
		loaderOptions: {
			postcss: {


				plugins: [
					// require('autoprefixer')(overrideBrowserslist ["last 15 versions"]),
					require("autoprefixer")({
						// 配置使用 autoprefixer
						overrideBrowserslist: ["last 15 versions"]
					}),
					// require('postcss-plugin-px2rem')({
					// 	rootValue: 100, //换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为100px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
					// 	// unitPrecision: 5, //允许REM单位增长到的十进制数字。
					// 	propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。 可以从px更改为rem的属性
					// 	propBlackList:[],///不应从px更改为rem的属性。
					// 	exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
					// 	selectorBlackList: ['html',/^container$/], //要忽略并保留为px的选择器
					// 	// ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
					// 	// replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
					// 	mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
					// 	minPixelValue: 3 //设置要替换的最小像素值(3px会被转rem)。 默认 0
					// }),
				]
			}
		}
	},

	
	// configureWebpack: {
	// 	externals: {
	// 		'element-ui': 'ELEMENT',
	// 		'vue': 'Vue',
	// 		// 'dayjs':'dayjs'
	// 		// "vue-router": "vue-router",
	// 		// 'vuex': "Vuex",
	// 		// axios: 'axios'
	// 	}
	// },
	// pages: {
	// 	index: {
	// 		entry: 'src/main.js',
	// 		template: 'public/index.html',
	// 		filename: 'index.html',
	// 		chunks: ['chunk-vendors', 'chunk-common', 'index'],
	// 		cdn: {
	// 			css: [
	// 				// 'https://cdn.jsdelivr.net/npm/element-ui@2.13.2/lib/theme-chalk/index.css'
	// 			],
	// 			js: [
	// 				"https://cdn.jsdelivr.net/npm/vue",
	// 				// "https://unpkg.com/vue-router@3.4.9/dist/vue-router.js",
	// 				// "https://cdn.jsdelivr.net/npm/vuex@3.1.2/dist/vuex.min.js",
	// 				"https://cdn.jsdelivr.net/npm/element-ui@2.13.2/lib/index.js",
	// 				// "https://cdn.jsdelivr.net/npm/axios@0.19.2/dist/axios.min.js"
	// 				// "https://cdn.bootcdn.net/ajax/libs/dayjs/1.4.1/dayjs.min.js"

	// 			]
	// 		},
	// 	}
	// },



}


