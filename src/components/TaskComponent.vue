<template>
    <ul class="todoTasks">
        <div v-for="(element, index) in todoTasks" :key="index">
        <li class="todoTask" >
                <h3>{{ element.todo }}</h3>
                <button class="status is-complete">{{ element.isComplete }}</button>
                <i class="ri-close-circle-fill"></i>
            </li>
        </div>
    </ul>
            
            <!-- <li class="todoTask">
                <h3>Task1</h3>
                <button class="status is-complete">Completed</button>
                <i class="ri-close-circle-fill"></i>
            </li>
            <li class="todoTask">
                <h3>Task1</h3>
                <button class="status is-complete">Completed</button>
                <i class="ri-close-circle-fill"></i>
            </li> -->
            
       
</template>

<script>
export default{
    name:'TaskComponent',
    props:{
        todoTasks:{
            id:Number,
            todo:String,
            isComplete:Boolean
        }
    }
}
</script>

<style scoped>
    .todoTasks{
                /* border: 1px solid blue; */
        color: black;
        margin: none;
        display: flex;
        align-items: center;
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
    .todoTask .is-complete{
        width: 120px;
        height: 35px;
        border-radius: 20px;
        background-color:#42b883;
        color: white;
        border: none;
        cursor: pointer;
    }
    .todoTask i{
        font-size: 25px;
        color:  #5c5470; 
        cursor: pointer;

    }
</style>