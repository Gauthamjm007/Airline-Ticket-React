import {
  FILTER_SET_ACTIVE_CURRENCY,
  FILTER_ONE_MORE_STOP,
  FILTER_SHOW_ALL_STOPS,
  FILTER_ONLY_ONE_STOP
} from "../constants";

const setActiveCurrencyAction = currency => ({
  type: FILTER_SET_ACTIVE_CURRENCY,
  payload: currency
});

const stopsFilter = {
  oneMore: payload => ({ type: FILTER_ONE_MORE_STOP, payload }),
  onlyOne: fieldName => ({
    type: FILTER_ONLY_ONE_STOP,
    payload: fieldName
  }),
  showAll: () => ({ type: FILTER_SHOW_ALL_STOPS })
};

const showOneStopAction = field => stopsFilter.onlyOne(field);
const showAllStopsAction = () => stopsFilter.showAll();

const showOneMoreStopAction = (field, value) => (dispatch, getState) => {
  const { stops } = getState().filters;
  const actives = Object.keys(stops).filter(key => stops[key] === true);

  if ((actives.length === 1 && !value) || (actives.length === 3 && value)) {
    return dispatch(stopsFilter.showAll());
  }
  return dispatch(stopsFilter.oneMore({ [field]: value }));
};

export {
  setActiveCurrencyAction,
  showOneMoreStopAction,
  showOneStopAction,
  showAllStopsAction
};
