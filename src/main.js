import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    tasks:[
      {
        id:1,
        task:"task 1",
        status:'Completed'
      },
      {
        id:2,
        task:"task 2",
        status:'Pending'
      },
    ]
  },
  mutations:{
      addTask(state, taskTitle){
        let task = {
            id: new Date().getTime(),
            task: taskTitle,
            status:'Pending'
        }
        state.tasks.push(task);
        
    },
    toggleStatus(state, id){
        let taskIndex = state.tasks.findIndex(task => task.id === id)
        let taskStatus = state.tasks[taskIndex].status;
        if(taskIndex != -1 ){
          state.tasks[taskIndex].status = taskStatus === "Pending" ? "Completed": "Pending";
        }
    },
    deleteTask(state, id){
      let taskIndex = state.tasks.findIndex(task => task.id === id);
      if(taskIndex != -1 && confirm("Do you want to remove this task?")){
        state.tasks.splice(taskIndex,1);
      }
    },
    sortTasks(state){
      let sortedTask = []
      let pendingTask = state.tasks.filter(task => task.status === "Pending");
      let completedTask = state.tasks.filter(task => task.status === "Completed");
      sortedTask += pendingTask;
      sortedTask += completedTask;
      state.tasks = sortedTask;
    }
  }
})

import './assets/main.css'

new Vue({
  store: store,
  render: (h) => h(App)
}).$mount('#app')