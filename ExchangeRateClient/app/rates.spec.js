import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import Rates from './rates';

let renderer;

describe('Rates component', () => {

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
  });

  it('should render', () => {
    renderer.render(<Rates rates={{}} />);
    const actual = renderer.getRenderOutput().props.className;
    const expected = 'rates';
    expect(actual).toInclude(expected);
  });

  it('should render rate component for every rate', () => {
    const rates = {'EUR/USD': 0.761, 'GBP/USD': 1.211};
    renderer.render(<Rates rates={rates} />);
    const actual = renderer.getRenderOutput();
    expect(actual).toIncludeJSX('EUR/USD');
    expect(actual).toIncludeJSX('GBP/USD');
  });

  it('should pass correct props to rate component', () => {
    const rates = {'EUR/USD': 0.761};
    renderer.render(<Rates rates={rates} />);
    const actual = renderer.getRenderOutput();
    expect(actual).toIncludeJSX('EUR/USD');
    expect(actual).toIncludeJSX(0.761);
  });
});