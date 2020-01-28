import React from 'react';
import {mount} from 'enzyme';

import Header from "../../components/Layout/Header";

test('Dashboard contains header', () => {
    const component = mount(<Header/>);
    expect(component.contains(<Header/>)).toBe(true)
});
