/**
 * @author yaimeet
 * @date 2019/11/13
 * @Description
 */
const webpack = require('./src/base-resource/it-admin-common/webpack')

// console.log('write module vue.config.js webpack', webpack)

module.exports = webpack.init({
    sgPage: {
        title: ' - 自动化'
    },
    port: 9999,
    alias: {
        common: webpack.resolve('../it-admin-common'),
        basic: webpack.resolve('../it-admin-basic'),
        write: webpack.resolve('../it-admin-write'),
        devops: webpack.resolve('../it-admin-devops'),
        cloud: webpack.resolve('../it-admin-cloud')
    }
}).setProxyApi(webpack.resolve('../../../proxyTarget.js')).setProxyList().run()
