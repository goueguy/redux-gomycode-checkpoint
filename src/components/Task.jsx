import React from 'react';
import Table from './Table';

const Task = ({task}) => {
    return (
        <tr>
            <td>{task.id}</td>
            <td>{task.description}</td>
            <td>{(task.isDone) ? "DONE":"NO"}</td>
            <td className='d-flex justify-content-between'>
                <a href="#default" className='btn btn-success'>EDIT</a>
                <a href="#default" className='btn btn-danger'>DELETE</a>
            </td>
        </tr>
    );
};

export default Task;