import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

let instance = null

function render () {
  instance = new Vue({
    router,
    store,//可以通讯
    render: h => h(App)
  }).$mount('#app') //还是挂载自己的html  主应用会将挂载后的插入进去
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}
if(window.__POWERED_BY_QIANKUN__){
   __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

//子组件协议
export async function bootstrap () {
  console.log('vue app bootstraped')
}

export async function mount (props) {
  console.log(props) //拿到主应用传递的数据
  console.log('props from main framework', props)
  render()
}

export async function unmount (props) {
  instance.$destroy()
  instance = null
}
