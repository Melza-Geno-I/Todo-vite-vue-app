<template>
    <nav class="nav">
        <i class="ri-calendar-schedule-line all tab" :class="{ active: activeTab === 'all' }" @click="allTab" ></i> 
        <i class="ri-hourglass-fill pending tab" :class="{ active: activeTab === 'pending'}" @click="pendingTab"></i>
        <i class="ri-task-line completed tab" :class="{ active: activeTab === 'completed' }"  @click="completedTab"></i>
    </nav>
</template>

<script >
export default{
    name: 'NavigationTask',
    data(){
        return{
            activeTab: 'all'
        }
    },
    methods:{
        changeTab(tabName){
            this.activeTab = tabName
        },
        allTab(){
            this.allTask();
            this.changeTab('all');
        },
        pendingTab(){
            this.pendingTask();
            this.changeTab('pending')
        },
        completedTab(){
            this.completedTask();
            this.changeTab('completed')
        },
        allTask(){
            this.$store.state.allTask = this.$store.state.tasks;
        },
        pendingTask(){
            this.$store.state.allTask = this.$store.getters.pendingTasks;
        },
        completedTask(){
            this.$store.state.allTask = this.$store.getters.completedTasks;
        }
    },
}

</script>


<style scoped>
.nav{
    display: flex;
    justify-content: space-evenly;
    font-size: 25px;

}
    .nav .tab{
        padding:5px 8px;
        text-align: center;
        cursor: pointer;
        font-size: 25px;
        transition: 0.2s;
    }
    .nav .tab:hover{
        transform: scale(1.1);

    }
    .nav .all{
        color: orange
    }

    .nav .completed{
        color:#42b883
    }
    .nav .pending{
        color:#E32636
    }
    .nav .active{   
        border-radius: 50%;
        background-color: rgba(216, 216, 216, 0.469);
        font-size: 25;
    }
    .nav .tab:active{
        transform: scale(1.1);     

    }

</style>