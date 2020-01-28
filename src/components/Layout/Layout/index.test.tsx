import React from 'react';
import {mount} from 'enzyme';

import Header from "./index";
import {render} from "@testing-library/react";

test('Header contains title', () => {
    const title = 'example title';
    const {getByText} = render(<Header title={title}/>);
    const titleElement = getByText(new RegExp(title));
    expect(titleElement).toBeInTheDocument();
});
