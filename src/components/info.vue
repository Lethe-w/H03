<template>
	<section class="main">
		<input   @click="change" id="toggle-all" class="toggle-all" type="checkbox">
		<label for="toggle-all">Mark all as complete</label>
		<ul class="todo-list">
			<li :class="{completed:item.completed}" :key="item.id" v-for="item of data"> <!-- class =  "completed "  是用横线样式  状态管理  -->
				<div class="view">
					<!--   type 为非 text的时候  双向绑定指令绑定的不是value  -->
					<input class="toggle"  v-model="item.completed" type="checkbox" name="a" >
					<label><span   v-text="item.todoName"></span></label>
					<button  @click="delete01(item.id)"  class="destroy"></button>
				</div>
				<input class="edit" value="Create a TodoMVC template">
			</li>
		</ul>
	</section>
</template>

<script>
	export default {
		props:['data'],
		methods:{
			delete01(id){
				this.$store.commit('delete01',id)
			},
			change(){
				this.$store.commit('change')
			}
		}
	}
</script>

<style>
</style>
