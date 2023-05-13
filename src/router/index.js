import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Login from '../views/SHLogin/SHLogin.vue'
import VerifyAccount from '../views/SHVerifyAccount/SHVerifyAccount.vue'
import CreateAccount from '../views/SHCreateAccount/SHCreateAccount.vue'
import ChoosePlan from '../views/SHChoosePlan/SHChoosePlan.vue'
import Checkout from '../views/SHCheckout/SHCheckout.vue'
import LandingPage from '../views/SHHome/SHHome.vue'
import BillingHistory from '../views/SHBillingHistory/SHBillingHistory.vue'
import Account from '../views/SHAccount/SHAccount.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/login',
      name: 'login',
      component: Login
      // https://www.figma.com/file/oLPS6oWstbJ9Sf8M8rTIbo/Specific-Hide(hide-category-or-product)-webpage?type=design&node-id=95-106&t=pqjacS8oEBcrRNiV-0
    },
    {
      path: '/verify-account',
      name: 'verifyAccount',
      component: VerifyAccount
    },
    {
      path: '/create-account',
      name: 'createAccount',
      component: CreateAccount
    },
    {
      path: '/choose-plan',
      name: 'choosePlan',
      component: ChoosePlan
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '/landing-page',
      name: 'landingPage',
      component: LandingPage
    },
    {
      path: '/billing-history',
      name: 'billingHistory',
      component: BillingHistory
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    }
  ]
})

export default router
