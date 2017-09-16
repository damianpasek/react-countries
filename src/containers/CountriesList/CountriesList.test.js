import React from 'react';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux';
import {mount} from "enzyme";
import {MuiThemeProvider} from "material-ui";
import {theme} from "../../theme";
import CountriesList from './CountriesList';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('CountriesList container', () => {

  const mockCountry = {
    name: 'Poland',
    region: 'Europe',
    capital: 'Warsaw',
    currencies: [
      {
        name: 'Polish złoty',
        symbol: 'PLN'
      }
    ],
    languages: [
      {
        name: 'Polish'
      }
    ],
    timezones: [
      'UTC+01:00'
    ],
    flag: 'https://restcountries.eu/data/pol.svg'
  };

  const renderComponent = (store) => {
    return mount(
      <MuiThemeProvider muiTheme={theme}>
        <Provider store={store}>
          <CountriesList/>
        </Provider>
      </MuiThemeProvider>
    )
  };

  it('Container renders and has proper className namespace', () => {
    const store = mockStore({
      countries: {
        data: [mockCountry],
        loading: false,
        error: null,
        notFound: false
      }
    });
    const component = renderComponent(store);
    expect(component.hasClass('container-countries-list')).toBe(true);
  });

  it('Container renders loading section (with proper className)', () => {
    const store = mockStore({
      countries: {
        data: [],
        loading: true,
        error: null,
        notFound: false
      }
    });
    const component = renderComponent(store);
    expect(component.find('.container-countries-list').hasClass('loading')).toBe(true);
  });

  it('Container renders error section (with proper className)', () => {
    const store = mockStore({
      countries: {
        data: [],
        loading: false,
        error: {
          message: 'some text'
        },
        notFound: false
      }
    });
    const component = renderComponent(store);
    expect(component.find('.container-countries-list').hasClass('error')).toBe(true);
  });

  it('Container renders not found section (with proper className)', () => {
    const store = mockStore({
      countries: {
        data: [],
        loading: false,
        error: null,
        notFound: true
      }
    });
    const component = renderComponent(store);
    expect(component.find('.container-countries-list').hasClass('not-found')).toBe(true);
  });

  it('Container renders list of countries', () => {
    const mockData = [mockCountry, mockCountry];
    const store = mockStore({
      countries: {
        data: mockData,
        loading: false,
        error: null,
        notFound: false
      }
    });
    const component = renderComponent(store);
    expect(component.find('.container-countries-list').children().length).toEqual(mockData.length);
  });
});
