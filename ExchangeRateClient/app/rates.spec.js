import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import Rates from './rates';

describe('Rates component', ( ) => {

  it('should render', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Rates rates={{}} />);
    const actual = renderer.getRenderOutput().props.className;
    const expected = 'rates';
    expect(actual).toEqual(expected);
  });
});