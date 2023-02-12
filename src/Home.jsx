import React from 'react';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
const Home = () => {
  const dispatch = useDispatch();
  
  const {count}=useSelector(state=>state.custom)

  const addbtn = () => {
    dispatch({
      type: 'increment',
    });
  };

  const addbtnby20 = () => {
    dispatch({
      type: 'incrementByValue',
      payload: 20,
    });
  };

  const minusbtn = () => {
    dispatch({
      type: 'decrement',
    });
  };

  return (
    <div>
      <h1>Redux and ReduxToolkit</h1>

      <h2>Value:{count}</h2>
      <button onClick={addbtn}>Increment</button>
      <button onClick={addbtnby20}>Increment By 20</button>
      <button onClick={minusbtn}>Decrement</button>
    </div>
  );
};

export default Home;
