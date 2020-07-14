import Vue from 'vue'
import './register'
import App from './App.vue'
import {
    store,
    router,
    routerHooks
} from 'common/src/output'
routerHooks(router, store)

// console.log('basic store from common', store)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: (h) => {
        return h(App)
    },
    methods: {}
}).$mount('#app')
