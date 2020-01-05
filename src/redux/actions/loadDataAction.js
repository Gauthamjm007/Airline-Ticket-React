import axios from "axios";
import { tickets } from "../../api/tickets";

import {
  GET_CURRENCY_RATE,
  GET_TICKETS,
  INITIALIZE_ERROR,
  DEFAULT_CURRENCY,
  CURRENCY_API
} from "../constants";

const loadData = {
  getTickets: (tickets) => ({
    type: GET_TICKETS,
    payload: { tickets }
  }),
  getCurrencyRate: (rate) => ({
    type: GET_CURRENCY_RATE,
    payload: rate
  }),
  error: () => ({ type: INITIALIZE_ERROR })
};

const loadDataAction = () => (dispatch) => {
  axios
    .get(`${CURRENCY_API}/latest?base=${DEFAULT_CURRENCY}`)
    .then(
      ({
        data: {
          rates: { USD, EUR, INR }
        }
      }) => {
        dispatch(loadData.getCurrencyRate({ USD, EUR, INR }));
        dispatch(loadData.getTickets(tickets));
      }
    )
    .catch(() => dispatch(loadData.error()));
};

export { loadDataAction };
