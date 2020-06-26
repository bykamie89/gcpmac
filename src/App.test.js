import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("testing app.js", () => {
  test("Checking if class exists",() => { 
    const wrapper = shallow(<App />);
    expect(wrapper.find("div").hasClass("App"));
});
  test("Checking if the title is correct", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("title").text()).toContain("Unit Testing");
  });
});
