import React from 'react';
import  {BsCheckLg,BsXLg} from 'react-icons/bs';
import { deleteTask } from '../features/tasks/taskSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Task = ({task}) => {
    const dispatch = useDispatch()
    
    const deleteItem = (id,event)=>{
        event.preventDefault();
        if(window.confirm('Are you sure ?')){
            dispatch(deleteTask(id))
        }
    }
    let url = "";
    return (
        <tr>
            <td>{task.id}</td>
            <td>{task.description}</td>
            <td className="text-center">{(task.isDone==="oui") ? <BsCheckLg/>:<BsXLg/>}</td>
            <td className='d-flex justify-content-between'>
                <Link to={`/task/${task.id}/edit`} className='btn btn-danger'>UPDATE</Link>
                <a href={url} onClick={(event)=>deleteItem(task.id,event)} className='btn btn-success'>DELETE</a>
            </td>
        </tr>
    );
};

export default Task;