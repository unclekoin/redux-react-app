const defaultState = {
  customers: [],
};

const GET_CUSTOMERS = 'GET_CUSTOMERS';
const ADD_CUSTOMER = 'ADD_CUSTOMER';
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CUSTOMERS:
      console.log(action.payload);
      return { ...state, customers: [...state.customers, ...action.payload] };
    case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] };
    case REMOVE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const getCustomersAction = (payload) => ({
  type: GET_CUSTOMERS,
  payload,
});
export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload });
export const removeCustomerAction = (payload) => ({
  type: REMOVE_CUSTOMER,
  payload,
});
