const addVueRawPreLoader = require("../vue-raw-pre");

module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
		? '/vue-spectrum/'
		: '/',
	css: { extract: false },
	chainWebpack: (config) => {
		// addVueRawPreLoader(config, {
		// 	componentName: "example-demo",
		// 	propName: "code"
		// });

		// addVueRawPreLoader(config)
	},
};