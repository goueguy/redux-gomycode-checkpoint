import React,{useState,useRef, useEffect, useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByStatus } from '../features/tasks/taskSlice';

const Filter = (props) => {
    const dispatch = useDispatch();
    const filterStatus = useSelector(state=>state.tasks.filterStatus)
    const handleRadioChange = (e)=>{
        //setStatus(e.target.value);
        dispatch(filterByStatus(e.target.value))
    }
    
    return (

        <div className='col-lg-6  mt-3 d-flex'>
            <h4>Filter By: &nbsp;</h4>
            <div className="col-lg-3">
                <div className="form-check">
                    <input className="form-check-input" checked={filterStatus==="tout"} onChange={handleRadioChange} value="tout" name="statut" type="radio"/>
                    <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                    TOUT&nbsp;&nbsp;
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" checked={filterStatus==="oui"} onChange={handleRadioChange} value="oui" name="statut" type="radio"/>
                    <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                    OUI&nbsp;&nbsp;
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" checked={filterStatus==="non"} onChange={handleRadioChange} value="non" name="statut" type="radio"/>
                    <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                    &nbsp;NON
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Filter;