import {FETCH} from "../types/countries";

const initialState = {
  notFound: false,
  loading: false,
  error: null,
  data: []
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}
