import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            alias: '/user',
            name: 'user-list',
            component: () =>
                import ('./components/user_list')
        },
        {
            path: '/user/:id',
            name: 'user-detail',
            component: () =>
                import ('./components/user_detail')
        },
        {
            path: '/add',
            name: 'user-add',
            component: () =>
                import ('./components/user_add')
        },
    ]
})