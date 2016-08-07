var path = require('path');
var logger = require('bows')('webpack.base');

function getBaseConfig(rootDir){
/**
 * This is common config across all environments
 */
    return {
        entry: ['babel-polyfill', './cli/index.js'],
        output: {
            path: path.join(rootDir, 'www'),
            filename: 'bundle.js',
            publicPath: '/static/',
        },
        module: {
            loaders: [
                // gather all js and jsx files + transpile them with babel
                {
                    test: /\.jsx?$/,
                    loaders: ['react-hot', 'babel'],
                    include: path.join(rootDir, 'cli')
                },
                // gather scss files for ?global? classes
                {
                    test: /\.scss$/,
                    include: /cli/,
                    loaders: [
                        'style',
                        'css',
                        'autoprefixer?browsers=last 3 versions',
                        'sass?outputStyle=expanded'
                    ]
                },
                // images!
                {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    loaders: [
                        'url?limit=8192',
                        'img'
                    ]
                },
            ],
        },
        resolve: {
            extensions: ['', '.js', '.jsx', 'scss', 'css']
        }
    };
}

module.exports = getBaseConfig;
