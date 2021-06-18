const { name } = require('./package.json');
console.log(name)
module.exports = {
    webpack: (config) => {
        config.output.library = `${name}-[name]`;
        config.output.libraryTarget = 'umd';
        config.output.publicPath = 'http://localhost:20000/';
        config.output.jsonpFunction = `webpackJsonp_${name}`;
        return config;
    },
    devServer: (conifgFunction) => {
        return function (proxy, allowedHost) {
            const config = conifgFunction(proxy, allowedHost);
            // config.port = 20000;
            config.headers = {
                'Access-Control-Allow-Origin': '*'
            }
            return config
        }
    }
}