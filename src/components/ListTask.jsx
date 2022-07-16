import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
    const tasks = useSelector(state=>state.tasks.tasks);
    const filterStatus = useSelector(state=>state.tasks.filterStatus);
    
    const todoListFiltered = tasks.filter(item=>{
        if(filterStatus==="tout"){
            return true;
        }else{
            return item.isDone === filterStatus;
        }
    })
    return (
        <div className='col-lg-6 offset-lg-3 mt-4'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>DESCRIPTION</th>
                        <th>STATUT</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    todoListFiltered.length>0 &&
                    todoListFiltered.map((task,index)=>(
                            <Task key={task.id} task={task}/>
                        )).sort().reverse()
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ListTask;