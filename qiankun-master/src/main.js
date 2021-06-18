import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/lib/theme-chalk/index.css'

import { registerMicroApps, start } from 'qiankun'
//子应用
const app = [
    {
        name: 'vueApp',//应用名
        entry: '//localhost:10001', //默认会加载这个html 解析里面的js动态执行  注：子应用必须支持跨域
        fetch,
        container: '#vue',//子应用要挂载到的dom 容器名
        activeRule: '/vue',//激活规则 激活的路径
        props:{
            a:2
        }
    },
    {
        name: 'reactApp',
        entry: '//localhost:20000',
        fetch,
        container: '#react',
        activeRule: '/react',
        props:{
            a:1
        }
    },
]
registerMicroApps(app)//注册
start();//开启

createApp(App).use(store).use(router).use(ElementPlus, { locale }).mount('#app')
