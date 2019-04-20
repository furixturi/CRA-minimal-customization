import { shallow } from 'enzyme';
import React from 'react';
import App from '.';

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('contains a welcome message', () => {
    const wrapper = shallow(<App />);
    const welcome = <h2>Welcome to React</h2>;
    // expect(wrapper.contains(welcome)).toEqual(true);
    expect(wrapper).toContainReact(welcome);
  });

});

