import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import Navbar from './navbar';

describe('Navbar component', ( ) => {

  it('should render', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Navbar title="" />);
    const actual = renderer.getRenderOutput().props.className;
    const expected = 'navbar';
    expect(actual).toInclude(expected);
  });

  it('should render correct title', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Navbar title="tralala" />);
    const actual = renderer.getRenderOutput();
    const expected = 'tralala';
    expect(actual).toIncludeJSX(expected);
  });
});