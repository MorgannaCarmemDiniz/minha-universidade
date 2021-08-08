const path = require('path');
const sourcePath = path.resolve(__dirname, 'src/');

module.exports = {
	css: {
		loaderOptions: {
			sass: {
				additionalData: `@import '~src/css/global.scss';`
			}
		}
	},
	configureWebpack: {
		resolve: {
			alias: {
				src: sourcePath
			}
		}
	},
};