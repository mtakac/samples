import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import App from './app';

describe('App component', ( ) => {

  it('should render', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<App />);
    const actual = renderer.getRenderOutput().props.className;
    const expected = 'app';
    expect(actual).toInclude(expected);
  });
});