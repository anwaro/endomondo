import React from 'react';
import {mount} from 'enzyme';

import Navigation from "./index";
import {BrowserRouter} from "react-router-dom";

test('first menu item is active second is non active', () => {
    const nav = mount(
        <BrowserRouter>
            <Navigation/>
        </BrowserRouter>
    );
    const firstItem = nav
        .find('Item')
        .at(0);
    const secondItem = nav
        .find('Item')
        .at(1);

    // @ts-ignore
    expect(firstItem.props().active).toBe(true);

    // @ts-ignore
    expect(secondItem.props().active).toBe(false);

});

