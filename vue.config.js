const addVueRawPreLoader = require("../vue-raw-pre");

module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
		? '/vue-spectrum/'
		: '/',
	css: {
		extract: false
	},
	chainWebpack: (config) => {
		// addVueRawPreLoader(config, {
		// 	componentName: "example-demo",
		// 	propName: "code"
		// });

		// addVueRawPreLoader(config)

		if (process.env.NODE_ENV === "production") {
			process.env.VUE_CLI_CSS_SHADOW_MODE = true
		}

		config.module
			.rule('vue')
			.use('vue-loader')
				.loader('vue-loader')
				.tap(options => {
					options.shadowMode = true
					return options
				})

		// if (process.env.NODE_ENV === "development") {
		// 	config.module
		// 		.rule('css')
		// 		.oneOf('vue')
		// 		.use('vue-style-loader')
		// 			.tap(options => {
		// 				options.shadowMode = true
		// 				return options
		// 			})
	
		// 	config.module
		// 		.rule('scss')
		// 		.oneOf('vue')
		// 		.use('vue-style-loader')
		// 			.tap(options => {
		// 				options.shadowMode = true
		// 				return options
		// 			})
		// }
	},
};