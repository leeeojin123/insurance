
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import ClaimReceiptManager from "./components/listers/ClaimReceiptCards"
import ClaimReceiptDetail from "./components/listers/ClaimReceiptDetail"
import Manager from "./components/listers/Cards"
import Detail from "./components/listers/Detail"



export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/claims/receipts',
                name: 'ClaimReceiptManager',
                component: ClaimReceiptManager
            },
            {
                path: '/claims/receipts/:id',
                name: 'ClaimReceiptDetail',
                component: ClaimReceiptDetail
            },
            {
                path: '//',
                name: 'Manager',
                component: Manager
            },
            {
                path: '///:id',
                name: 'Detail',
                component: Detail
            },




    ]
})
