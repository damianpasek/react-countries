import {fetch} from "./countries";
import {FETCH, FETCH_SUCCESS, FETCH_NOT_FOUND, FETCH_ERROR} from "../../types/countries";
import axios from 'axios';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock';

axios.defaults.adapter = require('axios/lib/adapters/http');

describe('Countries action creators', () => {

  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const apiUrl = 'https://restcountries.eu';

  it('Fetch action should dispatch FETCH_SUCCESS on proper request', () => {
    const countryName = 'country_name';
    const store = mockStore();
    const mockedData = [
      {id: 1, value: 'Test'},
      {id: 2, value: 'Test'}
    ];
    const expectedActions = [
      {type: FETCH},
      {type: FETCH_SUCCESS, payload: mockedData}
    ];

    nock(apiUrl)
      .get(`/rest/v2/name/${countryName}`)
      .reply(200, mockedData);

    store.dispatch(fetch(countryName)).then(()=> {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Fetch action should dispatch FETCH_NOT_FOUND on request with wrong text', () => {
    const countryName = 'country_name';
    const store = mockStore();
    const expectedActions = [
      {type: FETCH},
      {type: FETCH_NOT_FOUND}
    ];

    nock(apiUrl)
      .get(`/rest/v2/name/${countryName}`)
      .reply(404);

    store.dispatch(fetch(countryName)).then(()=> {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Fetch action should dispatch FETCH_ERROR on request error', () => {
    const countryName = 'country_name';
    const mockError = {message: 'something awful happened'};
    const store = mockStore();
    const expectedActions = [
      {type: FETCH},
      {type: FETCH_ERROR, error: mockError}
    ];

    nock(apiUrl)
      .get(`/rest/v2/name/${countryName}`)
      .replyWithError(mockError);

    store.dispatch(fetch(countryName)).then(()=> {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

});
