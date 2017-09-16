import React from 'react';
import {CountryDetails} from "./CountryDetails";
import {shallow} from 'enzyme';

describe('CountryDetails component', () => {

  const setup = () => {
    const props = {
      country: {
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
      }
    };

    const component = shallow(<CountryDetails {...props}/>);

    return {props, component};
  };

  it('Component renders and has proper className namespace', () => {
    const {component} = setup();
    expect(component.hasClass('component-country-details')).toBe(true);
  });

  it('Modal is hidden on initial', () => {
    const {component} = setup();
    expect(component).toHaveState('isModalOpen', false);
  });

  it('Opens modal when component is clicked', () => {
    const {component} = setup();
    component.simulate('click');
    expect(component).toHaveState('isModalOpen', true);
  });
});
