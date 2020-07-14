module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        'prefer-promise-reject-errors': ['off'],
        'no-global-assign': ['error'],
        'no-empty-pattern': ['error'],
        'no-empty-function': ['error'],
        'eqeqeq': ['error'], // 必须使用全等于 ===
        'new-cap': ['error', {
            'newIsCap': true // 类首字母必须大写，且必须使用 new 实例化
        }],
        'no-else-return': ['error', { 'allowElseIf': true }], // 如果 if 块中包含了一个 return 语句，else 块就成了多余的了。可以将其内容移至块外。
        'no-lonely-if': ['error'], // 禁止else中出现if 例如：else { if () .. } , 需要写成 else if () ...
        'max-params': ['error', 3], // 函数参数最多不可超过3个，再多改成对象格式
        'no-var': ['error'], // 禁止使用var
        'no-confusing-arrow': ['error'], // 禁止把箭头函数用于表达式中
        'no-class-assign': ['error'], // 禁止修改类声明的变量
        'arrow-parens': ['error', 'always'], // 箭头函数的参数，有没有都要使用圆括号
        'arrow-body-style': ['error', 'always'], // 要求箭头函数体使用大括号
        'vue/script-indent': ['error', 4, { 'baseIndent': 1 }], // *.vue 的文件中的script标签中的js内容必须缩进
        'indent': ['error', 4], // 缩进4个空格，编辑器可设置
        'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    },
    overrides: [
        {
            'files': ['*.vue'],
            'rules': {
                'indent': 'off'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        parser: 'babel-eslint'
    }
}
