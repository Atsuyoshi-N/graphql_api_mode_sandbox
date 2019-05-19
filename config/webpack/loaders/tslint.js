module.exports = {
    enforce: 'pre',
    test: /\.ts|\.tsx$/,
    exclude: /node_modules/,
    use: 'tslint-loader',
}