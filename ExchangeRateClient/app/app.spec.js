import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import App from './app';

describe('App component', ( ) => {

  it('should work', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<App />);
    const actual = renderer.getRenderOutput();
    const expected = <div className="app">Welcome</div>;
    expect(actual).toIncludeJSX(expected);
  });
});