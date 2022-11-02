import React from 'react';
import './style.css';
// 1
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from './index.js';

export default function App() {
  const dispatch = useDispatch();
  // 2
  const state = useSelector((state) => state);
  // 3
  console.log(state);

  const plusNum = () => {
    dispatch(increase());
  };

  const minusNum = () => {
    dispatch(decrease());
  };

  return (
    <div className="container">
      {/* 4 */}
      <h1>{`Count: ${state}`}</h1>
      <div>
        <button className="plusBtn" onClick={plusNum}>
          +
        </button>
        <button className="minusBtn" onClick={minusNum}>
          -
        </button>
      </div>
    </div>
  );
}
