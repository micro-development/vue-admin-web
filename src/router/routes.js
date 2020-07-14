import {
    moduleInfo
} from 'common/src/output'

export default [
    {
        path: '/write',
        name: '写作',
        redirect: '/write/project',
        component: moduleInfo.layout['root-layout'],
        meta: {
            hideMenu: true
        },
        children: [
            {
                path: 'project',
                name: '项目列表',
                component: () => {
                    return import('../views/project.vue')
                }
            },
            {
                path: ':uuid/dashboard',
                name: '项目详情',
                component: () => {
                    return import('../views/dashboard.vue')
                }
            }
        ]
    }
]
