import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions';
const App = () => {
  const myState = useSelector((state)=> state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1>Increment/Decrement Counter</h1>
         <h2>Using React and Redux</h2>

         <div className="quantity">
           <button className='btn btn1' onClick={()=>dispatch(decNumber(5))}>-</button>
           <button className='btn btn2'>{myState}</button>
           <button className='btn btn3' onClick={()=>dispatch(incNumber(5))}>+</button>
         </div>
      </div>
    </>
  )
}

export default App
