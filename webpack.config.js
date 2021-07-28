module.exports = {
    entry: "./src/App.jsx",
    output: {
        path: `${__dirname}/dist`,
        filename: "build.js"
    },
    module: {
        loaders: [
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
                loader: "file-loader"
            }
        ]
    },
    watch: true
};
