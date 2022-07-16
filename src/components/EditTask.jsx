import React,{useState,useRef} from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { updateTask } from '../features/tasks/taskSlice';
const EditTask = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [done,setDone] = useState("");
    const idTask = useParams().id;
    const descriptionRef = useRef("");
    const tasks = useSelector(state=>state.tasks.tasks);
    const data = tasks.find(item=>item.id===parseInt(idTask))
    const handleChange = (e)=>{
        setDone(e)
    }
    const updateHandleTask = ()=>{
        const userTask = {
            id:idTask,
            description:descriptionRef.current.value,
            isDone: done
        }
        dispatch(updateTask(userTask))
        navigate("/")
    }
    return (
        <div className='container'>
            <h2 style={{textAlign:"center"}}>Modification de la Tâche</h2>
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <form>
                        <input type="text" className="form-control" ref={descriptionRef} name="description" defaultValue={data.description} />
                    </form>
                </div>
 
                <div className="col-lg-3 d-flex">
                    <span>STATUT:&nbsp;&nbsp;</span>
                    <div className="form-check">
                        <input className="form-check-input" onChange={(e)=>handleChange(e.target.value)} defaultChecked={data.isDone==="oui"} value="oui" name="statut" type="radio"/>
                        <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                        OUI&nbsp;&nbsp;
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" onChange={(e)=>handleChange(e.target.value)} defaultChecked={data.isDone==="non"} value="non" name="statut" type="radio"/>
                        <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                        &nbsp;NON
                        </label>
                    </div>
                </div>
                <div className='col-lg-3 offset-lg-3 mt-3'>
                    <button type='button' onClick={updateHandleTask} className='btn-block btn btn-danger'>MODIFIER</button> <span><Link to={"/"} className="btn btn-dark">BACK</Link></span>
                </div>
            </div>
        </div>
    );
};

export default EditTask;