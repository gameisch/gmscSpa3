import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import blog from '@/components/blog'
import services from '@/components/services'
import cases from '@/components/cases'
import contact from '@/components/contact'
import details from '@/components/details'
import libs from '@/assets/js/libs'

Vue.use(Router, libs)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    },
    {
      path: '/services',
      name: 'services',
      component: services
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/cases',
      name: 'Cases',
      component: cases
    },
    {
      path: '/details/:Pid',
      name: 'details',
      component: details
    }
  ]
})
