import React from 'react';
import { render } from '@testing-library/react';

import RootLayout from './layout';

describe('RootLayout', () => {
  it('renders RootLayout component correctly', () => {
    const children = <div>Test Children</div>;
    const { getByText } = render(<RootLayout>{children}</RootLayout>);
    const childrenElement = getByText('Test Children');

    expect(childrenElement).toBeInTheDocument();
  });
});
