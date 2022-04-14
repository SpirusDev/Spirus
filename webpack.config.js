const path = require('path');

module.exports = {
	entry: './src/entry.ts',
	mode: "development",
	target: 'electron-renderer',
	output: {
		path: path.join(__dirname + "/public/dist"),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.ts?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.scss$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			}
		]
	},
	resolve: {
		extensions: [".ts", ".js"]
	}
};