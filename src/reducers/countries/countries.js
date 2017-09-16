import {FETCH, FETCH_SUCESS, FETCH_NOT_FOUND, FETCH_ERROR} from "../../types/countries";

const initialState = {
  data: [],
  loading: false,
  error: null,
  notFound: false
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case FETCH:
      return {...initialState, loading: true};
    case FETCH_SUCESS:
      return {...state, loading: false, data: action.payload};
    case FETCH_NOT_FOUND:
      return {...state, loading: false, notFound: true};
    case FETCH_ERROR:
      return {...state, loading: false, error: action.error};
    default:
      return state;
  }
}
