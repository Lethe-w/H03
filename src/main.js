import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import '../node_modules/todomvc-app-css/index.css'
import '../node_modules/todomvc-common/base.css'

Vue.use(Vuex)
Vue.use(VueRouter)

const store = new Vuex.Store({
	state:{
		todos:[],
		v:true
	},
	mutations:{
		insert01(state,data){
			state.todos.push(data)
		},
		delete01(state,id){
			state.todos = state.todos.filter(data => data.id!=id);
		},
		change(state){
			for (let item of state.todos) {
					item.completed= state.v;
			}
			state.v = !state.v; 
		},
		clear(state){
			state.todos = state.todos.filter(item => !item.completed);
		}
	}
})

Vue.directive('focus',{
	inserted:function(el){
		el.focus();
	}
})

const router = new VueRouter({
	routes:[
		{path:'/',redirect:'/all'},
		{path:'/all',component:resolve => require(['./components/all.vue'],resolve)},
		{path:'/active',component:()=>import('./components/active.vue')},
		{path:'/completed',component:()=>import('./components/completed.vue')}
	]
})



Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
