import { GET_TICKETS, INITIALIZE_ERROR, GET_CURRENCY_RATE } from "../constants";

const initialState = {
  tickets: [],
  isError: false
};

const ticketsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TICKETS:
      return { ...state, ...payload };
    case INITIALIZE_ERROR:
      return { ...state, isError: true };
    default:
      return state;
  }
};

const currencyReducer = (state = {}, { type, payload }) => {
  if (type === GET_CURRENCY_RATE) return { ...state, ...payload };
  return state;
};

export { currencyReducer, ticketsReducer };
