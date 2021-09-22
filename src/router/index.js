import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import detail from '@/components/detail'


Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/ships',
            name: 'home',
            component: home
        },
        {
            path: '/ships/:id',
            component: detail,
            name: 'detail',
            props: true
        },
    ]
})
