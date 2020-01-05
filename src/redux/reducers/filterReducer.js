import {
  FILTER_ONLY_ONE_STOP,
  FILTER_SET_ACTIVE_CURRENCY,
  FILTER_ONE_MORE_STOP,
  FILTER_SHOW_ALL_STOPS,
  DEFAULT_CURRENCY
} from "../constants";

const initialState = {
  activeCurrency: DEFAULT_CURRENCY,
  stops: { 0: true, 1: true, 2: true, 3: true },
  showAll: true
};

const filterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FILTER_SET_ACTIVE_CURRENCY:
      return { ...state, activeCurrency: payload };

    case FILTER_ONE_MORE_STOP:
      return {
        ...state,
        stops: { ...state.stops, ...payload },
        showAll: false
      };

    case FILTER_ONLY_ONE_STOP:
      const stopsFalse = {};
      Object.keys(initialState.stops).forEach(key => (stopsFalse[key] = false));
      return {
        ...state,
        stops: { ...stopsFalse, [payload]: true },
        showAll: false
      };

    case FILTER_SHOW_ALL_STOPS:
      return { ...state, showAll: true, stops: initialState.stops };

    default:
      return state;
  }
};

export default filterReducer;
