import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../features/counter/counterSlice';

const Form = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state=>state.counter.value);
    
    return (
        
        <div>
            
            <div>COUNTER:{counter}</div>
            <button type='button' onClick={()=>dispatch(increment())}>INCREMENT</button>
            <button type='button' onClick={()=>dispatch(decrement())}>DECREMENT</button>
        </div>
    );
};

export default Form;