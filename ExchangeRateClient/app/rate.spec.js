import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import Rate from './rate';

describe('Rate component', ( ) => {

  it('should render', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Rate />);
    const actual = renderer.getRenderOutput().props.className;
    const expected = 'rate';
    expect(actual).toEqual(expected);
  });
});