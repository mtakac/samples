import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import Rates from './rates';

describe('Rates component', () => {

  it('should render', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Rates rates={{}} />);
    const actual = renderer.getRenderOutput().props.className;
    const expected = 'rates';
    expect(actual).toInclude(expected);
  });

  it('should render rate component for every rate', () => {
    const rates = {'EUR/USD': 0.761, 'GBP/USD': 1.211};
    const renderer = TestUtils.createRenderer();
    renderer.render(<Rates rates={rates} />);
    const actual = renderer.getRenderOutput().props.children.length;
    expect(actual).toEqual(2);
  });

  it('should pass correct props to rate component', () => {
    const rates = {'EUR/USD': 0.761};
    const renderer = TestUtils.createRenderer();
    renderer.render(<Rates rates={rates} />);
    const rateProps = renderer.getRenderOutput().props.children[0].props;
    expect(rateProps.currencies).toEqual('EUR/USD');
    expect(rateProps.rate).toEqual(0.761);
  });
});