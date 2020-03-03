import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import AppConfig from '../../src/appConfig';
import InfoxicatorRoot from '../../src/components/InfoxicatorRoot';

describe('InfoxicatorRoot', () => {
  it('default export should return a function', () => {
    expect(InfoxicatorRoot).toBeInstanceOf(Function);
  });

  it('module should render correct JSX', () => {
    const renderedModule = shallow(<InfoxicatorRoot />);
    expect(toJson(renderedModule)).toMatchSnapshot();
  });

  // test only necessary for root modules
  it('appConfig should contain accurate csp', () => {
    expect(AppConfig.csp).toBeDefined();
    expect(typeof AppConfig.csp).toBe('string');
  });
});
