import Vue from 'vue'
import VueRouter from 'vue-router'
import Daily from '../views/Daily.vue'
import Days from '../views/Days.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Daily',
		component: Daily
	},
	{
		path: '/days',
		name: 'Days',
		component: Days
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
