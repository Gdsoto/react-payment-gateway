import React from 'react';
import { render } from '@testing-library/react';

import BaseLayout from './BaseLayout';

describe('BaseLayout', () => {
  it('renders BaseLayout component correctly', () => {
    const { getByText } = render(
      <BaseLayout>
        <div>Test Content</div>
      </BaseLayout>
    );

    const contentElement = getByText('Test Content');

    expect(contentElement).toBeInTheDocument();
  });
});