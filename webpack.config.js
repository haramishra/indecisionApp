

module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },

    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: __dirname,
        compress: true,
        port: 9000
    }
};