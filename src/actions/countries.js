import axios from 'axios';
import {FETCH, FETCH_SUCESS, FETCH_NOT_FOUND, FETCH_ERROR} from "../types/countries";

const getUrl = (text) => {
  if (text) {
    return `https://restcountries.eu/rest/v2/name/${text}`;
  }
  return 'https://restcountries.eu/rest/v2/all';
};

export const fetch = (text) => {
  return (dispatch) => {
    dispatch({type: FETCH});

    axios.get(getUrl(text))
      .then((data) => dispatch(fetchSuccess(data)))
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          dispatch(fetchNotFound())
        } else {
          dispatch(fetchError(error));
        }
      })
  }
};

export const fetchSuccess = ({data}) => {
  return {
    type: FETCH_SUCESS,
    payload: data
  }
};

export const fetchNotFound = () => {
  return {
    type: FETCH_NOT_FOUND
  }
};

export const fetchError = (error) => {
  return {
    type: FETCH_ERROR,
    error
  }
};
