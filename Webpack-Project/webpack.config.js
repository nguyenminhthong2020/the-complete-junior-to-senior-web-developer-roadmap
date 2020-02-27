module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
            test: /\.(js|js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
            },
            {
            test: /\.(js|js)$/,
            exclude: /node_modules/,
            use: ['eslint-loader']
            }
        ]
    },
    resolve:{
        extensions: ['.js', '.jsx']
    }
}