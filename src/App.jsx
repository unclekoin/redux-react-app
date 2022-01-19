import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);

  const addCash = (cash) => {
    dispatch({ type: 'ADD_CASH', payload: cash })
  }

  const getCash = (cash) => {
    dispatch({ type: 'GET_CASH', payload: cash })
  }

  return (
    <div className="container text-center pt-5">
      <h1 className="mb-3">React Redux App</h1>
      <h3 className="mb-3">Total: {cash}</h3>
      <div className="d-flex justify-content-center">
        <button
          onClick={() => addCash(Number(prompt('Enter the amount:')))}
          className="btn btn-primary me-2"
        >
          Replenish account
        </button>
        <button
          onClick={() => getCash(Number(prompt('Enter the amount:')))}
          className="btn btn-danger"
        >
          Withdraw from account
        </button>
      </div>
    </div>
  );
};

export default App;
