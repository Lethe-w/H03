<template>
	<section class="todoapp">
		<header class="header">
			<h1>todos</h1>
			<form @submit.prevent="insert01">
				<input class="new-todo"  v-model="info"  placeholder="What needs to be done?" v-focus>
			</form>
		</header>
		<router-view></router-view>
		<footer class="footer" v-if="$store.state.todos.length!=0">
			<span class="todo-count" v-if="$route.path=='/all'"><strong>{{$store.state.todos.length}}</strong> item left</span>
			<span class="todo-count" v-if="$route.path=='/active'"><strong>{{$store.state.todos.filter(item => !item.completed).length}}</strong> item left</span>
			<span class="todo-count" v-if="$route.path=='/completed'"><strong>{{$store.state.todos.filter(item => item.completed).length}}</strong> item left</span>
			<ul class="filters">
			<li>
				<router-link :class="selected" to="/all">all</router-link>
			</li>
			<li>
				<router-link to="/active">Active</router-link>
			</li>
			<li>
				<router-link to="/completed">Completed</router-link>
			</li>
			</ul>
			<button class="clear-completed" @click="clear">Clear completed</button>
		</footer>
	</section>
</template>
<script>
export default {
	data:function(){
		return {selected:true,info:""}
	},
	methods:{
		insert01(){
			if(this.info=="") return;
			var data = {id:Math.random(),todoName:this.info,completed:false}
			this.$store.commit('insert01',data)
			this.info = ""
		},
		clear(){
			this.$store.commit('clear');
		}
	}
}
</script>
<style>
</style>
