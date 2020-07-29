/**
 * @author yaimeet
 * @date 2019/11/13
 * @Description
 */
const webpack = require('./src/base-resource/vue-admin-common#master/webpack')

// console.log('write module vue.config.js webpack', webpack)

module.exports = webpack.init({
    sgPage: {
        title: ' - 自动化'
    },
    port: 9999,
    alias: {
        common: '../vue-admin-common#master',
        basic: '../vue-admin-basic#master',
        write: '../vue-admin-write#master',
        devops: '../vue-admin-devops#master'
    }
}).setProxyApi('../../../proxyTarget.js').setProxyList().run()
