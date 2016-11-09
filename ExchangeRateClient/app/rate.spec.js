import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import Rate from './rate';

let renderer;

describe('Rate component', () => {

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
  });

  it('should render', () => {
    renderer.render(<Rate />);
    const actual = renderer.getRenderOutput().props.className;
    const expected = 'rate';
    expect(actual).toInclude(expected);
  });

  it('should render passed props correctly', () => {
    renderer.render(<Rate currencies="EUR/USD" rate={1.234} />);
    const actual = renderer.getRenderOutput()
    expect(actual).toIncludeJSX(<td>EUR/USD</td>);
  });

  it('should format the rate to 3 decimal points', () => {
    renderer.render(<Rate currencies="EUR/USD" rate={1} />);
    const actual = renderer.getRenderOutput()
    expect(actual).toIncludeJSX(<td>1.000</td>);
  });
});