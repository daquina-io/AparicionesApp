import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { DefaultPage } from 'features/sight/DefaultPage';

describe('sight/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const pageProps = {
      sight: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...pageProps} />
    );

    expect(
      renderedComponent.find('.sight-default-page').node
    ).to.exist;
  });
});
