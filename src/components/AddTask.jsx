import React, { useRef, useState } from 'react';
import { addToTask } from '../features/tasks/taskSlice';
import { useDispatch, useSelector } from 'react-redux';
import ListTask from './ListTask';
import Filter from './Filter';

const AddTask = () => {
    const dispatch = useDispatch();
    const [done,setDone] = useState("");
    let taskId = useSelector(state=>state.tasks.tasks.length);
    const descriptionRef = useRef();
    const radioInputChange = (e)=>{
        setDone(e.target.value)
    }

    const storeTask = ()=>{
        const userTask = {
            id:taskId+1,
            description:descriptionRef.current.value,
            isDone: done
        }
        dispatch(addToTask(userTask))
        descriptionRef.current.value="";
        setDone("");
    }
    return (
    
        <div className='container mx-auto'>
            <h1 style={{textAlign:"center",marginTop:"32px"}}>Ajouter une Tâche</h1>
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <form>
                        <input type="text" ref={descriptionRef} className="form-control" name="description" placeholder='Description de la Tâche...' />
                    </form>
                </div>
 
                <div className="col-lg-3 d-flex">
                    <span>STATUT:&nbsp;&nbsp;</span>
                    <div className="form-check">
                        <input className="form-check-input" value="oui" checked={done==="oui"} onChange={(e)=>radioInputChange(e)} name="statut" type="radio"/>
                        <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                        OUI&nbsp;&nbsp;
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" value="non" checked={done==="non"} onChange={(e)=>radioInputChange(e)} name="statut" type="radio"/>
                        <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                        &nbsp;NON
                        </label>
                    </div>
                </div>
                <div className='col-lg-3 offset-lg-3 mt-3'>
                    <button type='button' onClick={()=>storeTask()} className='btn-block btn btn-primary'>AJOUTER</button>
                </div>
                <Filter/>
                <ListTask/>
            </div>
        </div>
    );
};

export default AddTask;