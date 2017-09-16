import {selectors} from "./countries";

describe('Countries selectors', () => {

  it('getCountriesList selector', () => {
    const mockData = {
      countries: {
        data: [
          {id: 1, value: 'Test value'},
          {id: 2, value: 'Test value'}
        ],
        loading: false,
        error: null,
        notFound: false
      }
    };

    expect(selectors.getCountriesList(mockData)).toEqual(mockData.countries.data);
  })
});
