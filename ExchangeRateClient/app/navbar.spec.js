import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import Navbar from './navbar';

let renderer;

describe('Navbar component', ( ) => {
  
  beforeEach(() => {
    renderer = TestUtils.createRenderer();
  });

  it('should render', () => {
    renderer.render(<Navbar title="" />);
    const actual = renderer.getRenderOutput().props.className;
    const expected = 'navbar';
    expect(actual).toInclude(expected);
  });

  it('should render correct title', () => {
    renderer.render(<Navbar title="tralala" />);
    const actual = renderer.getRenderOutput();
    const expected = 'tralala';
    expect(actual).toIncludeJSX(expected);
  });
});