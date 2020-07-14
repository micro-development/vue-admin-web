/**
 * @author yaimeet
 * @date 2019/3/3
 * @Description
 */
const path = require('path')

function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    resolve: {
        alias: {
            '@': resolve('src')
        }
    }
}
