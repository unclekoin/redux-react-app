import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCashAction, getCashAction } from './store/cashReducer';
import {
  addCustomerAction,
  removeCustomerAction,
} from './store/customerReducer';

const App = () => {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch(addCashAction(cash));
  };

  const getCash = (cash) => {
    dispatch(getCashAction(cash));
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (id) => {
    dispatch(removeCustomerAction(id));
  };

  return (
    <div className="container text-center pt-5">
      <h1 className="mb-3">React Redux App</h1>
      <h3 className="mb-3">Total: {cash}</h3>
      <div className="d-flex justify-content-center mb-4">
        <button
          onClick={() => addCash(Number(prompt('Enter the amount:')))}
          className="btn btn-primary me-2"
        >
          Replenish account
        </button>
        <button
          onClick={() => getCash(Number(prompt('Enter the amount:')))}
          className="btn btn-danger me-2"
        >
          Withdraw from account
        </button>
        <button
          onClick={() => addCustomer(prompt('Enter the amount:'))}
          className="btn btn-primary me-2"
        >
          Add customer
        </button>
      </div>
      {customers.length ? (
        <div>
          {customers.map((customer) => (
            <div
              onClick={() => removeCustomer(customer.id)}
              key={customer.id}
              role="button"
            >
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <h3>No customers yet!</h3>
      )}
    </div>
  );
};

export default App;
