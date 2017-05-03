import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { MapInput } from 'src/features/sight';

describe('sight/MapInput', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <MapInput />
    );

    expect(
      renderedComponent.find('.sight-map-input').node
    ).to.exist;
  });
});
