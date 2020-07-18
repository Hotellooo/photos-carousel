import App from '../client/components/App.jsx';
import React from 'react';
import { mount } from 'enzyme';

describe('App', () => {
  // let wrapper;
  // beforeEach(() => {
  const wrapper = mount(<App />);
  // });

  it('App component should exist', () => {
    expect( wrapper.exists() ).toBe(true);
  });
  it('Carousel component should exist', () => {
    expect( wrapper.find('Carousel').exists() ).toBe(true);
  });
  it('PhotoMenu component should exist', () => {
    expect( wrapper.find('PhotoMenu').exists() ).toBe(true);
  });
  it('Albums component should exist', () => {
    expect( wrapper.find('Albums').exists() ).toBe(true);
  });
});
