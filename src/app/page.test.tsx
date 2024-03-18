import React from 'react';
import { render } from '@testing-library/react';

import Home from './page';
import StoreProvider from './storeProvider';

describe('Home', () => {
  it('renders CartResume component correctly', () => {
    const test = render(
      <StoreProvider>
        <Home />
      </StoreProvider>
    );

    console.log(test);
  });
});
