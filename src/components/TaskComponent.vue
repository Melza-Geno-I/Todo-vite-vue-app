<template>
    <ul class="todoTasks">
        <div v-for="element in todoTasks" >
        <li class="todoTask" >
                <h3>{{ element.task}}</h3>
                <button @click="toggleStatus" :class="{is:true, completed: element.status==='Pending'}">{{ element.status }}</button>
                <i class="ri-close-circle-fill"></i>
            </li>
        </div>
    </ul>
         
       
</template>

<script>
export default{
    name:'TaskComponent',
    props:['todoTasks'],
    methods:{
        toggleStatus(){
           console.log('toggle clicked')

        }
    }
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
    }
    .todoTask .is{
        width: 120px;
        height: 35px;
        border-radius: 20px;
        background-color: #42b883;
        color: white;
        border: none;
        cursor: pointer;
    }
    .todoTask i{
        font-size: 25px;
        color:  #5c5470; 
        cursor: pointer;

    }
    .todoTask .is.completed{
        background-color:#E32636;
    }
</style>