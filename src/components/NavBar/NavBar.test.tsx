import React from 'react';
import { render } from '@testing-library/react';

import NavBar from './NavBar';

describe('NavBar', () => {
  it('renders NavBar component correctly', () => {
    const { getByTestId } = render(<NavBar />);
    const navbarElement = getByTestId('navbar');

    expect(navbarElement).toBeInTheDocument();
  });
});
