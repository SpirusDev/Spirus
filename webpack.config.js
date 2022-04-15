const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";

module.exports = {
	entry: "./src/index.ts",
	mode: isDev ? "development" : "production",
	target: ["electron-renderer", "web"],
	output: {
		path: path.join(__dirname, "dist"),
		filename: "bundle.js"
	},
    devtool: isDev ? "inline-source-map" : false,
    devServer: {
        static: {
            directory: path.join(__dirname, "assets"),
            publicPath: "/assets",
        },
        open: false,
        hot: false,
        port: process.env.ELECTRON_WEBPACK_PORT,
    },
	module: {
		rules: [
			{
				test: /\.ts?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.scss$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		]
	},
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
	resolve: {
		extensions: [".ts", ".js"]
	}
};
