
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    tasks:[
        {
            id:1,
            description:"Apprendre React JS",
            isDone:true
        },
        {
            id:2,
            description:"Apprendre HTML & CSS",
            isDone:true
        },
        {
            id:3,
            description:"Apprendre ANGULAR JS",
            isDone:false
        }
    ]
}
export const taskSlice = createSlice({
    name:"tasks",
    initialState,
    reducer:{
        addToTask:(state,action)=>{
            state.tasks = [...state]
        }
    }
})


export const {addToTask} = taskSlice.actions;
export default taskSlice.reducer;