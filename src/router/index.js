import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detall from '@/pages/detall/Detall'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/city',
        name: 'City',
        component: City
    }, {
        path: '/detall/:id',
        name: 'Detall',
        component: Detall
    }],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }

})