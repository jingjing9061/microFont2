const { name } = require('./package.json')
module.exports = {
    devServer: {
        port: '10000',
        // 关闭主机检查，使微应用可以被 fetch，否则会提示生命周期未注册
        disableHostCheck: true,
        
        // 配置跨域请求头，解决开发环境的跨域问题
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    configureWebpack: {
        output: {
            library: name,
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_${name}`
        }
    }
}