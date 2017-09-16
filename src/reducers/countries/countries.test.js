import reducer from './countries';
import {FETCH, FETCH_SUCESS, FETCH_NOT_FOUND, FETCH_ERROR} from "../../types/countries";

describe('Countries reducer', () => {

  const initialState = {
    data: [],
    loading: false,
    error: null,
    notFound: false
  };

  it('Initial state when state undefined', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('Initial state with loading flag set to true on FETCH', () => {

    expect(reducer(undefined, {type: FETCH})).toEqual({...initialState, loading: true});

    expect(reducer({data: [{}], notFound: true}, {type: FETCH})).toEqual({...initialState, loading: true});

  });

  it('State with loading flag set to false and data array on FETCH_SUCCESS', () => {
    const mockData = [
      {id: 1, value: 'test'},
      {id: 2, value: 'test'}
    ];
    let state = reducer(undefined, {type: FETCH});

    expect(reducer(state, {type: FETCH_SUCESS, payload: mockData})).toEqual({
      ...initialState,
      data: mockData,
      loading: false
    });
  });

  it('State with loading false and notFound property set to true on FETCH_NOT_FOUND', () => {
    let state = reducer(undefined, {type: FETCH});

    expect(reducer(state, {type: FETCH_NOT_FOUND})).toEqual({
      ...initialState,
      loading: false,
      notFound: true
    })
  });

  it('State with loading flag false and error object assigned on FETCH_ERROR', () => {
    const mockError = {
      text: 'Example mock error'
    };
    let state = reducer(undefined, {type: FETCH_ERROR, error: mockError});

    expect(reducer(state, {type: FETCH_ERROR, error: mockError})).toEqual({
      ...initialState,
      loading: false,
      error: mockError
    })
  })

});
