import Vue from 'vue'
// import microApps from './microApp'
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

// 定义loader方法，loading改变时，将变量赋值给App.vue的data中的isLoading


// 给子应用配置加上loader方法
const app = [
    {
        name: 'sub-vue',// 必选，微应用的名称，微应用之间必须确保唯一。
        entry:'http://localhost:10000', // // 必选，微应用的 entry 地址。 默认会加载这个html 解析里面的js动态执行  注：子应用必须支持跨域'
        activeRule: '/sub-vue',//激活规则 激活的路径
        container: '#subContainer',
    },
    {
        name: 'sub-react',
        entry:'http://localhost:20000',
        activeRule: '/sub-react',
        container: '#subContainer',
    },
]

registerMicroApps(app, {
    beforeLoad: app => {
        console.log(app.name)
    },
    beforeMount: [
        app => {
            console.log(app.name)
        }
    ],
    afterMount: [
        app => {
            console.log(app.name)
        }
    ],
    afterUnmount: [
        app => {
            console.log(app.name)
        }
    ]

})//注册
// setDefaultMountApp('/sub-vue')
start();//开启