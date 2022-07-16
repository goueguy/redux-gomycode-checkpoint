
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    tasks:[
        {
            id:1,
            description:"Apprendre React JS",
            isDone:"oui"
        },
        {
            id:2,
            description:"Apprendre HTML & CSS",
            isDone:"oui"
        },
        {
            id:3,
            description:"Apprendre ANGULAR JS",
            isDone:"non"
        }
    ],
    filterStatus:"oui"
}
export const taskSlice = createSlice({
    name:"tasks",
    initialState,
    reducers:{
        addToTask:(state,action)=>{
            state.tasks = [...state.tasks,action.payload]
        },
        deleteTask:(state,action)=>{
            state.tasks = state.tasks.filter(task=>task.id!==action.payload)
        },
        updateTask:(state,action)=>{
            state.tasks = state.tasks.map(task=>
                (task.id===parseInt(action.payload.id)) ? {...task,description:action.payload.description,isDone:action.payload.isDone}:task
            )
        },
        filterByStatus:(state,action)=>{
            state.filterStatus = action.payload
        }
    }
})


export const {addToTask,deleteTask,updateTask,filterByStatus} = taskSlice.actions;
export default taskSlice.reducer;