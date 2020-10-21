// const addVueRawPreLoader = require("../vue-raw-pre");

module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
		? '/vue-spectrum/'
		: '/',
	chainWebpack: (config) => {
		// addVueRawPreLoader(config, {
		// 	componentName: "example-demo",
		// 	propName: "code"
		// });
	},
};