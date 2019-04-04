const path = require("path");
const cleanWP = require('clean-webpack-plugin').default;

module.exports = {
	mode: "development",
	entry: {
		inner: "./src/inner/inner-wc.ts",
		outer: "./src/outer/outer-wc.ts"
	},
	module: {
		rules: [{
			test: /\.tsx?$/i,
			use: 'ts-loader',
			exclude: [/[/\\]node_modules[/\\]/]
		},
		{
			test: /\.scss$/i,
			use: [
				"style-loader",
				"css-loader",
				"sass-loader"
			]
		},
		{
			test: /\.(png)|(svg)|(je?pg)|(gif)$/i,
			use: 'url-loader',
			issuer: {
				include: /src[/\\]inner[/\\].*\.(ts)|(scss)$/
			}
		},
		{
			test: /\.(png)|(svg)|(je?pg)|(gif)$/i,
			use: {
				loader: 'file-loader',
				options: {
					outputPath: 'images',
					name: "[name].[ext]"
				}
			},
			issuer: {
				include: /src[/\\]outer[/\\].*\.(ts)|(scss)$/
			}
		}]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', ".scss"]
	},
	output: {
		filename: "[name].bundle.js",
		path: path.join(__dirname, 'dist'),
	},
	devtool: "inline-source-map",
	devServer:
	{
		publicPath: "/dist/"
	},
	plugins: [
		new cleanWP()
	]
};