<template>
    <ul class="todoTasks">
        <div v-for="(element,index) in this.$store.state.pendingTask" :key="index">
            <li class="todoTask" >
                <h3>
                    {{ element.task}}
                    <h6 class="dateTime">&nbsp;{{ element.dateTime }} </h6>
                </h3>
                <button @click="$store.commit('toggleStatus', element.id)" :class="{is:true, completed: element.status==='Completed'}">{{ element.status }}</button>
                <i class="ri-delete-bin-fill" @click="$store.commit('deleteTask',element.id)"></i>
            </li>
        </div>
    </ul>     
</template>

<script>
export default{
    name:'PendingTasks',
}
</script>

<style scoped>
    .todoTasks{
        color: black;
        display: flex;
        align-items: right;
        flex-direction: column;
    }
    .todoTask{
                display: flex;
                align-items: center;
                justify-content: center;
                border-top: 1px solid rgb(175, 175, 175);
                padding: 15px;
                gap: 30px;
            }
    .todoTask h3{
                width: 250px;
                /* border: 1px solid red; */
                text-align: left;
                text-transform: capitalize;
    }
    .todoTask .is{
        width: 120px;
        height: 35px;
        border-radius: 20px;
        background-color:#E32636;
        color: white;
        border: none;
        cursor: pointer;
    }
    .todoTask button:active{
        transform: scale(0.9);
    }
    .todoTask i{
        font-size: 20px;
        color:  #5c5470; 
        cursor: pointer;

    }
    .todoTask i:active{
        transform: scale(0.9);
    }
    .todoTask .is.completed{
        background-color: #42b883;
    }
    .todoTask .dateTime{
        color: grey;
        /* font-size: 12px; */
        text-align: left;
    }
</style>