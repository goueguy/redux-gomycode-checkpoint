import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
    const tasks = useSelector(state=>state.tasks.tasks);
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
                        tasks.map((task,index)=>(
                            <Task key={index} task={task}/>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ListTask;